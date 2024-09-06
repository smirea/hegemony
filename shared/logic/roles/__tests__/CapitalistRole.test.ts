import { createGameUtils } from 'shared/logic/__tests__/testUtils';
import { beforeEach, describe, expect, test } from 'vitest';

import type Game from 'shared/logic/Game';
import type CapitalistRole from '../CapitalistRole';

const { initGame, addInput, nextAndTick, addWorkers, eachWorker, assignWorkers } =
    createGameUtils();

let cap: CapitalistRole;
let game: Game;

beforeEach(async () => {
    game = await initGame();
    cap = game.state.roles.capitalist;
});

describe.skip('setupBoard', () => {
    // todo
});

describe('setupRound', () => {
    beforeEach(async () => {
        game = await initGame(undefined, { setup: false });
        cap = game.state.roles.capitalist;
    });
    test('sets up market', () => {
        expect(cap.state.companyMarket.length).toBe(0);
        expect(cap.state.companyDeck.size).toBe(6);
        cap.setupRound();
        expect(cap.state.companyDeck.size).toBe(2);
        expect(cap.state.companyMarket.length).toBe(4);
        expect(cap.state.companyMarket).toEqual([
            'c-food',
            'c-influence',
            'c-market-1',
            'c-market-2',
        ]);
    });
    test('only redraws empty slots', () => {
        cap.setupRound();
        cap.state.companyMarket.shift();
        cap.setupRound();
        expect(cap.state.companyDeck.size).toBe(1);
        expect(cap.state.companyMarket.length).toBe(4);
        expect(cap.state.companyMarket).toEqual([
            'c-influence',
            'c-market-1',
            'c-market-2',
            'c-market-3',
        ]);
    });
});

describe('getPrice', () => {
    test('food', () => {
        cap.state.priceLevels.food = 0;
        expect(cap.getPrice('food')).toBe(9);
        cap.state.priceLevels.food = 1;
        expect(cap.getPrice('food')).toBe(12);
        cap.state.priceLevels.food = 2;
        expect(cap.getPrice('food')).toBe(15);
    });
    test('healthcare', () => {
        cap.state.priceLevels.healthcare = 0;
        expect(cap.getPrice('healthcare')).toBe(5);
        cap.state.priceLevels.healthcare = 1;
        expect(cap.getPrice('healthcare')).toBe(8);
        cap.state.priceLevels.healthcare = 2;
        expect(cap.getPrice('healthcare')).toBe(10);
    });
    test('education', () => {
        cap.state.priceLevels.education = 0;
        expect(cap.getPrice('education')).toBe(5);
        cap.state.priceLevels.education = 1;
        expect(cap.getPrice('education')).toBe(8);
        cap.state.priceLevels.education = 2;
        expect(cap.getPrice('education')).toBe(10);
    });
    test('luxury', () => {
        cap.state.priceLevels.luxury = 0;
        expect(cap.getPrice('luxury')).toBe(5);
        cap.state.priceLevels.luxury = 1;
        expect(cap.getPrice('luxury')).toBe(8);
        cap.state.priceLevels.luxury = 2;
        expect(cap.getPrice('luxury')).toBe(10);
    });
});

