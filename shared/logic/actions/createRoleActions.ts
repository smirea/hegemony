import _ from 'lodash';
import { objectEntries } from 'shared/utils/ts';

import {
    RoleEnum,
    type RoleName,
    type PolicyName,
    type StateRole,
    type RoleNameNoState,
    WorkerTypeEnum,
    type ActionFactoryContext,
    type CapitalistRole,
    ResourceEnum,
    type CompanyWorker,
    type Company,
    type RoleNameNoWorkingClass,
    type WageId,
} from '../types';
import { roleAction } from './utils';

function addLegitimacy(currentRole: StateRole, target: RoleNameNoState, value: number) {
    currentRole.legitimacy[target] = _.clamp(currentRole.legitimacy[target] + value, 1, 10);
}

const allRoles = [
    RoleEnum.workingClass,
    RoleEnum.middleClass,
    RoleEnum.capitalist,
    RoleEnum.state,
] as const;

const roles_WM = [RoleEnum.workingClass, RoleEnum.middleClass] as const;
const roles_MC = [RoleEnum.middleClass, RoleEnum.capitalist] as const;
const roles_WMC = [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist] as const;
const roles_MCS = [RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state] as const;

const buyGoodsSources_all = [
    RoleEnum.middleClass,
    RoleEnum.capitalist,
    RoleEnum.state,
    'foreign-market',
] as const;

