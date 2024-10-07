import _ from 'lodash';
import { z } from 'zod';

import {
    type CompanyWorker,
    type Industry,
    type CompanyWorkerType,
    RoleEnum,
    CompanyIdSchema,
    RoleNameSchema,
    type RoleNameNoWorkingClass,
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
import createAction from '../utils/createAction';
import {
    createGetPopulation,
    createIncreaseProsperity,
    createNewWorker,
    createWorker,
} from './commonMethods';
import ResourceManager from '../utils/ResourceManager';

import type Game from '../Game';

interface WorkingClassData extends BaseData {
    /**
     * multiple prosperity levels can have the same value, thus needing to store an index and a mapping
     * use .getProsperityValue() to get the actual amount
     */
    prosperityIndex: ResourceManager;
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

    public readonly prosperityValues: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor(game: Game) {
        super(game);
        this.data = {
            ...super.createBaseState(),
            prosperityIndex: new ResourceManager({
                name: 'workingClass:prosperityIndex',
                value: 0,
                min: 0,
                max: this.prosperityValues.length - 1,
                limitBehavior: 'clamp',
            }),
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
        this.data.resources.money.add(30);
        this.data.resources.influence.add(1);

        const fillCompany = (role: RoleNameNoWorkingClass, id: string) => {
            const target = this.game.data.roles[role];
            target.company(id).workers = target.data.companyDeck
                .getOriginalCard(id)
                .workers.map(w => this.newWorker(w.type));
        };

        fillCompany(RoleEnum.capitalist, 'c-supermarket-2');
        fillCompany(RoleEnum.capitalist, 'c-college-2');
        fillCompany(RoleEnum.state, 's-university-hospital-1');

        this.newWorker('unskilled');
        this.game.drawImmigrationCard(this.id);
        this.game.drawImmigrationCard(this.id);
    }

    setupRound(): void {
        // todo
    }

    increaseProsperity = createIncreaseProsperity(this);
    getPopulation = createGetPopulation(this);
    worker = createWorker(this);
    newWorker = createNewWorker(this);

    getProsperityValue() {
        return this.prosperityValues[this.data.prosperityIndex.value];
    }

    basicActions = {
        ...createProposeBill(this),
        ...createAssignWorkers(this),
        ...createBuyGoodsAndServices(this),
        /** 1-2 tokens → non-committed cos. (L1/L2 wages) → wages ⬆ or no production and +1 🟣 */
        strike: createAction({
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
        demonstration: createAction({
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
            Object.values(this.game.data.roles.middleClass.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.filter(w => w.roles.includes(RoleNameSchema.enum.workingClass))
                    .length;
            }),
        );
        const capitalistSlots = _.sum(
            Object.values(this.game.data.roles.capitalist.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                if (d.fullyAutomated) return 0;
                return d.workers.length;
            }),
        );
        const stateSlots = _.sum(
            Object.values(this.game.data.roles.state.data.companies).map(c => {
                if (c.workers.length) return 0;
                const d = this.game.getCompanyDefinition(c.id);
                return d.workers.length;
            }),
        );

        return middleClassSlots + capitalistSlots + stateSlots;
    }
}