describe('basicActions', () => {
    describe('makeBusinessDeal', async () => {
        beforeEach(() => {
            expect(game.state.board.businessDealCards).toEqual(['test-1', 'test-2']);
            cap.state.resources.money.add(100);
            expect(cap.state.resources.money.value).toBe(100);
        });
        test('condition:hasDeals', async () => {
            game.state.board.businessDealCards = [];
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-1',
                storage: {},
                freeTradeZone: {},
            });
            await expect(nextAndTick('capitalist:makeBusinessDeal')).rejects.toThrow(/hasDeals/);
        });
        test('condition:hasMoney', async () => {
            cap.state.resources.money.remove(100);
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-1',
                storage: {},
                freeTradeZone: {},
            });
            await expect(nextAndTick('capitalist:makeBusinessDeal')).rejects.toThrow(/hasMoney/);
        });
        test('all in storage', async () => {
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-1',
                storage: { food: 1, luxury: 2 },
                freeTradeZone: {},
            });
            await nextAndTick('capitalist:makeBusinessDeal');
            expect(cap.state.resources.money.value).toBe(90);
            expect(cap.state.resources.food.value).toBe(1);
            expect(cap.state.resources.luxury.value).toBe(2);
            expect(cap.state.freeTradeZoneResources.food.value).toBe(0);
            expect(cap.state.freeTradeZoneResources.luxury.value).toBe(0);
            expect(game.state.board.businessDealCards).toEqual(['test-2']);
        });
        test('some in trade zone', async () => {
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-2',
                storage: { food: 2, luxury: 2 },
                freeTradeZone: { food: 1, luxury: 2 },
            });
            await nextAndTick('capitalist:makeBusinessDeal');
            expect(cap.state.resources.money.value).toBe(70);
            expect(cap.state.resources.food.value).toBe(2);
            expect(cap.state.resources.luxury.value).toBe(2);
            expect(cap.state.freeTradeZoneResources.food.value).toBe(1);
            expect(cap.state.freeTradeZoneResources.luxury.value).toBe(2);
            expect(game.state.board.businessDealCards).toEqual(['test-1']);
        });
    });
    describe('lobby', () => {
        test('condition:hasInfluence', async () => {
            game.state.board.availableInfluence = 0;
            await expect(nextAndTick('capitalist:lobby')).rejects.toThrow(/hasInfluence/);
        });
        test('condition:hasMoney', async () => {
            game.state.board.availableInfluence = 1;
            await expect(nextAndTick('capitalist:lobby')).rejects.toThrow(/hasMoney/);
        });
        test('run', async () => {
            cap.state.resources.money.add(100);
            game.state.board.availableInfluence = 2;
            await nextAndTick('capitalist:lobby');
            expect(game.state.board.availableInfluence).toBe(0);
            expect(cap.state.resources.influence.value).toBe(2);
            game.state.board.availableInfluence = 5;
            await nextAndTick('capitalist:lobby');
            expect(game.state.board.availableInfluence).toBe(2);
            expect(cap.state.resources.influence.value).toBe(5);
        });
    });
});

describe('freeAction', () => {
    describe('giveBonus', () => {
        test('condition:hasMoney', async () => {
            cap.state.resources.money.add(4);
            addInput('capitalist:giveBonus', 'middleClass');
            await expect(nextAndTick('capitalist:giveBonus')).rejects.toThrow(/hasMoney/);
        });
        test('run', async () => {
            const workers = addWorkers(3);
            const company = cap.state.companies[0];
            assignWorkers(workers, company.id, { committed: false });
            expect(company.workers).toEqual(workers);
            cap.state.resources.money.add(100);
            addInput('capitalist:giveBonus', company.id);
            expect(game.state.roles.workingClass.state.resources.money.value).toBe(0);
            await nextAndTick('capitalist:giveBonus');
            expect(cap.state.resources.money.value).toBe(95);
            expect(game.state.roles.workingClass.state.resources.money.value).toBe(5);
            eachWorker(workers, w => {
                expect(w.committed).toBe(true);
            });
        });
    });
    describe('buyStorage', () => {
        test('condition:hasMoney', async () => {
            cap.state.resources.money.add(19);
            addInput('capitalist:buyStorage', 'food');
            await expect(nextAndTick('capitalist:buyStorage')).rejects.toThrow(/hasMoney/);
        });
        test('condition:hasStorage', async () => {
            cap.state.resources.money.add(20);
            cap.state.storage.food = true;
            cap.state.storage.healthcare = true;
            cap.state.storage.education = true;
            cap.state.storage.luxury = true;
            addInput('capitalist:buyStorage', 'food');
            await expect(nextAndTick('capitalist:buyStorage')).rejects.toThrow(/hasStorage/);
        });
        test('run', async () => {
            cap.state.resources.money.add(100);
            expect(cap.state.storage.food).toBeFalsy();
            addInput('capitalist:buyStorage', 'food');
            await nextAndTick('capitalist:buyStorage');
            expect(cap.state.resources.money.value).toBe(80);
            expect(cap.state.storage.food).toBe(true);
        });
    });
});
