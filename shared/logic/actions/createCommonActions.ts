import { type PolicyName } from '../types';
import { roleAction } from './utils';

export default function createCommonActions() {
    return {
        roleActions: {
            ...roleAction({
                type: 'action:free:skip',
                isFreeAction: true,
                description: '',
                name: '',
                async run({ next }) {
                    next('game:role:current');
                },
            }),
            ...roleAction({
                type: 'action:free:pay-loan',
                name: 'Pay Load',
                isFreeAction: true,
                description: '',
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
                name: 'Propose Bill',
                description: '',
                condition: (
                    { state },
                    { policy, value }: { policy: PolicyName; value: number },
                ) => [
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
        },
    };
}
