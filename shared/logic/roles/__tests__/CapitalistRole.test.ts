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
    cap = game.data.roles.capitalist;
});

describe.skip('setupBoard', () => {
    // todo
});

describe('setupRound', () => {
    beforeEach(async () => {
        game = await initGame(undefined, { setup: false });
        cap = game.data.roles.capitalist;
    });
    test('sets up market', () => {
        expect(cap.data.companyMarket.length).toBe(0);
        expect(cap.data.companyDeck.size).toBe(6);
        cap.setupRound();
        expect(cap.data.companyDeck.size).toBe(2);
        expect(cap.data.companyMarket.length).toBe(4);
        expect(cap.data.companyMarket).toEqual([
            'c-food',
            'c-influence',
            'c-market-1',
            'c-market-2',
        ]);
    });
    test('only redraws empty slots', () => {
        cap.setupRound();
        cap.data.companyMarket.shift();
        cap.setupRound();
        expect(cap.data.companyDeck.size).toBe(1);
        expect(cap.data.companyMarket.length).toBe(4);
        expect(cap.data.companyMarket).toEqual([
            'c-influence',
            'c-market-1',
            'c-market-2',
            'c-market-3',
        ]);
    });
});

describe('getPrice', () => {
    test('food', () => {
        cap.data.priceLevels.food = 0;
        expect(cap.getPrice('food')).toBe(9);
        cap.data.priceLevels.food = 1;
        expect(cap.getPrice('food')).toBe(12);
        cap.data.priceLevels.food = 2;
        expect(cap.getPrice('food')).toBe(15);
    });
    test('healthcare', () => {
        cap.data.priceLevels.healthcare = 0;
        expect(cap.getPrice('healthcare')).toBe(5);
        cap.data.priceLevels.healthcare = 1;
        expect(cap.getPrice('healthcare')).toBe(8);
        cap.data.priceLevels.healthcare = 2;
        expect(cap.getPrice('healthcare')).toBe(10);
    });
    test('education', () => {
        cap.data.priceLevels.education = 0;
        expect(cap.getPrice('education')).toBe(5);
        cap.data.priceLevels.education = 1;
        expect(cap.getPrice('education')).toBe(8);
        cap.data.priceLevels.education = 2;
        expect(cap.getPrice('education')).toBe(10);
    });
    test('luxury', () => {
        cap.data.priceLevels.luxury = 0;
        expect(cap.getPrice('luxury')).toBe(5);
        cap.data.priceLevels.luxury = 1;
        expect(cap.getPrice('luxury')).toBe(8);
        cap.data.priceLevels.luxury = 2;
        expect(cap.getPrice('luxury')).toBe(10);
    });
});

describe('basicActions', () => {
    describe('makeBusinessDeal', async () => {
        beforeEach(() => {
            expect(game.data.board.businessDealCards).toEqual(['test-1', 'test-2']);
            cap.data.resources.money.add(100);
            expect(cap.data.resources.money.value).toBe(100);
        });
        test('condition:hasDeals', async () => {
            game.data.board.businessDealCards = [];
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-1',
                storage: {},
                freeTradeZone: {},
            });
            await expect(nextAndTick('capitalist:makeBusinessDeal')).rejects.toThrow(/hasDeals/);
        });
        test('condition:hasMoney', async () => {
            cap.data.resources.money.remove(100);
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
            expect(cap.data.resources.money.value).toBe(90);
            expect(cap.data.resources.food.value).toBe(1);
            expect(cap.data.resources.luxury.value).toBe(2);
            expect(cap.data.freeTradeZoneResources.food.value).toBe(0);
            expect(cap.data.freeTradeZoneResources.luxury.value).toBe(0);
            expect(game.data.board.businessDealCards).toEqual(['test-2']);
        });
        test('some in trade zone', async () => {
            addInput('capitalist:makeBusinessDeal', {
                id: 'test-2',
                storage: { food: 2, luxury: 2 },
                freeTradeZone: { food: 1, luxury: 2 },
            });
            await nextAndTick('capitalist:makeBusinessDeal');
            expect(cap.data.resources.money.value).toBe(70);
            expect(cap.data.resources.food.value).toBe(2);
            expect(cap.data.resources.luxury.value).toBe(2);
            expect(cap.data.freeTradeZoneResources.food.value).toBe(1);
            expect(cap.data.freeTradeZoneResources.luxury.value).toBe(2);
            expect(game.data.board.businessDealCards).toEqual(['test-1']);
        });
    });
    describe('lobby', () => {
        test('condition:hasInfluence', async () => {
            game.data.board.availableInfluence = 0;
            await expect(nextAndTick('capitalist:lobby')).rejects.toThrow(/hasInfluence/);
        });
        test('condition:hasMoney', async () => {
            game.data.board.availableInfluence = 1;
            await expect(nextAndTick('capitalist:lobby')).rejects.toThrow(/hasMoney/);
        });
        test('run', async () => {
            cap.data.resources.money.add(100);
            game.data.board.availableInfluence = 2;
            await nextAndTick('capitalist:lobby');
            expect(game.data.board.availableInfluence).toBe(0);
            expect(cap.data.resources.influence.value).toBe(2);
            game.data.board.availableInfluence = 5;
            await nextAndTick('capitalist:lobby');
            expect(game.data.board.availableInfluence).toBe(2);
            expect(cap.data.resources.influence.value).toBe(5);
        });
    });
});

describe('freeAction', () => {
    describe('giveBonus', () => {
        test('condition:hasMoney', async () => {
            cap.data.resources.money.add(4);
            addInput('capitalist:giveBonus', 'middleClass');
            await expect(nextAndTick('capitalist:giveBonus')).rejects.toThrow(/hasMoney/);
        });
        test('run', async () => {
            const workers = addWorkers(3);
            const company = cap.data.companies[0];
            assignWorkers(workers, company.id, { committed: false });
            expect(company.workers).toEqual(workers);
            cap.data.resources.money.add(100);
            addInput('capitalist:giveBonus', company.id);
            expect(game.data.roles.workingClass.data.resources.money.value).toBe(0);
            await nextAndTick('capitalist:giveBonus');
            expect(cap.data.resources.money.value).toBe(95);
            expect(game.data.roles.workingClass.data.resources.money.value).toBe(5);
            eachWorker(workers, w => {
                expect(w.committed).toBe(true);
            });
        });
    });
    describe('buyStorage', () => {
        test('condition:hasMoney', async () => {
            cap.data.resources.money.add(19);
            addInput('capitalist:buyStorage', 'food');
            await expect(nextAndTick('capitalist:buyStorage')).rejects.toThrow(/hasMoney/);
        });
        test('condition:hasStorage', async () => {
            cap.data.resources.money.add(20);
            cap.data.storage.food = true;
            cap.data.storage.healthcare = true;
            cap.data.storage.education = true;
            cap.data.storage.luxury = true;
            addInput('capitalist:buyStorage', 'food');
            await expect(nextAndTick('capitalist:buyStorage')).rejects.toThrow(/hasStorage/);
        });
        test('run', async () => {
            cap.data.resources.money.add(100);
            expect(cap.data.storage.food).toBeFalsy();
            addInput('capitalist:buyStorage', 'food');
            await nextAndTick('capitalist:buyStorage');
            expect(cap.data.resources.money.value).toBe(80);
            expect(cap.data.storage.food).toBe(true);
        });
    });
});
