import chalk from 'chalk';
import _ from 'lodash';

import { RoleEnum } from '../types';
import { action } from './utils';

import type Game from '../Game';

export default function createGameActions(game: Game) {
    return {
        ...action({
            type: 'game:start',
            async run({ next }) {
                const order = [
                    RoleEnum.workingClass,
                    RoleEnum.middleClass,
                    RoleEnum.capitalist,
                    RoleEnum.state,
                ];
                game.state.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
                game.state.round = 0;
                game.state.round = 0;
                for (const deck of Object.values(game.state.board.decks)) {
                    deck.shuffle();
                }
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:round:start',
            async run({ next }) {
                game.state.currentRoleName = null;
                ++game.state.round;
                game.state.turn = 0;
                const { foreignMarketCards, businessDealCards } = game.state.board.decks;
                game.state.board.foreignMarketCard = foreignMarketCards.draw().id;
                if (game.ifPolicy('6A')) {
                    game.state.board.businessDealCards = [
                        businessDealCards.draw().id,
                        businessDealCards.draw().id,
                    ];
                } else if (game.ifPolicy('6B')) {
                    game.state.board.businessDealCards = [businessDealCards.draw().id];
                } else {
                    game.state.board.businessDealCards = [];
                }
                if (game.debug) console.log(chalk.green.bold('——— round:'), game.state.round);
                next('game:role:next');
            },
        }),
        ...action({
            type: 'game:turn:start',
            async run({ next }) {
                ++game.state.turn;
                if (game.debug) console.log(chalk.green.bold('——— turn:'), game.state.turn);
                next('game:role:next');
            },
        }),
        ...action({
            type: 'game:role:next',
            async run({ next }): Promise<void> {
                if (
                    game.state.currentRoleName ==
                    game.state.players[game.state.players.length - 1].role
                ) {
                    return next('game:turn:end');
                }
                if (game.state.currentRoleName == null) {
                    game.state.currentRoleName = game.state.players[0].role;
                } else {
                    game.state.currentRoleName =
                        game.state.players[
                            game.state.players.findIndex(
                                p => p.role === game.state.currentRoleName,
                            ) + 1
                        ].role;
                }

                game.state.roles[game.state.currentRoleName!].usedActions = [];
                next('game:role:turn');
            },
        }),
        ...action({
            type: 'game:role:turn',
            async run({ next, currentRole: currentRoleState }) {
                const action = await game.requestPlayerInput('pick-action', {
                    role: game.state.currentRoleName!,
                });
                game.validateEvent(action);
                if (game.getAction(action.type).isFreeAction) {
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
            async run({ next }): Promise<void> {
                if (game.state.turn >= 4) return next('game:round:end');
                ++game.state.turn;
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:round:end',
            async run({ next }): Promise<void> {
                if (game.state.round >= 4) return next('game:end');
                ++game.state.round;
                next('game:round:start');
            },
        }),
        ...action({
            type: 'game:end',
            async run() {
                // todo
            },
        }),
    };
}
