import { type CompanyWorkerType, type Industry } from '../types';

export interface ImmigrationCard {
    id: string;
    workingClass: CompanyWorkerType;
    middleClass: CompanyWorkerType;
}

const wcSpecialized = 2;
const mcSpecialized = 3;

const industries: Industry[] = ['food', 'healthcare', 'education', 'luxury', 'influence'];

let idCounter = 0;

/**
 * Default immigration cards always follow the same pattern:
 *  - 1 specialized for one class
 *  - 1 unskilled for the other
 *
 * The default ratio is
 *  - 2 specialized / industry for WC
 *  - 3 specialized / industry for MC
 */
const immigrationCards: ImmigrationCard[] = [
    ...new Array(wcSpecialized)
        .fill(industries)
        .flat()
        .map((industry: Industry) => ({
            id: 'i-' + ++idCounter,
            workingClass: industry,
            middleClass: 'unskilled' as const,
        })),
    ...new Array(mcSpecialized)
        .fill(industries)
        .flat()
        .map((industry: Industry) => ({
            id: 'i-' + ++idCounter,
            workingClass: 'unskilled' as const,
            middleClass: industry,
        })),
];

export default immigrationCards;
