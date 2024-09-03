import _ from 'lodash';

import type MiddleClassRole from './MiddleClassRole';
import type WorkingClassRole from './WorkingClassRole';

export function createIncreaseProsperity(role: WorkingClassRole | MiddleClassRole) {
    return ({ withHealthcare = false }: { withHealthcare?: boolean } = {}) => {
        role.state.prosperity = Math.min(role.state.prosperity + 1, 10);
        role.state.score += role.state.prosperity;
        if (withHealthcare) role.state.score += 2;
    };
}

export function createGetPopulation(role: WorkingClassRole | MiddleClassRole) {
    return () => _.clamp(Math.ceil((_.size(role.state.workers) - 10) / 3), 3, 10);
}
