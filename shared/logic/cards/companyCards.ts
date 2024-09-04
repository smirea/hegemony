import { type Industry, type CompanyCard } from '../types';

let tempId = 0;
const tempCompany = (name: string, industry: Industry): CompanyCard => ({
    id: name + ':' + ++tempId,
    name: name + ':' + tempId,
    cost: 10,
    industry,
    production: 5,
    extraProduction: 2,
    fullyAutomated: false,
    wages: { l1: 1, l2: 2, l3: 3 },
    workers: [],
});

export const middleClassCompanies: CompanyCard[] = [
    tempCompany('middle', 'food'),
    tempCompany('middle', 'luxury'),
    tempCompany('middle', 'healthcare'),
    tempCompany('middle', 'education'),
    tempCompany('middle', 'influence'),
];

export const capitalistCompanies: CompanyCard[] = [
    tempCompany('capitalist', 'food'),
    tempCompany('capitalist', 'luxury'),
    tempCompany('capitalist', 'healthcare'),
    tempCompany('capitalist', 'education'),
    tempCompany('capitalist', 'influence'),
    { ...tempCompany('capitalist', 'food'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'luxury'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'healthcare'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'education'), fullyAutomated: true },
];

export const statecomapnies: CompanyCard[] = [
    tempCompany('state', 'healthcare'),
    tempCompany('state', 'education'),
    tempCompany('state', 'influence'),
    tempCompany('state', 'healthcare'),
    tempCompany('state', 'education'),
    tempCompany('state', 'influence'),
];
