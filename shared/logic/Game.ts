import _ from 'lodash';
import chalk from 'chalk';

import {
    PolicyEnum,
    type PolicyString,
    type PolicyValue,
    ResourceEnum,
    RoleEnum,
    type ActionEventDefinition,
    type ActionName,
    type Company,
    type CompanyCard,
    type CompanyWorker,
    type GameNext,
    type GameState,
    type Player,
    type PlayerActionMap,
    type PlayerActionType,
    type PolicyName,
    type RoleActionDefinition,
    type RoleName,
    type RoleNameNoWorkingClass,
    type RoleNameWorkingMiddleClass,
    type RunContext,
} from './types';
import { createActions } from './actions';
import defaultForeignMarketCards from './cards/foreignMarketCards';
import Deck from './cards/Deck';
import { capitalistCompanies, middleClassCompanies, statecomapnies } from './cards/companyCards';
import ResourceManager, {
    CapitalistMoneyResourceManager,
    MoneyResourceManager,
} from './utils/ResourceManager';
import businessDealCards from './cards/businessDealCards';

const isRoleAction = (action: any): action is RoleActionDefinition =>
    !!(action as RoleActionDefinition).roles;

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

const defaultDecks: GameState['board']['decks'] = {
    capitalistCompanies: new Deck('capitalist companies', capitalistCompanies),
    middleClassCompanies: new Deck('middle class companies', middleClassCompanies),
    stateClassCompanies: new Deck('state class companies', statecomapnies),
    foreignMarketCards: new Deck('foreign market', defaultForeignMarketCards),
    businessDealCards: new Deck('business deal', businessDealCards),
};

interface GameConfig {
    requestPlayerInput: Game['requestPlayerInput'];
    debug: boolean;
    decks: GameState['board']['decks'];
    players: Player[];
}

interface GameConfigInput extends Omit<GameConfig, 'decks' | 'debug'> {
    decks?: Partial<GameState['board']['decks']>;
    debug?: boolean;
}

export default class Game {
    state: GameState;
    public readonly debug: boolean;
    protected config: GameConfig;
    getAction: ReturnType<typeof createActions>['getAction'];
    validateEvent: ReturnType<typeof createActions>['validateEvent'];
    /** stores all card definittions, used for lookup only */
    private readonly fullDecks: {
        businessDeal: GameState['board']['decks']['businessDealCards'];
        capitalistCompanies: GameState['board']['decks']['capitalistCompanies'];
        middleClassCompanies: GameState['board']['decks']['middleClassCompanies'];
        stateClassCompanies: GameState['board']['decks']['stateClassCompanies'];
        foreignMarket: GameState['board']['decks']['foreignMarketCards'];
        companies: Deck<CompanyCard[]>;
    };

    constructor(config: GameConfigInput) {
        this.config = {
            debug: false,
            ...config,
            decks: {
                ...defaultDecks,
                ...config.decks,
            },
        };
        this.debug = this.config.debug;
        const { getAction, validateEvent } = createActions(this);
        this.getAction = getAction;
        this.validateEvent = validateEvent;
        this.state = this.createEmptyState();
        this.fullDecks = {
            businessDeal: this.state.board.decks.businessDealCards.clone(),
            capitalistCompanies: this.state.board.decks.capitalistCompanies.clone(),
            middleClassCompanies: this.state.board.decks.middleClassCompanies.clone(),
            stateClassCompanies: this.state.board.decks.stateClassCompanies.clone(),
            foreignMarket: this.state.board.decks.foreignMarketCards.clone(),
            companies: new Deck('all companies', [
                ...this.config.decks.capitalistCompanies.cards,
                ...this.config.decks.middleClassCompanies.cards,
                ...this.config.decks.stateClassCompanies.cards,
            ]),
        };
    }

    next = this.createNext({
        queueIndex: null,
        get next() {
            return this.next;
        },
    });

