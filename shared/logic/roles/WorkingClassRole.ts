import _ from 'lodash';
import { z } from 'zod';

import { type CompanyWorker, type Industry, type CompanyWorkerType, RoleEnum } from '../types';
import AbstractRole, { type BaseState } from './AbstractRole';
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
import { createGetPopulation, createIncreaseProsperity } from './commonMethods';

import type Game from '../Game';

interface WorkingClassState extends BaseState {
    prosperity: number;
    availableVotingCubes: number;
    workers: Record<CompanyWorker['id'], CompanyWorker>;
    availableWorkers: Record<CompanyWorkerType, number>;
    strikeTokens: number;
    unions: Partial<Record<Industry, boolean>>;
    demonstration: boolean;
}

export default class WorkingClassRole extends AbstractRole<
    typeof RoleEnum.workingClass,
    WorkingClassState
> {
    readonly id = RoleEnum.workingClass;
    state: WorkingClassState;

    constructor(game: Game) {
        super(game);
        this.state = {
            ...super.createBaseState(),
            prosperity: 0,
            availableVotingCubes: 0,
            workers: {},
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

    increaseProsperity = createIncreaseProsperity(this);
    getPopulation = createGetPopulation(this);

    basicActions = {
        ...createProposeBill(this),
        ...createApplyPoliticalPressure(this),
        ...createAssignWorkers(this),
        ...createBuyGoodsAndServices(this),
        /** 1-2 tokens → non-committed cos. (L1/L2 wages) → wages ⬆ or no production and +1 🟣 */
        strike: action({
            playerInputSchema: z.array(z.string()), // todo Company['id'][]
            run: toStrike => {
                for (const companyId of toStrike) {
                    const { company } = this.game.getCompanyById(companyId);
                    company.strike = true;
                    --this.state.strikeTokens;
                }
            },
        }),
        /** unemployed → open slots >= 2 → WC +1 🟣, others -★ (WC choice) */
        demonstration: action({
            condition: () => [
                ['noDemonstration', !this.state.demonstration],
                ['hasUnemployedWorkers', this.canDemonstrate()],
            ],
            run: () => {
                this.state.demonstration = true;
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

    canDemonstrate() {
        const unemployedWorkers = Object.values(this.state.workers).filter(w => !w.company).length;
        if (unemployedWorkers < 2) return false;
        const middleClassSlots = _.sum(
            Object.values(this.game.state.roles.middleClass.state.companies).map(c => {
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.filter(w => w.optional).length;
            }),
        );
        const capitalistSlots = _.sum(
            Object.values(this.game.state.roles.capitalist.state.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                if (d.fullyAutomated) return 0;
                return d.workers.length;
            }),
        );
        const stateSlots = _.sum(
            Object.values(this.game.state.roles.state.state.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.length;
            }),
        );

        return unemployedWorkers + 2 >= middleClassSlots + capitalistSlots + stateSlots;
    }
}
