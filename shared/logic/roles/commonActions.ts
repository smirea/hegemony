import _ from 'lodash';
import { z } from 'zod';
import { objectEntries } from 'shared/utils/ts';

import {
    AssignWorkersSchema,
    BuyGoodsAndServicesSourcesSchema,
    CompanyIdSchema,
    CompanyWorkerIdSchema,
    CompanyWorkerTypeSchema,
    IndustrySchema,
    PolicyEnumSchema,
    PolicyValueSchema,
    ResourceEnumSchema,
    RoleEnum,
    type TradeableResource,
    TradeableResourceAndInfluenceSchema,
    TradeableResourceSchema,
    WageIdSchema,
    WorkerTypeEnum,
} from '../types';
import createAction from '../utils/createAction';

import type MiddleClassRole from './MiddleClassRole';
import type WorkingClassRole from './WorkingClassRole';
import type CapitalistRole from './CapitalistRole';
import type StateRole from './StateRole';

/** place bill +/- 1 step (spend 1 🟣 for immediate vote) */
export function createProposeBill(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole,
) {
    return {
        proposeBill: createAction({
            playerInputSchema: z.object({
                policy: PolicyEnumSchema,
                value: PolicyValueSchema,
            }),
            condition: () => [
                [
                    'hasVotes',
                    Object.values(role.game.data.board.policyProposals).filter(
                        p => p && p.role === RoleEnum.workingClass,
                    ).length < 3,
                ],
            ],
            validateInput: ({ policy, value }) => [
                ['notProposed', !role.game.data.board.policyProposals[policy]],
                ['isDifferent', role.game.data.board.policies[policy] !== value],
            ],
            run: ({ policy, value }) => {
                role.game.data.board.policyProposals[policy] = {
                    role: role.id,
                    value,
                };
            },
        }),
    };
}

/** hidden action to account for skipping the free action */
export function createSkip(_role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole) {
    return {
        skip: createAction({
            run: () => void 0,
        }),
    };
}

/** 50¥ (CC: from Capital) → discard loan (max 1 loan payoff/action) */
export function createPayLoan(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole,
) {
    return {
        payLoan: createAction({
            condition: () => [
                ['hasLoans', role.data.resources.money.loans > 0],
                ['hasMoney', role.data.resources.money.value >= 50],
            ],
            run: () => {
                role.data.resources.money.removeLoans(1);
                role.data.resources.money.remove(50);
            },
        }),
    };
}

/** from G&S → 1x Pop. → 1 🔴 / 🟡 → + 2x + unskilled worker */
export function createUseHealthcare(role: WorkingClassRole | MiddleClassRole) {
    return {
        useHealthcare: createAction({
            condition: () => [
                ['hasHealthcare', role.data.resources.healthcare.value >= role.getPopulation()],
            ],
            run: () => {
                role.data.resources.healthcare.remove(role.getPopulation());
                role.increaseProsperity({ withHealthcare: true });
                // todo: edge-case when there are no more unskilled workers
                role.data.availableWorkers.unskilled -= 1;
                const id = ++role.game.data.nextWorkerId;
                role.data.workers.push({
                    id,
                    role: role.id,
                    type: WorkerTypeEnum.unskilled,
                    company: null,
                });
            },
        }),
    };
}

/** from G&S → 1x Pop. → 1 🔴 / 🟡 */
export function createUseEducation(role: WorkingClassRole | MiddleClassRole) {
    return {
        useEducation: createAction({
            playerInputSchema: z.object({
                workerId: CompanyWorkerIdSchema,
                type: CompanyWorkerTypeSchema,
            }),
            condition: () => [
                ['hasEducation', role.data.resources.education.value >= role.getPopulation()],
            ],
            validateInput: ({ type }) => [
                ['hasAvailableWorkers', role.data.availableWorkers[type] > 0],
            ],
            run: ({ workerId, type }) => {
                role.increaseProsperity();
                role.data.resources.education.remove(role.getPopulation());
                role.worker(workerId).type = type;
                // @todo: edge-case when there are no more skilled workers
                --role.data.availableWorkers[type];
                ++role.data.availableWorkers.unskilled;
            },
        }),
    };
}

