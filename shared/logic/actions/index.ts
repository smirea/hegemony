import {
    type ActionFactoryContext,
    type CreateActionsContext,
    type ActionMap,
    type ActionName,
} from '../types';
import createRoleActions from './createRoleActions';
import createGameActions from './createGameActions';
import createPlayerInputActions from './createPlayerInputActions';

interface CreateActionsResult extends Omit<CreateActionsContext, keyof ActionFactoryContext> {
    actions: ReturnType<typeof createRoleActions> & ReturnType<typeof createGameActions>;
    roleActions: ReturnType<typeof createRoleActions>;
    playerInputActions: ReturnType<typeof createPlayerInputActions>;
}

export function createActions(factoryContext: ActionFactoryContext): CreateActionsResult {
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
        ...factoryContext,
        getAction,
        validateEvent,
    };

    const commonActions = createRoleActions(factoryContext);

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
