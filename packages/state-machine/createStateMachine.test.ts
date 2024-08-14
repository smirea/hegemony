import { beforeEach, expect, test } from 'vitest';
import createStateMachine from './createStateMachine';

test('it initializes', () => {
    const stateMachine = createStateMachine<'start' | 'done', 'ev1' | 'ev2'>({
        id: 'test',
        initial: 'start',
        states: {
            start: {
                on: {
                    ev1: 'start',
                    ev2: 'done',
                },
            },
            done: {
                type: 'final',
            },
        },
    });
});
