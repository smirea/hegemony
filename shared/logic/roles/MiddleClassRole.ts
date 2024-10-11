import _ from 'lodash';

import {
    type Company,
    type CompanyCard,
    CompanyIdSchema,
    type CompanyTradeableResource,
    type CompanyWorker,
    type CompanyWorkerType,
    ResourceEnumSchema,
    type ResourcePriceLevel,
    RoleEnum,
    type RoleNameNoWorkingClass,
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
    createNewWorker,
    createWorker,
} from './commonMethods';
import Deck from '../cards/Deck';
import { middleClassCompanies } from '../cards/companyCards';
import ResourceManager from '../utils/ResourceManager';

import type Game from '../Game';

interface MiddleClassData extends BaseData {
    /**
     * multiple prosperity levels can have the same value, thus needing to store an index and a mapping
     * use .getProsperityValue() to get the actual amount
     */
    prosperityIndex: ResourceManager;
    availableVotingCubes: number;
    workers: CompanyWorker[];
    availableWorkers: Record<CompanyWorkerType, number>;
    producedResources: Record<TradeableResource, ResourceManager>;
    priceLevels: Record<TradeableResource, ResourcePriceLevel>;
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

    public readonly prosperityValues: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7];

    constructor(game: Game) {
        super(game);
        this.data = {
            ...this.createBaseState(),
            prosperityIndex: new ResourceManager({
                name: 'middleClass:prosperityIndex',
                value: 0,
                min: 0,
                max: this.prosperityValues.length - 1,
                limitBehavior: 'clamp',
            }),
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
    newWorker = createNewWorker(this);

    setupBoard() {
        this.data.resources.money.add(40);
        this.data.resources.influence.add(1);
        this.data.resources.food.add(1);
        this.data.resources.healthcare.add(1);

        this.data.companyDeck.shuffle();

        const draw = (id: string) => {
            this.data.companyDeck.drawById(id);
            return id;
        };

        this.data.companies = [
            {
                id: draw('m-convenience-store-1'),
                workers: [this.newWorker('healthcare')],
                wages: this.game.getWageId(),
            },
            {
                id: draw('m-doctors-office-2'),
                workers: [this.newWorker('food')],
                wages: this.game.getWageId(),
            },
        ];

        this.data.companyMarket = [
            this.data.companyDeck.draw().id,
            this.data.companyDeck.draw().id,
            this.data.companyDeck.draw().id,
        ];

        const fillCompany = (role: RoleNameNoWorkingClass, id: string) => {
            const target = this.game.data.roles[role];
            target.company(id).workers = target.data.companyDeck
                .getOriginalCard(id)
                .workers.map(w => this.newWorker(w.type));
        };

        fillCompany(RoleEnum.state, 's-technical-university-1');
        fillCompany(RoleEnum.capitalist, 'c-shopping-mall-2');

        // todo: pick skilled worker

        this.game.drawImmigrationCard(this.id);
        this.game.drawImmigrationCard(this.id);
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

    getProsperityValue() {
        return this.prosperityValues[this.data.prosperityIndex.value];
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
