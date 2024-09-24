import { type RoleName } from 'shared/logic/types';

export const remPx = 16;

export const colors = {
    role: {
        workingClass: 'var(--working-class-color)',
        middleClass: 'var(--middle-class-color)',
        capitalist: 'var(--capitalist-color)',
        state: 'var(--state-color)',
    } satisfies Record<RoleName, string>,
} as const;
