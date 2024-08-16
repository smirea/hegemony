import { RoleEnum, type RoleName, type PolicyName } from '../types';
import { roleAction } from './utils';

export default function createRoleActions() {
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
            condition: ({ currentRole, getMoney }) => [
                ['hasMoney', getMoney(currentRole.id) >= 50],
                ['hasLoans', currentRole.loans > 0],
            ],
            run: ({ currentRole, spendMoney }) => {
                currentRole.loans--;
                spendMoney(currentRole.id, 50);
            },
        }),
        ...roleAction({
            type: 'action:free:use-healthcare',
            roles: roles_WM,
            info: 'from G&S → 1x Pop. → 1 🔴 / 🟡 → + 2x + unskilled worker',
            condition: ({ currentRole, getProsperity }) => [
                [
                    'hasHealthcare',
                    currentRole.resources.healthcare >= getProsperity(currentRole.id),
                ],
            ],
            run({ state, currentRole, getProsperity }) {
                currentRole.resources.healthcare -= getProsperity(currentRole.id);
                currentRole.score += getProsperity(currentRole.id);
                currentRole.score += 2;
                // todo: edge-case when there are no more unskilled workers
                currentRole.availableWorkers.unskilled -= 1;
                currentRole.workers.push({
                    id: ++state.nextWorkerId,
                    type: 'unskilled',
                    company: null,
                });
            },
        }),
        ...roleAction({
            type: 'action:free:use-education',
            roles: roles_WM,
            info: 'from G&S → 1x Pop. → 1 🔴 / 🟡 → + unskilled → skilled worker',
            condition: ({ currentRole, getProsperity }) => [
                ['hasEducation', currentRole.resources.education >= getProsperity(currentRole.id)],
            ],
            async run({ currentRole, getProsperity, requestPlayerInput }) {
                currentRole.score += getProsperity(currentRole.id);
                currentRole.resources.education -= getProsperity(currentRole.id);
                const { id, type } = await requestPlayerInput('educate-worker', {
                    role: currentRole.id,
                });
                currentRole.workers.find(w => w.id === id)!.type = type;
            },
        }),
        ...roleAction({
            type: 'action:free:use-luxury',
            roles: roles_WM,
            info: 'from G&S 1x Population → 1 🔴 / 🟡',
            condition: ({ currentRole, getProsperity }) => [
                ['hasLuxury', currentRole.resources.luxury >= getProsperity(currentRole.id)],
            ],
            run({ currentRole, getProsperity }) {
                currentRole.resources.luxury -= getProsperity(currentRole.id);
                currentRole.score += getProsperity(currentRole.id);
            },
        }),
        ...roleAction({
            type: 'action:free:adjust-prices',
            roles: roles_MC,
            info: 'any/all prices, any value',
            async run({ currentRole, requestPlayerInput }) {
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
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:free:swap-workers',
            roles: roles_WM,
            info: 'skilled worker(s) in unskilled slot ↔ unemployed unskilled (keep committed or non-committed)',
            condition: ({ currentRole }) => [
                [
                    'hasUnemployedWorkers',
                    currentRole.workers.filter(w => w.company == null).length > 0,
                ],
            ],
            async run({ currentRole, requestPlayerInput }) {
                const tuples = await requestPlayerInput('swap-workers', {
                    role: currentRole.id,
                });
                for (const [id1, id2] of tuples) {
                    const worker1 = currentRole.workers.find(w => w.id === id1)!;
                    const worker2 = currentRole.workers.find(w => w.id === id2)!;
                    const tmp = worker1.company;
                    worker1.company = worker2.company;
                    worker2.company = tmp;
                }
            },
        }),
        ...roleAction({
            type: 'action:free:give-bonus',
            roles: [RoleEnum.capitalist],
            info: '5¥ to class → commit',
            condition: ({ currentRole, getMoney }) => [['hasMoney', getMoney(currentRole.id) >= 5]],
            async run({ state, spendMoney, addMoney, currentRole, requestPlayerInput }) {
                const { companyId } = await requestPlayerInput('commit-workers', {
                    role: currentRole.id,
                });
                let targetRole: RoleName | null = null;
                for (const role of [state.roles.workingClass, state.roles.middleClass]) {
                    for (const worker of role.workers) {
                        if (worker.company === companyId) {
                            worker.committed = true;
                            targetRole = role.id;
                        }
                    }
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
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:free:receive-benefits',
            roles: roles_MCS,
            info: 'take State Benefits → State gains 1 ★',
            run() {
                // todo
                throw new Error('todo');
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
            run: ({ currentRole }) => {
                currentRole.availableVotingCubes -= 3;
            },
        }),
        ...roleAction({
            type: 'action:basic:assign-workers',
            roles: [RoleEnum.workingClass, RoleEnum.middleClass],
            info: '1-3 un-employed or non-committed workers → commit (and/or Trade Union WC)',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:build-company',
            roles: [RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'pay ¥ → set wages + (CC may) assign/commit workers',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:sell-company',
            roles: [RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'company with non-committed workers → gain ¥ + workers to unemployed',
            run() {
                // todo
                throw new Error('todo');
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
            roles: [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'up to 1 per Population × 2 sources (1 type)',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:strike',
            roles: [RoleEnum.workingClass],
            info: '1-2 tokens → non-committed cos. (L1/L2 wages) → wages ⬆ or no production and +1 🟣',
            run() {
                // todo
                throw new Error('todo');
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
            roles: [RoleEnum.middleClass, RoleEnum.capitalist],
            info: 'co with non-committed MC (+ non-committed WC) workers → commit + produce (+ pay WC)',
            run() {
                // todo
                throw new Error('todo');
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
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:meet-with-party-mps',
            roles: [RoleEnum.state],
            info: "2x personal to class → +1 that class's Legitimacy",
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:extra-tax',
            roles: [RoleEnum.state],
            info: 'take 10¥ from each class → -1 Legitimacy from two lowest classes',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
        ...roleAction({
            type: 'action:basic:campaign',
            roles: [RoleEnum.state],
            info: 'up to 3x media → personal 🟣',
            run() {
                // todo
                throw new Error('todo');
            },
        }),
    };

    return {
        ...freeActions,
        ...basicActions,
    };
}
