import chalk from 'chalk';

import { RoleEnum } from '../types';
import { action, type CreateActionsContext } from './utils';

export default function createGameActions({
    getAction,
    validateEvent,
    requestPlayerInput,
}: CreateActionsContext) {
    return {
        ...action({
            type: 'game:start',
            async run({ state, next }) {
                const order = [
                    RoleEnum.workingClass,
                    RoleEnum.middleClass,
                    RoleEnum.capitalist,
                    RoleEnum.state,
                ];
                state.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
                state.round = 0;
                state.round = 0;
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:round:start',
            async run({ state, debug, next }) {
                state.currentRoleName = null;
                ++state.round;
                state.turn = 0;
                if (debug) console.log(chalk.green.bold('——— round:'), state.round);
                next('game:role:next');
            },
        }),
        ...action({
            type: 'game:turn:start',
            async run({ state, debug, next }) {
                ++state.turn;
                if (debug) console.log(chalk.green.bold('——— turn:'), state.turn);
                next('game:role:next');
            },
        }),
        ...action({
            type: 'game:role:next',
            async run({ state, next }): Promise<void> {
                if (state.currentRoleName == state.players[state.players.length - 1].role) {
                    return next('game:turn:end');
                }
                if (state.currentRoleName == null) {
                    state.currentRoleName = state.players[0].role;
                } else {
                    state.currentRoleName =
                        state.players[
                            state.players.findIndex(p => p.role === state.currentRoleName) + 1
                        ].role;
                }

                state.roles[state.currentRoleName!].usedActions = [];
                next('game:role:turn');
            },
        }),
        ...action({
            type: 'game:role:turn',
            async run({ next, currentRole: currentRoleState, state }) {
                const action = await requestPlayerInput('pick-action', {
                    role: state.currentRoleName!,
                });
                validateEvent(action);
                if (getAction(action.type).isFreeAction) {
                    currentRoleState.usedActions.push('free');
                } else {
                    currentRoleState.usedActions.push('basic');
                }
                next(action);
                next('game:role:current');
            },
        }),
        ...action({
            type: 'game:role:current',
            async run({ currentRole: currentRoleState, next }): Promise<void> {
                if (currentRoleState.usedActions.length >= 2) return next('game:role:next');
                return next('game:role:turn');
            },
        }),
        ...action({
            type: 'game:turn:end',
            async run({ next, state }): Promise<void> {
                if (state.turn >= 4) return next('game:round:end');
                ++state.turn;
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:round:end',
            async run({ next, state }): Promise<void> {
                if (state.round >= 4) return next('game:end');
                ++state.round;
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:end',
            async run() {
                // noop
            },
        }),
    };
}
