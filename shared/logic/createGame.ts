import _ from 'lodash';
import chalk from 'chalk';

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
} from './types';
import { createActions } from './actions';

export default function createGame({
    requestPlayerInput,
    debug,
}: {
    requestPlayerInput: Game['requestPlayerInput'];
    debug?: boolean;
}) {
    const { actions } = createActions();

    const tick: Game['tick'] = async () => {
        if (state.currentActionIndex >= state.actionQueue.length) return;

        const event = state.actionQueue[state.currentActionIndex];
        const { type } = event;

        if (debug) {
            console.log(
                chalk.bold(`${String(state.currentActionIndex).padStart(3)} tick:`),
                event.type.padEnd(35),
                event.data,
            );
        }

        const actionContext: RunContext = {
            ...ctx,
            queueIndex: state.currentActionIndex + 1,
            currentRoleState: state.currentRole ? state.roles[state.currentRole] : (null as any),
        };
        actionContext.next = createNext(actionContext);

        if (actions[type].condition) {
            // @ts-ignore
            const errors = actions[type]
                // @ts-ignore
                .condition(actionContext, event.data)
                .filter((c: any) => !c[1])
                .map((c: any) => c[0]);
            if (errors.length > 0) {
                throw new Error(`Action(${type}) condition not met: ${errors.join(', ')}`);
            }
        }

        // @ts-ignore
        await actions[event.type].run(actionContext, event.data);

        ++state.currentActionIndex;
    };

    const createNext = (context: RunContext) => {
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
        }) satisfies BaseRole;

    const state: GameState = {
        players: [] as Player[],
        settings: {},
        round: 0,
        turn: 0,
        currentRole: RoleEnum.workingClass,
        board: {
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
                ...getRoleState(),
            },
            [RoleEnum.middleClass]: {
                ...getRoleState(),
            },
            [RoleEnum.capitalist]: {
                ...getRoleState(),
            },
            [RoleEnum.state]: {
                ...getRoleState(),
            },
        },
        currentActionIndex: 0,
        nextActionIndex: 0,
        actionQueue: [],
    };

    const ctx: RunContext = {
        state,
        debug,
        queueIndex: null,
        currentRoleState: null as any,
        requestPlayerInput: async (type, ...args) => {
            if (debug) console.log(chalk.blue('    user:'), chalk.red(type.padEnd(20)), args[0]);
            const result = await requestPlayerInput(type, ...args);
            if (debug)
                console.log(chalk.blue('    user:'), chalk.blue('result'.padEnd(20)), result);
            return result;
        },
        next: null as any,
    };
    ctx.next = createNext(ctx);

    const result: Game = {
        ..._.omit(ctx, ['currentRoleState']),
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
