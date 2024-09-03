import { beforeEach, expect, test, describe, vi } from 'vitest';

import { type Player, RoleEnum } from './types';
import Game from './Game';
import { type ActionEventName } from './types.generated';

let game: Game = null as any;
const noResponseSymbol = Symbol('nope');
let playerInput: any = noResponseSymbol;
const working: Player = { name: 'working', role: RoleEnum.workingClass };
// const middle: Player = { name: 'middle', role: RoleEnum.middleClass };
const capitalist: Player = { name: 'capitalist', role: RoleEnum.capitalist };
// const state: Player = { name: 'state', role: RoleEnum.state };

const tick = async (n?: number | ActionEventName) => {
    n ??= 1;
    if (typeof n === 'number') for (let i = 0; i < n; ++i) await game.tick();
    else await game.flush({ after: n });
};

const requestPlayerInput = vi.fn<Game['requestPlayerInput']>();

// const getCurrentAction = () => game.state.actionQueue[game.state.currentActionIndex];

const findAction = (type: ActionEventName, n = 0) =>
    game.state.actionQueue.filter(a => a.type === type).at(n)!;

beforeEach(() => {
    game = new Game({
        players: [working, capitalist],
        requestPlayerInput,
    });
    requestPlayerInput.mockReset();
    requestPlayerInput.mockImplementation(async (...data: any) => {
        if (playerInput === noResponseSymbol) {
            throw new Error('test-error: player response not set for: ' + JSON.stringify(data));
        }
        const r = playerInput;
        playerInput = noResponseSymbol;
        return r;
    });
});

describe('game.actions.start', () => {
    test('sorts players by role', async () => {
        game.state.players = [capitalist, working];
        game.next('game.actions.start');
        await tick();
        expect(game.state.players).toEqual([working, capitalist]);
        expect(game.state.currentRoleName).toBe(RoleEnum.workingClass);
    });
});

describe('started game', () => {
    beforeEach(async () => {
        game.next('game.actions.start');
        await tick();
    });

    describe('game.actions.roleTurn', () => {
        test.only('request input', async () => {
            playerInput = 'workingClass.basicActions.proposeBill';
            await tick('game.actions.roleTurn');
            expect(requestPlayerInput).toHaveBeenCalledOnce();
            expect(requestPlayerInput).toHaveBeenCalledWith('game.actions.roleTurn');
            expect(findAction('game.actions.roleTurn').data).toEqual(
                'workingClass.basicActions.proposeBill',
            );
        });
    });
});
