import {
    type Company,
    type CompanyCard,
    CompanyIdSchema,
    type CompanyTradeableResource,
    type CompanyWorker,
    type CompanyWorkerType,
    ResourceEnumSchema,
    RoleEnum,
    type TradeableResource,
} from '../types';
import createAction from '../utils/createAction';
import AbstractRole, { type BaseData } from './AbstractRole';
import {
    createAdjustPrices,
    createAdjustWages,
    createApplyPoliticalPressure,
    createAssignWorkers,
    createBuildCompany,
    createBuyGoodsAndServices,
    createPayLoan,
    createProposeBill,
    createReceiveBenefits,
    createSellCompany,
    createSellToForeignMarket,
    createSkip,
    createSwapWorkers,
    createUseEducation,
    createUseHealthcare,
    createUseLuxury,
} from './commonActions';
import {
    createCompany,
    createGetPopulation,
    createIncreaseProsperity,
    createWorker,
} from './commonMethods';
import Deck from '../cards/Deck';
import { middleClassCompanies } from '../cards/companyCards';
import ResourceManager from '../utils/ResourceManager';

import type Game from '../Game';

interface MiddleClassData extends BaseData {
    prosperity: number;
    availableVotingCubes: number;
    workers: CompanyWorker[];
    availableWorkers: Record<CompanyWorkerType, number>;
    producedResources: Record<TradeableResource, ResourceManager>;
    priceLevels: Record<TradeableResource, 0 | 1 | 2>;
    storage: Partial<Record<TradeableResource, boolean>>;
    companyDeck: Deck<CompanyCard[]>;
    /** built companies */
    companies: Company[];
    /** which companies are available to purchase */
    companyMarket: Company['id'][];
}

export default class MiddleClassRole extends AbstractRole<
    typeof RoleEnum.middleClass,
    MiddleClassData
> {
    readonly id = RoleEnum.middleClass;
    data: MiddleClassData;

    constructor(game: Game) {
        super(game);
        this.data = {
            ...this.createBaseState(),
            prosperity: 0,
            companyDeck: new Deck('middleClass companies', middleClassCompanies),
            companies: [],
            companyMarket: [],
            producedResources: {
                food: new ResourceManager({ name: 'middleClass:producedResources:food' }),
                healthcare: new ResourceManager({ name: 'middleClass:producedResources:food' }),
                education: new ResourceManager({ name: 'middleClass:producedResources:food' }),
                luxury: new ResourceManager({ name: 'middleClass:producedResources:food' }),
            },
            availableVotingCubes: 25,
            workers: [],
            availableWorkers: {
                influence: 0,
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
                unskilled: 0,
            },
            priceLevels: {
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
            },
            storage: {},
        };
    }

    company = createCompany(this);
    worker = createWorker(this);
    increaseProsperity = createIncreaseProsperity(this);
    getPopulation = createGetPopulation(this);

    setupBoard() {
        // todo
    }

    setupRound(): void {
        for (let i = this.data.companyMarket.length; i < 3; ++i) {
            const card = this.data.companyDeck.draw();
            this.data.companyMarket.push(card.id);
        }
    }

    getPrice(resource: TradeableResource) {
        return {
            food: [9, 12, 15],
            healthcare: [5, 8, 10],
            education: [5, 8, 10],
            luxury: [5, 8, 10],
        }[resource][this.data.priceLevels[resource]];
    }

    produce(resource: CompanyTradeableResource, count: number) {
        if (resource === ResourceEnumSchema.enum.influence) {
            this.data.resources[resource].add(count);
        } else {
            this.data.producedResources[resource].add(count);
        }
    }

    basicActions = {
        ...createProposeBill(this),
        ...createAssignWorkers(this),
        ...createBuildCompany(this),
        ...createSellCompany(this),
        ...createSellToForeignMarket(this),
        ...createBuyGoodsAndServices(this),
        /** co with non-committed WC (+ non-committed WC) workers → commit + produce (+ pay WC) */
        extraShift: createAction({
            playerInputSchema: CompanyIdSchema,
            run: companyId => {
                const { company } = this.game.getCompanyById(companyId);
                const uncommittedWorkingClassWorker = company.workers.find(w => {
                    const { worker, roleName } = this.game.getWorkerById(w);
                    return roleName === RoleEnum.workingClass && !worker.committed;
                });
                const def = this.game.getCompanyDefinition(companyId);
                const wages = def.wages[company.wages];
                const produce = (count: number) => {
                    if (def.industry === ResourceEnumSchema.enum.influence) {
                        this.data.resources[def.industry].add(count);
                    } else {
                        this.data.producedResources[def.industry].add(count);
                    }
                };
                produce(def.production);
                if (uncommittedWorkingClassWorker) {
                    this.data.resources.money.remove(wages);
                    this.game.data.roles[RoleEnum.workingClass].data.resources.money.add(wages);
                    produce(def.productionFromOptionalWorkers || 0);
                }
                for (const id of company.workers) {
                    this.game.getWorkerById(id).worker.committed = true;
                }
            },
        }),
        ...createApplyPoliticalPressure(this),
    };

    freeActions = {
        ...createSkip(this),
        ...createUseHealthcare(this),
        ...createUseEducation(this),
        ...createUseLuxury(this),
        ...createAdjustPrices(this),
        ...createAdjustWages(this),
        ...createSwapWorkers(this),
        ...createReceiveBenefits(this),
        ...createPayLoan(this),
    };
}
