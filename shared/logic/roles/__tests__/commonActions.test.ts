import { createGameUtils } from 'shared/logic/__tests__/testUtils';
import { beforeEach, describe, expect, test } from 'vitest';
import { CompanyWorkerTypeSchema, WorkerTypeEnum } from 'shared/logic/types';
import _ from 'lodash';

import type Game from 'shared/logic/Game';
import type WorkingClassRole from '../WorkingClassRole';
import type CapitalistRole from '../CapitalistRole';
import type StateRole from '../StateRole';

const { initGame, addInput, nextAndTick, addWorkers, eachWorker } = createGameUtils();

let game: Game;
let wc: WorkingClassRole;
let cap: CapitalistRole;
let st: StateRole;

beforeEach(async () => {
    game = await initGame();
    wc = game.state.roles.workingClass;
    cap = game.state.roles.capitalist;
    st = game.state.roles.state;
});

describe('createProposeBill', () => {
    const wc1 = {
        role: 'workingClass',
        value: 1,
    } as const;
    test('condition:hasVotes', async () => {
        game.state.board.policyProposals.education = wc1;
        game.state.board.policyProposals.fiscalPolicy = wc1;
        game.state.board.policyProposals.foreignTrade = wc1;
        addInput('workingClass:proposeBill', { policy: 'healthcare', value: 1 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/hasVotes/);
    });
    test('validateInput:notProposed', async () => {
        game.state.board.policyProposals.education = wc1;
        addInput('workingClass:proposeBill', { policy: 'education', value: 1 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/notProposed/);
    });
    test('validateInput:isDifferent', async () => {
        game.state.board.policyProposals.education = wc1;
        addInput('workingClass:proposeBill', { policy: 'education', value: 0 });
        await expect(nextAndTick('workingClass:proposeBill')).rejects.toThrow(/isDifferent/);
    });
    test('works', async () => {
        addInput('workingClass:proposeBill', { policy: 'education', value: 1 });
        await nextAndTick('workingClass:proposeBill');
        expect(game.state.board.policyProposals.education).toEqual(wc1);
    });
});

describe('createPayLoan', () => {
    test('condition:hasLoans', async () => {
        await expect(nextAndTick('workingClass:payLoan')).rejects.toThrow(/hasLoans/);
    });
    test('condition:hasMoney', async () => {
        wc.state.resources.money.addLoans(1);
        await expect(nextAndTick('workingClass:payLoan')).rejects.toThrow(/hasMoney/);
    });
    test('works', async () => {
        wc.state.resources.money.addLoans(1);
        wc.state.resources.money.add(55);
        await nextAndTick('workingClass:payLoan');
        expect(wc.state.resources.money.loans).toEqual(0);
        expect(wc.state.resources.money.value).toEqual(5);
    });
});

describe('createUseHealthcare', () => {
    test('condition:hasHealthcare', async () => {
        await expect(nextAndTick('workingClass:useHealthcare')).rejects.toThrow(/hasHealthcare/);
    });
    test('works', async () => {
        wc.state.resources.healthcare.add(5);
        await nextAndTick('workingClass:useHealthcare');
        expect(wc.state.resources.healthcare.value).toEqual(2);
        expect(wc.state.workers).toHaveLength(1);
        expect(wc.state.workers[0].type).toEqual(WorkerTypeEnum.unskilled);
        expect(wc.state.score).toEqual(3);
        expect(wc.state.availableWorkers.unskilled).toEqual(9);
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
        wc.state.resources.education.add(5);
        wc.state.availableWorkers.healthcare = 0;
        addInput('workingClass:useEducation', {
            workerId: 0,
            type: CompanyWorkerTypeSchema.enum.healthcare,
        });
        await expect(nextAndTick('workingClass:useEducation')).rejects.toThrow(
            /hasAvailableWorkers/,
        );
    });
    test('works', async () => {
        wc.state.resources.education.add(5);
        wc.state.workers.push({
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
        expect(wc.state.resources.education.value).toEqual(2);
        expect(wc.state.score).toEqual(1);
        expect(wc.state.workers).toHaveLength(1);
        expect(wc.state.workers[0].type).toEqual(CompanyWorkerTypeSchema.enum.healthcare);
        expect(wc.state.availableWorkers.unskilled).toEqual(11);
        expect(wc.state.availableWorkers.healthcare).toEqual(9);
    });
});

describe('createUseLuxury', () => {
    test('condition:hasLuxury', async () => {
        await expect(nextAndTick('workingClass:useLuxury')).rejects.toThrow(/hasLuxury/);
    });
    test('works', async () => {
        wc.state.resources.luxury.add(5);
        await nextAndTick('workingClass:useLuxury');
        expect(wc.state.resources.luxury.value).toEqual(2);
        expect(wc.state.score).toEqual(1);
    });
});

describe('createAdjustPrices', () => {
    test('works', async () => {
        game.state.board.policies.laborMarket = 1;
        addInput('capitalist:adjustPrices', { education: 2 });
        await nextAndTick('capitalist:adjustPrices');
        expect(cap.state.priceLevels.education).toEqual(2);
    });
});

describe('createAdjustWages', () => {
    test('condition:minWage', async () => {
        game.state.board.policies.laborMarket = 2;
        addInput('capitalist:adjustWages', [{ companyId: 'c1', wages: 'l2' }]);
        await expect(nextAndTick('capitalist:adjustWages')).rejects.toThrow(/minWage/);
    });
    test('works', async () => {
        cap.company('c1').wages = 'l1';
        addInput('capitalist:adjustWages', [{ companyId: 'c1', wages: 'l2' }]);
        await nextAndTick('capitalist:adjustWages');
        expect(cap.company('c1').wages).toEqual('l2');
    });
});

describe('createSwapWorkers', () => {
    test('condition:hasUnemployedWorkers', async () => {
        addInput('workingClass:swapWorkers', [[0, 1]]);
        await expect(nextAndTick('workingClass:swapWorkers')).rejects.toThrow(
            /hasUnemployedWorkers/,
        );
    });
    test('works', async () => {
        wc.state.workers.push({
            id: 0,
            type: 'unskilled',
            role: 'workingClass',
            company: cap.state.companies[0].id,
            committed: true,
        });
        wc.state.workers.push({
            id: 1,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        addInput('workingClass:swapWorkers', [[0, 1]]);
        await nextAndTick('workingClass:swapWorkers');

        expect(wc.state.workers[0].id).toEqual(0);
        expect(wc.state.workers[0].company).toEqual(null);
        expect(wc.state.workers[0].committed).toEqual(false);

        expect(wc.state.workers[1].id).toEqual(1);
        expect(wc.state.workers[1].company).toEqual(cap.state.companies[0].id);
        expect(wc.state.workers[1].committed).toEqual(true);
    });
});

describe('createReceiveBenefits', () => {
    test('condition:only4Players', async () => {
        game.state.players.pop();
        await expect(nextAndTick('workingClass:receiveBenefits')).rejects.toThrow(/only4Players/);
    });
    test('condition:hasBenefits', async () => {
        await expect(nextAndTick('workingClass:receiveBenefits')).rejects.toThrow(/hasBenefits/);
    });
    test('works', async () => {
        expect(st.state.benefits.workingClass).toEqual([]);
        expect(st.state.score).toEqual(0);
        st.state.benefits.workingClass = [{ type: 'resource', resource: 'money', amount: 5 }];
        await nextAndTick('workingClass:receiveBenefits');
        expect(st.state.benefits.workingClass).toEqual([]);
        expect(wc.state.resources.money.value).toEqual(5);
        expect(st.state.score).toEqual(1);
    });
});

describe('createApplyPoliticalPressure', () => {
    test('condition:hasCubes', async () => {
        await expect(nextAndTick('workingClass:applyPoliticalPressure')).rejects.toThrow(
            /hasCubes/,
        );
    });
    test('works', async () => {
        wc.state.availableVotingCubes = 2;
        expect(game.state.board.votingCubeBag.workingClass).toEqual(0);
        await nextAndTick('workingClass:applyPoliticalPressure');
        expect(wc.state.availableVotingCubes).toEqual(0);
        expect(game.state.board.votingCubeBag.workingClass).toEqual(2);
        wc.state.availableVotingCubes = 10;
        await nextAndTick('workingClass:applyPoliticalPressure');
        expect(wc.state.availableVotingCubes).toEqual(7);
        expect(game.state.board.votingCubeBag.workingClass).toEqual(5);
    });
});

describe('createAssignWorkers', () => {
    test('works', async () => {
        wc.state.workers.push({
            id: 0,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        wc.state.workers.push({
            id: 1,
            type: 'unskilled',
            role: 'workingClass',
            company: null,
            committed: false,
        });
        addInput('workingClass:assignWorkers', [
            { target: 'union', workerId: 0 },
            { target: 'company', companyId: cap.state.companies[0].id, workerId: 1 },
        ]);
        await nextAndTick('workingClass:assignWorkers');
        expect(wc.state.workers[0].company).toEqual(null);
        expect(wc.state.workers[0].union).toEqual(true);
        expect(wc.state.workers[0].committed).toEqual(false);
        expect(wc.state.workers[1].company).toEqual(cap.state.companies[0].id);
        expect(wc.state.workers[1].committed).toEqual(true);
    });
});

describe('createBuyGoodsAndServices', () => {
    test('works', async () => {
        wc.state.resources.money.add(100);
        cap.state.resources.luxury.add(10);
        st.state.resources.influence.add(10);
        addInput('workingClass:buyGoodsAndServices', [
            { resource: 'food', count: 1, source: 'foreign-market' },
            { resource: 'luxury', count: 3, source: 'capitalist' },
            { resource: 'influence', count: 2, source: 'state' },
        ]);
        await nextAndTick('workingClass:buyGoodsAndServices');

        expect(wc.state.resources.food.value).toEqual(1);
        expect(wc.state.resources.luxury.value).toEqual(3);
        expect(wc.state.resources.influence.value).toEqual(2);
        expect(wc.state.resources.money.value).toEqual(55);

        expect(cap.state.resources.luxury.value).toEqual(7);
        expect(cap.state.resources.money.value).toEqual(15);

        expect(st.state.resources.money.value).toEqual(20);
        expect(st.state.resources.influence.value).toEqual(8);
    });
});

describe('createBuildCompany', () => {
    test('condition:hasSpace', async () => {
        cap.state.companies = new Array(12);
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/hasSpace/);
    });
    test('condition:hasMarket', async () => {
        cap.state.companyMarket = [];
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/hasMarket/);
    });
    test('validateInput:inMarket', async () => {
        cap.state.companyMarket = ['c-market-1'];
        addInput('capitalist:buildCompany', { companyId: 'c-market-2', workers: [] });
        await expect(nextAndTick('capitalist:buildCompany')).rejects.toThrow(/inMarket/);
    });
    test('works', async () => {
        cap.state.resources.money.add(100);
        game.state.board.policies.laborMarket = 2;
        const workers = addWorkers(2, { committed: false, company: null });
        addInput('capitalist:buildCompany', { companyId: 'c-market-1', workers });
        await nextAndTick('capitalist:buildCompany');
        expect(cap.state.resources.money.value).toEqual(90);
        const company = _.last(cap.state.companies)!;
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
        cap.state.companies = [];
        await expect(nextAndTick('capitalist:sellCompany')).rejects.toThrow(/hasCompany/);
    });
    test('works', async () => {
        const toSell = cap.state.companies[0];
        const workers = addWorkers(2, { company: toSell.id });
        toSell.workers = workers;
        toSell.automationToken = true;
        cap.state.automationTokens = 0;
        addInput('capitalist:sellCompany', toSell.id);
        await nextAndTick('capitalist:sellCompany');
        expect(cap.state.resources.money.value).toEqual(10);
        expect(cap.state.companies).toHaveLength(1);
        expect(cap.state.companies[0].id).not.toEqual(toSell.id);
        expect(cap.state.automationTokens).toEqual(1);
        eachWorker(workers, w => {
            expect(w.company).toEqual(null);
        });
    });
});

describe('createSellForeignMarketCard', () => {
    test('works', async () => {
        cap.state.resources.food.add(10);
        cap.state.resources.luxury.add(10);
        cap.state.resources.healthcare.add(10);
        cap.state.resources.education.add(10);
        addInput('capitalist:sellToForeignMarket', {
            food: [true, false],
            luxury: [true, true],
            healthcare: [false, false],
            education: [false, true],
        });
        await nextAndTick('capitalist:sellToForeignMarket');
        expect(cap.state.resources.food.value).toEqual(9);
        expect(cap.state.resources.luxury.value).toEqual(4);
        expect(cap.state.resources.healthcare.value).toEqual(10);
        expect(cap.state.resources.education.value).toEqual(5);
        expect(cap.state.resources.money.value).toEqual(1 + 11 + 0 + 10);
    });
});
