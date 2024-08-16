import type { AnyObject } from 'shared/types';
import type { createActions } from './actions';

type ActionDefs = ReturnType<typeof createActions>;

export const RoleEnum = {
    workingClass: 'workingClass',
    middleClass: 'middleClass',
    capitalist: 'capitalist',
    state: 'state',
} as const;

export type RoleName = (typeof RoleEnum)[keyof typeof RoleEnum];

export const PolicyEnum = {
    fiscalPolicy: 'fiscalPolicy',
    laborMarket: 'laborMarket',
    taxation: 'taxation',
    healthcare: 'healthcare',
    education: 'education',
    foreignTrade: 'foreignTrade',
    immigration: 'immigration',
} as const;

export type PolicyName = (typeof PolicyEnum)[keyof typeof PolicyEnum];

export const ResourceEnum = {
    /** do not access directly, use ctx.{getMoney/addMoney/spendMoney} that accounts for capitalist */
    money: 'money',
    influence: 'influence',
    food: 'food',
    healthcare: 'healthcare',
    education: 'education',
    luxury: 'luxury',
} as const;

export type Resource = (typeof ResourceEnum)[keyof typeof ResourceEnum];

export interface Player {
    role: RoleName;
    name: string;
}

export interface BaseRole {
    id: RoleName;
    score: number;
    loans: number;
    usedActions: Array<'basic' | 'free'>;
    resources: Record<Resource, number>;
}

interface WorkingClassRole extends BaseRole {
    id: typeof RoleEnum.workingClass;
    availableVotingCubes: number;
}
interface MiddleClassRole extends BaseRole {
    id: typeof RoleEnum.middleClass;
    availableVotingCubes: number;
}
interface CapitalistRole extends BaseRole {
    id: typeof RoleEnum.capitalist;
    availableVotingCubes: number;
    resources: BaseRole['resources'] & { capital: number };
}
interface StateRole extends BaseRole {
    id: typeof RoleEnum.state;
}

export interface GameState {
    players: Player[];
    settings: AnyObject;
    round: number;
    turn: number;
    currentRoleName: null | RoleName;
    board: {
        policies: Record<PolicyName, number>;
        policyProposals: Partial<Record<PolicyName, { role: RoleName; value: number }>>;
    };
    roles: {
        workingClass: WorkingClassRole;
        middleClass: MiddleClassRole;
        capitalist: CapitalistRole;
        state: StateRole;
    };
    nextActionIndex: number;
    currentActionIndex: number;
    actionQueue: ActionEventDefinition[];
}

export interface Game {
    state: GameState;
    requestPlayerInput: <T extends PlayerActionType>(
        type: T,
        ...args: PlayerActionMap[T]['input'] extends any
            ? [NonNullable<PlayerActionMap[T]['input']>]
            : []
    ) => Promise<PlayerActionMap[T]['output']>;
    tick: () => Promise<void>;
    // calls .tick() until the queue is empty
    flush: (config?: { to?: ActionName; after?: ActionName }) => Promise<void>;
    next: <T extends ActionName>(
        event: ActionEventMap[T] extends { data: infer D } ? { type: T; data: D } : T | { type: T },
    ) => void;
}

export type RoleMap = {
    workingClass: WorkingClassRole;
    middleClass: MiddleClassRole;
    capitalist: CapitalistRole;
    state: StateRole;
};

export interface RunContext<CurrenRole extends null | RoleName = null>
    extends Omit<Game, 'tick' | 'flush'> {
    debug?: boolean;
    /** where will actions be added on the queue when calling next(...). null = root */
    queueIndex: number | null;
    currentRole: CurrenRole extends RoleName ? RoleMap[CurrenRole] : null;
    /** accounts for capitalist */
    getMoney: (role: RoleName) => number;
    /** accounts for capitalist */
    addMoney: (role: RoleName, amount: number, source: 'money' | 'capital') => void;
    spendMoney: (
        role: RoleName,
        amount: number,
        config?: { source?: 'money' | 'capital'; canTakeLoans?: boolean },
    ) => void;
}

export interface Action<
    Type extends string,
    CurrenRole extends null | RoleName = null,
    Data extends AnyObject | undefined = undefined,
> {
    readonly type: Type;
    /** short description for quick overview. full details added in UI */
    readonly info?: string;
    readonly data?: Data;
    readonly condition?: (
        ctx: RunContext<CurrenRole>,
        data: Data extends undefined ? never : Data,
    ) => Array<[string, boolean]>;
    readonly run: (
        ctx: RunContext<CurrenRole>,
        data: Data extends undefined ? never : Data,
    ) => void | Promise<void>;
}

export type ActionEvent<T extends string, D = undefined> = D extends undefined
    ? { type: T; data?: undefined | null }
    : { type: T; data: D };

export type GetActionData<A extends Action<string, any>> =
    A extends Action<string, infer D> ? D : never;

export type GetActionEventData<A extends ActionEvent<string, any>> =
    A extends ActionEvent<string, infer D> ? D : never;

type RoleActionMap = ActionDefs['roleActions'];
export type RoleActionName = keyof RoleActionMap;
export type RoleActionDefinition = RoleActionMap[RoleActionName];
export type RoleActionEventMap = {
    [K in keyof RoleActionMap]: ActionEventFromAction<RoleActionMap[K]>;
};

export type PlayerActionMap = ActionDefs['playerInputActions'];
export type PlayerActionType = keyof PlayerActionMap;

export type ActionEventFromAction<A> =
    A extends Action<string, any, undefined>
        ? ActionEvent<A['type']>
        : A extends Action<string, any, infer D>
          ? ActionEvent<A['type'], D>
          : never;

export type ActionMap = ActionDefs['actions'];
export type ActionName = keyof ActionMap;
export type ActionEventMap = {
    [K in ActionName]: ActionEventFromAction<ActionMap[K]>;
};
export type ActionEventDefinition = ActionEventMap[ActionName];