    createEmptyState(): GameState {
        return {
            players: this.config.players,
            settings: {},
            round: 0,
            turn: 0,
            currentRoleName: RoleEnum.workingClass,
            board: {
                foreignMarketCard: null as any,
                businessDealCards: [],
                availableInfluence: 25,
                votingCubeBag: {
                    [RoleEnum.workingClass]: 0,
                    [RoleEnum.middleClass]: 0,
                    [RoleEnum.capitalist]: 0,
                },
                policies: {
                    [PolicyEnum.fiscalPolicy]: 2,
                    [PolicyEnum.laborMarket]: 1,
                    [PolicyEnum.taxation]: 0,
                    [PolicyEnum.healthcare]: 1,
                    [PolicyEnum.education]: 2,
                    [PolicyEnum.foreignTrade]: 1,
                    [PolicyEnum.immigration]: 1,
                },
                policyProposals: {} as Record<PolicyName, { role: RoleName; value: PolicyValue }>,
                decks: this.config.decks,
            },
            roles: {
                [RoleEnum.workingClass]: {
                    id: RoleEnum.workingClass,
                    score: 0,
                    usedActions: [],
                    resources: {
                        money: new MoneyResourceManager({ name: 'workingClass:money' }),
                        influence: new ResourceManager({ name: 'workingClass:influence' }),
                        food: new ResourceManager({ name: 'workingClass:food' }),
                        healthcare: new ResourceManager({ name: 'workingClass:healthcare' }),
                        education: new ResourceManager({ name: 'workingClass:education' }),
                        luxury: new ResourceManager({ name: 'workingClass:luxury' }),
                    },
                    availableVotingCubes: 25,
                    workers: [],
                    strikeTokens: 5,
                    availableWorkers: {
                        influence: 0,
                        food: 0,
                        healthcare: 0,
                        education: 0,
                        luxury: 0,
                        unskilled: 0,
                    },
                    unions: {},
                },
                [RoleEnum.middleClass]: {
                    id: RoleEnum.middleClass,
                    score: 0,
                    usedActions: [],
                    resources: {
                        money: new MoneyResourceManager({ name: 'middleClass:money' }),
                        influence: new ResourceManager({ name: 'middleClass:influence' }),
                        food: new ResourceManager({ name: 'middleClass:food' }),
                        healthcare: new ResourceManager({ name: 'middleClass:healthcare' }),
                        education: new ResourceManager({ name: 'middleClass:education' }),
                        luxury: new ResourceManager({ name: 'middleClass:luxury' }),
                    },
                    companies: {},
                    companyDeck: [],
                    companyMarket: [],
                    producedResources: {
                        food: 0,
                        healthcare: 0,
                        education: 0,
                        luxury: 0,
                    },
                    availableVotingCubes: 25,
                    workers: [],
                    availableWorkers: {
                        influence: 0,
                        food: 0,
                        healthcare: 0,
                        education: 0,
                        luxury: 0,
                        unskilled: 0,
                    },
                    prices: {
                        food: 0,
                        healthcare: 0,
                        education: 0,
                        luxury: 0,
                    },
                    storage: {},
                },
                [RoleEnum.capitalist]: {
                    id: RoleEnum.capitalist,
                    score: 0,
                    usedActions: [],
                    resources: {
                        money: new CapitalistMoneyResourceManager(),
                        influence: new ResourceManager({ name: 'capitalist:influence' }),
                        food: new ResourceManager({ name: 'capitalist:food' }),
                        healthcare: new ResourceManager({ name: 'capitalist:healthcare' }),
                        education: new ResourceManager({ name: 'capitalist:education' }),
                        luxury: new ResourceManager({ name: 'capitalist:luxury' }),
                    },
                    companies: {},
                    companyDeck: [],
                    companyMarket: [],
                    availableVotingCubes: 25,
                    automationTokens: 4,
                    prices: {
                        food: 0,
                        healthcare: 0,
                        education: 0,
                        luxury: 0,
                    },
                    storage: {},
                    freeTradeZoneResources: {
                        food: new ResourceManager({ name: 'freeTradeZone:food' }),
                        luxury: new ResourceManager({ name: 'freeTradeZone:luxury' }),
                    },
                },
                [RoleEnum.state]: {
                    id: RoleEnum.state,
                    score: 0,
                    usedActions: [],
                    resources: {
                        money: new MoneyResourceManager({ name: 'workingClass:money' }),
                        influence: new ResourceManager({ name: 'workingClass:influence' }),
                        food: new ResourceManager({ name: 'workingClass:food' }),
                        healthcare: new ResourceManager({ name: 'workingClass:healthcare' }),
                        education: new ResourceManager({ name: 'workingClass:education' }),
                        luxury: new ResourceManager({ name: 'workingClass:luxury' }),
                    },
                    legitimacy: {
                        [RoleEnum.workingClass]: 2,
                        [RoleEnum.middleClass]: 2,
                        [RoleEnum.capitalist]: 2,
                    },
                    legitimacyTokens: {
                        [RoleEnum.workingClass]: 0,
                        [RoleEnum.middleClass]: 0,
                        [RoleEnum.capitalist]: 0,
                    },
                    companies: {},
                    companyDeck: [],
                    benefits: {
                        [RoleEnum.workingClass]: [],
                        [RoleEnum.middleClass]: [],
                        [RoleEnum.capitalist]: [],
                    },
                },
            },
            nextWorkerId: 0,
            currentActionIndex: 0,
            nextActionIndex: 0,
            actionQueue: [],
        } satisfies GameState;
    }

