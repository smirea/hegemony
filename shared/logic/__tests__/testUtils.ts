import { vi } from 'vitest';
import _ from 'lodash';

import Game, { type GameConfigInput } from '../Game';
import {
    ResourceEnumSchema,
    type RoleNameNoWorkingClass,
    RoleNameSchema,
    type CompanyCard,
    type CompanyWorker,
    type Player,
    type RoleName,
} from '../types';
import { type ActionEventName, type PlayerInput } from '../types.generated';
import Deck from '../cards/Deck';
import { makeForeignMarketCard } from '../cards/foreignMarketCards';
import { type BusinessDealCard } from '../cards/businessDealCards';

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
        if (typeof n === 'number') {
            for (let i = 0; i < n; ++i) {
                await game.tick();
                if (game.data.error) throw game.data.error;
            }
        } else {
            await game.flush({ after: n });
        }
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

    const getCurrentAction = () => game.data.actionQueue[game.data.currentActionIndex];

    const findAction = (type: ActionEventName, n = 0) =>
        game.data.actionQueue.filter(a => a.type === type).at(n)!;

    const addWorkers = (count = 1, diff: Partial<CompanyWorker> = {}) => {
        const result: CompanyWorker['id'][] = [];
        const role = diff.role ?? RoleNameSchema.enum.workingClass;
        for (let i = 0; i < count; ++i) {
            const worker = createTestWorker({ ...diff, role });
            game.data.roles[role].data.workers.push(worker);
            result.push(worker.id);
        }
        return result;
    };

    const eachWorker = (ids: CompanyWorker['id'][], fn: (worker: CompanyWorker) => void) => {
        for (const id of ids) {
            fn(game.getWorkerById(id).worker);
        }
    };

    const assignWorkers = (
        ids: CompanyWorker['id'][],
        companyId: CompanyCard['id'],
        diff?: Partial<CompanyWorker>,
    ) => {
        game.assignWorkers(ids.map(id => ({ target: 'company', workerId: id, companyId })));
        if (diff) eachWorker(ids, w => Object.assign(w, diff));
    };

    const initGame = async (
        roles: RoleName[] = ['workingClass', 'capitalist', 'middleClass', 'state'],
        {
            setupBoard = true,
            companyDecks = 'mock',
            mockDefaultSetup = true,
            ...config
        }: Partial<GameConfigInput> & {
            setupBoard?: boolean;
            mockDefaultSetup?: boolean;
            companyDecks?: 'mock' | 'empty';
        } = {},
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

        for (const role of Object.values(game.data.roles)) {
            role.data.resources.money.remove(role.data.resources.money.value);
            role.data.resources.food.remove(role.data.resources.food.value);
            role.data.resources.healthcare.remove(role.data.resources.healthcare.value);
            role.data.resources.education.remove(role.data.resources.education.value);
            role.data.resources.luxury.remove(role.data.resources.luxury.value);
            role.data.resources.influence.remove(role.data.resources.influence.value);

            if (mockDefaultSetup) {
                role.setupBoard = _.noop;
                role.setupRound = _.noop;
            }
        }

        game.data.board.policies = {
            education: 0,
            fiscalPolicy: 0,
            foreignTrade: 0,
            healthcare: 0,
            laborMarket: 0,
            taxation: 0,
            immigration: 0,
        };

        game.data.roles.workingClass.data.availableWorkers = {
            healthcare: 10,
            education: 10,
            influence: 10,
            food: 10,
            luxury: 10,
            unskilled: 10,
        };
        game.data.roles.middleClass.data.availableWorkers = {
            healthcare: 10,
            education: 10,
            influence: 10,
            food: 10,
            luxury: 10,
            unskilled: 10,
        };

        game.data.roles.middleClass.data.priceLevels = {
            education: 0,
            healthcare: 0,
            food: 0,
            luxury: 0,
        };
        game.data.roles.capitalist.data.priceLevels = {
            education: 0,
            healthcare: 0,
            food: 0,
            luxury: 0,
        };
        game.data.board.decks.foreignMarketDeck = new Deck(
            'test:foreign-market',
            [
                makeForeignMarketCard(
                    'f1',
                    [1, 1, 5, 10],
                    [1, 1, 5, 10],
                    [1, 1, 5, 10],
                    [1, 1, 5, 10],
                ),
                makeForeignMarketCard('f2', [1, 1, 2, 2], [1, 1, 2, 2], [1, 1, 2, 2], [1, 1, 2, 2]),
            ].reverse(),
        );
        game.data.board.decks.businessDealDeck = new Deck(
            'test:business-deal',
            (
                [
                    {
                        id: 'test-1',
                        cost: 10,
                        [ResourceEnumSchema.enum.food]: 1,
                        [ResourceEnumSchema.enum.luxury]: 2,
                        tariffs: [2, 1],
                    },
                    {
                        id: 'test-2',
                        cost: 20,
                        [ResourceEnumSchema.enum.food]: 3,
                        [ResourceEnumSchema.enum.luxury]: 4,
                        tariffs: [10, 5],
                    },
                ] satisfies BusinessDealCard[]
            ).reverse(),
        );

        if (companyDecks === 'empty') {
            game.data.roles.middleClass.data.companyDeck = new Deck(
                'test:middleClass companies',
                [],
            );
            game.data.roles.capitalist.data.companyDeck = new Deck('test:capitalist companies', []);
            game.data.roles.state.data.companyDeck = new Deck('test:stateClass companies', []);
        }

        if (companyDecks === 'mock') {
            const draw = (role: RoleNameNoWorkingClass, id: string) => {
                game.data.roles[role].data.companyDeck.drawById(id);
                return id;
            };

            const testDecks = createTestDecks();
            game.data.roles.middleClass.data.companyDeck = testDecks.middleClassCompanies;
            game.data.roles.capitalist.data.companyDeck = testDecks.capitalistCompanies;
            game.data.roles.state.data.companyDeck = testDecks.stateClassCompanies;

            game.data.roles.middleClass.setupBoard = () => {
                game.data.roles.middleClass.data.companies = [
                    {
                        id: draw('middleClass', 'm-food'),
                        workers: [],
                        wages: 'l1',
                    },
                    {
                        id: draw('middleClass', 'm-influence'),
                        workers: [],
                        wages: 'l1',
                    },
                ];
                game.data.roles.middleClass.data.companyMarket = [
                    draw('middleClass', 'm-market-1'),
                    draw('middleClass', 'm-market-2'),
                    draw('middleClass', 'm-market-3'),
                ];
            };

            game.data.roles.capitalist.setupBoard = () => {
                game.data.roles.capitalist.data.companies = [
                    {
                        id: draw('capitalist', 'c-food'),
                        workers: [],
                        wages: 'l1',
                    },
                    {
                        id: draw('capitalist', 'c-influence'),
                        workers: [],
                        wages: 'l1',
                    },
                ];
                game.data.roles.capitalist.data.companyMarket = [
                    draw('capitalist', 'c-market-1'),
                    draw('capitalist', 'c-market-2'),
                    draw('capitalist', 'c-market-3'),
                    draw('capitalist', 'c-market-4'),
                ];
            };

            game.data.roles.state.setupBoard = () => {
                game.data.roles.state.data.companies = [
                    {
                        id: draw('state', 's1'),
                        workers: [],
                        wages: 'l1',
                    },
                    {
                        id: draw('state', 's2'),
                        workers: [],
                        wages: 'l1',
                    },
                ];
            };
        }

        if (setupBoard) {
            const setupFn = game.setupBoard.bind(game);
            game.setupBoard = _.once(setupFn);
            game.setupBoard();
            const roundStartFn = game.setupRound.bind(game);
            game.setupRound = _.once(roundStartFn);
            game.setupRound();
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
        addWorkers,
        eachWorker,
        assignWorkers,
    };
}

