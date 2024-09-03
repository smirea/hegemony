import _ from 'lodash';
import chalk from 'chalk';
import { type z } from 'zod';

import {
    PolicyEnum,
    type PolicyString,
    ResourceEnum,
    RoleEnum,
    type Company,
    type CompanyCard,
    type CompanyWorker,
    type GameState,
    type Player,
    type RoleName,
    type RoleNameNoWorkingClass,
    type RoleNameWorkingMiddleClass,
    type RunContext,
    type Action,
    type AssignWorkersSchema,
} from './types';
import defaultForeignMarketCards from './cards/foreignMarketCards';
import Deck from './cards/Deck';
import { capitalistCompanies, middleClassCompanies, statecomapnies } from './cards/companyCards';
import businessDealCards from './cards/businessDealCards';
import WorkingClassRole from './roles/WorkingClassRole';
import MiddleClassRole from './roles/MiddleClassRole';
import CapitalistRole from './roles/CapitalistRole';
import StateRole from './roles/StateRole';
import {
    type ActionEventName,
    actionEventNameSchema,
    type AnyActionEvent,
} from './types.generated';
import action from './utils/action';

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

const getDefaultDecks = (): GameState['board']['decks'] => ({
    capitalistCompanies: new Deck('capitalist companies', capitalistCompanies),
    middleClassCompanies: new Deck('middle class companies', middleClassCompanies),
    stateClassCompanies: new Deck('state class companies', statecomapnies),
    foreignMarketCards: new Deck('foreign market', defaultForeignMarketCards),
    businessDealCards: new Deck('business deal', businessDealCards),
});

