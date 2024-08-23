import { type ActionMap, type ActionName } from '../types';
import createRoleActions from './createRoleActions';
import createGameActions from './createGameActions';
import createPlayerInputActions from './createPlayerInputActions';

import type Game from '../Game';

interface CreateActionsResult {
    actions: ReturnType<typeof createRoleActions> & ReturnType<typeof createGameActions>;
    roleActions: ReturnType<typeof createRoleActions>;
    playerInputActions: ReturnType<typeof createPlayerInputActions>;
    validateEvent: (event: any) => event is { type: ActionName };
    getAction: <T extends ActionName>(type: T) => ActionMap[T];
}

export function createActions(game: Game): CreateActionsResult {
    const getAction = <T extends ActionName>(type: T): ActionMap[T] => {
        // @ts-ignore
        if (!actions[type]) throw new Error(`event.type is not a valid action: ${type}`);
        // @ts-ignore
        return actions[type];
    };

    const validateEvent = (event: any): event is { type: ActionName } => {
        if (!event.type) throw new Error('event.type is required');
        getAction(event.type); // throws if not valid
        return event;
    };

    const commonActions = createRoleActions(game);

    const roleActions = {
        ...commonActions,
    };

    const actions = {
        ...createGameActions(game),
        ...roleActions,
    };

    return {
        actions,
        roleActions,
        playerInputActions: createPlayerInputActions(),
        validateEvent,
        getAction,
    };
}
