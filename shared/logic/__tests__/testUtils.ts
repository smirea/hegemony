import { vi } from 'vitest';
import _ from 'lodash';

import Game, { type GameConfigInput } from '../Game';
import { type CompanyCard, type CompanyWorker, type Player, type RoleName } from '../types';
import { type ActionEventName, type PlayerInput } from '../types.generated';
import Deck from '../cards/Deck';

type Input<T extends keyof PlayerInput> = { type: T; data: PlayerInput[T] };

export function createGameUtils() {
    let game: Game = null as any;
    let playerInputs: Input<keyof PlayerInput>[] = [];
    const working: Player = { name: 'working', role: 'workingClass' };
    const middle: Player = { name: 'middle', role: 'middleClass' };
    const capitalist: Player = { name: 'capitalist', role: 'capitalist' };
    const state: Player = { name: 'state', role: 'state' };

    const tick = async (n?: number | ActionEventName) => {
        n ??= 1;
        if (typeof n === 'number') for (let i = 0; i < n; ++i) await game.tick();
        else await game.flush({ after: n });
    };

    const nextAndTick = async (n?: number | ActionEventName) => {
        game.next(n as any);
        await tick(n);
    };

    const input = <T extends keyof PlayerInput>(type: T, data: PlayerInput[T]) => ({ type, data });

    const addInput = <T extends keyof PlayerInput>(type: T, data: PlayerInput[T]) => {
        playerInputs.push(input(type, data));
    };

    const requestPlayerInput = vi.fn<Game['requestPlayerInput']>();

    const getCurrentAction = () => game.state.actionQueue[game.state.currentActionIndex];

    const findAction = (type: ActionEventName, n = 0) =>
        game.state.actionQueue.filter(a => a.type === type).at(n)!;

    const initGame = async (
        roles: RoleName[] = ['workingClass', 'capitalist', 'middleClass', 'state'],
        {
            setup = true,
            companyDecks = 'mock',
            ...config
        }: Partial<GameConfigInput> & { setup?: boolean; companyDecks?: 'mock' | 'empty' } = {},
    ) => {
        playerInputs = [];
        requestPlayerInput.mockReset();
        requestPlayerInput.mockImplementation(async (...args: any) => {
            if (!playerInputs.length) {
                throw new Error('test-error: player response not set for: ' + JSON.stringify(args));
            }
            const { type, data } = playerInputs.shift()!;
            if (type !== args[0]) {
                throw new Error(
                    `Mocked player input is not what was expected: ${type} !== ${args[0]}`,
                );
            }
            return data;
        });

        game = new Game({
            players: [working, capitalist, middle, state].filter(p => roles.includes(p.role)),
            requestPlayerInput,
            ...config,
        });

        if (companyDecks === 'empty') {
            game.state.roles.middleClass.state.companyDeck = new Deck(
                'test:middleClass companies',
                [],
            );
            game.state.roles.middleClass.setupBoard = _.noop;
            game.state.roles.capitalist.state.companyDeck = new Deck(
                'test:capitalist companies',
                [],
            );
            game.state.roles.capitalist.setupBoard = _.noop;
            game.state.roles.state.state.companyDeck = new Deck('test:stateClass companies', []);
            game.state.roles.state.setupBoard = _.noop;
        }

        if (companyDecks === 'mock') {
            const testDecks = createTestDecks();
            const decks = {
                get middleClassCompanies() {
                    return game.state.roles.middleClass.state.companyDeck;
                },
                get capitalistCompanies() {
                    return game.state.roles.capitalist.state.companyDeck;
                },
                get stateClassCompanies() {
                    return game.state.roles.state.state.companyDeck;
                },
            };

            if (game.state.roles.middleClass) {
                game.state.roles.middleClass.state.companyDeck = testDecks.middleClassCompanies;
                game.state.roles.middleClass.setupBoard = () => {
                    const m1 = decks.middleClassCompanies.draw();
                    const m2 = decks.middleClassCompanies.draw();
                    game.state.roles.middleClass.state.companies = [
                        {
                            id: m1.id,
                            workers: [],
                            wages: 'l1',
                        },
                        {
                            id: m2.id,
                            workers: [],
                            wages: 'l1',
                        },
                    ];
                };
            }

            if (game.state.roles.capitalist) {
                game.state.roles.capitalist.state.companyDeck = testDecks.capitalistCompanies;
                game.state.roles.capitalist.setupBoard = () => {
                    const c1 = decks.capitalistCompanies.draw();
                    const c2 = decks.capitalistCompanies.draw();
                    game.state.roles.capitalist.state.companies = [
                        {
                            id: c1.id,
                            workers: [],
                            wages: 'l1',
                        },
                        {
                            id: c2.id,
                            workers: [],
                            wages: 'l1',
                        },
                    ];
                };
            }

            if (game.state.roles.state) {
                game.state.roles.state.state.companyDeck = testDecks.stateClassCompanies;
                game.state.roles.state.setupBoard = () => {
                    const s1 = decks.stateClassCompanies.draw();
                    const s2 = decks.stateClassCompanies.draw();
                    game.state.roles.state.state.companies = [
                        {
                            id: s1.id,
                            workers: [],
                            wages: 'l1',
                        },
                        {
                            id: s2.id,
                            workers: [],
                            wages: 'l1',
                        },
                    ];
                };
            }
        }

        if (setup) {
            const setupFn = game.setupBoard.bind(game);
            game.setupBoard = _.once(setupFn);
            game.setupBoard();
        }

        return game;
    };

    return {
        getGame: () => game,
        tick,
        nextAndTick,
        input,
        addInput,
        requestPlayerInput,
        getCurrentAction,
        findAction,
        initGame,
    };
}

