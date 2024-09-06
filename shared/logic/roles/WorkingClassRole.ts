import _ from 'lodash';
import { z } from 'zod';

import {
    type CompanyWorker,
    type Industry,
    type CompanyWorkerType,
    RoleEnum,
    CompanyIdSchema,
    RoleNameSchema,
} from '../types';
import AbstractRole, { type BaseData } from './AbstractRole';
import {
    createApplyPoliticalPressure,
    createAssignWorkers,
    createBuyGoodsAndServices,
    createPayLoan,
    createProposeBill,
    createReceiveBenefits,
    createSkip,
    createSwapWorkers,
    createUseEducation,
    createUseHealthcare,
    createUseLuxury,
} from './commonActions';
import action from '../utils/action';
import { createGetPopulation, createIncreaseProsperity, createWorker } from './commonMethods';

import type Game from '../Game';

interface WorkingClassData extends BaseData {
    prosperity: number;
    availableVotingCubes: number;
    workers: CompanyWorker[];
    availableWorkers: Record<CompanyWorkerType, number>;
    strikeTokens: number;
    unions: Partial<Record<Industry, boolean>>;
    demonstration: boolean;
}

export default class WorkingClassRole extends AbstractRole<
    typeof RoleEnum.workingClass,
    WorkingClassData
> {
    readonly id = RoleEnum.workingClass;
    data: WorkingClassData;

    constructor(game: Game) {
        super(game);
        this.data = {
            ...super.createBaseState(),
            prosperity: 0,
            availableVotingCubes: 0,
            workers: [],
            availableWorkers: {
                influence: 0,
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
                unskilled: 0,
            },
            strikeTokens: 0,
            unions: {},
            demonstration: false,
        };
    }

    setupBoard() {
        // todo
    }

    setupRound(): void {
        // todo
    }

    increaseProsperity = createIncreaseProsperity(this);
    getPopulation = createGetPopulation(this);
    worker = createWorker(this);

    basicActions = {
        ...createProposeBill(this),
        ...createAssignWorkers(this),
        ...createBuyGoodsAndServices(this),
        /** 1-2 tokens → non-committed cos. (L1/L2 wages) → wages ⬆ or no production and +1 🟣 */
        strike: action({
            playerInputSchema: z.array(CompanyIdSchema),
            condition: () => [['hasStrikeTokens', this.data.strikeTokens > 0]],
            run: toStrike => {
                for (const companyId of toStrike) {
                    const { company } = this.game.getCompanyById(companyId);
                    company.strike = true;
                    --this.data.strikeTokens;
                }
            },
        }),
        /** unemployed → open slots >= 2 → WC +1 🟣, others -★ (WC choice) */
        demonstration: action({
            condition: () => [
                ['noDemonstration', !this.data.demonstration],
                ['hasUnemployedWorkers', this.canDemonstrate()],
            ],
            run: () => {
                this.data.demonstration = true;
            },
        }),
        ...createApplyPoliticalPressure(this),
    };

    freeActions = {
        ...createSkip(this),
        ...createUseHealthcare(this),
        ...createUseEducation(this),
        ...createUseLuxury(this),
        ...createSwapWorkers(this),
        ...createReceiveBenefits(this),
        ...createPayLoan(this),
    };

    canDemonstrate() {
        const unemployedWorkers = Object.values(this.data.workers).filter(w => !w.company).length;
        if (unemployedWorkers < 2) return false;
        return unemployedWorkers + 2 >= this.countOpenWorkerSlots();
    }

    countOpenWorkerSlots() {
        const middleClassSlots = _.sum(
            Object.values(this.game.state.roles.middleClass.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.filter(w => w.roles.includes(RoleNameSchema.enum.workingClass))
                    .length;
            }),
        );
        const capitalistSlots = _.sum(
            Object.values(this.game.state.roles.capitalist.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                if (d.fullyAutomated) return 0;
                return d.workers.length;
            }),
        );
        const stateSlots = _.sum(
            Object.values(this.game.state.roles.state.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.length;
            }),
        );

        return middleClassSlots + capitalistSlots + stateSlots;
    }
}
