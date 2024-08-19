import { type AnyObject } from 'shared/types';
import _ from 'lodash';

import {
    type Industry,
    type WorkerType,
    type ActionEventFromAction,
    type RoleActionDefinition,
    type RoleName,
    type RoleNameNoState,
    type Company,
    type CompanyWorker,
    type RoleNameNoWorkingClass,
    type BuyGoodsAndServicesSources,
    type TradeableResource,
    type RoleNameWorkingMiddleClass,
    type RoleNameMiddleCapitalist,
    type WageId,
} from '../types';
import { type CompanyDefinition } from '../cards/companyCards';

interface PlayerInputAction<
    Type extends string,
    Output,
    Input extends AnyObject | undefined = undefined,
> {
    type: Type;
    input?: Readonly<Input>;
    output: Output;
    run: (...args: Input extends undefined ? [] : [Readonly<Input>]) => Promise<Output>;
}

function playerInputAction<
    Type extends string,
    Output,
    Input extends AnyObject | undefined = undefined,
>(type: Type): PlayerInputAction<Type, Output, Input> {
    return {
        type,
        async run() {
            throw new Error('player input action not implemented: ' + type);
        },
    } as any;
}

export default function createPlayerInputActions() {
    const actions = [
        playerInputAction<
            'pick-action',
            ActionEventFromAction<RoleActionDefinition>,
            { role: RoleName }
        >('pick-action'),
        playerInputAction<'workers:educate', { id: number; type: WorkerType }, { role: RoleName }>(
            'workers:educate',
        ),
        playerInputAction<'adjust-prices', Partial<Record<Industry, number>>, { role: RoleName }>(
            'adjust-prices',
        ),
        playerInputAction<'workers:swap', Array<[id1: number, id2: number]>, { role: RoleName }>(
            'workers:swap',
        ),
        playerInputAction<'workers:commit', { companyId: number }, { role: RoleName }>(
            'workers:commit',
        ),
        playerInputAction<'state:pick-role', RoleNameNoState, undefined>('state:pick-role'),
        playerInputAction<
            'company:build',
            { companyId: CompanyDefinition['id'] },
            { role: RoleName }
        >('company:build'),
        playerInputAction<
            'company:build:assign-workers',
            CompanyWorker['id'][],
            { role: RoleName; company: Company['id'] }
        >('company:build:assign-workers'),
        playerInputAction<'company:sell', Company['id'], { role: RoleName }>('company:sell'),
        playerInputAction<
            'company:strike',
            Array<{ companyId: Company['id']; role: RoleNameNoWorkingClass }>,
            { role: RoleName }
        >('company:strike'),
        playerInputAction<
            'buy-storage',
            { resource: TradeableResource },
            { role: RoleNameMiddleCapitalist }
        >('buy-storage'),
        playerInputAction<
            'buy-goods-and-services',
            Array<{
                resource: TradeableResource;
                count: number;
                source: BuyGoodsAndServicesSources;
            }>,
            {
                role: RoleName;
                sources: readonly BuyGoodsAndServicesSources[];
                maxSources: number;
                maxPerSource: number;
            }
        >('buy-goods-and-services'),
        playerInputAction<
            'company:adjust-wages',
            Array<{ companyId: Company['id']; wages: WageId }>,
            { role: RoleNameNoWorkingClass }
        >('company:adjust-wages'),
        playerInputAction<
            'assign-workers',
            Array<
                | {
                      type: 'company';
                      companyId: Company['id'];
                      role: RoleNameNoWorkingClass;
                      workers: Array<CompanyWorker['id']>;
                  }
                | { type: 'union'; workerId: CompanyWorker['id'] }
            >,
            { role: RoleNameWorkingMiddleClass }
        >('assign-workers'),
        playerInputAction<'company:extra-shift', { companyId: Company['id'] }>(
            'company:extra-shift',
        ),
    ];

    const result = _.keyBy(actions, 'type') as {
        [k in (typeof actions)[number]['type']]: (typeof actions)[number] & { type: k };
    };

    return result;
}
