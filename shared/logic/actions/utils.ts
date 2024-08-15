import type { AnyObject } from 'shared/types';
import type { Action, ActionEventMap, ActionMap, ActionName, RoleActionEventMap } from '../types';

export interface RoleAction<T extends string, D extends AnyObject | undefined = undefined>
    extends Action<T, D> {
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

export function actionEvent<T extends ActionName>(
    type: T,
    ...args: ActionEventMap[T] extends { data: any } ? [ActionEventMap[T]['data']] : []
): ActionEventMap[T] {
    return { type, data: args[0] } as any;
}

export function roleActionEvent<T extends keyof RoleActionEventMap>(
    type: T,
    ...args: RoleActionEventMap[T] extends { data: any } ? [RoleActionEventMap[T]['data']] : []
): RoleActionEventMap[T] {
    return { type, data: args[0] } as any;
}

export interface CreateActionsContext {
    getAction: <T extends ActionName>(type: T) => ActionMap[T];
    validateEvent: (event: any) => event is { type: ActionName };
}
