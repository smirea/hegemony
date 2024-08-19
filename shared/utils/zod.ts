import { z } from 'zod';

import { objectKeys } from './ts';

export function zodObjectEnum<T extends Record<string, any>>(data: T) {
    const [k, ...rest] = objectKeys(data);
    return z.enum([k!, ...rest]);
}
