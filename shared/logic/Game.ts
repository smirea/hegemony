import _ from 'lodash';
import chalk from 'chalk';

import {
    type GameState,
    type Player,
    type PolicyName,
    PolicyEnum,
    type RoleName,
    type RunContext,
    type ActionEventDefinition,
    RoleEnum,
    type RoleActionDefinition,
    ResourceEnum,
    type CompanyCard,
    type PlayerActionType,
    type PlayerActionMap,
    type RoleNameWorkingMiddleClass,
    type CompanyWorker,
    type Company,
    type RoleNameNoWorkingClass,
    type ActionName,
    type GameNext,
} from './types';
import { createActions } from './actions';
import defaultForeignMarketCards from './cards/foreignMarketCards';
import Deck from './cards/Deck';
import { capitalistCompanies, middleClassCompanies, statecomapnies } from './cards/companyCards';
import ResourceManager, {
    CapitalistMoneyResourceManager,
    MoneyResourceManager,
} from './utils/ResourceManager';

const isRoleAction = (action: any): action is RoleActionDefinition =>
    !!(action as RoleActionDefinition).roles;

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

const defaultDecks: GameState['board']['decks'] = {
    capitalistCompanies: new Deck('capitalist companies', capitalistCompanies),
    middleClassCompanies: new Deck('middle class companies', middleClassCompanies),
    stateClassCompanies: new Deck('state class companies', statecomapnies),
    foreignMarket: new Deck('foreign market', defaultForeignMarketCards),
};

interface GameConfig {
    requestPlayerInput: Game['requestPlayerInput'];
    debug?: boolean;
    decks?: Partial<GameState['board']['decks']>;
    players: Player[];
}

export default class Game {
    state: GameState;
    protected debug: boolean;
    protected config: GameConfig;
    getAction: ReturnType<typeof createActions>['getAction'];
    validateEvent: ReturnType<typeof createActions>['validateEvent'];
    protected allCompaniesDeck: Deck<CompanyCard[]>;

    constructor(config: GameConfig) {
        this.config = config;
        this.debug = config.debug ?? false;
        const { getAction, validateEvent } = createActions(this);
        this.getAction = getAction;
        this.validateEvent = validateEvent;
        const decks: GameState['board']['decks'] = {
            ...defaultDecks,
            ...this.config.decks,
        };
        this.allCompaniesDeck = new Deck('all companies', [
            ...decks.capitalistCompanies.cards,
            ...decks.middleClassCompanies.cards,
            ...decks.stateClassCompanies.cards,
        ]);
        this.state = this.createEmptyState();
    }

    next = this.createNext({
        queueIndex: null,
        get next() {
            return this.next;
        },
    });

    createEmptyState(): GameState {
        const decks: GameState['board']['decks'] = {
            ...defaultDecks,
            ...this.config.decks,
        };

        return {
            players: this.config.players,
            settings: {},
            round: 0,
            turn: 0,
            currentRoleName: RoleEnum.workingClass,
            board: {
                foreignMarketCard: null as any,
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
                policyProposals: {} as Record<PolicyName, { role: RoleName; value: number }>,
                decks,
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
        return this.allCompaniesDeck.seek(id, { safe: true });
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

    getForeignMarketCard() {
        return this.state.board.decks.foreignMarket.seek(this.state.board.foreignMarketCard);
    }
}
