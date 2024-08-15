import { AnyObject } from 'shared/types';
import { Action, ActionEvent, PolicyName, RoleEnum, RoleName } from './types';
import chalk from 'chalk';

export interface RoleAction<T extends string, D extends AnyObject | undefined = undefined> extends Action<T, D> {
    name: string;
    description: string;
    isFreeAction?: boolean;
}

export function roleAction<T extends string, D extends AnyObject | undefined = undefined>(
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
        type: 'action:free:skip',
        isFreeAction: true,
        description: '',
        name: '',
        async run({ next }) {
            next('game:role:current');
        },
    }),
    ...roleAction({
        type: 'action:free:payLoan',
        name: 'Pay Load',
        isFreeAction: true,
        description: '',
        condition: ({ currentRoleState }) => [
            ['hasMoney', currentRoleState.resources.money >= 50],
            ['hasLoans', currentRoleState.loans > 0],
        ],
        run: ({ currentRoleState }) => {
            currentRoleState.loans--;
            currentRoleState.resources.money -= 50;
        },
    }),
    ...roleAction({
        type: 'action:basic:proposeBill',
        name: 'Propose Bill',
        description: '',
        condition: ({ state }, { policy, value }: { policy: PolicyName; value: number }) => [
            ['hasVotes', Object.values(state.board.policyProposals)
                .filter(p => p.role === state.currentRole!).length < 3],
            ['notProposed', !state.board.policyProposals[policy]],
            ['isDifferent', state.board.policies[policy] !== value],
            ['isValid', value === 0 || value === 1 || value === 2],
        ],
        run: ({ state }, { policy, value }: { policy: PolicyName; value: number }) => {
            state.board.policyProposals[policy] = {
                role: state.currentRole!,
                value,
            };
        },
    }),
};

type RoleActionMap = typeof roleActions;
type RoleActionType = keyof RoleActionMap;
type RoleActionDefinition = RoleActionMap[RoleActionType];
export type RoleActionEventMap = {
    [K in keyof RoleActionMap]: ActionEventFromAction<RoleActionMap[K]>;
};

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

function validateEvent(event: any): event is { type: ActionName } {
    if (!event.type) throw new Error('event.type is required');
    if (!(actions as any)[event.type]) throw new Error(`event.type is not a valid action: ${event.type}`);
    return event;
}

export const actions = {
    ...action({
        type: 'game:start',
        async run({ state, next }) {
            const order = [
                RoleEnum.workingClass,
                RoleEnum.middleClass,
                RoleEnum.capitalist,
                RoleEnum.state,
            ];
            state.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role)); state.round = 0;
            state.round = 0;
            next('game:round:start');
        },
    }),
    ...action({
        type: 'game:round:start',
        async run({ state, debug, next }) {
            state.currentRole = null;
            ++state.round;
            state.turn = 0;
            if (debug) console.log(chalk.green.bold('——— round:'), state.round);
            next('game:role:next');
        },
    }),
    ...action({
        type: 'game:turn:start',
        async run({ state, debug, next }) {
            ++state.turn;
            if (debug) console.log(chalk.green.bold('——— turn:'), state.turn);
            next('game:role:next');
        },
    }),
    ...action({
        type: 'game:role:turn',
        async run({ next, requestPlayerInput, currentRoleState, state }) {
            const action = await requestPlayerInput('pickAction', { role: state.currentRole! });
            validateEvent(action);
            if (roleActions[action.type].isFreeAction) {
                currentRoleState.usedActions.push('free');
            } else {
                currentRoleState.usedActions.push('basic');
            }
            next(action);
            next('game:role:current');
        },
    }),
    ...action({
        type: 'game:role:next',
        async run({ state, next }): Promise<void> {
            if (state.currentRole == state.players[state.players.length - 1].role) {
                return next('game:turn:end');
            }
            if (state.currentRole == null) {
                state.currentRole = state.players[0].role;
            } else {
                state.currentRole = state.players[
                    state.players.findIndex(p => p.role === state.currentRole) + 1
                ].role;
            }

            state.roles[state.currentRole!].usedActions = [];
            next('game:role:turn');
        },
    }),
    ...action({
        type: 'game:role:current',
        async run({ currentRoleState, next }): Promise<void> {
            if (currentRoleState.usedActions.length >= 2) return next('game:role:next');
            // current role still has stuff to do
            return next('game:role:turn');
        },
    }),
    ...action({
        type: 'game:turn:end',
        async run({ next, state }): Promise<void> {
            if (state.turn >= 4) return next('game:round:end');
            ++state.turn;
            next('game:round:start');
        },
    }),
    ...action({
        type: 'game:round:end',
        async run({ next, state }): Promise<void> {
            if (state.round >= 4) return next('game:end');
            ++state.round;
            next('game:round:start');
        },
    }),
    ...action({
        type: 'game:end',
        async run() {
            // noop
        },
    }),
    ...roleActions,
};

type ActionEventFromAction<A extends Action<string> | Action<string, any>> =
    A extends Action<string, undefined>
    ? ActionEvent<A['type']>
    : A extends Action<string, infer D>
    ? ActionEvent<A['type'], D>
    : never;

export type ActionMap = typeof actions;
export type ActionName = keyof ActionMap;
export type ActionEventMap = {
    [K in ActionName]: ActionEventFromAction<ActionMap[K]>;
};
export type ActionEventDefinition = ActionEventMap[ActionName];

export function actionEvent<T extends ActionName>(
    type: T,
    ...args: ActionEventMap[T] extends { data: any }
        ? [(ActionEventMap[T])['data']]
        : []

): ActionEventMap[T] {
    return { type, data: args[0] } as any;
}

export function roleActionEvent<T extends keyof RoleActionMap>(
    type: T,
    ...args: RoleActionEventMap[T] extends { data: any }
        ? [(RoleActionEventMap[T])['data']]
        : []

): RoleActionEventMap[T] {
    return { type, data: args[0] } as any;
}
