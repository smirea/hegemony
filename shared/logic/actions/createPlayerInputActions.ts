import { type AnyObject } from 'shared/types';

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
} from '../types';
import { type CompanyDefinition } from '../companies';

interface PlayerInputAction<
    Type extends string,
    Output,
    Input extends AnyObject | undefined = undefined,
> {
    type: Type;
    input?: Input;
    output: Output;
    run: (...args: Input extends undefined ? [] : [Input]) => Promise<Output>;
}

function playerInputAction<
    Type extends string,
    Output,
    Input extends AnyObject | undefined = undefined,
>(payload: {
    type: Type;
    run: (...args: Input extends undefined ? [] : [Input]) => Promise<Output>;
}): { [K in Type]: PlayerInputAction<Type, Output, Input> } {
    return { [payload.type]: payload } as any;
}

export default function createPlayerInputActions() {
    return {
        ...playerInputAction({
            type: 'pick-action',
            async run(_: { role: RoleName }): Promise<ActionEventFromAction<RoleActionDefinition>> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'workers:educate',
            async run(_: { role: RoleName }): Promise<{ id: number; type: WorkerType }> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'adjust-prices',
            async run(_: { role: RoleName }): Promise<Partial<Record<Industry, number>>> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'workers:swap',
            async run(_: { role: RoleName }): Promise<Array<[id1: number, id2: number]>> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'workers:commit',
            async run(_: { role: RoleName }): Promise<{ companyId: number }> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'state:pick-role',
            async run(): Promise<RoleNameNoState> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'company:build',
            async run(_: { role: RoleName }): Promise<{ companyId: CompanyDefinition['id'] }> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'company:build:assign-workers',
            async run(_: {
                role: RoleName;
                company: Company['id'];
            }): Promise<CompanyWorker['id'][]> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'company:sell',
            async run(_: { role: RoleName }): Promise<Company['id']> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'company:strike',
            async run(_: {
                role: RoleName;
            }): Promise<Array<{ companyId: Company['id']; role: RoleNameNoWorkingClass }>> {
                throw new Error('implement me');
            },
        }),
    };
}
