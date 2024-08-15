import { AnyObject } from 'shared/types';
import {
    ActionName,
    type ActionEventDefinition,
    type ActionEventMap,
    type PlayerActionMap,
    type PlayerActionType,
} from './actions';

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
    loans: number;
    usedActions: Array<'basic' | 'free'>;
    resources: Record<Resource, number>;
}

interface WorkingClassRole extends BaseRole { }
interface MiddleClassRole extends BaseRole { }
interface CapitalistRole extends BaseRole { }
interface StateRole extends BaseRole { }

export interface GameState {
    players: Player[];
    settings: AnyObject;
    round: number;
    turn: number;
    currentRole: null | RoleName;
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
    flush: (config?: { to?: ActionName, after?: ActionName }) => Promise<void>;
    next: <T extends ActionName>(
        event: ActionEventMap[T] extends { data: infer D } ? { type: T; data: D } : T | { type: T }
    ) => void;
}

export interface RunContext extends Omit<Game, 'tick' | 'flush'> {
    debug?: boolean;
    /** where will actions be added on the queue when calling next(...). null = root */
    queueIndex: number | null;
    currentRoleState: WorkingClassRole | MiddleClassRole | CapitalistRole | StateRole;
}

export interface Action<Type extends string, Data extends AnyObject | undefined = undefined> {
    readonly type: Type;
    readonly data?: Data;
    readonly condition?: (ctx: RunContext, data: Data extends undefined ? never : Data) =>
        Array<[string, boolean]>;
    readonly run: (ctx: RunContext, data: Data extends undefined ? never : Data) => void | Promise<void>;
}

export type ActionEvent<T extends string, D = undefined> = D extends undefined
    ? { type: T; data?: undefined | null }
    : { type: T; data: D };

export type GetActionData<A extends Action<string, any>> =
    A extends Action<string, infer D> ? D : never;

export type GetActionEventData<A extends ActionEvent<string, any>> =
    A extends ActionEvent<string, infer D> ? D : never;
