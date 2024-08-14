type State<StateName extends string, EventName extends string> =
    | { type: 'final' }
    | {
        on: {
            [k in EventName]?:
            | StateName
            | {
                target: StateName;
                action?: () => void;
            }
        };
    };

export interface StateMachine<
    StateName extends string,
    EventName extends string,
    Context extends Record<string, any>,
    States extends Record<StateName, State<StateName, EventName>> = Record<StateName, State<StateName, EventName>>
> {
    readonly id: string;
    readonly initial: StateName;
    readonly context: Context;
    readonly states: Record<StateName, State<StateName, EventName>>;
    // send: (params: GetParams<States, >) => void;
}

// used in scripts/codemod-createMachine-types.ts
export const stateMachineConfigs: Record<string, any> = {};

export default function createMachine<
    StateName extends string,
    EventName extends string,
    Context extends Record<string, any> = never,
>(
    config: Pick<StateMachine<StateName, EventName, Context>, 'id' | 'initial' | 'states'> & { context?: Context },
): StateMachine<StateName, EventName, Context> {
    if (!config.id) {
        throw new Error('State machine id is required');
    }

    if (stateMachineConfigs[config.id]) {
        throw new Error(`State machine ${config.id} already exists`);
    }

    if (process.env.INSTRUMENT_STATE_MACHINES === 'true') {
        stateMachineConfigs[config.id] = config;
    } else {
        stateMachineConfigs[config.id] = true;
    }

    return {
        ...config,
        context: config.context ?? ({} as Context),
        send() { },
    };
}