/** from G&S 1x Population → 1 🔴 / 🟡 */
export function createUseLuxury(role: WorkingClassRole | MiddleClassRole) {
    return {
        useLuxury: createAction({
            condition: () => [
                ['hasLuxury', role.data.resources.luxury.value >= role.getPopulation()],
            ],
            run: () => {
                role.data.resources.luxury.remove(role.getPopulation());
                role.increaseProsperity();
            },
        }),
    };
}

/** any/all prices, any value */
export function createAdjustPrices(role: MiddleClassRole | CapitalistRole) {
    return {
        adjustPrices: createAction({
            playerInputSchema: z.record(IndustrySchema, PolicyValueSchema),
            run: prices => {
                Object.assign(role.data.priceLevels, prices);
            },
        }),
    };
}

/** raise = commit, committed = cannot lower (Labor Market) */
export function createAdjustWages(role: MiddleClassRole | CapitalistRole | StateRole) {
    return {
        adjustWages: createAction({
            playerInputSchema: z.array(
                z.object({
                    companyId: z.string(),
                    wages: WageIdSchema,
                }),
            ),
            condition: () => [['minWage', role.game.getPolicy('laborMarket') < 2]],
            run: toAdjust => {
                for (const { companyId, wages } of toAdjust) {
                    const company = role.company(companyId);
                    const isHigher = company.wages > wages;
                    company.wages = wages;
                    if (isHigher) {
                        for (const workerId of company.workers) {
                            const { worker } = role.game.getWorkerById(workerId);
                            worker.committed = true;
                        }
                    }
                }
            },
        }),
    };
}

/** skilled worker(s) in unskilled slot ↔ unemployed unskilled (keep committed or non-committed) */
export function createSwapWorkers(role: WorkingClassRole | MiddleClassRole) {
    return {
        swapWorkers: createAction({
            playerInputSchema: z.array(z.tuple([CompanyWorkerIdSchema, CompanyWorkerIdSchema])),
            condition: () => [
                [
                    'hasUnemployedWorkers',
                    role.data.workers.filter(w => w.company == null).length > 0,
                ],
            ],
            run: tuples => {
                for (const [id1, id2] of tuples) {
                    const { company, committed } = role.worker(id1);
                    role.worker(id1).company = role.worker(id2).company;
                    role.worker(id1).committed = role.worker(id2).committed;
                    role.worker(id2).company = company;
                    role.worker(id2).committed = committed;
                }
            },
        }),
    };
}

/** take State Benefits → State gains 1★ */
export function createReceiveBenefits(role: WorkingClassRole | MiddleClassRole | CapitalistRole) {
    return {
        receiveBenefits: createAction({
            condition: () => [
                ['only4Players', role.game.data.players.length === 4],
                ['hasBenefits', role.game.data.roles.state.getBenefits(role.id).length > 0],
            ],
            run: () => {
                role.game.data.roles.state.receiveBenefits(role.id);
            },
        }),
    };
}

/** add 3 cubes to bag */
export function createApplyPoliticalPressure(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole,
) {
    return {
        applyPoliticalPressure: createAction({
            condition: () => [['hasCubes', role.data.availableVotingCubes >= 1]],
            run: () => {
                const toAdd = Math.min(3, role.data.availableVotingCubes);
                role.data.availableVotingCubes -= toAdd;
                role.game.data.board.votingCubeBag[role.id] += toAdd;
            },
        }),
    };
}

/** 1-3 un-employed or non-committed workers → commit (and/or Trade Union WC) */
export function createAssignWorkers(role: WorkingClassRole | MiddleClassRole) {
    return {
        assignWorkers: createAction({
            playerInputSchema: AssignWorkersSchema,
            run: toAssign => {
                role.game.assignWorkers(toAssign);
            },
        }),
    };
}

