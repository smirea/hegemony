import { type Industry, type Resource, type RoleName } from 'shared/logic/types';

export const remPx = 16;

export const colors = {
    role: {
        workingClass: 'var(--working-class-color)',
        middleClass: 'var(--middle-class-color)',
        capitalist: 'var(--capitalist-color)',
        state: 'var(--state-color)',
    } satisfies Record<RoleName, string>,
    industry: {
        food: 'var(--industry-food-color)',
        luxury: 'var(--industry-luxury-color)',
        healthcare: 'var(--industry-healthcare-color)',
        education: 'var(--industry-education-color)',
        influence: 'var(--industry-influence-color)',
    } satisfies Record<Industry, string>,
    resource: {
        food: 'var(--resource-food-color)',
        luxury: 'var(--resource-luxury-color)',
        healthcare: 'var(--resource-healthcare-color)',
        education: 'var(--resource-education-color)',
        influence: 'var(--resource-influence-color)',
        money: 'white',
    } satisfies Record<Resource, string>,
} as const;
