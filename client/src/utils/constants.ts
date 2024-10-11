import {
    type CompanyWorkerType,
    type Industry,
    type Resource,
    type RoleName,
} from 'shared/logic/types';

export const remPx = 16;

export const colors = {
    boardColor: 'var(--board-color)',
    textColor: 'var(--text-color)',
    textColorMuted: 'rgba(var(--text-color-params), 0.5)',
    textColorInverted: 'var(--text-color-inverted)',
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
    worker: {
        unskilled: 'var(--worker-unskilled-color)',
        food: 'var(--worker-food-color)',
        luxury: 'var(--worker-luxury-color)',
        healthcare: 'var(--worker-healthcare-color)',
        education: 'var(--worker-education-color)',
        influence: 'var(--worker-influence-color)',
    } satisfies Record<CompanyWorkerType, string>,
} as const;
