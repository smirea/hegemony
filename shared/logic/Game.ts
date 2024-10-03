import _ from 'lodash';
import chalk from 'chalk';
import { type z } from 'zod';
import { flow, observable, runInAction } from 'mobx';

import {
    PolicyEnum,
    type PolicyString,
    ResourceEnum,
    RoleEnum,
    type Company,
    type CompanyCard,
    type CompanyWorker,
    type Player,
    type RoleName,
    type RoleNameNoWorkingClass,
    type RoleNameWorkingMiddleClass,
    type RunContext,
    type Action,
    type AssignWorkersSchema,
    type RoleNameNoState,
    type PolicyName,
    type PolicyValue,
    type WageId,
} from './types';
import defaultForeignMarketCards, { type ForeignMarketCard } from './cards/foreignMarketCards';
import Deck from './cards/Deck';
import businessDealCards, { type BusinessDealCard } from './cards/businessDealCards';
import WorkingClassRole from './roles/WorkingClassRole';
import MiddleClassRole from './roles/MiddleClassRole';
import CapitalistRole from './roles/CapitalistRole';
import StateRole from './roles/StateRole';
import {
    type ActionEventName,
    actionEventNameSchema,
    type AnyActionEvent,
    type PlayerInput,
} from './types.generated';
import createAction from './utils/createAction';

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

const getDefaultDecks = (): GameState['board']['decks'] => ({
    foreignMarketCards: new Deck('foreign market', defaultForeignMarketCards),
    businessDealCards: new Deck('business deal', businessDealCards),
});

interface GameConfig {
    debug: boolean;
    requestPlayerInput: Game['requestPlayerInput'];
    decks: GameState['board']['decks'];
    players: Player[];
}

export interface GameConfigInput extends Omit<GameConfig, 'decks' | 'debug'> {
    decks?: Partial<GameState['board']['decks']>;
    debug?: boolean;
}

export interface GameState {
    error?: any;
    players: Player[];
    settings: Record<string, never>;
    round: number;
    turn: number;
    currentRoleName: null | RoleName;
    board: {
        votingCubeBag: Record<RoleNameNoState, number>;
        policies: Record<PolicyName, PolicyValue>;
        policyProposals: Partial<Record<PolicyName, { role: RoleName; value: PolicyValue }>>;
        availableInfluence: number;
        foreignMarketCard: ForeignMarketCard['id'];
        businessDealCards: BusinessDealCard['id'][];
        decks: {
            foreignMarketCards: Deck<ForeignMarketCard[]>;
            businessDealCards: Deck<BusinessDealCard[]>;
        };
    };
    roles: {
        [RoleEnum.workingClass]: WorkingClassRole;
        [RoleEnum.middleClass]: MiddleClassRole;
        [RoleEnum.capitalist]: CapitalistRole;
        [RoleEnum.state]: StateRole;
    };
    nextWorkerId: number;
    nextActionIndex: number;
    currentActionIndex: number;
    actionQueue: AnyActionEvent[];
}

