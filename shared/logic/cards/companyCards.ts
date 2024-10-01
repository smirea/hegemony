import { type Industry, type CompanyCard, type CompanyWorkerType, RoleEnum } from '../types';

let tempId = 0;
const tempCompany = (prefix: string, industry: Industry, id?: string): CompanyCard => {
    id ??= prefix + ':' + ++tempId;

    return {
        id,
        name: id,
        cost: 10,
        industry,
        production: tempId % 5,
        fullyAutomated: false,
        wages: { l1: 1, l2: 2, l3: 3 },
        workers: [],
    };
};

const worker = (
    role: 'w' | 'm' | 'wm',
    type: CompanyWorkerType = 'unskilled',
    optional = false,
): CompanyCard['workers'][number] => ({
    type,
    optional,
    roles:
        role === 'w'
            ? [RoleEnum.workingClass]
            : role === 'm'
              ? [RoleEnum.middleClass]
              : [RoleEnum.workingClass, RoleEnum.middleClass],
});

export const middleClassCompanies: CompanyCard[] = [
    { ...tempCompany('middle', 'food', 'start-food'), workers: [worker('m', 'unskilled', true)] },
    tempCompany('middle', 'luxury'),
    tempCompany('middle', 'healthcare', 'start-healthcare'),
    tempCompany('middle', 'education'),
    tempCompany('middle', 'influence'),
];

export const capitalistCompanies: CompanyCard[] = [
    {
        ...tempCompany('capitalist', 'food', 'start-food'),
        productionFromAutomation: 2,
        workers: [worker('m', 'food'), worker('m', 'unskilled'), worker('w', 'unskilled', true)],
    },
    tempCompany('capitalist', 'luxury', 'start-luxury'),
    tempCompany('capitalist', 'healthcare', 'start-healthcare'),
    tempCompany('capitalist', 'education', 'start-education'),
    tempCompany('capitalist', 'influence'),
    { ...tempCompany('capitalist', 'food'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'luxury'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'healthcare'), fullyAutomated: true },
    { ...tempCompany('capitalist', 'education'), fullyAutomated: true },
];

export const stateCompanies: CompanyCard[] = [
    tempCompany('state', 'healthcare'),
    tempCompany('state', 'education'),
    tempCompany('state', 'influence'),
    tempCompany('state', 'healthcare'),
    tempCompany('state', 'education'),
    tempCompany('state', 'influence'),
];