/** up to 1 per Population × 2 sources (1 type) */
export function createBuyGoodsAndServices(role: WorkingClassRole | MiddleClassRole) {
    return {
        buyGoodsAndServices: createAction({
            playerInputSchema: z.array(
                z.object({
                    resource: TradeableResourceAndInfluenceSchema,
                    count: z.number(),
                    source: BuyGoodsAndServicesSourcesSchema,
                }),
            ),
            run(toBuy) {
                for (const { resource, count, source } of toBuy) {
                    if (source === 'foreign-market') {
                        if (
                            resource !== ResourceEnumSchema.enum.food &&
                            resource !== ResourceEnumSchema.enum.luxury
                        )
                            throw new Error('only foreign market sells food and luxury');
                        role.game.buyFromForeignMarket(role.id, resource, count, {
                            payTarriff: true,
                        });
                        continue;
                    }

                    role.buyGoods(role.game.data.roles[source], resource, count);
                }
            },
        }),
    };
}

export function createBuildCompany(role: MiddleClassRole | CapitalistRole) {
    return {
        buildCompany: createAction({
            playerInputSchema: z.object({
                companyId: CompanyIdSchema,
                workers: z.array(CompanyWorkerIdSchema),
            }),
            condition: () => [
                [
                    'hasSpace',
                    role.data.companies.length < (role.id === RoleEnum.capitalist ? 12 : 8),
                ],
                ['hasMarket', role.data.companyMarket.length > 0],
            ],
            validateInput: ({ companyId }) => [
                ['inMarket', role.data.companyMarket.includes(companyId)],
            ],
            run: ({ companyId, workers }) => {
                role.data.resources.money.remove(role.game.getCompanyDefinition(companyId).cost);
                role.data.companies.push({
                    id: companyId,
                    workers: [],
                    wages: ('l' + (role.game.getPolicy('laborMarket') + 1)) as z.infer<
                        typeof WageIdSchema
                    >,
                });
                if (workers.length > 0) {
                    role.game.assignWorkers(
                        workers.map(workerId => ({
                            workerId,
                            target: 'company',
                            companyId,
                        })),
                    );
                }
            },
        }),
    };
}

/** company with non-committed workers → gain ¥ + workers to unemployed */
export function createSellCompany(role: MiddleClassRole | CapitalistRole) {
    return {
        sellCompany: createAction({
            playerInputSchema: CompanyIdSchema,
            condition: () => [['hasCompany', role.data.companies.length > 0]],
            run(companyId) {
                const company = role.company(companyId);
                for (const workerId of company.workers) {
                    const { worker } = role.game.getWorkerById(workerId);
                    worker.company = null;
                }
                company.workers = [];
                role.data.resources.money.add(role.game.getCompanyDefinition(companyId).cost);
                if (company.automationToken) {
                    ++(role as CapitalistRole).data.automationTokens;
                    company.automationToken = false;
                }
                role.data.companies = role.data.companies.filter(c => c.id !== companyId);
            },
        }),
    };
}

/** 1x per transaction (MC = 1x per transaction, State = only from supply) */
export function createSellToForeignMarket(role: MiddleClassRole | CapitalistRole | StateRole) {
    return {
        sellToForeignMarket: createAction({
            playerInputSchema: z.record(
                TradeableResourceSchema,
                z.tuple([z.boolean(), z.boolean()]),
            ),
            run(toSell) {
                const card = role.game.foreignMarketCard;
                const remove = (resource: TradeableResource, count: number) => {
                    if (role.id === RoleEnum.middleClass) {
                        role.data.producedResources[resource].remove(count);
                        role.data.score += 1;
                    } else {
                        role.data.resources[resource].remove(count);
                    }
                };
                for (const [resource, [used1, used2]] of objectEntries(toSell)) {
                    if (used1) {
                        const { money, resources } = card[resource][0];
                        remove(resource, resources);
                        role.data.resources.money.add(money);
                    }
                    if (used2) {
                        const { money, resources } = card[resource][1];
                        remove(resource, resources);
                        role.data.resources.money.add(money);
                    }
                }
            },
        }),
    };
}