    ifPolicy(name: PolicyString, op: '==' | '<=' | '>=' = '==') {
        const m = name.match(/^([1-7])([ABC])$/);
        if (!m) throw new Error(`invalid policy name "${name}"`);
        const id = m[1] as unknown as keyof typeof map;
        const v = m[2] as unknown as keyof typeof valueMap;
        const map = {
            1: PolicyEnum.fiscalPolicy,
            2: PolicyEnum.laborMarket,
            3: PolicyEnum.taxation,
            4: PolicyEnum.healthcare,
            5: PolicyEnum.education,
            6: PolicyEnum.foreignTrade,
            7: PolicyEnum.immigration,
        } as const;
        const valueMap = {
            A: 0,
            B: 1,
            C: 2,
        } as const;
        const target = valueMap[v];
        const current = this.state.board.policies[map[id]];
        switch (op) {
            case '==':
                return target === current;
            case '<=':
                return current <= target;
            case '>=':
                return current >= target;
            default:
                throw new Error(`invalid operator "${op}"`);
        }
    }

    getCard<T extends keyof Game['fullDecks']>(
        type: T,
        id: string,
    ): ReturnType<Game['fullDecks'][T]['seek']> {
        return this.fullDecks[type].seek(id) as any;
    }

    createNext<T extends ActionName>(context: RunContextNoRole): GameNext<T> {
        return ((event: any) => {
            let formattedEvent: ActionEventDefinition = event;
            if (typeof event === 'string') {
                formattedEvent = { type: event } as any;
            }
            if (context.queueIndex == null) {
                this.state.actionQueue.push(formattedEvent);
            } else {
                this.state.actionQueue.splice(context.queueIndex, 0, formattedEvent);
                ++context.queueIndex;
            }
        }) satisfies GameNext<T>;
    }

    async tick() {
        if (this.state.currentActionIndex >= this.state.actionQueue.length) return;

        const event = this.state.actionQueue[this.state.currentActionIndex];
        const action = this.getAction(event.type);

        if (this.config.debug) {
            console.log(
                chalk.bold(`${String(this.state.currentActionIndex).padStart(3)} tick:`),
                event.type.padEnd(35),
                event.data,
            );
        }

        const actionContext: RunContext<RoleName> = {
            next: null as any, // added below
            queueIndex: this.state.currentActionIndex + 1,
            currentRole: this.state.currentRoleName
                ? this.state.roles[this.state.currentRoleName]
                : (null as any),
        };
        actionContext.next = this.createNext(actionContext);

        if (
            isRoleAction(action) &&
            !(action.roles as any[]).includes(this.state.currentRoleName!)
        ) {
            throw new Error(
                `Action(${action.type}) is not valid for: ${this.state.currentRoleName}`,
            );
        }

        if (action.condition) {
            const errors = action
                // @ts-ignore
                .condition(actionContext, event.data)
                .filter((c: any) => !c[1])
                .map((c: any) => c[0]);
            if (errors.length > 0) {
                throw new Error(`Action(${action.type}) condition not met: ${errors.join(', ')}`);
            }
        }

        // @ts-ignore
        await action.run(actionContext, event.data);

        ++this.state.currentActionIndex;
    }