function createTestDecks() {
    const middleClassCompanies = new Deck(
        'test:middleClass companies',
        [
            createTestCompanyCard({
                id: 'm-food',
                industry: 'food',
                workers: [
                    { roles: ['middleClass'], type: 'unskilled' },
                    { roles: ['middleClass'], type: 'unskilled' },
                ],
            }),
            createTestCompanyCard({
                id: 'm-influence',
                cost: 20,
                production: 5,
                productionFromOptionalWorkers: 3,
                industry: 'influence',
                workers: [
                    { roles: ['middleClass'], type: 'unskilled' },
                    { roles: ['workingClass'], type: 'unskilled' },
                ],
            }),
            createTestCompanyCard({ id: 'm-market-1' }),
            createTestCompanyCard({ id: 'm-market-2' }),
            createTestCompanyCard({ id: 'm-market-3' }),
        ].reverse(),
    );
    const capitalistCompanies = new Deck(
        'test:capitalist companies',
        [
            createTestCompanyCard({ id: 'c-food', industry: 'food' }),
            createTestCompanyCard({
                id: 'c-influence',
                industry: 'influence',
                cost: 20,
                production: 5,
                productionFromAutomation: 0,
                fullyAutomated: true,
            }),
            createTestCompanyCard({ id: 'c-market-1' }),
            createTestCompanyCard({ id: 'c-market-2' }),
            createTestCompanyCard({ id: 'c-market-3' }),
            createTestCompanyCard({ id: 'c-market-4' }),
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
        productionFromAutomation: 2,
        productionFromOptionalWorkers: 2,
        wages: { l1: 10, l2: 20, l3: 30 },
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
