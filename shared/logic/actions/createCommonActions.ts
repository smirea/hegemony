import { RoleEnum, type PolicyName } from '../types';
import { roleAction } from './utils';

export default function createCommonActions() {
    const allRoles = [
        RoleEnum.workingClass,
        RoleEnum.middleClass,
        RoleEnum.capitalist,
        RoleEnum.state,
    ] as const;
    return {
        ...roleAction({
            type: 'action:free:skip',
            isFreeAction: true,
            roles: allRoles,
            info: 'hidden action to account for skipping the free action',
            async run({ next }) {
                next('game:role:current');
            },
        }),
        ...roleAction({
            type: 'action:free:pay-loan',
            isFreeAction: true,
            roles: allRoles,
            info: '50¥ (CC: from Capital) → discard loan (max 1 loan payoff/action)',
            condition: ({ currentRoleState }) => [
                ['hasMoney', currentRoleState.resources.money >= 50],
                ['hasLoans', currentRoleState.loans > 0],
            ],
            run: ({ currentRoleState }) => {
                currentRoleState.loans--;
                currentRoleState.resources.money -= 50;
            },
        }),
        ...roleAction({
            type: 'action:basic:propose-bill',
            info: 'place bill +/- 1 step (spend 1 🟣 for immediate vote)',
            roles: allRoles,
            condition: ({ state }, { policy, value }: { policy: PolicyName; value: number }) => [
                [
                    'hasVotes',
                    Object.values(state.board.policyProposals).filter(
                        p => p.role === state.currentRole!,
                    ).length < 3,
                ],
                ['notProposed', !state.board.policyProposals[policy]],
                ['isDifferent', state.board.policies[policy] !== value],
                ['isValid', value === 0 || value === 1 || value === 2],
            ],
            run: ({ state }, { policy, value }: { policy: PolicyName; value: number }) => {
                state.board.policyProposals[policy] = {
                    role: state.currentRole!,
                    value,
                };
            },
        }),
        ...roleAction({
            type: 'action:basic:apply-political-pressure',
            info: 'add 3 cubes to bag',
            roles: [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist],
            condition: ({ currentRoleState }) => [
                ['hasCubes', currentRoleState.availableVotingCubes >= 1],
            ],
            run: ({ currentRoleState }) => {
                currentRoleState.availableVotingCubes -= 3;
            },
        }),
    };
}
