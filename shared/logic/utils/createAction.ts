import { type ZodNever, type ZodType } from 'zod';

import type { Action } from '../types';

export default function createAction<PlayerInput extends ZodType = ZodNever>(
    config: Action<PlayerInput>,
): Action<PlayerInput> {
    return config;
}
