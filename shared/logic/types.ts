import { type CompanyDefinition } from './cards/companyCards';

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

export type TradeableResource =
    | typeof ResourceEnum.food
    | typeof ResourceEnum.healthcare
    | typeof ResourceEnum.education
    | typeof ResourceEnum.luxury;

export const WorkerTypeEnum = {
    influence: ResourceEnum.influence,
    food: ResourceEnum.food,
    healthcare: ResourceEnum.healthcare,
    education: ResourceEnum.education,
    luxury: ResourceEnum.luxury,
    unskilled: 'unskilled',
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

export type Industry = 'food' | 'healthcare' | 'education' | 'luxury' | 'influence';
export type WorkerType = keyof typeof WorkerTypeEnum;

export interface WorkingClassRole extends BaseRole {
    id: typeof RoleEnum.workingClass;
    availableVotingCubes: number;
    workers: Record<CompanyWorker['id'], CompanyWorker>;
    availableWorkers: Record<WorkerType, number>;
    strikeTokens: number;
    unions: Partial<Record<Industry, boolean>>;
    demonstration?: boolean;
}
export interface MiddleClassRole extends BaseRole {
    id: typeof RoleEnum.middleClass;
    availableVotingCubes: number;
    workers: Record<CompanyWorker['id'], CompanyWorker>;
    availableWorkers: Record<WorkerType, number>;
    producedResources: Record<TradeableResource, number>;
    prices: Record<TradeableResource, number>;
    storage: Partial<Record<TradeableResource, boolean>>;
    /** built companies */
    companies: Record<Company['id'], Company>;
    /** which companies are available to purchase */
    companyMarket: string[];
    companyDeck: string[];
}
export interface CapitalistRole extends BaseRole {
    id: typeof RoleEnum.capitalist;
    availableVotingCubes: number;
    resources: BaseRole['resources'] & { capital: number };
    prices: Record<TradeableResource, number>;
    storage: Partial<Record<TradeableResource, boolean>>;
    /** built companies */
    companies: Record<Company['id'], Company>;
    /** which companies are available to purchase */
    companyMarket: string[];
    companyDeck: string[];
    automationTokens: number;
}

export interface StateRole extends BaseRole {
    id: typeof RoleEnum.state;
    legitimacy: Record<RoleNameNoState, number>;
    legitimacyTokens: Record<RoleNameNoState, number>;
    companies: Record<Company['id'], Company>;
    companyDeck: string[];
    benefits: Record<RoleNameNoState, Benefit[]>;
}

type Benefit =
    | { type: 'resource'; resource: Resource; amount: number }
    | { type: 'voting-cube'; amount: number };

export type WageId = 'l1' | 'l2' | 'l3';

export interface Company {
    id: CompanyDefinition['id'];
    workers: Array<CompanyWorker['id']>;
    wages: WageId;
    automationToken?: boolean;
    strike?: boolean;
}

export interface CompanyWorker {
    id: number;
    role: WorkingClassRole['id'] | MiddleClassRole['id'];
    type: WorkerType;
    company: null | Company['id'];
    committed?: boolean;
    union?: boolean;
}

export type RoleNameNoState = WorkingClassRole['id'] | MiddleClassRole['id'] | CapitalistRole['id'];
export type RoleNameNoWorkingClass = StateRole['id'] | MiddleClassRole['id'] | CapitalistRole['id'];
export type RoleNameWorkingMiddleClass = WorkingClassRole['id'] | MiddleClassRole['id'];
export type RoleNameMiddleCapitalist = MiddleClassRole['id'] | CapitalistRole['id'];

export interface GameState {
    players: Player[];
    settings: Record<string, never>;
    round: number;
    turn: number;
    currentRoleName: null | RoleName;
    board: {
        votingCubeBag: Record<RoleNameNoState, number>;
        policies: Record<PolicyName, number>;
        policyProposals: Partial<Record<PolicyName, { role: RoleName; value: number }>>;
        availableInfluence: number;
    };
    roles: {
        workingClass: WorkingClassRole;
        middleClass: MiddleClassRole;
        capitalist: CapitalistRole;
        state: StateRole;
    };
    nextWorkerId: number;
    nextActionIndex: number;
    currentActionIndex: number;
    actionQueue: ActionEventDefinition[];
}

export interface Game {
    state: GameState;
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

export interface RunContext<CurrenRole extends null | RoleName = null> {
    state: Game['state'];
    next: Game['next'];
    debug?: boolean;
    /** where will actions be added on the queue when calling next(...). null = root */
    queueIndex: number | null;
    currentRole: CurrenRole extends RoleName ? RoleMap[CurrenRole] : null;
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

export interface ActionFactoryContext {
    getCompanyDefinition: (id: CompanyDefinition['id']) => CompanyDefinition;
    requestPlayerInput: <T extends PlayerActionType>(
        type: T,
        ...args: PlayerActionMap[T]['input'] extends undefined
            ? []
            : [NonNullable<PlayerActionMap[T]['input']>]
    ) => Promise<PlayerActionMap[T]['output']>;
    /** accounts for capitalist */
    getMoney: (role: RoleName) => number;
    /** accounts for capitalist */
    addMoney: (role: RoleName, amount: number, source?: 'money' | 'capital') => void;
    spendMoney: (
        role: RoleName,
        amount: number,
        config?: { source?: 'money' | 'capital'; canTakeLoans?: boolean },
    ) => void;
    getProsperity: (role: RoleNameWorkingMiddleClass) => number;
    getWorkerById: (id: CompanyWorker['id']) => {
        worker: CompanyWorker;
        roleName: RoleNameWorkingMiddleClass;
    };
    getCompanyById: (id: Company['id']) => {
        company: Company;
        roleName: RoleNameNoWorkingClass;
    };
    buyFromForeignMarket: (
        state: GameState,
        roleName: RoleNameWorkingMiddleClass,
        resource: typeof ResourceEnum.food | typeof ResourceEnum.luxury,
        count: number,
        cfg?: { payTarriff?: boolean },
    ) => void;
}

export interface RoleAction<
    Type extends string,
    Roles extends RoleName,
    Data extends AnyObject | undefined = undefined,
> extends Action<Type, Roles, Data> {
    readonly isFreeAction?: boolean;
    readonly roles: readonly Roles[];
}

export interface CreateActionsContext extends ActionFactoryContext {
    getAction: <T extends ActionName>(type: T) => ActionMap[T];
    validateEvent: (event: any) => event is { type: ActionName };
}

export type BuyGoodsAndServicesSources =
    | MiddleClassRole['id']
    | CapitalistRole['id']
    | StateRole['id']
    | 'foreign-market';
