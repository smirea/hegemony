export type StateMachineDefinition = {
    [k in keyof typeof stateMachineDefinition]: {
        StateName: (typeof stateMachineDefinition)[k]['states'][number];
        EventName: (typeof stateMachineDefinition)[k]['events'][number];
    };
};

// --- start: generated via codemod-createMachine-types.ts ---
export const stateMachineDefinition = {
    xoxo: {
        states: ['start', 'wat', 'foo', 'other'],
        events: ['ev1', 'ev2', 'ev3', 'ev4'],
    },
} as const;
// --- end: generated via codemod-createMachine-types.ts ---