export default class Game {
    @observable accessor data: GameState;
    public readonly debug: boolean;
    protected readonly config: GameConfig;

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
        this.data = this.createEmptyState();
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
            currentRoleName: null,
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
        return this.data.board.policies[name];
    }

    getWageId(): WageId {
        return ('l' + (this.getPolicy('laborMarket') + 1)) as WageId;
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
        const current = this.data.board.policies[map[id]];
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

    get foreignMarketCard() {
        return this.data.board.decks.foreignMarketCards.getOriginalCard(
            this.data.board.foreignMarketCard,
        );
    }

    createNext(context: RunContextNoRole) {
        return <T extends ActionEventName>(
            event: T,
            {
                debugPlayerInput,
            }: { debugPlayerInput?: T extends keyof PlayerInput ? PlayerInput[T] : never } = {},
        ) => {
            let formattedEvent: AnyActionEvent = event as any;
            if (typeof event === 'string') {
                formattedEvent = { type: event } as any;
            }
            if (debugPlayerInput) {
                formattedEvent = { ...formattedEvent, debugPlayerInput } as any;
            }
            if (context.queueIndex == null) {
                this.data.actionQueue.push(formattedEvent);
            } else {
                this.data.actionQueue.splice(context.queueIndex, 0, formattedEvent);
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
        try {
            await this.unsafeTick();
            return true;
        } catch (e) {
            runInAction(() => {
                this.data.error = e;
            });
            return false;
        }
    }

    private unsafeTick = flow(function* unsafeTick(this: Game) {
        if (this.data.currentActionIndex >= this.data.actionQueue.length) return;

        const event = this.data.actionQueue[this.data.currentActionIndex];
        const [targetName, key, ...rest] = event.type.split(':');

        if (!targetName || !key || rest.length) {
            throw new Error(`malformed action event name "${event.type}"`);
        }

        const target: any = targetName === 'game' ? this : this.data.roles[targetName as RoleName];
        if (!target) throw new Error(`unknown action event target "${targetName}"`);

        const action: Action<any> =
            target.actions?.[key] || target.freeActions?.[key] || target.basicActions?.[key];
        if (!action) throw new Error(`unknown action event key "${targetName}": "${key}"`);

        const actionContext: RunContext<RoleName> = {
            next: null as any, // added below
            queueIndex: this.data.currentActionIndex + 1,
            currentRole: this.data.currentRoleName
                ? this.data.roles[this.data.currentRoleName]
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

        if (action.playerInputSchema) {
            if ((event as any).debugPlayerInput) {
                event.data = (event as any).debugPlayerInput;
            } else {
                event.data = yield this.requestPlayerInput(event.type);
            }
            try {
                action.playerInputSchema.parse(event.data);
            } catch (e) {
                console.log(e);
                throw new Error(
                    `Event(${event.type}) player input validation failed, does not match schema`,
                );
            }
            if (action.validateInput) {
                const errors = action
                    .validateInput(event.data)
                    .filter(x => !x[1])
                    .map(x => x[0]);
                if (errors.length > 0) {
                    throw new Error(
                        `Event(${event.type}) player input validation failed: ${errors.join(', ')}`,
                    );
                }
            }
        }

        if (this.config.debug) {
            console.log(
                chalk.bold(`${String(this.data.currentActionIndex).padStart(3)} tick:`),
                event.type.padEnd(40),
                event.data,
            );
        }

        try {
            action.run.bind(target)(event.data);
        } catch (e) {
            console.error(`Event(${event.type}) action failed: ${e}`);
            console.error(
                this.data.actionQueue
                    .slice()
                    .reverse()
                    .map(e => '  → ' + e.type)
                    .join('\n'),
            );
            throw e;
        }

        ++this.data.currentActionIndex;
    });

    /** primarily used in testing */
    async flush({
        to,
        after,
    }: { to?: ActionEventName; after?: ActionEventName } = {}): Promise<void> {
        if (to && after) throw new Error('flush: to and after are mutually exclusive');
        let count = 0;
        while (this.data.actionQueue.length) {
            await this.tick();
            if (this.data.error) throw this.data.error;
            if (++count > 50) throw new Error('Infinite loop breaker');
            if (to && this.data.actionQueue[this.data.currentActionIndex].type === to) break;
            if (after && this.data.actionQueue[this.data.currentActionIndex - 1].type === after)
                break;
        }
    }

    getCompanyDefinition(id: CompanyCard['id']): CompanyCard {
        const result =
            this.data.roles.capitalist.data.companyDeck.getOriginalCard(id, { safe: true }) ||
            this.data.roles.middleClass.data.companyDeck.getOriginalCard(id, { safe: true }) ||
            this.data.roles.state.data.companyDeck.getOriginalCard(id, { safe: true });
        if (!result) throw new Error(`companyId="${id}" not found`);
        return result;
    }

    /** @note prefer using WorkingClassRole.worker() or MiddleClassRole.worker() */
    getWorkerById(id: CompanyWorker['id']): {
        worker: CompanyWorker;
        roleName: RoleNameWorkingMiddleClass;
    } {
        const roleName = this.data.roles.workingClass.worker(id, { safe: true })
            ? RoleEnum.workingClass
            : this.data.roles.middleClass.worker(id, { safe: true })
              ? RoleEnum.middleClass
              : null;

        if (!roleName) throw new Error(`workerId="${id}" not found`);

        return { roleName, worker: this.data.roles[roleName].worker(id) };
    }

    getCompanyById(id: Company['id']): { company: Company; roleName: RoleNameNoWorkingClass } {
        const roleName = this.data.roles.middleClass.company(id, { safe: true })
            ? RoleEnum.middleClass
            : this.data.roles.capitalist.company(id, { safe: true })
              ? RoleEnum.capitalist
              : RoleEnum.state;

        const company = this.data.roles[roleName].company(id);
        return { roleName, company };
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
                { [ResourceEnum.food]: 0, [ResourceEnum.luxury]: 0 },
                { [ResourceEnum.food]: 5, [ResourceEnum.luxury]: 3 },
                { [ResourceEnum.food]: 10, [ResourceEnum.luxury]: 6 },
            ] as const
        )[this.getPolicy('foreignTrade')][resource];
        const base = resource === ResourceEnum.food ? 10 : 6;
        const total = (base + tarriff) * count;
        this.data.roles[roleName].data.resources[resource].add(count);
        this.data.roles[roleName].data.resources.money.remove(total);
        this.data.roles[RoleEnum.state].data.resources.money.add(tarriff * count);
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
                worker.company = companyId;
                worker.committed = true;
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

    setupBoard() {
        const order = [
            RoleEnum.workingClass,
            RoleEnum.middleClass,
            RoleEnum.capitalist,
            RoleEnum.state,
        ];
        this.data.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
        this.data.round = 0;
        this.data.round = 0;
        for (const deck of Object.values(this.data.board.decks)) {
            deck.shuffle();
        }

        // order matters: companies need to be setup before workers come out
        this.data.roles.state.setupBoard();
        this.data.roles.capitalist.setupBoard();
        this.data.roles.middleClass.setupBoard();
        this.data.roles.workingClass.setupBoard();
    }

    setupRound() {
        if (this.debug) console.log(chalk.green.bold('——— round:'), this.data.round);
        this.data.currentRoleName = null;
        ++this.data.round;
        this.data.turn = 0;
        const { foreignMarketCards, businessDealCards } = this.data.board.decks;
        this.data.board.foreignMarketCard = foreignMarketCards.draw().id;
        if (this.ifPolicy('6A')) {
            this.data.board.businessDealCards = [
                businessDealCards.draw().id,
                businessDealCards.draw().id,
            ];
        } else if (this.ifPolicy('6B')) {
            this.data.board.businessDealCards = [businessDealCards.draw().id];
        } else {
            this.data.board.businessDealCards = [];
        }
        for (const role of Object.values(this.data.roles)) {
            // everyone except MC is always setup
            if (role.id === RoleEnum.middleClass && !role.active) continue;
            role.setupRound();
        }
    }

    readonly actions = {
        start: createAction({
            run: () => {
                this.setupBoard();
                this.next('game:roundStart');
            },
        }),
        roundStart: createAction({
            run: () => {
                this.setupRound();
                this.next('game:roleNext');
            },
        }),
        turnStart: createAction({
            run: () => {
                ++this.data.turn;
                if (this.debug) console.log(chalk.green.bold('——— turn:'), this.data.turn);
                for (const role of Object.values(this.data.roles)) {
                    role.data.usedActions = [];
                }
                this.next('game:roleNext');
            },
        }),
        roleNext: createAction({
            run: () => {
                // can't advance the role, turn is over
                if (
                    this.data.currentRoleName ==
                    this.data.players[this.data.players.length - 1].role
                ) {
                    return this.next('game:turnEnd');
                }
                // start of a turn
                if (this.data.currentRoleName == null) {
                    this.data.currentRoleName = this.data.players[0].role;
                } else {
                    this.data.currentRoleName =
                        this.data.players[
                            this.data.players.findIndex(p => p.role === this.data.currentRoleName) +
                                1
                        ].role;
                }
                if (this.debug)
                    console.log(
                        chalk.cyan.bold('——— role:'),
                        chalk.underline(this.data.currentRoleName),
                    );
                this.next('game:roleTurn');
            },
        }),
        roleTurn: createAction({
            playerInputSchema: actionEventNameSchema,
            condition: () => [['isRoleTurn', !!this.data.currentRoleName]],
            validateInput: type => [['currentTurn', type.startsWith(this.data.currentRoleName!)]],
            run: type => {
                if (isFreeAction(type)) {
                    this.data.roles[this.data.currentRoleName!].data.usedActions.push('free');
                } else {
                    this.data.roles[this.data.currentRoleName!].data.usedActions.push('basic');
                }
                this.next(type);
                this.next('game:roleCurrent');
            },
        }),
        roleCurrent: createAction({
            run: () => {
                if (this.data.roles[this.data.currentRoleName!].data.usedActions.length >= 2)
                    return this.next('game:roleNext');
                return this.next('game:roleTurn');
            },
        }),
        turnEnd: createAction({
            run: () => {
                if (this.data.turn >= 4) return this.next('game:roundEnd');
                ++this.data.turn;
                this.next('game:turnStart');
            },
        }),
        roundEnd: createAction({
            run: () => {
                if (this.data.round >= 4) return this.next('game:end');
                ++this.data.round;
                this.next('game:roundStart');
            },
        }),
        end: createAction({
            run: () => {
                // todo
            },
        }),
    } satisfies Record<string, Action<any>>;
}

const isFreeAction = (type: ActionEventName) => /\.freeAction\./.test(type);
