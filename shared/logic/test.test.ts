import { beforeEach, expect, test, vi } from 'vitest';
import createGame from './createGame';
import { Game, Player, PolicyEnum, RoleEnum } from './types';
import { describe } from 'node:test';

let game: Game = null as any;
const requestUserInput = vi.fn<Game['requestPlayerInput']>();
const working: Player = { name: 'working', role: RoleEnum.workingClass };
const middle: Player = { name: 'middle', role: RoleEnum.middleClass };
const capitalist: Player = { name: 'capitalist', role: RoleEnum.capitalist };
const state: Player = { name: 'state', role: RoleEnum.state };

const flushAction = async (...args: Parameters<Game['next']>) => {
    game.next(...args);
    return await game.flush();
}

beforeEach(() => {
    game = createGame({ requestUserInput: requestUserInput as any });
    game.state.players = [working, middle, capitalist, state];
});

void describe('game:start', () => {
    test('sorts players by role', async () => {
        await flushAction('game:start');
        expect(game.state.players).toEqual([working, middle, capitalist, state]);
    });

    test('sets currentRole to 0', async () => {
        await flushAction('game:start');
        expect(game.state.currentRole).toBe(0);
    });
});

void describe('started game', () => {
    beforeEach(async () => {
        requestUserInput.mockResolvedValue({
            type: 'workingClass:basic:proposeBill',
            data: { policy: PolicyEnum.fiscalPolicy, value: 3 },
        });
        await flushAction('game:start');
    });

    void describe('workingClass:turn:start', () => {
        test.only('request input', async () => {
            expect(requestUserInput).toHaveBeenCalledOnce();
            expect(requestUserInput).toHaveBeenCalledWith('pickAction', {
                role: RoleEnum.workingClass,
            });
            expect(game.state.board.policyProposals.fiscalPolicy).toEqual({
                role: RoleEnum.workingClass,
                value: 3,
            });
        });
    });
});
