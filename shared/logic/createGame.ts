import { actions } from './actions';
import { Game, GameState, Player, PolicyName, PolicyEnum, RoleName, RoleEnum, RunContext } from './types';

export default function createGame({
    requestUserInput,
}: {
    requestUserInput: Game['requestPlayerInput'];
}) {
    const tick: Game['tick'] = async () => {
        if (!state.actionQueue.length) return;

        const { type, data } = state.actionQueue.shift()!;

        if (actions[type].condition && !actions[type].condition(ctx)) {
            throw new Error(`Action(${type}) condition not met`);
        }

        // @ts-ignore
        return await actions[type].run(ctx, data);
    };

    const next: (event: any) => void = event => {
        if (typeof event === 'string') {
            state.actionQueue.push({ type: event } as any);
            result.state.actionHistory.push({ type: event } as any);
        } else {
            state.actionQueue.push(event);
            result.state.actionHistory.push(event);
        }
    };

    const getRoleState = () => ({
        loans: 0,
        resources: {
            money: 0,
            influence: 0,
            food: 0,
            healthcare: 0,
            education: 0,
            luxury: 0,
        },
    });

    const state: GameState = {
        players: [] as Player[],
        settings: {},
        round: 0,
        turn: 0,
        currentRole: 0,
        board: {
            policies: {
                [PolicyEnum.fiscalPolicy]: 3,
                [PolicyEnum.laborMarket]: 2,
                [PolicyEnum.taxation]: 1,
                [PolicyEnum.healthcare]: 2,
                [PolicyEnum.education]: 3,
                [PolicyEnum.foreignTrade]: 2,
                [PolicyEnum.immigration]: 2,
            },
            policyProposals: {} as Record<PolicyName, { role: RoleName; value: number }>,
        },
        roles: {
            [RoleEnum.workingClass]: {
                ...getRoleState()
            },
            [RoleEnum.middleClass]: {
                ...getRoleState()
            },
            [RoleEnum.capitalist]: {
                ...getRoleState()
            },
            [RoleEnum.state]: {
                ...getRoleState()
            },
        },
        actionHistory: [],
        actionQueue: [],
    };

    const ctx: RunContext = {
        state,
        requestPlayerInput: requestUserInput,
        next: next as any,
    }

    const result: Game = {
        ...ctx,
        tick,
        flush: async () => {
            let count = 0;
            while (state.actionQueue.length) {
                if (++count > 20) throw new Error('Infinite loop breaker');
                await tick();
            }
        },
    };

    return result;
}
