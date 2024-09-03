import { beforeEach, expect, test, describe, vi } from 'vitest';

import { type Player, RoleEnum } from './types';
import Game from './Game';
import { type PlayerInput, type ActionEventName } from './types.generated';

type Input<T extends keyof PlayerInput> = { type: T; data: PlayerInput[T] };

let game: Game = null as any;
let playerInputs: Input<keyof PlayerInput>[] = [];
const working: Player = { name: 'working', role: RoleEnum.workingClass };
// const middle: Player = { name: 'middle', role: RoleEnum.middleClass };
const capitalist: Player = { name: 'capitalist', role: RoleEnum.capitalist };
// const state: Player = { name: 'state', role: RoleEnum.state };

const tick = async (n?: number | ActionEventName) => {
    n ??= 1;
    if (typeof n === 'number') for (let i = 0; i < n; ++i) await game.tick();
    else await game.flush({ after: n });
};

const input = <T extends keyof PlayerInput>(type: T, data: PlayerInput[T]) => ({ type, data });

const addInput = <T extends keyof PlayerInput>(type: T, data: PlayerInput[T]) => {
    playerInputs.push(input(type, data));
};

const requestPlayerInput = vi.fn<Game['requestPlayerInput']>();

// const getCurrentAction = () => game.state.actionQueue[game.state.currentActionIndex];

const findAction = (type: ActionEventName, n = 0) =>
    game.state.actionQueue.filter(a => a.type === type).at(n)!;

beforeEach(() => {
    playerInputs = [];
    game = new Game({
        players: [working, capitalist],
        requestPlayerInput,
        // debug: true,
    });
    requestPlayerInput.mockReset();
    requestPlayerInput.mockImplementation(async (...args: any) => {
        if (!playerInputs.length) {
            throw new Error('test-error: player response not set for: ' + JSON.stringify(args));
        }
        const { type, data } = playerInputs.shift()!;
        if (type !== args[0]) {
            throw new Error(`Mocked player input is not what was expected: ${type} !== ${args[0]}`);
        }
        return data;
    });
});

describe('game:start', () => {
    test('sorts players by role', async () => {
        game.state.players = [capitalist, working];
        game.next('game:start');
        await tick();
        expect(game.state.players).toEqual([working, capitalist]);
        expect(game.state.currentRoleName).toBe(RoleEnum.workingClass);
    });
});

describe('started game', () => {
    beforeEach(async () => {
        game.next('game:start');
        await tick();
    });

    test('request input', async () => {
        playerInputs = [input('game:roleTurn', 'workingClass:proposeBill')];
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
        game.state.board.policies.fiscalPolicy = 1;
        game.state.board.policies.healthcare = 1;
        game.state.roles.workingClass.state.resources.healthcare.add(10);
        addInput('game:roleTurn', 'workingClass:proposeBill');
        addInput('workingClass:proposeBill', { value: 2, policy: 'fiscalPolicy' });
        addInput('game:roleTurn', 'workingClass:useHealthcare');
        addInput('game:roleTurn', 'capitalist:proposeBill');
        addInput('capitalist:proposeBill', { value: 0, policy: 'healthcare' });
        addInput('game:roleTurn', 'capitalist:skip');
        await tick('game:turnEnd');
        expect(requestPlayerInput).toHaveBeenCalledTimes(6);
        expect(game.state.roles.workingClass.state.resources.healthcare.value).toBe(7);
        expect(game.state.roles.workingClass.state.score).toBe(3);
        expect(game.state.board.policyProposals.fiscalPolicy).toEqual({
            role: 'workingClass',
            value: 2,
        });
        expect(game.state.board.policyProposals.healthcare).toEqual({
            role: 'capitalist',
            value: 0,
        });
    });
});
