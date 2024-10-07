import _ from 'lodash';

import type { Company, CompanyWorker, CompanyWorkerType } from '../types';
import type WorkingClassRole from './WorkingClassRole';
import type MiddleClassRole from './MiddleClassRole';
import type CapitalistRole from './CapitalistRole';
import type StateRole from './StateRole';

export function createIncreaseProsperity(role: WorkingClassRole | MiddleClassRole) {
    return ({ withHealthcare = false }: { withHealthcare?: boolean } = {}) => {
        role.data.prosperityIndex.add(1);
        role.data.score += role.getProsperityValue();
        if (withHealthcare) role.data.score += 2;
    };
}

export function createGetPopulation(role: WorkingClassRole | MiddleClassRole) {
    return () => _.clamp(Math.ceil((_.size(role.data.workers) - 10) / 3), 3, 10);
}

export function createCompany(role: MiddleClassRole | CapitalistRole | StateRole) {
    return <Safe extends boolean = false>(
        companyId: Company['id'],
        { safe }: { safe?: Safe } = {},
    ): Safe extends true ? Company | undefined : Company => {
        const company = role.data.companies.find(c => c.id === companyId);
        if (!company && !safe) throw new Error(`${role.id}: companyId="${companyId}" not found`);
        return company as any;
    };
}

export function createNewWorker(role: WorkingClassRole | MiddleClassRole) {
    return (workerType: CompanyWorkerType) => {
        const id = ++role.game.data.nextWorkerId;
        role.data.workers.push({
            id,
            role: role.id,
            type: workerType,
            company: null,
        });
        return id;
    };
}

export function createWorker(role: WorkingClassRole | MiddleClassRole) {
    return <Safe extends boolean = false>(
        workerId: CompanyWorker['id'],
        { safe }: { safe?: Safe } = {},
    ): Safe extends true ? CompanyWorker | undefined : CompanyWorker => {
        const worker = role.data.workers.find(w => w.id === workerId);
        if (!worker && !safe) throw new Error(`${role.id}: workerId="${workerId}" not found`);
        return worker as any;
    };
}
