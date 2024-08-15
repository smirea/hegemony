import { beforeEach, expect, test, describe, vi } from 'vitest';

import createGame from './createGame';
import { type ActionName, type Game, type Player, PolicyEnum, RoleEnum } from './types';
import { roleActionEvent } from './actions/utils';

let game: Game = null as any;
const noResponseSymbol = Symbol('nope');
let playerInput: any = noResponseSymbol;
const working: Player = { name: 'working', role: RoleEnum.workingClass };
const middle: Player = { name: 'middle', role: RoleEnum.middleClass };
const capitalist: Player = { name: 'capitalist', role: RoleEnum.capitalist };
const state: Player = { name: 'state', role: RoleEnum.state };

const tick = async (n?: number | ActionName) => {
    n ??= 1;
    if (typeof n === 'number') for (let i = 0; i < n; ++i) await game.tick();
    else await game.flush({ after: n });
};

const requestPlayerInput = vi.fn<Game['requestPlayerInput']>();

beforeEach(() => {
    game = createGame({ requestPlayerInput: requestPlayerInput as any });
    game.state.players = [working, capitalist];
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

describe('game:start', () => {
    test('sorts players by role', async () => {
        game.next('game:start');
        await tick();
        expect(game.state.players).toEqual([working, middle, capitalist, state]);
        expect(game.state.currentRole).toBe(0);
    });
});

describe('started game', () => {
    beforeEach(async () => {
        playerInput = roleActionEvent('action:basic:propose-bill', {
            policy: PolicyEnum.fiscalPolicy,
            value: 1,
        });
        game.next('game:start');
        await tick();
    });

    describe('workingClass:turn:start', () => {
        test.only('request input', async () => {
            await tick('action:basic:propose-bill');
            expect(requestPlayerInput).toHaveBeenCalledOnce();
            expect(requestPlayerInput).toHaveBeenCalledWith('pickAction', {
                role: RoleEnum.workingClass,
            });
            expect(game.state.board.policyProposals.fiscalPolicy).toEqual({
                role: RoleEnum.workingClass,
                value: 1,
            });
        });
    });
});
