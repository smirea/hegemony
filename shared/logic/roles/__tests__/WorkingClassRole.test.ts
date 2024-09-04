import { beforeEach, expect, test, describe } from 'vitest';

import { createGameUtils, createTestWorker } from '../../__tests__/testUtils';

import type Game from '../../Game';
import type WorkingClassRole from '../WorkingClassRole';

const { initGame, addInput, nextAndTick } = createGameUtils();

let wc: WorkingClassRole;
let game: Game;

beforeEach(async () => {
    game = await initGame(['workingClass', 'capitalist']);
    wc = game.state.roles.workingClass;
});

describe('basicActions', () => {
    describe('workingClass:strike', async () => {
        test('conditions:hasStrikeTokens', async () => {
            wc.state.strikeTokens = 0;
            addInput('workingClass:strike', ['c1']);
            await expect(nextAndTick('workingClass:strike')).rejects.toThrow(/hasStrikeTokens/);
        });
        test('works', async () => {
            const { company } = game.getCompanyById(
                game.state.roles.capitalist.state.companies[0].id,
            );
            expect(company.strike).toBeFalsy();
            wc.state.strikeTokens = 1;
            addInput('workingClass:strike', [company.id]);
            await nextAndTick('workingClass:strike');
            expect(company.strike).toBe(true);
        });
    });
    describe('workingClass:demonstration', async () => {
        test('conditions:noDemonstration', async () => {
            wc.state.demonstration = true;
            await expect(nextAndTick('workingClass:demonstration')).rejects.toThrow(
                /noDemonstration/,
            );
        });
        test('conditions:hasUnemployedWorkers', async () => {
            wc.state.workers = [];
            expect(wc.countOpenWorkerSlots()).toBe(9);
            await expect(nextAndTick('workingClass:demonstration')).rejects.toThrow(
                /hasUnemployedWorkers/,
            );
        });
        test('conditions:hasUnemployedWorkers', async () => {
            wc.state.workers = [
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
        test('works', async () => {
            game.state.roles.middleClass.state.companies = [];
            game.state.roles.capitalist.state.companies = [];
            game.state.roles.state.state.companies = [];
            wc.state.workers = [createTestWorker(), createTestWorker()];
            expect(wc.state.demonstration).toBe(false);
            await nextAndTick('workingClass:demonstration');
            expect(wc.state.demonstration).toBe(true);
        });
    });
});
