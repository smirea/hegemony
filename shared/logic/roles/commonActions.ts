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
    TradeableResourceSchema,
    WageIdSchema,
    WorkerTypeEnum,
} from '../types';
import action from '../utils/action';

import type MiddleClassRole from './MiddleClassRole';
import type WorkingClassRole from './WorkingClassRole';
import type CapitalistRole from './CapitalistRole';
import type StateRole from './StateRole';

/** place bill +/- 1 step (spend 1 🟣 for immediate vote) */
export function createProposeBill(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole,
) {
    return {
        proposeBill: action({
            playerInputSchema: z.object({
                policy: PolicyEnumSchema,
                value: PolicyValueSchema,
            }),
            condition: () => [
                [
                    'hasVotes',
                    Object.values(role.game.state.board.policyProposals).filter(
                        p => p.role === RoleEnum.workingClass,
                    ).length < 3,
                ],
            ],
            validateInput: ({ policy, value }) => [
                ['notProposed', !role.game.state.board.policyProposals[policy]],
                ['isDifferent', role.game.state.board.policies[policy] !== value],
                ['isValid', value === 0 || value === 1 || value === 2],
            ],
            run: ({ policy, value }) => {
                role.game.state.board.policyProposals[policy] = {
                    role: RoleEnum.workingClass,
                    value,
                };
            },
        }),
    };
}

/** hidden action to account for skipping the free action */
export function createSkip(_role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole) {
    return {
        skip: action({
            run: () => void 0,
        }),
    };
}

/** 50¥ (CC: from Capital) → discard loan (max 1 loan payoff/action) */
export function createPayLoan(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole,
) {
    return {
        payLoan: action({
            condition: () => [
                ['hasLoans', role.state.resources.money.loans > 0],
                ['hasMoney', role.state.resources.money.value >= 50],
            ],
            run: () => {
                role.state.resources.money.removeLoans(1);
                role.state.resources.money.remove(50);
            },
        }),
    };
}

/** from G&S → 1x Pop. → 1 🔴 / 🟡 → + 2x + unskilled worker */
export function createUseHealthcare(role: WorkingClassRole | MiddleClassRole) {
    return {
        useHealthcare: action({
            condition: () => [
                [
                    'hasHealthcare',
                    role.state.resources.healthcare.value >= role.game.getProsperity(role.id),
                ],
            ],
            run: () => {
                role.state.resources.healthcare.remove(role.game.getProsperity(role.id));
                role.state.score += role.game.getProsperity(role.id);
                role.state.score += 2;
                // todo: edge-case when there are no more unskilled workers
                role.state.availableWorkers.unskilled -= 1;
                const id = ++role.game.state.nextWorkerId;
                role.state.workers[id] = {
                    id,
                    role: role.id,
                    type: WorkerTypeEnum.unskilled,
                    company: null,
                };
            },
        }),
    };
}

/** from G&S → 1x Pop. → 1 🔴 / 🟡 */
export function createUseEducation(role: WorkingClassRole | MiddleClassRole) {
    return {
        useEducation: action({
            playerInputSchema: z.object({
                workerId: z.number(), // todo CompanyWorker['id']
                type: CompanyWorkerTypeSchema,
            }),
            condition: () => [
                [
                    'hasEducation',
                    role.state.resources.education.value >= role.game.getProsperity(role.id),
                ],
            ],
            run: ({ workerId, type }) => {
                role.state.score += role.game.getProsperity(role.id);
                role.state.resources.education.remove(role.game.getProsperity(role.id));
                role.state.workers[workerId].type = type;
            },
        }),
    };
}

/** from G&S 1x Population → 1 🔴 / 🟡 */
export function createUseLuxury(role: WorkingClassRole | MiddleClassRole) {
    return {
        useLuxury: action({
            condition: () => [
                [
                    'hasLuxury',
                    role.state.resources.luxury.value >= role.game.getProsperity(role.id),
                ],
            ],
            run: () => {
                role.state.resources.luxury.remove(role.game.getProsperity(role.id));
                role.state.score += role.game.getProsperity(role.id);
            },
        }),
    };
}

/** any/all prices, any value */
export function createAdjustPrices(role: MiddleClassRole | CapitalistRole) {
    return {
        adjustPrices: action({
            playerInputSchema: z.record(IndustrySchema, PolicyValueSchema),
            run: prices => {
                Object.assign(role.state.prices, prices);
            },
        }),
    };
}

