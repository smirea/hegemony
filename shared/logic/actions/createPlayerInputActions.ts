import { type AnyObject } from 'shared/types';

import {
    type Industry,
    type WorkerType,
    type ActionEventFromAction,
    type RoleActionDefinition,
    type RoleName,
    type RoleNameNoState,
} from '../types';

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
            type: 'educate-worker',
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
            type: 'swap-workers',
            async run(_: { role: RoleName }): Promise<Array<[id1: number, id2: number]>> {
                throw new Error('implement me');
            },
        }),
        ...playerInputAction({
            type: 'commit-workers',
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
    };
}
