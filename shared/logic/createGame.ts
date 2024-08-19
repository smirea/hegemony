import _ from 'lodash';
import chalk from 'chalk';
import { type AnyObject } from 'shared/types';

import {
    type Game,
    type GameState,
    type Player,
    type PolicyName,
    PolicyEnum,
    type RoleName,
    type RunContext,
    type BaseRole,
    type ActionEventDefinition,
    RoleEnum,
    type RoleActionDefinition,
    type ActionFactoryContext,
} from './types';
import { createActions } from './actions';
import defaultCompanies, { type CompanyDefinition } from './companies';

const isRoleAction = (action: any): action is RoleActionDefinition =>
    !!(action as RoleActionDefinition).roles;

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

function createMap<Item extends AnyObject, K extends keyof Item>(
    logName: string,
    data: readonly Item[],
    key: K,
): { [k2 in Item[K]]: Item } {
    const result: { [k2 in Item[K]]: Item } = {} as any;

    for (const item of data) {
        if (item[key] in result) {
            throw new Error(`${logName} key "${item[key]}" already exists`);
        }
        result[item[key]] = item;
    }

    return result;
}

export default function createGame({
    companies = defaultCompanies,
    requestPlayerInput: defaultRequestPlayerInput,
    debug,
}: {
    requestPlayerInput: ActionFactoryContext['requestPlayerInput'];
    debug?: boolean;
    companies?: CompanyDefinition[];
}) {
    const companyMap = createMap('company', companies, 'id');

    const actionFactoryContext: ActionFactoryContext = {
        requestPlayerInput: async (type, ...args) => {
            if (debug) console.log(chalk.blue('    user:'), chalk.red(type.padEnd(20)), args[0]);
            const result = await defaultRequestPlayerInput(type, ...args);
            if (debug)
                console.log(chalk.blue('    user:'), chalk.blue('result'.padEnd(20)), result);
            return result;
        },
        getCompanyDefinition: (id: string) => {
            if (!companyMap[id]) throw new Error(`company ${id} not found`);
            return companyMap[id];
        },
        addMoney: (role, amount, source = 'money') => {
            const r = ctx.state.roles[role];
            if (r.id !== RoleEnum.capitalist) {
                r.resources.money += amount;
                return;
            }
            r.resources[source] += amount;
        },
        spendMoney: (role, amount, { source = 'money', canTakeLoans = false } = {}) => {
            const r = ctx.state.roles[role];
            if (r.id !== RoleEnum.capitalist) {
                r.resources.money -= amount;
                if (r.resources.money < 0) {
                    if (!canTakeLoans) throw new Error('not enough money');
                    const numLoans = Math.ceil((r.resources.money / 50) * -1);
                    r.resources.money += numLoans * 50;
                    r.loans += numLoans;
                }
                return;
            }
            if (amount <= r.resources[source]) {
                r.resources[source] -= amount;
            } else {
                let remaining = amount - r.resources[source];
                r.resources[source] = 0;
                const other = source === 'money' ? 'capital' : 'money';
                if (r.resources[other] >= remaining) {
                    r.resources[other] -= remaining;
                } else {
                    if (!canTakeLoans) throw new Error('not enough money');
                    remaining -= r.resources[other];
                    r.resources[other] = 0;
                    const numLoans = Math.ceil(remaining / 50);
                    r.resources.capital += numLoans * 50;
                    r.loans += numLoans;
                }
            }
        },
        getMoney: role => {
            const r = ctx.state.roles[role];
            if (r.id === RoleEnum.capitalist) {
                return r.resources.capital + r.resources.money;
            }
            return r.resources.money;
        },
        getProsperity: role => {
            const r = state.roles[role];
            return _.clamp(Math.ceil(_.size(r.workers) / 3), 3, 10);
        },
        getWorkerById(id) {
            const role =
                id in state.roles.workingClass.workers
                    ? state.roles.workingClass
                    : state.roles.middleClass;

            return { role, worker: role.workers[id] };
        },
    };

    const { getAction } = createActions(actionFactoryContext);

    const tick: Game['tick'] = async () => {
        if (state.currentActionIndex >= state.actionQueue.length) return;

        const event = state.actionQueue[state.currentActionIndex];
        const action = getAction(event.type);

        if (debug) {
            console.log(
                chalk.bold(`${String(state.currentActionIndex).padStart(3)} tick:`),
                event.type.padEnd(35),
                event.data,
            );
        }

        const actionContext: RunContext<RoleName> = {
            ...ctx,
            queueIndex: state.currentActionIndex + 1,
            currentRole: state.currentRoleName ? state.roles[state.currentRoleName] : (null as any),
        };
        actionContext.next = createNext(actionContext);

        if (isRoleAction(action) && !(action.roles as any[]).includes(state.currentRoleName!)) {
            throw new Error(`Action(${action.type}) is not valid for: ${state.currentRoleName}`);
        }

        if (action.condition) {
            // @ts-ignore
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

        ++state.currentActionIndex;
    };

    const createNext = (context: RunContextNoRole) => {
        return ((event: any) => {
            let formattedEvent: ActionEventDefinition = event;
            if (typeof event === 'string') {
                formattedEvent = { type: event } as any;
            }
            if (context.queueIndex == null) {
                state.actionQueue.push(formattedEvent);
            } else {
                state.actionQueue.splice(context.queueIndex, 0, formattedEvent);
                ++context.queueIndex;
            }
        }) satisfies Game['next'];
    };

    const getRoleState = () =>
        ({
            score: 0,
            loans: 0,
            usedActions: [],
            resources: {
                money: 0,
                influence: 0,
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
            },
        }) satisfies Omit<BaseRole, 'id'>;

    const state: GameState = {
        players: [] as Player[],
        settings: {},
        round: 0,
        turn: 0,
        currentRoleName: RoleEnum.workingClass,
        board: {
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
        },
        roles: {
            [RoleEnum.workingClass]: {
                id: RoleEnum.workingClass,
                ...getRoleState(),
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
            },
            [RoleEnum.middleClass]: {
                id: RoleEnum.middleClass,
                ...getRoleState(),
                companies: {},
                companyDeck: [],
                companyMarket: [],
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
            },
            [RoleEnum.capitalist]: {
                id: RoleEnum.capitalist,
                ...getRoleState(),
                companies: {},
                companyDeck: [],
                companyMarket: [],
                availableVotingCubes: 25,
                automationTokens: 4,
                resources: {
                    ...getRoleState().resources,
                    capital: 0,
                },
                prices: {
                    food: 0,
                    healthcare: 0,
                    education: 0,
                    luxury: 0,
                },
            },
            [RoleEnum.state]: {
                id: RoleEnum.state,
                ...getRoleState(),
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
            },
        },
        nextWorkerId: 0,
        currentActionIndex: 0,
        nextActionIndex: 0,
        actionQueue: [],
    };

    const ctx: RunContextNoRole = {
        state,
        debug,
        queueIndex: null,
        next: null as any,
    };
    ctx.next = createNext(ctx);

    const result: Game = {
        ...ctx,
        tick,
        flush: async ({ to, after } = {}) => {
            if (to && after) throw new Error('flush: to and after are mutually exclusive');
            let count = 0;
            while (state.actionQueue.length) {
                await tick();
                if (++count > 50) throw new Error('Infinite loop breaker');
                if (to && state.actionQueue[state.currentActionIndex].type === to) break;
                if (after && state.actionQueue[state.currentActionIndex - 1].type === after) break;
            }
        },
    };

    return result;
}
