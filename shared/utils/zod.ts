import { objectKeys } from './ts';
import { z } from 'zod';

export function zodObjectEnum<T extends Record<string, any>>(data: T) {
    const [k, ...rest] = objectKeys(data);
    return z.enum([k!, ...rest]);
}