function createTestDecks() {
    const middleClassCompanies = new Deck(
        'test:middleClass companies',
        [
            createTestCompanyCard({
                id: 'm1',
                workers: [
                    { roles: ['middleClass'], type: 'unskilled' },
                    { roles: ['middleClass'], type: 'unskilled' },
                ],
            }),
            createTestCompanyCard({
                id: 'm2',
                cost: 20,
                production: 5,
                extraProduction: 3,
                workers: [
                    { roles: ['middleClass'], type: 'unskilled' },
                    { roles: ['workingClass'], type: 'unskilled' },
                ],
            }),
            createTestCompanyCard(),
        ].reverse(),
    );
    const capitalistCompanies = new Deck(
        'test:capitalist companies',
        [
            createTestCompanyCard({ id: 'c1' }),
            createTestCompanyCard({
                id: 'c2',
                cost: 20,
                production: 5,
                extraProduction: 0,
                fullyAutomated: true,
            }),
            createTestCompanyCard(),
        ].reverse(),
    );
    const stateClassCompanies = new Deck(
        'test:stateClass companies',
        [
            createTestCompanyCard({ id: 's1' }),
            createTestCompanyCard({
                id: 's2',
                workers: [
                    { roles: ['workingClass', 'middleClass'], type: 'unskilled' },
                    { roles: ['workingClass', 'middleClass'], type: 'unskilled' },
                ],
            }),
            createTestCompanyCard(),
        ].reverse(),
    );

    return {
        middleClassCompanies,
        capitalistCompanies,
        stateClassCompanies,
    };
}

let idCounter = 0;
export const createTestCompanyCard = (diff: Partial<CompanyCard> = {}): CompanyCard => {
    const id = diff.id ?? 'company_gen_' + ++idCounter;
    const fullyAutomated = diff.fullyAutomated ?? false;

    return {
        id,
        fullyAutomated,
        name: diff.name ?? id,
        cost: 10,
        industry: 'food',
        production: 3,
        extraProduction: 2,
        wages: { l1: 1, l2: 2, l3: 3 },
        workers: fullyAutomated
            ? []
            : [
                  { roles: ['workingClass', 'middleClass'], type: 'unskilled' },
                  { roles: ['workingClass', 'middleClass'], type: 'unskilled' },
                  { roles: ['workingClass', 'middleClass'], type: 'unskilled' },
              ],
        ...diff,
    } satisfies CompanyCard;
};

export const createTestWorker = (diff: Partial<CompanyWorker> = {}): CompanyWorker => {
    return {
        id: diff.id ?? ++idCounter,
        committed: false,
        union: false,
        company: null,
        role: 'workingClass',
        type: 'unskilled',
        ...diff,
    } satisfies CompanyWorker;
};
