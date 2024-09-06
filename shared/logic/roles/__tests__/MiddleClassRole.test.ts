import { createGameUtils } from 'shared/logic/__tests__/testUtils';
import { beforeEach, describe, expect, test } from 'vitest';

import type Game from 'shared/logic/Game';
import type MiddleClassRole from '../MiddleClassRole';
import type WorkingClassRole from '../WorkingClassRole';

const { initGame, addInput, nextAndTick, addWorkers, eachWorker, assignWorkers } =
    createGameUtils();

let mc: MiddleClassRole;
let wc: WorkingClassRole;
let game: Game;

beforeEach(async () => {
    game = await initGame();
    mc = game.state.roles.middleClass;
    wc = game.state.roles.workingClass;
});

describe.skip('setupBoard', () => {
    // todo
});

describe('setupRound', () => {
    beforeEach(async () => {
        game = await initGame(undefined, { setup: false });
        mc = game.state.roles.middleClass;
    });
    test('sets up market', () => {
        expect(mc.state.companyMarket.length).toBe(0);
        expect(mc.state.companyDeck.size).toBe(5);
        mc.setupRound();
        expect(mc.state.companyDeck.size).toBe(2);
        expect(mc.state.companyMarket.length).toBe(3);
        expect(mc.state.companyMarket).toEqual(['m-food', 'm-influence', 'm-market-1']);
    });
    test('only redraws empty slots', () => {
        mc.setupRound();
        mc.state.companyMarket.shift();
        mc.setupRound();
        expect(mc.state.companyDeck.size).toBe(1);
        expect(mc.state.companyMarket.length).toBe(3);
        expect(mc.state.companyMarket).toEqual(['m-influence', 'm-market-1', 'm-market-2']);
    });
});

describe('getPrice', () => {
    test('food', () => {
        mc.state.priceLevels.food = 0;
        expect(mc.getPrice('food')).toBe(9);
        mc.state.priceLevels.food = 1;
        expect(mc.getPrice('food')).toBe(12);
        mc.state.priceLevels.food = 2;
        expect(mc.getPrice('food')).toBe(15);
    });
    test('healthcare', () => {
        mc.state.priceLevels.healthcare = 0;
        expect(mc.getPrice('healthcare')).toBe(5);
        mc.state.priceLevels.healthcare = 1;
        expect(mc.getPrice('healthcare')).toBe(8);
        mc.state.priceLevels.healthcare = 2;
        expect(mc.getPrice('healthcare')).toBe(10);
    });
    test('education', () => {
        mc.state.priceLevels.education = 0;
        expect(mc.getPrice('education')).toBe(5);
        mc.state.priceLevels.education = 1;
        expect(mc.getPrice('education')).toBe(8);
        mc.state.priceLevels.education = 2;
        expect(mc.getPrice('education')).toBe(10);
    });
    test('luxury', () => {
        mc.state.priceLevels.luxury = 0;
        expect(mc.getPrice('luxury')).toBe(5);
        mc.state.priceLevels.luxury = 1;
        expect(mc.getPrice('luxury')).toBe(8);
        mc.state.priceLevels.luxury = 2;
        expect(mc.getPrice('luxury')).toBe(10);
    });
});

describe('produce', () => {
    test('food', () => {
        mc.produce('food', 1);
        expect(mc.state.resources.food.value).toBe(0);
        expect(mc.state.producedResources.food.value).toBe(1);
    });
    test('influence', () => {
        mc.produce('influence', 1);
        expect(mc.state.resources.influence.value).toBe(1);
    });
});

describe('basicActions', () => {
    describe('extraShift', () => {
        test('run - all middle class workers', async () => {
            const workers = addWorkers(2, { role: 'middleClass' });
            const company = mc.state.companies.find(c => c.id === 'm-food')!;
            assignWorkers(workers, company.id, { committed: false });
            addInput('middleClass:extraShift', company.id);
            await nextAndTick('middleClass:extraShift');
            expect(company.workers).toEqual(workers);
            eachWorker(workers, w => {
                expect(w.committed).toBe(true);
            });
            expect(mc.state.resources.money.value).toBe(0);
            expect(mc.state.producedResources.food.value).toBe(3);
            expect(wc.state.resources.money.value).toBe(0);
        });
        test('run - one working class worker', async () => {
            mc.state.resources.money.add(100);
            const company = mc.state.companies.find(c => c.id === 'm-food')!;
            const mcw = addWorkers(1, { role: 'middleClass' });
            const wcw = addWorkers(1, { role: 'workingClass' });
            const workers = [...mcw, ...wcw];
            assignWorkers(workers, company.id, { committed: false });
            expect(company.workers).toEqual(workers);
            addInput('middleClass:extraShift', company.id);
            await nextAndTick('middleClass:extraShift');
            eachWorker(workers, w => {
                expect(w.committed).toBe(true);
            });
            expect(mc.state.resources.money.value).toBe(90);
            expect(mc.state.producedResources.food.value).toBe(5);
            expect(wc.state.resources.money.value).toBe(10);
        });
        test('run - one working class worker, but committed', async () => {
            mc.state.resources.money.add(100);
            const company = mc.state.companies.find(c => c.id === 'm-food')!;
            const mcw = addWorkers(1, { role: 'middleClass' });
            const wcw = addWorkers(1, { role: 'workingClass' });
            const workers = [...mcw, ...wcw];
            assignWorkers(workers, company.id, { committed: true });
            expect(company.workers).toEqual(workers);
            addInput('middleClass:extraShift', company.id);
            await nextAndTick('middleClass:extraShift');
            expect(mc.state.resources.money.value).toBe(100);
            expect(mc.state.producedResources.food.value).toBe(3);
            expect(wc.state.resources.money.value).toBe(0);
        });
        test('run - influence', async () => {
            mc.state.resources.money.add(100);
            const company = mc.state.companies.find(c => c.id === 'm-influence')!;
            const mcw = addWorkers(1, { role: 'middleClass' });
            const wcw = addWorkers(1, { role: 'workingClass' });
            const workers = [...mcw, ...wcw];
            assignWorkers(workers, company.id, { committed: false });
            expect(company.workers).toEqual(workers);
            addInput('middleClass:extraShift', company.id);
            await nextAndTick('middleClass:extraShift');
            eachWorker(workers, w => {
                expect(w.committed).toBe(true);
            });
            expect(mc.state.resources.money.value).toBe(90);
            expect(mc.state.resources.influence.value).toBe(8);
            expect(wc.state.resources.money.value).toBe(10);
        });
    });
});