/** raise = commit, committed = cannot lower (Labor Market) */
export function createAdjustWages(role: MiddleClassRole | CapitalistRole | StateRole) {
    return {
        adjustWages: action({
            playerInputSchema: z.array(
                z.object({
                    companyId: z.string(),
                    wages: WageIdSchema,
                }),
            ),
            run: toAdjust => {
                for (const { companyId, wages } of toAdjust) {
                    const company = role.state.companies[companyId];
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
        swapWorkers: action({
            playerInputSchema: z.array(z.tuple([CompanyWorkerIdSchema, CompanyWorkerIdSchema])),
            condition: () => [
                [
                    'hasUnemployedWorkers',
                    _.size(_.pickBy(role.state.workers, w => w.company == null)) > 0,
                ],
            ],
            run: tuples => {
                for (const [id1, id2] of tuples) {
                    const { company, committed } = role.state.workers[id1];
                    role.state.workers[id1].company = role.state.workers[id2].company;
                    role.state.workers[id1].committed = role.state.workers[id2].committed;
                    role.state.workers[id2].company = company;
                    role.state.workers[id2].committed = committed;
                }
            },
        }),
    };
}

/** take State Benefits → State gains 1★ */
export function createReceiveBenefits(role: WorkingClassRole | MiddleClassRole | CapitalistRole) {
    return {
        receiveBenefits: action({
            condition: () => [
                ['hasBenefits', role.game.state.roles.state.getBenefits(role.id).length > 0],
            ],
            run: () => {
                role.game.state.roles.state.receiveBenefits(role.id);
            },
        }),
    };
}

/** add 3 cubes to bag */
export function createApplyPoliticalPressure(
    role: WorkingClassRole | MiddleClassRole | CapitalistRole,
) {
    return {
        applyPoliticalPressure: action({
            condition: () => [['hasCubes', role.state.availableVotingCubes >= 1]],
            run: () => {
                const toAdd = Math.min(3, role.game.state.board.votingCubeBag[role.id]);
                role.state.availableVotingCubes -= toAdd;
                role.game.state.board.votingCubeBag[role.id] += toAdd;
            },
        }),
    };
}

/** 1-3 un-employed or non-committed workers → commit (and/or Trade Union WC) */
export function createAssignWorkers(role: WorkingClassRole | MiddleClassRole) {
    return {
        assignWorkers: action({
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
        buyGoodsAndServices: action({
            playerInputSchema: z.array(
                z.object({
                    resource: TradeableResourceSchema,
                    count: z.number(),
                    source: BuyGoodsAndServicesSourcesSchema,
                }),
            ),
            run(toBuy) {
                for (const { resource, count, source } of toBuy) {
                    if (source === 'foreign-market') {
                        role.game.buyFromForeignMarket(role.id, resource as any, count, {
                            payTarriff: true,
                        });
                        continue;
                    }
                    const targetRole = role.game.state.roles[source];
                    let total = 0;
                    if (targetRole.id === 'state') {
                        const price = (
                            {
                                [ResourceEnumSchema.enum.food]: 12,
                                [ResourceEnumSchema.enum.luxury]: 8,
                                [ResourceEnumSchema.enum.influence]: 10,
                                [ResourceEnumSchema.enum.healthcare]: [0, 5, 10][
                                    role.game.getPolicy('healthcare')
                                ],
                                [ResourceEnumSchema.enum.education]: [0, 5, 10][
                                    role.game.getPolicy('education')
                                ],
                            } as const
                        )[resource];
                        total = count * price;
                    } else {
                        total = count * targetRole.state.prices[resource];
                    }
                    role.state.resources.money.remove(total);
                    targetRole.state.resources.money.add(total);
                    targetRole.state.resources[resource].remove(count);
                    role.state.resources[resource].add(count);
                }
            },
        }),
    };
}

/** */
export function createBuildCompany(role: MiddleClassRole | CapitalistRole) {
    return {
        buildCompany: action({
            playerInputSchema: z.object({
                companyId: CompanyIdSchema,
                workers: z.array(CompanyWorkerIdSchema),
            }),
            condition: () => [
                [
                    'hasSpace',
                    _.size(role.state.companies) < (role.id === RoleEnum.capitalist ? 12 : 8),
                ],
            ],
            run: ({ companyId, workers }) => {
                role.state.resources.money.remove(role.game.getCompanyDefinition(companyId).cost);
                role.state.companies[companyId] = {
                    id: companyId,
                    workers: [],
                    wages: ('l' + (role.game.getPolicy('laborMarket') + 1)) as z.infer<
                        typeof WageIdSchema
                    >,
                };
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
        sellCompany: action({
            playerInputSchema: CompanyIdSchema,
            condition: () => [['hasCompany', _.size(role.state.companies) > 0]],
            run(companyId) {
                const company = role.state.companies[companyId];
                company.workers = [];
                for (const workerId of company.workers) {
                    const { worker } = role.game.getWorkerById(workerId);
                    worker.company = null;
                }
                role.state.resources.money.add(role.game.getCompanyDefinition(companyId).cost);
                if (company.automationToken) {
                    ++(role as CapitalistRole).state.automationTokens;
                }
                delete role.state.companies[companyId];
            },
        }),
    };
}

/** 1x per transaction (MC = 1x per transaction, State = only from supply) */
export function createSellForeignMarketCard(role: MiddleClassRole | CapitalistRole | StateRole) {
    return {
        sellForeignMarketCard: action({
            playerInputSchema: z.record(
                TradeableResourceSchema,
                z.tuple([z.boolean(), z.boolean()]),
            ),
            condition: () => [
                ['hasForeignMarketCard', role.game.state.board.foreignMarketCard != null],
            ],
            run(toSell) {
                const card = role.game.getCard(
                    'foreignMarket',
                    role.game.state.board.foreignMarketCard,
                );
                for (const [resource, [used1, used2]] of objectEntries(toSell)) {
                    if (used1) {
                        const { money, resources } = card[resource][0];
                        role.state.resources[resource].remove(resources);
                        role.state.resources.money.add(money);
                    }
                    if (used2) {
                        const { money, resources } = card[resource][0];
                        role.state.resources[resource].remove(resources);
                        role.state.resources.money.add(money);
                    }
                }
            },
        }),
    };
}
