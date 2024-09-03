import { type ZodNever, type ZodType } from 'zod';

import { type AnyActionEvent } from '../types.generated';

import type { Action } from '../types';

export default function action<PlayerInput extends ZodType = ZodNever>(
    config: Action<PlayerInput>,
): Action<PlayerInput> {
    return config;
}

export function actionEvent<T extends AnyActionEvent>(event: T): T {
    return event;
}
