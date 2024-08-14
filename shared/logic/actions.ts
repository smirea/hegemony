import { AnyObject } from 'shared/types';
import { Action, ActionEvent, PolicyName, RoleEnum, RoleName } from './types';

export interface RoleAction<T extends string, D extends AnyObject | undefined = undefined> extends Action<T, D> {
    name: string;
    description: string;
    isFreeAction?: boolean;
}

export function roleAction<T extends string, D extends AnyObject>(
    action: RoleAction<T, D>,
): { [K in T]: RoleAction<T, D> } {
    return { [action.type]: action } as { [K in T]: RoleAction<T, D> };
}

export function action<T extends string, D extends AnyObject | undefined = undefined>(
    action: Action<T, D>,
): { [K in T]: Action<T, D> } {
    return { [action.type]: action } as { [K in T]: Action<T, D> };
}

const roleActions = {
    ...roleAction({
        type: 'workingClass:basic:proposeBill',
        name: 'Propose Bill',
        description: '',
        condition: ({ state }) =>
            Object.values(state.board.policyProposals).filter(p => p.role === RoleEnum.workingClass).length < 3,
        run: ({ state }, { policy, value }: { policy: PolicyName; value: number }) => {
            state.board.policyProposals[policy] = {
                role: RoleEnum.workingClass,
                value,
            };
        },
    }),
    ...roleAction({
        type: 'workingClass:free:payLoan',
        name: 'Pay Load',
        isFreeAction: true,
        description: '',
        condition: ({ state }) =>
            state.roles.workingClass.resources.money >= 50 &&
            state.roles.workingClass.loans > 0,
        run: ({ state }) => {
            state.roles.workingClass.loans--;
            state.roles.workingClass.resources.money -= 50;
        },
    }),
};

type RoleActionMap = typeof roleActions;
type RoleActionType = keyof RoleActionMap;
type RoleActionDefinition = RoleActionMap[RoleActionType];

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

export const playerInputActions = {
    ...playerInputAction({
        type: 'pickAction',
        async run(_: { role: RoleName }): Promise<ActionEventFromAction<RoleActionDefinition>> {
            throw new Error('implement me');
        },
    }),
};

export type PlayerActionMap = typeof playerInputActions;
export type PlayerActionType = keyof PlayerActionMap;

export const actions = {
    ...action({
        type: 'workingClass:turn:start',
        async run({ next, requestPlayerInput }) {
            next(await requestPlayerInput('pickAction', { role: RoleEnum.workingClass }));
        },
    }),
    ...action({
        type: 'game:start',
        async run({ state, next }) {
            const order = [
                RoleEnum.workingClass,
                RoleEnum.middleClass,
                RoleEnum.capitalist,
                RoleEnum.state,
            ];
            state.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
            state.currentRole = -1;
            next('game:nextRole');
        },
    }),
    ...action({
        type: 'game:nextRole',
        async run({ state: game, next }) {
            game.currentRole = (game.currentRole + 1) % game.players.length;
            next('workingClass:turn:start');
        },
    }),
    ...roleActions,
};

type ActionEventFromAction<A extends Action<string, any> | Action<string, never>> =
    A extends Action<string, any>
    ? A extends Action<string, infer D>
    ? ActionEvent<A['type'], D>
    : never
    : ActionEvent<A['type']>;

export type ActionMap = typeof actions;
export type ActionEventMap = {
    [K in keyof ActionMap]: ActionEventFromAction<ActionMap[K]>;
};
export type ActionEventDefinition = ActionEventMap[keyof ActionMap];
