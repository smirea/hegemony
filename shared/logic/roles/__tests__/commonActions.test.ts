import { createGameUtils } from 'shared/logic/__tests__/testUtils';
import { beforeEach, describe, expect, test } from 'vitest';
import { CompanyWorkerTypeSchema, WorkerTypeEnum } from 'shared/logic/types';
import _ from 'lodash';

import type MiddleClassRole from '../MiddleClassRole';
import type Game from 'shared/logic/Game';
import type WorkingClassRole from '../WorkingClassRole';
import type CapitalistRole from '../CapitalistRole';
import type StateRole from '../StateRole';

const { initGame, addInput, nextAndTick, addWorkers, eachWorker } = createGameUtils();

let game: Game;
let wc: WorkingClassRole;
let cap: CapitalistRole;
let mc: MiddleClassRole;
let st: StateRole;

beforeEach(async () => {
    game = await initGame();
    wc = game.data.roles.workingClass;
    mc = game.data.roles.middleClass;
    cap = game.data.roles.capitalist;
    st = game.data.roles.state;
});

describe('createProposeBill', () => {
    const wc1 = {
        role: 'workingClass',
        value: 1,
    } as const;
    test('condition:hasVotes', async () => {
        game.data.board.policyProposals.education = wc1;
        game.data.board.policyProposals.fiscalPolicy = wc1;
        game.data.board.policyProposals.foreignTrade = wc1;
        addInput('workingClass:proposeBill', { policy: 'healthcare', value: 1 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/hasVotes/);
    });
    test('validateInput:notProposed', async () => {
        game.data.board.policyProposals.education = wc1;
        addInput('workingClass:proposeBill', { policy: 'education', value: 1 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/notProposed/);
    });
    test('validateInput:isDifferent', async () => {
        game.data.board.policyProposals.education = wc1;
        addInput('workingClass:proposeBill', { policy: 'education', value: 0 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/isDifferent/);
    });
    test('run', async () => {
        addInput('workingClass:proposeBill', { policy: 'education', value: 1 });
        await nextAndTick('workingClass:proposeBill');
        expect(game.data.board.policyProposals.education).toEqual(wc1);
    });
});

describe('createPayLoan', () => {
    test('condition:hasLoans', async () => {
        await expect(nextAndTick('workingClass:payLoan')).rejects.toThrow(/hasLoans/);
    });
    test('condition:hasMoney', async () => {
        wc.data.resources.money.addLoans(1);
        await expect(nextAndTick('workingClass:payLoan')).rejects.toThrow(/hasMoney/);
    });
    test('run', async () => {
        wc.data.resources.money.addLoans(1);
        wc.data.resources.money.add(55);
        await nextAndTick('workingClass:payLoan');
        expect(wc.data.resources.money.loans).toEqual(0);
        expect(wc.data.resources.money.value).toEqual(5);
    });
});

describe('createUseHealthcare', () => {
    test('condition:hasHealthcare', async () => {
        await expect(nextAndTick('workingClass:useHealthcare')).rejects.toThrow(/hasHealthcare/);
    });
    test('run', async () => {
        wc.data.resources.healthcare.add(5);
        await nextAndTick('workingClass:useHealthcare');
        expect(wc.data.resources.healthcare.value).toEqual(2);
        expect(wc.data.workers).toHaveLength(1);
        expect(wc.data.workers[0].type).toEqual(WorkerTypeEnum.unskilled);
        expect(wc.data.score).toEqual(3);
        expect(wc.data.availableWorkers.unskilled).toEqual(9);
    });
});

describe('createUseEducation', () => {
    test('condition:hasEducation', async () => {
        addInput('workingClass:useEducation', {
            workerId: 0,
            type: CompanyWorkerTypeSchema.enum.healthcare,
        });
        await expect(nextAndTick('workingClass:useEducation')).rejects.toThrow(/hasEducation/);
    });
    test('validateInput:hasAvailableWorkers', async () => {
        wc.data.resources.education.add(5);
        wc.data.availableWorkers.healthcare = 0;
        addInput('workingClass:useEducation', {
            workerId: 0,
            type: CompanyWorkerTypeSchema.enum.healthcare,
        });
        await expect(nextAndTick('workingClass:useEducation')).rejects.toThrow(
            /hasAvailableWorkers/,
        );
    });
    test('run', async () => {
        wc.data.resources.education.add(5);
        wc.data.workers.push({
            id: 0,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        addInput('workingClass:useEducation', {
            workerId: 0,
            type: CompanyWorkerTypeSchema.enum.healthcare,
        });
        await nextAndTick('workingClass:useEducation');
        expect(wc.data.resources.education.value).toEqual(2);
        expect(wc.data.score).toEqual(1);
        expect(wc.data.workers).toHaveLength(1);
        expect(wc.data.workers[0].type).toEqual(CompanyWorkerTypeSchema.enum.healthcare);
        expect(wc.data.availableWorkers.unskilled).toEqual(11);
        expect(wc.data.availableWorkers.healthcare).toEqual(9);
    });
});

describe('createUseLuxury', () => {
    test('condition:hasLuxury', async () => {
        await expect(nextAndTick('workingClass:useLuxury')).rejects.toThrow(/hasLuxury/);
    });
    test('run', async () => {
        wc.data.resources.luxury.add(5);
        await nextAndTick('workingClass:useLuxury');
        expect(wc.data.resources.luxury.value).toEqual(2);
        expect(wc.data.score).toEqual(1);
    });
});

describe('createAdjustPrices', () => {
    test('run', async () => {
        game.data.board.policies.laborMarket = 1;
        addInput('capitalist:adjustPrices', { education: 2 });
        await nextAndTick('capitalist:adjustPrices');
        expect(cap.data.priceLevels.education).toEqual(2);
    });
});

describe('createAdjustWages', () => {
    test('condition:minWage', async () => {
        game.data.board.policies.laborMarket = 2;
        addInput('capitalist:adjustWages', [{ companyId: 'c-food', wages: 'l2' }]);
        await expect(nextAndTick('capitalist:adjustWages')).rejects.toThrow(/minWage/);
    });
    test('run', async () => {
        cap.company('c-food').wages = 'l1';
        addInput('capitalist:adjustWages', [{ companyId: 'c-food', wages: 'l2' }]);
        await nextAndTick('capitalist:adjustWages');
        expect(cap.company('c-food').wages).toEqual('l2');
    });
});

describe('createSwapWorkers', () => {
    test('condition:hasUnemployedWorkers', async () => {
        addInput('workingClass:swapWorkers', [[0, 1]]);
        await expect(nextAndTick('workingClass:swapWorkers')).rejects.toThrow(
            /hasUnemployedWorkers/,
        );
    });
    test('run', async () => {
        wc.data.workers.push({
            id: 0,
            type: 'unskilled',
            role: 'workingClass',
            company: cap.data.companies[0].id,
            committed: true,
        });
        wc.data.workers.push({
            id: 1,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        addInput('workingClass:swapWorkers', [[0, 1]]);
        await nextAndTick('workingClass:swapWorkers');

        expect(wc.data.workers[0].id).toEqual(0);
        expect(wc.data.workers[0].company).toEqual(null);
        expect(wc.data.workers[0].committed).toEqual(false);

        expect(wc.data.workers[1].id).toEqual(1);
        expect(wc.data.workers[1].company).toEqual(cap.data.companies[0].id);
        expect(wc.data.workers[1].committed).toEqual(true);
    });
});

describe('createReceiveBenefits', () => {
    test('condition:only4Players', async () => {
        game.data.players.pop();
        await expect(nextAndTick('workingClass:receiveBenefits')).rejects.toThrow(/only4Players/);
    });
    test('condition:hasBenefits', async () => {
        await expect(nextAndTick('workingClass:receiveBenefits')).rejects.toThrow(/hasBenefits/);
    });
    test('run', async () => {
        expect(st.data.benefits.workingClass).toEqual([]);
        expect(st.data.score).toEqual(0);
        st.data.benefits.workingClass = [{ type: 'resource', resource: 'money', amount: 5 }];
        await nextAndTick('workingClass:receiveBenefits');
        expect(st.data.benefits.workingClass).toEqual([]);
        expect(wc.data.resources.money.value).toEqual(5);
        expect(st.data.score).toEqual(1);
    });
});

describe('createApplyPoliticalPressure', () => {
    test('condition:hasCubes', async () => {
        await expect(nextAndTick('workingClass:applyPoliticalPressure')).rejects.toThrow(
            /hasCubes/,
        );
    });
    test('run', async () => {
        wc.data.availableVotingCubes = 2;
        expect(game.data.board.votingCubeBag.workingClass).toEqual(0);
        await nextAndTick('workingClass:applyPoliticalPressure');
        expect(wc.data.availableVotingCubes).toEqual(0);
        expect(game.data.board.votingCubeBag.workingClass).toEqual(2);
        wc.data.availableVotingCubes = 10;
        await nextAndTick('workingClass:applyPoliticalPressure');
        expect(wc.data.availableVotingCubes).toEqual(7);
        expect(game.data.board.votingCubeBag.workingClass).toEqual(5);
    });
});

describe('createAssignWorkers', () => {
    test('run', async () => {
        wc.data.workers.push({
            id: 0,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        wc.data.workers.push({
            id: 1,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        addInput('workingClass:assignWorkers', [
            { target: 'union', workerId: 0 },
            { target: 'company', companyId: cap.data.companies[0].id, workerId: 1 },
        ]);
        await nextAndTick('workingClass:assignWorkers');
        expect(wc.data.workers[0].company).toEqual(null);
        expect(wc.data.workers[0].union).toEqual(true);
        expect(wc.data.workers[0].committed).toEqual(false);
        expect(wc.data.workers[1].company).toEqual(cap.data.companies[0].id);
        expect(wc.data.workers[1].committed).toEqual(true);
    });
});

describe('createBuyGoodsAndServices', () => {
    test('run', async () => {
        wc.data.resources.money.add(100);
        cap.data.resources.luxury.add(10);
        st.data.resources.influence.add(10);
        addInput('workingClass:buyGoodsAndServices', [
            { resource: 'food', count: 1, source: 'foreign-market' },
            { resource: 'luxury', count: 3, source: 'capitalist' },
            { resource: 'influence', count: 2, source: 'state' },
        ]);
        await nextAndTick('workingClass:buyGoodsAndServices');

        expect(wc.data.resources.food.value).toEqual(1);
        expect(wc.data.resources.luxury.value).toEqual(3);
        expect(wc.data.resources.influence.value).toEqual(2);
        expect(wc.data.resources.money.value).toEqual(55);

        expect(cap.data.resources.luxury.value).toEqual(7);
        expect(cap.data.resources.money.value).toEqual(15);

        expect(st.data.resources.money.value).toEqual(20);
        expect(st.data.resources.influence.value).toEqual(8);
    });
});

describe('createBuildCompany', () => {
    test('condition:hasSpace', async () => {
        cap.data.companies = new Array(12);
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/hasSpace/);
    });
    test('condition:hasMarket', async () => {
        cap.data.companyMarket = [];
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/hasMarket/);
    });
    test('validateInput:inMarket', async () => {
        cap.data.companyMarket = ['c-market-1'];
        addInput('capitalist:buildCompany', { companyId: 'c-market-2', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/inMarket/);
    });
    test('run', async () => {
        cap.data.resources.money.add(100);
        game.data.board.policies.laborMarket = 2;
        const workers = addWorkers(2, { committed: false, company: null });
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers });
        await nextAndTick('capitalist:buildCompany');
        expect(cap.data.resources.money.value).toEqual(90);
        const company = _.last(cap.data.companies)!;
        expect(company.id).toEqual('c-market-1');
        expect(company.wages).toEqual('l3');
        expect(company.workers).toEqual(workers);
        eachWorker(workers, w => {
            expect(w.company).toEqual(company.id);
            expect(w.committed).toEqual(true);
        });
    });
});

describe('createSellCompany', () => {
    test('condition:hasCompany', async () => {
        cap.data.companies = [];
        await expect(nextAndTick('capitalist:sellCompany')).rejects.toThrow(/hasCompany/);
    });
    test('run', async () => {
        const toSell = cap.data.companies[0];
        const workers = addWorkers(2, { company: toSell.id });
        toSell.workers = workers;
        toSell.automationToken = true;
        cap.data.automationTokens = 0;
        addInput('capitalist:sellCompany', toSell.id);
        await nextAndTick('capitalist:sellCompany');
        expect(cap.data.resources.money.value).toEqual(10);
        expect(cap.data.companies).toHaveLength(1);
        expect(cap.data.companies[0].id).not.toEqual(toSell.id);
        expect(cap.data.automationTokens).toEqual(1);
        eachWorker(workers, w => {
            expect(w.company).toEqual(null);
        });
    });
});

describe('createSellForeignMarketCard', () => {
    test('run', async () => {
        cap.data.resources.food.add(10);
        cap.data.resources.luxury.add(10);
        cap.data.resources.healthcare.add(10);
        cap.data.resources.education.add(10);
        addInput('capitalist:sellToForeignMarket', {
            food: [true, false],
            luxury: [true, true],
            healthcare: [false, false],
            education: [false, true],
        });
        await nextAndTick('capitalist:sellToForeignMarket');
        expect(cap.data.resources.food.value).toEqual(9);
        expect(cap.data.resources.luxury.value).toEqual(4);
        expect(cap.data.resources.healthcare.value).toEqual(10);
        expect(cap.data.resources.education.value).toEqual(5);
        expect(cap.data.resources.money.value).toEqual(1 + 11 + 0 + 10);
    });
    test('run - middleClass', async () => {
        mc.data.producedResources.food.add(10);
        mc.data.producedResources.luxury.add(10);
        mc.data.producedResources.healthcare.add(10);
        mc.data.producedResources.education.add(10);
        addInput('middleClass:sellToForeignMarket', {
            food: [true, false],
            luxury: [true, true],
            healthcare: [false, false],
            education: [false, true],
        });
        await nextAndTick('middleClass:sellToForeignMarket');
        expect(mc.data.producedResources.food.value).toEqual(9);
        expect(mc.data.producedResources.luxury.value).toEqual(4);
        expect(mc.data.producedResources.healthcare.value).toEqual(10);
        expect(mc.data.producedResources.education.value).toEqual(5);
        expect(mc.data.resources.money.value).toEqual(1 + 11 + 0 + 10);
    });
});
