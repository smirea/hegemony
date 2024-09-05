import {
    type Company,
    type CompanyCard,
    CompanyIdSchema,
    type CompanyWorker,
    type CompanyWorkerType,
    ResourceEnumSchema,
    RoleEnum,
    type TradeableResource,
} from '../types';
import action from '../utils/action';
import AbstractRole, { type BaseState } from './AbstractRole';
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

import type Game from '../Game';

interface MiddleClassState extends BaseState {
    prosperity: number;
    availableVotingCubes: number;
    workers: CompanyWorker[];
    availableWorkers: Record<CompanyWorkerType, number>;
    producedResources: Record<TradeableResource, number>;
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
    MiddleClassState
> {
    readonly id = RoleEnum.middleClass;
    state: MiddleClassState;

    constructor(game: Game) {
        super(game);
        this.state = {
            ...this.createBaseState(),
            prosperity: 0,
            companyDeck: new Deck('middleClass companies', middleClassCompanies),
            companies: [],
            companyMarket: [],
            producedResources: {
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
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
        for (let i = this.state.companyMarket.length; i < 3; ++i) {
            const card = this.state.companyDeck.draw();
            this.state.companyMarket.push(card.id);
        }
    }

    getPrice(resource: TradeableResource) {
        return {
            food: [9, 12, 15],
            healthcare: [5, 8, 10],
            education: [5, 8, 10],
            luxury: [5, 8, 10],
        }[resource][this.state.priceLevels[resource]];
    }

    basicActions = {
        ...createProposeBill(this),
        ...createAssignWorkers(this),
        ...createBuildCompany(this),
        ...createSellCompany(this),
        ...createSellToForeignMarket(this),
        ...createBuyGoodsAndServices(this),
        /** co with non-committed WC (+ non-committed WC) workers → commit + produce (+ pay WC) */
        extraShift: action({
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
                        this.state.resources[def.industry].add(count);
                    } else {
                        this.state.producedResources[def.industry] += count;
                    }
                };
                produce(def.production);
                if (uncommittedWorkingClassWorker) {
                    this.state.resources.money.remove(wages);
                    this.game.state.roles[RoleEnum.workingClass].state.resources.money.add(wages);
                    this.game.state.roles[RoleEnum.workingClass].state.workers[
                        uncommittedWorkingClassWorker
                    ].committed = true;
                    produce(def.extraProduction || 0);
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
