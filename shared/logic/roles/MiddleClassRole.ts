import {
    type Company,
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
    createApplyPoliticalPressure,
    createBuildCompany,
    createPayLoan,
    createProposeBill,
    createReceiveBenefits,
    createSellCompany,
    createSellForeignMarketCard,
    createSkip,
    createSwapWorkers,
    createUseEducation,
    createUseHealthcare,
    createUseLuxury,
} from './commonActions';
import { createCompany, createGetPopulation, createIncreaseProsperity } from './commonMethods';

import type Game from '../Game';

interface MiddleClassState extends BaseState {
    prosperity: number;
    availableVotingCubes: number;
    workers: CompanyWorker[];
    availableWorkers: Record<CompanyWorkerType, number>;
    producedResources: Record<TradeableResource, number>;
    prices: Record<TradeableResource, number>;
    storage: Partial<Record<TradeableResource, boolean>>;
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
            prices: {
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
            },
            storage: {},
        };
    }

    company = createCompany(this);

    setupBoard() {
        // todo
    }

    setupRound(): void {
        // todo
    }

    increaseProsperity = createIncreaseProsperity(this);
    getPopulation = createGetPopulation(this);
    basicActions = {
        ...createProposeBill(this),
        ...createApplyPoliticalPressure(this),
        ...createBuildCompany(this),
        ...createSellCompany(this),
        ...createSellForeignMarketCard(this),
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
    };

    freeActions = {
        ...createSkip(this),
        ...createPayLoan(this),
        ...createUseHealthcare(this),
        ...createUseEducation(this),
        ...createUseLuxury(this),
        ...createSwapWorkers(this),
        ...createReceiveBenefits(this),
    };
}
