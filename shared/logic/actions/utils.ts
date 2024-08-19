import type { AnyObject } from 'shared/types';
import type {
    Action,
    ActionEventMap,
    ActionName,
    RoleAction,
    RoleActionEventMap,
    RoleName,
} from '../types';

export function roleAction<
    T extends string,
    R extends RoleName,
    D extends AnyObject | undefined = undefined,
>(action: RoleAction<T, R, D>): { [K in T]: RoleAction<T, R, D> } {
    return { [action.type]: action } as { [K in T]: RoleAction<T, R, D> };
}

export function action<
    T extends string,
    R extends RoleName,
    D extends AnyObject | undefined = undefined,
>(action: Action<T, R, D>): { [K in T]: Action<T, R, D> } {
    return { [action.type]: action } as { [K in T]: Action<T, R, D> };
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
