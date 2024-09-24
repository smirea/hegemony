import { beforeEach, expect, test, describe } from 'vitest';

import { RoleEnum } from '../types';
import { createGameUtils } from './testUtils';

import type Game from '../Game';

const { tick, nextAndTick, addInput, requestPlayerInput, findAction, initGame } = createGameUtils();

let game: Game;

describe('game:start', () => {
    beforeEach(async () => {
        game = await initGame(['capitalist', 'workingClass'], { setup: false });
    });
    test('sorts players by role', async () => {
        await nextAndTick('game:start');
        expect(game.data.players[0].role).toBe(RoleEnum.workingClass);
        expect(game.data.players[1].role).toBe(RoleEnum.capitalist);
        expect(game.data.currentRoleName).toBe(null);
    });
});

describe('started game', () => {
    beforeEach(async () => {
        game = await initGame(['capitalist', 'workingClass']);
        await nextAndTick('game:start');
    });

    test('request input', async () => {
        addInput('game:roleTurn', 'workingClass:proposeBill');
        await tick('game:roleTurn');
        expect(requestPlayerInput).toHaveBeenCalledOnce();
        expect(requestPlayerInput).toHaveBeenCalledWith('game:roleTurn');
        expect(findAction('game:roleTurn').data).toEqual('workingClass:proposeBill');
    });

    test('throws if out of turn', async () => {
        addInput('game:roleTurn', 'capitalist:proposeBill');
        await expect(tick('game:roleTurn')).rejects.toThrow(
            'Event(game:roleTurn) player input validation failed: currentTurn',
        );
    });

    test('turn:end', async () => {
        game.data.board.policies.fiscalPolicy = 1;
        game.data.board.policies.healthcare = 1;
        game.data.roles.workingClass.data.resources.healthcare.add(10);
        addInput('game:roleTurn', 'workingClass:proposeBill');
        addInput('workingClass:proposeBill', { value: 2, policy: 'fiscalPolicy' });
        addInput('game:roleTurn', 'workingClass:useHealthcare');
        addInput('game:roleTurn', 'capitalist:proposeBill');
        addInput('capitalist:proposeBill', { value: 0, policy: 'healthcare' });
        addInput('game:roleTurn', 'capitalist:skip');
        await tick('game:turnEnd');
        expect(requestPlayerInput).toHaveBeenCalledTimes(6);
        expect(game.data.roles.workingClass.data.resources.healthcare.value).toBe(7);
        expect(game.data.roles.workingClass.data.score).toBe(3);
        expect(game.data.board.policyProposals.fiscalPolicy).toEqual({
            role: 'workingClass',
            value: 2,
        });
        expect(game.data.board.policyProposals.healthcare).toEqual({
            role: 'capitalist',
            value: 0,
        });
    });
});