export default function createRoleActions({
    getCompanyDefinition,
    requestPlayerInput,
    addMoney,
    spendMoney,
    getMoney,
    getProsperity,
    getWorkerById,
    buyFromForeignMarket,
}: ActionFactoryContext) {
    const freeActions = {
        ...roleAction({
            type: 'action:free:skip',
            isFreeAction: true,
            roles: allRoles,
            info: 'hidden action to account for skipping the free action',
            async run() {
                // noop
            },
        }),
        ...roleAction({
            type: 'action:free:pay-loan',
            isFreeAction: true,
            roles: allRoles,
            info: '50¥ (CC: from Capital) → discard loan (max 1 loan payoff/action)',
            condition: ({ currentRole }) => [
                ['hasMoney', getMoney(currentRole.id) >= 50],
                ['hasLoans', currentRole.loans > 0],
            ],
            run: ({ currentRole }) => {
                currentRole.loans--;
                spendMoney(currentRole.id, 50);
            },
        }),
        ...roleAction({
            type: 'action:free:use-healthcare',
            roles: roles_WM,
            info: 'from G&S → 1x Pop. → 1 🔴 / 🟡 → + 2x + unskilled worker',
            condition: ({ currentRole }) => [
                [
                    'hasHealthcare',
                    currentRole.resources.healthcare >= getProsperity(currentRole.id),
                ],
            ],
            run({ state, currentRole }) {
                currentRole.resources.healthcare -= getProsperity(currentRole.id);
                currentRole.score += getProsperity(currentRole.id);
                currentRole.score += 2;
                // todo: edge-case when there are no more unskilled workers
                currentRole.availableWorkers.unskilled -= 1;
                const id = ++state.nextWorkerId;
                currentRole.workers[id] = {
                    id,
                    role: currentRole.id,
                    type: WorkerTypeEnum.unskilled,
                    company: null,
                };
            },
        }),
        ...roleAction({
            type: 'action:free:use-education',
            roles: roles_WM,
            info: 'from G&S → 1x Pop. → 1 🔴 / 🟡 → + unskilled → skilled worker',
            condition: ({ currentRole }) => [
                ['hasEducation', currentRole.resources.education >= getProsperity(currentRole.id)],
            ],
            async run({ currentRole }) {
                currentRole.score += getProsperity(currentRole.id);
                currentRole.resources.education -= getProsperity(currentRole.id);
                const { id, type } = await requestPlayerInput('workers:educate', {
                    role: currentRole.id,
                });
                currentRole.workers[id].type = type;
            },
        }),
        ...roleAction({
            type: 'action:free:use-luxury',
            roles: roles_WM,
            info: 'from G&S 1x Population → 1 🔴 / 🟡',
            condition: ({ currentRole }) => [
                ['hasLuxury', currentRole.resources.luxury >= getProsperity(currentRole.id)],
            ],
            run({ currentRole }) {
                currentRole.resources.luxury -= getProsperity(currentRole.id);
                currentRole.score += getProsperity(currentRole.id);
            },
        }),
        ...roleAction({
            type: 'action:free:adjust-prices',
            roles: roles_MC,
            info: 'any/all prices, any value',
            async run({ currentRole }) {
                Object.assign(
                    currentRole.prices,
                    await requestPlayerInput('adjust-prices', {
                        role: currentRole.id,
                    }),
                );
            },
        }),
        ...roleAction({
            type: 'action:free:adjust-wages',
            roles: roles_MCS,
            info: 'raise = commit, committed = cannot lower (Labor Market)',
            async run({ currentRole }) {
                const toAdjust = await requestPlayerInput('company:adjust-wages', {
                    role: currentRole.id,
                });
                for (const { companyId, wages } of toAdjust) {
                    const company = currentRole.companies[companyId];
                    company.wages = wages;
                    for (const workerId of company.workers) {
                        const { worker } = getWorkerById(workerId);
                        worker.committed = true;
                    }
                }
            },
        }),
        ...roleAction({
            type: 'action:free:swap-workers',
            roles: roles_WM,
            info: 'skilled worker(s) in unskilled slot ↔ unemployed unskilled (keep committed or non-committed)',
            condition: ({ currentRole }) => [
                [
                    'hasUnemployedWorkers',
                    _.size(_.pickBy(currentRole.workers, w => w.company == null)) > 0,
                ],
            ],
            async run({ currentRole }) {
                const tuples = await requestPlayerInput('workers:swap', {
                    role: currentRole.id,
                });
                for (const [id1, id2] of tuples) {
                    const { company, committed } = currentRole.workers[id1];
                    currentRole.workers[id1].company = currentRole.workers[id2].company;
                    currentRole.workers[id1].committed = currentRole.workers[id2].committed;
                    currentRole.workers[id2].company = company;
                    currentRole.workers[id2].committed = committed;
                }
            },
        }),
        ...roleAction({
            type: 'action:free:give-bonus',
            roles: [RoleEnum.capitalist],
            info: '5¥ to class → commit',
            condition: ({ currentRole }) => [['hasMoney', getMoney(currentRole.id) >= 5]],
            async run({ currentRole }) {
                const { companyId } = await requestPlayerInput('workers:commit', {
                    role: currentRole.id,
                });
                let targetRole: RoleName | null = null;
                for (const workerId of currentRole.companies[companyId].workers) {
                    const { worker } = getWorkerById(workerId);
                    worker.committed = true;
                    targetRole = worker.role;
                }
                if (targetRole) {
                    spendMoney(currentRole.id, 5);
                    addMoney(targetRole, 5);
                }
            },
        }),
        ...roleAction({
            type: 'action:free:buy-storage',
            roles: [RoleEnum.capitalist],
            info: '20¥ per tile (max 1 storage tile per type for whole game)',
            condition: ({ currentRole }) => [
                ['hasMoney', getMoney(currentRole.id) >= 20],
                ['hasStorage', _.filter(currentRole.storage).length < 4],
            ],
            async run({ currentRole }) {
                const { resource } = await requestPlayerInput('buy-storage', {
                    role: currentRole.id,
                });
                currentRole.storage[resource] = true;
                spendMoney(currentRole.id, 20);
            },
        }),
        ...roleAction({
            type: 'action:free:receive-benefits',
            roles: roles_WMC,
            info: 'take State Benefits → State gains 1 ★',
            condition: ({ state, currentRole }) => [
                ['hasBenefits', state.roles.state.benefits[currentRole.id].length > 0],
            ],
            run({ state, currentRole }) {
                const benefits = state.roles.state.benefits[currentRole.id];
                for (const benefit of benefits) {
                    if (benefit.type === 'resource') {
                        addMoney(currentRole.id, benefit.amount);
                    } else if (benefit.type === 'voting-cube') {
                        currentRole.availableVotingCubes -= benefit.amount;
                        state.board.votingCubeBag[currentRole.id] += benefit.amount;
                    }
                }
                state.roles.state.benefits[currentRole.id] = [];
            },
        }),
    };

    const basicActions = {
        ...roleAction({
            type: 'action:basic:propose-bill',
            info: 'place bill +/- 1 step (spend 1 🟣 for immediate vote)',
            roles: allRoles,
            condition: (
                { state, currentRole },
                { policy, value }: { policy: PolicyName; value: number },
            ) => [
                [
                    'hasVotes',
                    Object.values(state.board.policyProposals).filter(
                        p => p.role === currentRole.id,
                    ).length < 3,
                ],
                ['notProposed', !state.board.policyProposals[policy]],
                ['isDifferent', state.board.policies[policy] !== value],
                ['isValid', value === 0 || value === 1 || value === 2],
            ],
            run: (
                { state, currentRole },
                { policy, value }: { policy: PolicyName; value: number },
            ) => {
                state.board.policyProposals[policy] = {
                    role: currentRole.id,
                    value,
                };
            },
        }),
        ...roleAction({
            type: 'action:basic:apply-political-pressure',
            info: 'add 3 cubes to bag',
            roles: roles_WMC,
            condition: ({ currentRole }) => [['hasCubes', currentRole.availableVotingCubes >= 1]],
            run: ({ state, currentRole }) => {
                const toAdd = Math.min(3, state.board.votingCubeBag[currentRole.id]);
                currentRole.availableVotingCubes -= toAdd;
                state.board.votingCubeBag[currentRole.id] += toAdd;
            },
        }),
        ...roleAction({
            type: 'action:basic:assign-workers',
            roles: [RoleEnum.workingClass, RoleEnum.middleClass],
            info: '1-3 un-employed or non-committed workers → commit (and/or Trade Union WC)',
            async run({ currentRole, state }) {
                const toAssign = await requestPlayerInput('assign-workers', {
                    role: currentRole.id,
                });
                const emptyCompanies = new Set<{
                    role: RoleNameNoWorkingClass;
                    companyId: Company['id'];
                }>();
                const handledWorkers = new Set<CompanyWorker['id']>();
                for (const payload of toAssign) {
                    if (payload.type === 'union') {
                        const { worker } = getWorkerById(payload.workerId);
                        handledWorkers.add(worker.id);
                        worker.company = null;
                        worker.committed = false;
                        worker.union = true;
                        continue;
                    }
                    const { workers, companyId, role: companyOwnerRole } = payload;
                    const company = state.roles[companyOwnerRole].companies[companyId];
                    company.workers = workers;
                    for (const workerId of workers) {
                        const { worker } = getWorkerById(workerId);
                        handledWorkers.add(worker.id);
                        // moving unemployed workers is fine
                        // moving WC workers out of a MC company is also fine
                        // all other instances, we need to empty all other workers from a company
                        if (
                            !worker.company ||
                            (worker.role === RoleEnum.workingClass &&
                                companyOwnerRole === RoleEnum.middleClass)
                        ) {
                            worker.company = companyId;
                            worker.committed = true;
                            continue;
                        }
                        emptyCompanies.add({ role: companyOwnerRole, companyId: worker.company });
                    }
                }
                for (const { role, companyId } of emptyCompanies) {
                    const company = state.roles[role].companies[companyId];
                    for (const workerId of company.workers) {
                        if (handledWorkers.has(workerId)) continue;
                        const { worker } = getWorkerById(workerId);
                        worker.company = null;
                        worker.committed = false;
                    }
                }
            },
        }),
        ...roleAction({
            type: 'action:basic:build-company',
            roles: [RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'pay ¥ → set wages + (CC may) assign/commit workers',
            condition: ({ currentRole }) => [
                [
                    'hasSpace',
                    _.size(currentRole.companies) <
                        (currentRole.id === RoleEnum.capitalist ? 12 : 8),
                ],
            ],
            async run({ currentRole, state }) {
                const { companyId } = await requestPlayerInput('company:build', {
                    role: currentRole.id,
                });
                spendMoney(currentRole.id, getCompanyDefinition(companyId).cost);
                currentRole.companies[companyId] = {
                    id: companyId,
                    workers: [],
                    wages: ('l' + (state.board.policies.laborMarket + 1)) as WageId,
                };
                const workers = await requestPlayerInput('company:build:assign-workers', {
                    role: currentRole.id,
                    company: companyId,
                });
                if (workers.length > 0) {
                    currentRole.companies[companyId].workers = workers;
                }
            },
        }),
        ...roleAction({
            type: 'action:basic:sell-company',
            roles: [RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'company with non-committed workers → gain ¥ + workers to unemployed',
            condition: ({ currentRole }) => [['hasCompany', _.size(currentRole.companies) > 0]],
            async run({ currentRole }) {
                const companyId = await requestPlayerInput('company:sell', {
                    role: currentRole.id,
                });
                const company = currentRole.companies[companyId];
                for (const workerId of company.workers) {
                    const { worker } = getWorkerById(workerId);
                    worker.company = null;
                }
                addMoney(currentRole.id, getCompanyDefinition(companyId).cost);
                if (company.automationToken) {
                    (currentRole as CapitalistRole).automationTokens++;
                }
                delete currentRole.companies[companyId];
            },
        }),
        ...roleAction({
            type: 'action:basic:event-action',
            roles: [RoleEnum.state],
            info: 'execute + gain rewards → discard Event Card',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:sell-to-foreign-market',
            roles: [RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state],
            info: '1x per transaction (MC = 1x per transaction, State = only from supply)',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:buy-goods-and-services',
            roles: [RoleEnum.workingClass, RoleEnum.middleClass],
            info: 'up to 1 per Population × 2 sources (1 type)',
            async run({ currentRole, state }) {
                const toBuy = await requestPlayerInput('buy-goods-and-services', {
                    role: currentRole.id,
                    maxPerSource: getProsperity(currentRole.id),
                    sources: buyGoodsSources_all,
                    maxSources: 2,
                });
                for (const { resource, count, source } of toBuy) {
                    if (source === 'foreign-market') {
                        buyFromForeignMarket(state, currentRole.id, resource as any, count, {
                            payTarriff: true,
                        });
                        continue;
                    }
                    const role = state.roles[source];
                    let total = 0;
                    if (role.id === 'state') {
                        const price = (
                            {
                                [ResourceEnum.food]: 12,
                                [ResourceEnum.luxury]: 8,
                                [ResourceEnum.influence]: 10,
                                [ResourceEnum.healthcare]: [0, 5, 10][
                                    state.board.policies.healthcare
                                ],
                                [ResourceEnum.education]: [0, 5, 10][
                                    state.board.policies.education
                                ],
                            } as const
                        )[resource];
                        total = count * price;
                    } else {
                        total = count * role.prices[resource];
                    }
                    spendMoney(currentRole.id, total);
                    addMoney(role.id, total);
                    role.resources[resource] -= count;
                    currentRole.resources[resource] += count;
                }
            },
        }),
        ...roleAction({
            type: 'action:basic:strike',
            roles: [RoleEnum.workingClass],
            info: '1-2 tokens → non-committed cos. (L1/L2 wages) → wages ⬆ or no production and +1 🟣',
            condition: ({ currentRole }) => [['hasStrikeTokens', currentRole.strikeTokens >= 1]],
            async run({ currentRole, state }) {
                const toStrike = await requestPlayerInput('company:strike', {
                    role: currentRole.id,
                });
                for (const { companyId, role } of toStrike) {
                    const company = state.roles[role].companies[companyId];
                    company.strike = true;
                    --currentRole.strikeTokens;
                }
            },
        }),
        ...roleAction({
            type: 'action:basic:demonstration',
            roles: [RoleEnum.workingClass],
            info: 'unemployed → open slots >= 2 → WC +1 🟣, others -★ (WC choice)',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:extra-shift',
            roles: [RoleEnum.middleClass],
            info: 'co with non-committed MC (+ non-committed WC) workers → commit + produce (+ pay WC)',
            async run({ state, currentRole }) {
                const { companyId } = await requestPlayerInput('company:extra-shift');
                const company = state.roles[RoleEnum.middleClass].companies[companyId];
                const uncommittedWorkingClassWorker = company.workers.find(w => {
                    const { worker, roleName } = getWorkerById(w);
                    return roleName === RoleEnum.workingClass && !worker.committed;
                });
                const def = getCompanyDefinition(companyId);
                const wages = def.wages[company.wages];
                const produce = (count: number) => {
                    if (def.industry === ResourceEnum.influence) {
                        currentRole.resources[def.industry] += count;
                    } else {
                        currentRole.producedResources[def.industry] += count;
                    }
                };
                produce(def.production);
                if (uncommittedWorkingClassWorker) {
                    spendMoney(currentRole.id, wages);
                    addMoney(RoleEnum.workingClass, wages);
                    state.roles[RoleEnum.workingClass].workers[
                        uncommittedWorkingClassWorker
                    ].committed = true;
                    produce(def.extraProduction || 0);
                }
            },
        }),
        ...roleAction({
            type: 'action:basic:make-business-deal',
            roles: [RoleEnum.capitalist],
            info: 'pay ¥, goods to storage (tariff ¥) and/or FTZ → discard',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:lobby',
            roles: [RoleEnum.capitalist],
            info: 'pay 30¥ from Capital → gain 3 🟣',
            condition: ({ currentRole, state }) => [
                ['hasMoney', getMoney(currentRole.id) >= 30],
                ['hasVotingCubes', state.board.availableInfluence >= 3],
            ],
            run({ state, currentRole }) {
                spendMoney(currentRole.id, 30, { source: 'capital' });
                const toAdd = Math.min(3, state.board.availableInfluence);
                state.board.availableInfluence -= toAdd;
                currentRole.resources.influence += toAdd;
            },
        }),
        ...roleAction({
            type: 'action:basic:meet-with-party-mps',
            roles: [RoleEnum.state],
            info: "2x personal 🟣 to class → +1 that class's Legitimacy",
            condition: ({ currentRole }) => [
                ['hasVotingCubes', currentRole.resources.influence >= 2],
            ],
            async run({ currentRole }) {
                const target = await requestPlayerInput('state:pick-role');
                addLegitimacy(currentRole, target, 1);
            },
        }),
        ...roleAction({
            type: 'action:basic:extra-tax',
            roles: [RoleEnum.state],
            info: 'take 10¥ from each class → -1 Legitimacy from two lowest classes',
            run({ currentRole }) {
                spendMoney(RoleEnum.workingClass, 10, { canTakeLoans: true });
                spendMoney(RoleEnum.middleClass, 10, { canTakeLoans: true });
                spendMoney(RoleEnum.capitalist, 10, { canTakeLoans: true });
                objectEntries(currentRole.legitimacy)
                    .sort(([, a], [, b]) => a - b)
                    .slice(0, 2)
                    .forEach(([k]) => {
                        addLegitimacy(currentRole, k, -1);
                    });
                addMoney(currentRole.id, 30);
            },
        }),
        ...roleAction({
            type: 'action:basic:campaign',
            roles: [RoleEnum.state],
            info: 'up to 3x media → personal 🟣',
            condition: ({ state }) => [['hasVotingCubes', state.board.availableInfluence >= 1]],
            run({ currentRole, state }) {
                const toAdd = Math.min(3, state.board.availableInfluence);
                state.board.availableInfluence -= toAdd;
                currentRole.resources.influence += toAdd;
            },
        }),
    };

    return {
        ...freeActions,
        ...basicActions,
    };
}
