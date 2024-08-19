import { type WageId, type Industry, type RoleMap, type WorkerType } from '../types';

export interface CompanyDefinition {
    id: string;
    name: string;
    cost: number;
    industry: Industry;
    production: number;
    /** middle class (when WC worker) or capitalist (when automation token) */
    extraProduction?: number;
    /** capitalist only */
    fullyAutomated?: boolean;
    wages: Record<WageId, number>;
    workers: Array<{
        type: WorkerType;
        roles: Array<RoleMap['workingClass']['id'] | RoleMap['middleClass']['id']>;
        /** only for middle class companies */
        optional?: boolean;
    }>;
}

const middleClassCompanies = [
    // todo
] satisfies CompanyDefinition[];

const capitalistCompanies = [
    // todo
] satisfies CompanyDefinition[];

const statecomapnies = [
    // todo
] satisfies CompanyDefinition[];

const companyCards = [
    ...middleClassCompanies,
    ...capitalistCompanies,
    ...statecomapnies,
] satisfies CompanyDefinition[];

export default companyCards;
