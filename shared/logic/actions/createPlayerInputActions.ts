import { type AnyObject } from 'shared/types';

import { type ActionEventFromAction, type RoleActionDefinition, type RoleName } from '../types';

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
            type: 'pickAction',
            async run(_: { role: RoleName }): Promise<ActionEventFromAction<RoleActionDefinition>> {
                throw new Error('implement me');
            },
        }),
    };
}