interface GameConfig {
    debug: boolean;
    requestPlayerInput: Game['requestPlayerInput'];
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
                ...getDefaultDecks(),
                ...config.decks,
            },
        };
        this.debug = this.config.debug;
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
                policyProposals: {},
                decks: this.config.decks,
            },
            roles: {
                [RoleEnum.workingClass]: new WorkingClassRole(this),
                [RoleEnum.middleClass]: new MiddleClassRole(this),
                [RoleEnum.capitalist]: new CapitalistRole(this),
                [RoleEnum.state]: new StateRole(this),
            },
            nextWorkerId: 0,
            currentActionIndex: 0,
            nextActionIndex: 0,
            actionQueue: [],
        } satisfies GameState;
    }

    getPolicy(name: (typeof PolicyEnum)[keyof typeof PolicyEnum]) {
        return this.state.board.policies[name];
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

    get foreignMarketCard() {
        return this.getCard('foreignMarket', this.state.board.foreignMarketCard);
    }

    createNext(context: RunContextNoRole) {
        return <T extends ActionEventName>(
            // event: ActionEventMap[T] extends { data: infer D } ? { type: T; data: D } : T | { type: T }
            event: T,
        ) => {
            let formattedEvent: AnyActionEvent = event as any;
            if (typeof event === 'string') {
                formattedEvent = { type: event } as any;
            }
            if (context.queueIndex == null) {
                this.state.actionQueue.push(formattedEvent);
            } else {
                this.state.actionQueue.splice(context.queueIndex, 0, formattedEvent);
                ++context.queueIndex;
            }
        };
    }

    async requestPlayerInput<T extends ActionEventName>(type: T): Promise<any> {
        if (this.debug) console.log(chalk.blue('    user:'), chalk.red(type.padEnd(20)));
        const result = await this.config.requestPlayerInput(type);
        if (this.debug)
            console.log(chalk.blue('    user:'), chalk.blue('result'.padEnd(20)), result);
        return result;
    }

    async tick() {
        if (this.state.currentActionIndex >= this.state.actionQueue.length) return;

        const event = this.state.actionQueue[this.state.currentActionIndex];
        const [targetName, key, ...rest] = event.type.split(':');

        if (!targetName || !key || rest.length) {
            throw new Error(`malformed action event name "${event.type}"`);
        }

        const target: any = targetName === 'game' ? this : this.state.roles[targetName as RoleName];
        if (!target) throw new Error(`unknown action event target "${targetName}"`);

        const action: Action<any> =
            target.actions?.[key] || target.freeActions?.[key] || target.basicActions?.[key];
        if (!action) throw new Error(`unknown action event key "${targetName}": "${key}"`);

        if (action.playerInputSchema) {
            const result = await this.requestPlayerInput(event.type);
            try {
                action.playerInputSchema.parse(result);
            } catch (e) {
                throw new Error(`Event(${event.type}) player input validation failed: ${e}`);
            }
            event.data = result;
        }

        if (this.config.debug) {
            console.log(
                chalk.bold(`${String(this.state.currentActionIndex).padStart(3)} tick:`),
                event.type.padEnd(40),
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

        if (action.condition) {
            const errors = action
                // @ts-ignore
                .condition(actionContext, event.data)
                .filter((c: any) => !c[1])
                .map((c: any) => c[0]);
            if (errors.length > 0) {
                throw new Error(`Event(${event.type}) condition not met: ${errors.join(', ')}`);
            }
        }

        try {
            action.run.bind(target)(event.data);
        } catch (e) {
            console.error(`Event(${event.type}) action failed: ${e}`);
            console.error(
                this.state.actionQueue
                    .slice()
                    .reverse()
                    .map(e => '  → ' + e.type)
                    .join('\n'),
            );
            throw e;
        }

        ++this.state.currentActionIndex;
    }

    async flush({
        to,
        after,
    }: { to?: ActionEventName; after?: ActionEventName } = {}): Promise<void> {
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

    getWorkerById(id: CompanyWorker['id']): {
        worker: CompanyWorker;
        roleName: RoleNameWorkingMiddleClass;
    } {
        const roleName =
            id in this.state.roles.workingClass.state.workers
                ? RoleEnum.workingClass
                : RoleEnum.middleClass;

        return { roleName, worker: this.state.roles[roleName].state.workers[id] };
    }

    getCompanyById(id: Company['id']): { company: Company; roleName: RoleNameNoWorkingClass } {
        const roleName =
            id in this.state.roles.middleClass.state.companies
                ? RoleEnum.middleClass
                : id in this.state.roles.capitalist.state.companies
                  ? RoleEnum.capitalist
                  : RoleEnum.state;

        return { roleName, company: this.state.roles[roleName].state.companies[id] };
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
        this.state.roles[roleName].state.resources[resource].add(count);
        this.state.roles[roleName].state.resources.money.remove(total);
        this.state.roles[RoleEnum.state].state.resources.money.add(tarriff * count);
    }

    assignWorkers(toAssign: z.infer<typeof AssignWorkersSchema>) {
        const companiesToEmpty = new Set<Company['id']>();
        const handledWorkers = new Set<CompanyWorker['id']>();

        for (const { workerId, ...payload } of toAssign) {
            const { worker } = this.getWorkerById(workerId);
            handledWorkers.add(workerId);

            // moving unemployed workers is fine
            // moving WC workers out of a MC company is also fine
            // all other instances, we need to empty all other workers from a company
            if (worker.company) {
                const { company, roleName } = this.getCompanyById(worker.company);
                if (roleName !== RoleEnum.middleClass || worker.role !== RoleEnum.workingClass) {
                    companiesToEmpty.add(worker.company);
                }
                company.workers = company.workers.filter(w => w !== worker.id);
                worker.company = null;
            }

            if (payload.target == 'union') {
                worker.company = null;
                worker.committed = false;
                worker.union = true;
            } else {
                const { companyId } = payload;
                const { company } = this.getCompanyById(companyId);
                company.workers.push(workerId);
            }
        }

        for (const companyId of companiesToEmpty) {
            const { company } = this.getCompanyById(companyId);
            for (const workerId of company.workers) {
                if (handledWorkers.has(workerId)) continue;
                const { worker } = this.getWorkerById(workerId);
                worker.company = null;
                worker.committed = false;
            }
        }
    }

    readonly actions = {
        start: action({
            run: () => {
                const order = [
                    RoleEnum.workingClass,
                    RoleEnum.middleClass,
                    RoleEnum.capitalist,
                    RoleEnum.state,
                ];
                this.state.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
                this.state.round = 0;
                this.state.round = 0;
                for (const deck of Object.values(this.state.board.decks)) {
                    deck.shuffle();
                }
                this.next('game:roundStart');
            },
        }),
        roundStart: action({
            run: () => {
                this.state.currentRoleName = null;
                ++this.state.round;
                this.state.turn = 0;
                const { foreignMarketCards, businessDealCards } = this.state.board.decks;
                this.state.board.foreignMarketCard = foreignMarketCards.draw().id;
                if (this.ifPolicy('6A')) {
                    this.state.board.businessDealCards = [
                        businessDealCards.draw().id,
                        businessDealCards.draw().id,
                    ];
                } else if (this.ifPolicy('6B')) {
                    this.state.board.businessDealCards = [businessDealCards.draw().id];
                } else {
                    this.state.board.businessDealCards = [];
                }
                if (this.debug) console.log(chalk.green.bold('——— round:'), this.state.round);
                this.next('game:roleNext');
            },
        }),
        turnStart: action({
            run: () => {
                ++this.state.turn;
                if (this.debug) console.log(chalk.green.bold('——— turn:'), this.state.turn);
                for (const role of Object.values(this.state.roles)) {
                    role.state.usedActions = [];
                }
                this.next('game:roleNext');
            },
        }),
        roleNext: action({
            run: () => {
                // can't advance the role, turn is over
                if (
                    this.state.currentRoleName ==
                    this.state.players[this.state.players.length - 1].role
                ) {
                    return this.next('game:turnEnd');
                }
                // start of a turn
                if (this.state.currentRoleName == null) {
                    this.state.currentRoleName = this.state.players[0].role;
                } else {
                    this.state.currentRoleName =
                        this.state.players[
                            this.state.players.findIndex(
                                p => p.role === this.state.currentRoleName,
                            ) + 1
                        ].role;
                }
                if (this.debug)
                    console.log(
                        chalk.cyan.bold('——— role:'),
                        chalk.underline(this.state.currentRoleName),
                    );
                this.next('game:roleTurn');
            },
        }),
        roleTurn: action({
            playerInputSchema: actionEventNameSchema,
            run: type => {
                if (isFreeAction(type)) {
                    this.state.roles[this.state.currentRoleName!].state.usedActions.push('free');
                } else {
                    this.state.roles[this.state.currentRoleName!].state.usedActions.push('basic');
                }
                this.next(type);
                this.next('game:roleCurrent');
            },
        }),
        roleCurrent: action({
            run: () => {
                if (this.state.roles[this.state.currentRoleName!].state.usedActions.length >= 2)
                    return this.next('game:roleNext');
                return this.next('game:roleTurn');
            },
        }),
        turnEnd: action({
            run: () => {
                if (this.state.turn >= 4) return this.next('game:roundEnd');
                ++this.state.turn;
                this.next('game:turnStart');
            },
        }),
        roundEnd: action({
            run: () => {
                if (this.state.round >= 4) return this.next('game:end');
                ++this.state.round;
                this.next('game:roundStart');
            },
        }),
        end: action({
            run: () => {
                // todo
            },
        }),
    } satisfies Record<string, Action<any>>;
}

const isFreeAction = (type: ActionEventName) => /\.freeAction\./.test(type);
