import { beforeEach, expect, test, describe } from 'vitest';
import { type Company, type CompanyCard, type RoleNameNoWorkingClass } from 'shared/logic/types';
import Deck from 'shared/logic/cards/Deck';

import {
    createGameUtils,
    createTestCompanyCard,
    createTestWorker,
} from '../../__tests__/testUtils';

import type Game from '../../Game';
import type WorkingClassRole from '../WorkingClassRole';

const { initGame, addInput, nextAndTick } = createGameUtils();

let wc: WorkingClassRole;
let game: Game;

describe('countOpenWorkerSlots', () => {
    beforeEach(async () => {
        game = await initGame(undefined, { companyDecks: 'empty' });
        wc = game.data.roles.workingClass;
    });

    const create = (
        target: RoleNameNoWorkingClass,
        {
            fullyAutomated,
            size = 2,
            slots = 'all',
            fill = false,
        }: {
            fullyAutomated?: boolean;
            size?: number;
            slots?: 0 | 1 | 'all';
            fill?: boolean;
        } = {},
    ) => {
        const card: CompanyCard = {
            ...createTestCompanyCard(),
            fullyAutomated,
            workers: new Array(size).fill(null).map((_, i) => ({
                type: 'unskilled',
                roles:
                    slots === 'all'
                        ? ['middleClass', 'workingClass']
                        : slots === 0
                          ? ['middleClass']
                          : i === size - 1
                            ? ['workingClass']
                            : ['middleClass'],
            })),
        };

        const company: Company = {
            id: card.id,
            workers: fill ? card.workers.map(() => Math.random()) : [],
            wages: 'l1',
        };

        game.data.roles[target].data.companies.push(company);
        game.data.roles[target].data.companyDeck = new Deck('test:deck:' + target, [
            ...game.data.roles[target].data.companyDeck.cards,
            card,
        ]);
    };

    test('no companies', () => {
        expect(wc.countOpenWorkerSlots()).toBe(0);
    });
    test('only capitalist', () => {
        create('capitalist');
        create('capitalist', { fill: true });
        create('capitalist');
        expect(wc.countOpenWorkerSlots()).toBe(4);
    });
    test('only middleClass', () => {
        create('middleClass');
        create('middleClass', { fill: true });
        expect(wc.countOpenWorkerSlots()).toBe(2);
    });
    test('only state', () => {
        create('state');
        create('state', { fill: true });
        create('state');
        expect(wc.countOpenWorkerSlots()).toBe(4);
    });
    test('all 3', () => {
        create('capitalist', { size: 3 });
        create('middleClass', { size: 2 });
        create('middleClass', { size: 2, fill: true });
        create('middleClass', { size: 2 });
        create('state', { size: 2 });
        expect(wc.countOpenWorkerSlots()).toBe(9);
    });
    test('kitchen sink', () => {
        create('capitalist', { size: 3 });
        create('capitalist', { size: 2 });
        create('capitalist', { size: 3, fill: true });
        create('capitalist', { fullyAutomated: true });
        create('middleClass', { size: 2, slots: 0 });
        create('middleClass', { size: 2, slots: 1 });
        create('middleClass', { size: 2, slots: 1, fill: true });
        create('middleClass', { size: 2, slots: 0, fill: true });
        create('state', { size: 2 });
        create('state', { size: 3 });
        create('state', { size: 2, fill: true });
        create('state', { size: 3, fill: true });
        expect(wc.countOpenWorkerSlots()).toBe(11);
    });
});

describe('basicActions', () => {
    beforeEach(async () => {
        game = await initGame();
        wc = game.data.roles.workingClass;
    });

    describe('workingClass:strike', async () => {
        test('conditions:hasStrikeTokens', async () => {
            wc.data.strikeTokens = 0;
            addInput('workingClass:strike', ['c1']);
            await expect(nextAndTick('workingClass:strike')).rejects.toThrow(/hasStrikeTokens/);
        });
        test('run', async () => {
            const { company } = game.getCompanyById(
                game.data.roles.capitalist.data.companies[0].id,
            );
            expect(company.strike).toBeFalsy();
            wc.data.strikeTokens = 1;
            addInput('workingClass:strike', [company.id]);
            await nextAndTick('workingClass:strike');
            expect(company.strike).toBe(true);
        });
    });
    describe('workingClass:demonstration', async () => {
        test('conditions:noDemonstration', async () => {
            wc.data.demonstration = true;
            await expect(nextAndTick('workingClass:demonstration')).rejects.toThrow(
                /noDemonstration/,
            );
        });
        test('conditions:hasUnemployedWorkers', async () => {
            wc.data.workers = [];
            expect(wc.countOpenWorkerSlots()).toBe(9);
            await expect(nextAndTick('workingClass:demonstration')).rejects.toThrow(
                /hasUnemployedWorkers/,
            );
        });
        test('conditions:hasUnemployedWorkers', async () => {
            wc.data.workers = [
                createTestWorker(),
                createTestWorker(),
                createTestWorker(),
                createTestWorker(),
                createTestWorker(),
                createTestWorker(),
            ];
            expect(wc.countOpenWorkerSlots()).toBe(9);
            await expect(nextAndTick('workingClass:demonstration')).rejects.toThrow(
                /hasUnemployedWorkers/,
            );
        });
        test('run', async () => {
            game.data.roles.middleClass.data.companies = [];
            game.data.roles.capitalist.data.companies = [];
            game.data.roles.state.data.companies = [];
            wc.data.workers = [createTestWorker(), createTestWorker()];
            expect(wc.data.demonstration).toBe(false);
            await nextAndTick('workingClass:demonstration');
            expect(wc.data.demonstration).toBe(true);
        });
    });
});
