import { createGameUtils } from 'shared/logic/__tests__/testUtils';
import { beforeEach, describe, expect, test } from 'vitest';
import { ResourceEnum, RoleNameSchema } from 'shared/logic/types';

import type Game from 'shared/logic/Game';
import type StateRole from '../StateRole';

const { initGame, addInput, nextAndTick } = createGameUtils();

let st: StateRole;
let game: Game;

beforeEach(async () => {
    game = await initGame();
    st = game.state.roles.state;
});

describe.skip('setupBoard', () => {
    // todo
});

describe.skip('setupRound', () => {
    beforeEach(async () => {
        game = await initGame(undefined, { setup: false });
        st = game.state.roles.state;
    });

    // todo
});

describe('onBuyGoods', () => {
    for (const resource of [ResourceEnum.healthcare, ResourceEnum.education] as const) {
        test(resource, () => {
            game.state.board.policies[resource] = 2;
            st.onBuyGoods('workingClass', resource, 7);
            expect(st.state.score).toBe(0);
            expect(st.state.legitimacy.workingClass).toBe(2);

            game.state.board.policies[resource] = 1;
            st.onBuyGoods('workingClass', resource, 7);
            expect(st.state.score).toBe(1);
            expect(st.state.legitimacy.workingClass).toBe(2);

            game.state.board.policies[resource] = 0;
            st.onBuyGoods('workingClass', resource, 7);
            expect(st.state.score).toBe(1);
            expect(st.state.legitimacy.workingClass).toBe(4);
        });
    }
});

describe('getPrice', () => {
    test('food', () => {
        expect(st.getPrice('food')).toBe(12);
    });
    test('healthcare', () => {
        game.state.board.policies.healthcare = 0;
        expect(st.getPrice('healthcare')).toBe(0);
        game.state.board.policies.healthcare = 1;
        expect(st.getPrice('healthcare')).toBe(5);
        game.state.board.policies.healthcare = 2;
        expect(st.getPrice('healthcare')).toBe(10);
    });
    test('education', () => {
        game.state.board.policies.education = 0;
        expect(st.getPrice('education')).toBe(0);
        game.state.board.policies.education = 1;
        expect(st.getPrice('education')).toBe(5);
        game.state.board.policies.education = 2;
        expect(st.getPrice('education')).toBe(10);
    });
    test('luxury', () => {
        expect(st.getPrice('luxury')).toBe(8);
    });
    test('influence', () => {
        expect(st.getPrice('influence')).toBe(10);
    });
});

describe('receiveBenefits', () => {
    test('resource', () => {
        st.state.benefits.workingClass = [
            { type: 'resource', resource: 'food', amount: 5 },
            { type: 'resource', resource: 'healthcare', amount: 3 },
        ];
        st.receiveBenefits('workingClass');
        expect(game.state.roles.workingClass.state.resources.food.value).toBe(5);
        expect(game.state.roles.workingClass.state.resources.healthcare.value).toBe(3);
        expect(st.state.score).toBe(1);
    });
    test('voting-cube', () => {
        st.state.benefits.workingClass = [{ type: 'voting-cube', amount: 3 }];
        st.receiveBenefits('workingClass');
        expect(game.state.board.votingCubeBag.workingClass).toBe(3);
        expect(st.state.score).toBe(1);
    });
});

describe('basicActions', () => {
    describe('meetWithPartyMps', () => {
        test('condition:hasVotingCubes', async () => {
            await expect(nextAndTick('state:meetWithPartyMps')).rejects.toThrow('hasVotingCubes');
        });
        test('run', async () => {
            expect(st.state.legitimacy.workingClass).toBe(2);
            st.state.resources.influence.add(5);
            addInput('state:meetWithPartyMps', RoleNameSchema.enum.workingClass);
            await nextAndTick('state:meetWithPartyMps');
            expect(st.state.legitimacy.workingClass).toBe(3);
            expect(st.state.resources.influence.value).toBe(3);
        });
    });
    describe('extraTax', () => {
        test('run', async () => {
            game.state.roles.workingClass.state.resources.money.add(20);
            game.state.roles.middleClass.state.resources.money.add(5);
            game.state.roles.capitalist.state.resources.money.add(0);
            st.state.legitimacy = {
                workingClass: 5,
                middleClass: 4,
                capitalist: 3,
            };
            addInput('state:extraTax', [
                RoleNameSchema.enum.middleClass,
                RoleNameSchema.enum.capitalist,
            ]);
            await nextAndTick('state:extraTax');
            expect(st.state.resources.money.value).toBe(30);
            expect(st.state.legitimacy.workingClass).toBe(5);
            expect(st.state.legitimacy.middleClass).toBe(3);
            expect(st.state.legitimacy.capitalist).toBe(2);

            expect(game.state.roles.workingClass.state.resources.money.value).toBe(10);
            expect(game.state.roles.workingClass.state.resources.money.loans).toBe(0);

            expect(game.state.roles.middleClass.state.resources.money.value).toBe(45);
            expect(game.state.roles.middleClass.state.resources.money.loans).toBe(1);

            expect(game.state.roles.capitalist.state.resources.money.value).toBe(40);
            expect(game.state.roles.capitalist.state.resources.money.loans).toBe(1);
        });
    });
    describe('campaign', () => {
        test('condition:hasVotingCubes', async () => {
            addInput('state:campaign', 3);
            await expect(nextAndTick('state:campaign')).rejects.toThrow(/hasVotingCubes/);
        });
        test('run', async () => {
            st.state.resources.influence.add(5);
            addInput('state:campaign', 3);
            await nextAndTick('state:campaign');
            expect(st.state.resources.influence.value).toBe(2);
            expect(st.state.resources.personalInfluence.value).toBe(3);
            addInput('state:campaign', 3);
            await nextAndTick('state:campaign');
            expect(st.state.resources.influence.value).toBe(0);
            expect(st.state.resources.personalInfluence.value).toBe(5);
        });
    });
});