    async flush({ to, after }: { to?: ActionName; after?: ActionName } = {}): Promise<void> {
        if (to && after) throw new Error('flush: to and after are mutually exclusive');
        let count = 0;
        while (this.state.actionQueue.length) {
            await this.tick();
            if (++count > 50) throw new Error('Infinite loop breaker');
            if (to && this.state.actionQueue[this.state.currentActionIndex].type === to) break;
            if (after && this.state.actionQueue[this.state.currentActionIndex - 1].type === after)
                break;
        }
    }

    getCompanyDefinition(id: CompanyCard['id']): CompanyCard {
        return this.fullDecks.companies.seek(id);
    }

    async requestPlayerInput<T extends PlayerActionType>(
        type: T,
        ...args: PlayerActionMap[T]['input'] extends undefined
            ? []
            : [NonNullable<PlayerActionMap[T]['input']>]
    ): Promise<PlayerActionMap[T]['output']> {
        if (this.debug) console.log(chalk.blue('    user:'), chalk.red(type.padEnd(20)), args[0]);
        const result = await this.config.requestPlayerInput(type, ...args);
        if (this.debug)
            console.log(chalk.blue('    user:'), chalk.blue('result'.padEnd(20)), result);
        return result;
    }

    getProsperity(role: RoleNameWorkingMiddleClass): number {
        const r = this.state.roles[role];
        return _.clamp(Math.ceil(_.size(r.workers) / 3), 3, 10);
    }

    getWorkerById(id: CompanyWorker['id']): {
        worker: CompanyWorker;
        roleName: RoleNameWorkingMiddleClass;
    } {
        const roleName =
            id in this.state.roles.workingClass.workers
                ? RoleEnum.workingClass
                : RoleEnum.middleClass;

        return { roleName, worker: this.state.roles[roleName].workers[id] };
    }

    getCompanyById(id: Company['id']): { company: Company; roleName: RoleNameNoWorkingClass } {
        const roleName =
            id in this.state.roles.middleClass.companies
                ? RoleEnum.middleClass
                : id in this.state.roles.capitalist.companies
                  ? RoleEnum.capitalist
                  : RoleEnum.state;

        return { roleName, company: this.state.roles[roleName].companies[id] };
    }

    buyFromForeignMarket(
        roleName: RoleNameWorkingMiddleClass,
        resource: typeof ResourceEnum.food | typeof ResourceEnum.luxury,
        count: number,
        { payTarriff }: { payTarriff?: boolean } = {},
    ): void {
        payTarriff ??= true;
        const tarriff = (
            [
                { [ResourceEnum.food]: 10, [ResourceEnum.luxury]: 6 },
                { [ResourceEnum.food]: 5, [ResourceEnum.luxury]: 3 },
                { [ResourceEnum.food]: 0, [ResourceEnum.luxury]: 0 },
            ] as const
        )[this.state.board.policies.foreignTrade][resource];
        const base = resource === ResourceEnum.food ? 10 : 6;
        const total = (base + tarriff) * count;
        this.state.roles[roleName].resources[resource].add(count);
        this.state.roles[roleName].resources.money.remove(total);
        this.state.roles[RoleEnum.state].resources.money.add(tarriff * count);
    }

    workingClassCanDemonstrate() {
        const unemployedWorkers = Object.values(this.state.roles.workingClass.workers).filter(
            w => !w.company,
        ).length;
        if (unemployedWorkers < 2) return false;
        const middleClassSlots = _.sum(
            Object.values(this.state.roles.middleClass.companies).map(c => {
                const d = this.getCompanyDefinition(c.id);
                return d.workers.filter(w => w.optional).length;
            }),
        );
        const capitalistSlots = _.sum(
            Object.values(this.state.roles.capitalist.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.getCompanyDefinition(c.id);
                if (d.fullyAutomated) return 0;
                return d.workers.length;
            }),
        );
        const stateSlots = _.sum(
            Object.values(this.state.roles.state.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.getCompanyDefinition(c.id);
                return d.workers.length;
            }),
        );

        return unemployedWorkers + 2 >= middleClassSlots + capitalistSlots + stateSlots;
    }
}
