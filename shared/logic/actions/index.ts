import { type ActionMap, type ActionName } from '../types';
import createCommonActions from './createCommonActions';
import createGameActions from './createGameActions';
import createPlayerInputActions from './createPlayerInputActions';
import { type CreateActionsContext } from './utils';

interface CreateActionsResult extends CreateActionsContext {
    actions: ReturnType<typeof createCommonActions> & ReturnType<typeof createGameActions>;
    roleActions: ReturnType<typeof createCommonActions>;
    playerInputActions: ReturnType<typeof createPlayerInputActions>;
}

export function createActions(): CreateActionsResult {
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

    const ctx: CreateActionsContext = {
        getAction,
        validateEvent,
    };

    const commonActions = createCommonActions();

    const roleActions = {
        ...commonActions,
    };

    const actions = {
        ...createGameActions(ctx),
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
