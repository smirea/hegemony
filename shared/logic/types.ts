import { z, type ZodNever, type ZodType } from 'zod';
import { zodObjectEnum } from 'shared/utils/zod';

import type WorkingClassRole from './roles/WorkingClassRole';
import type MiddleClassRole from './roles/MiddleClassRole';
import type CapitalistRole from './roles/CapitalistRole';
import type StateRole from './roles/StateRole';
import type Game from './Game';

export const RoleEnum = {
    workingClass: 'workingClass',
    middleClass: 'middleClass',
    capitalist: 'capitalist',
    state: 'state',
} as const;

export type PolicyString = `${1 | 2 | 3 | 4 | 5 | 6 | 7}${'A' | 'B' | 'C'}`;
export type PolicyValue = 0 | 1 | 2;

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

export type CompanyTradeableResource = TradeableResource | typeof ResourceEnum.influence;

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

export type Industry = 'food' | 'healthcare' | 'education' | 'luxury' | 'influence';
export type CompanyWorkerType = keyof typeof WorkerTypeEnum;

export type WageId = 'l1' | 'l2' | 'l3';

export interface Company {
    id: CompanyCard['id'];
    workers: Array<CompanyWorker['id']>;
    wages: WageId;
    automationToken?: boolean;
    strike?: boolean;
}

export interface CompanyWorker {
    id: number;
    role: WorkingClassRole['id'] | MiddleClassRole['id'];
    type: CompanyWorkerType;
    company: null | Company['id'];
    committed?: boolean;
    union?: boolean;
}

export type RoleNameNoState = WorkingClassRole['id'] | MiddleClassRole['id'] | CapitalistRole['id'];
export type RoleNameNoWorkingClass = StateRole['id'] | MiddleClassRole['id'] | CapitalistRole['id'];
export type RoleNameWorkingMiddleClass = WorkingClassRole['id'] | MiddleClassRole['id'];
export type RoleNameMiddleCapitalist = MiddleClassRole['id'] | CapitalistRole['id'];

export type RoleMap = {
    workingClass: WorkingClassRole;
    middleClass: MiddleClassRole;
    capitalist: CapitalistRole;
    state: StateRole;
};

export interface RunContext<CurrenRole extends null | RoleName = null> {
    next: ReturnType<Game['createNext']>;
    /** where will actions be added on the queue when calling next(...). null = root */
    queueIndex: number | null;
    currentRole: CurrenRole extends RoleName ? RoleMap[CurrenRole] : null;
}

export type ActionEvent<T extends string | number | symbol, D = undefined> = D extends undefined
    ? { type: T; data?: undefined | null }
    : { type: T; data: D };

type ValidationResult = [string, boolean];

export interface Action<PlayerInput extends ZodType = ZodNever> {
    /** needs to return true in order for the action to be valid in the first place */
    condition?: () => ValidationResult[];
    /** ensures the passed input actually makes sense */
    validateInput?: (
        input: PlayerInput extends ZodNever ? never : z.infer<PlayerInput>,
    ) => ValidationResult[];
    playerInputSchema?: PlayerInput;
    run: (input: PlayerInput extends ZodNever ? never : z.infer<PlayerInput>) => void;
}

export type ActionEventFromAction<K extends string | number | symbol, A extends Action<any>> =
    A extends Action<ZodNever>
        ? ActionEvent<K>
        : A extends Action<infer D>
          ? ActionEvent<K, D>
          : never;

export type BuyGoodsAndServicesSources =
    | MiddleClassRole['id']
    | CapitalistRole['id']
    | StateRole['id']
    | 'foreign-market';

export interface CompanyCard {
    id: string;
    name: string;
    cost: number;
    industry: Industry;
    production: number;
    /** middle class (when WC worker) or capitalist (when automation token) */
    extraProduction?: number;
    /** capitalist only */
    fullyAutomated?: boolean;
    wages: Record<WageId, number>;
    workers: Array<{
        type: CompanyWorkerType;
        roles: Array<RoleMap['workingClass']['id'] | RoleMap['middleClass']['id']>;
        /** only for middle class companies */
        optional?: boolean;
    }>;
}

export type RoleName = (typeof RoleEnum)[keyof typeof RoleEnum];

/** *** zod schemas *****/
export const RoleNameSchema = zodObjectEnum(RoleEnum);
export const RoleNameNoStateSchema = z.enum([
    RoleEnum.workingClass,
    RoleEnum.middleClass,
    RoleEnum.capitalist,
]);

export const PolicyEnumSchema = zodObjectEnum(PolicyEnum);
export const PolicyValueSchema = z.union([z.literal(0), z.literal(1), z.literal(2)]);
export const PolicyStringSchema = z.string().regex(/^[1-7][A-C]$/);

export const IndustrySchema = z.enum(['food', 'healthcare', 'education', 'luxury', 'influence']);

export const CompanyWorkerTypeSchema = zodObjectEnum(WorkerTypeEnum);
export const WageIdSchema = z.enum(['l1', 'l2', 'l3']);

export const CompanyIdSchema = z.string();
export const CompanyWorkerIdSchema = z.number();
export const BusinessDealIdSchema = z.string();

export const BuyGoodsAndServicesSourcesSchema = z.enum([
    'foreign-market',
    RoleNameSchema.enum.capitalist,
    RoleNameSchema.enum.state,
    RoleNameSchema.enum.middleClass,
]);

export const ResourceEnumSchema = zodObjectEnum(ResourceEnum);

export const TradeableResourceSchema = ResourceEnumSchema.extract([
    ResourceEnumSchema.enum.food,
    ResourceEnumSchema.enum.healthcare,
    ResourceEnumSchema.enum.education,
    ResourceEnumSchema.enum.luxury,
]);

export const TradeableResourceAndInfluenceSchema = ResourceEnumSchema.extract([
    ResourceEnumSchema.enum.food,
    ResourceEnumSchema.enum.healthcare,
    ResourceEnumSchema.enum.education,
    ResourceEnumSchema.enum.luxury,
    ResourceEnumSchema.enum.influence,
]);

export const AssignWorkersSchema = z.array(
    z.union([
        z.object({
            target: z.literal('union'),
            workerId: CompanyWorkerIdSchema,
        }),
        z.object({
            target: z.literal('company'),
            workerId: CompanyWorkerIdSchema,
            companyId: CompanyIdSchema,
        }),
    ]),
);
