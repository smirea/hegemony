import { z } from 'zod';
import _ from 'lodash';

import {
    BusinessDealIdSchema,
    type Company,
    type CompanyCard,
    CompanyIdSchema,
    type ResourceEnum,
    RoleEnum,
    type RoleNameSchema,
    type TradeableResource,
    TradeableResourceSchema,
} from '../types';
import createAction from '../utils/createAction';
import ResourceManager, { CapitalistMoneyResourceManager } from '../utils/ResourceManager';
import AbstractRole, { type BaseData } from './AbstractRole';
import {
    createAdjustPrices,
    createAdjustWages,
    createApplyPoliticalPressure,
    createBuildCompany,
    createPayLoan,
    createProposeBill,
    createReceiveBenefits,
    createSellCompany,
    createSellToForeignMarket,
    createSkip,
} from './commonActions';
import { createCompany } from './commonMethods';
import Deck from '../cards/Deck';
import { capitalistCompanies } from '../cards/companyCards';

import type Game from '../Game';

interface CapitalistData extends BaseData<CapitalistMoneyResourceManager> {
    availableVotingCubes: number;
    priceLevels: Record<TradeableResource, 0 | 1 | 2>;
    storage: Partial<Record<TradeableResource, boolean>>;
    companyDeck: Deck<CompanyCard[]>;
    /** built companies */
    companies: Company[];
    /** which companies are available to purchase */
    companyMarket: Company['id'][];
    automationTokens: number;
    freeTradeZoneResources: {
        [ResourceEnum.food]: ResourceManager;
        [ResourceEnum.luxury]: ResourceManager;
    };
}

export default class CapitalistRole extends AbstractRole<
    typeof RoleEnum.capitalist,
    CapitalistData
> {
    readonly id = RoleEnum.capitalist;
    data: CapitalistData;

    constructor(game: Game) {
        super(game);
        const base = this.createBaseState();
        this.data = {
            ...base,
            resources: {
                ...base.resources,
                money: new CapitalistMoneyResourceManager(),
            },
            companyDeck: new Deck('capitalist companies', capitalistCompanies),
            companies: [],
            companyMarket: [],
            availableVotingCubes: 25,
            automationTokens: 4,
            priceLevels: {
                food: 0,
                healthcare: 0,
                education: 0,
                luxury: 0,
            },
            storage: {},
            freeTradeZoneResources: {
                food: new ResourceManager({ name: 'freeTradeZone:food' }),
                luxury: new ResourceManager({ name: 'freeTradeZone:luxury' }),
            },
        };
    }

    company = createCompany(this);

    setupBoard() {
        this.data.resources.money.add(120);
        this.data.resources.food.add(1);
        this.data.resources.luxury.add(2);
        this.data.resources.education.add(2);
        this.data.resources.influence.add(1);

        this.data.companyDeck.shuffle();

        const draw = (id: string) => {
            this.data.companyDeck.drawById(id);
            return id;
        };

        this.data.companies = [
            {
                id: draw('c-clinic-2'),
                workers: [],
                wages: this.game.getWageId(),
            },
            {
                id: draw('c-college-2'),
                workers: [],
                wages: this.game.getWageId(),
            },
            {
                id: draw('c-shopping-mall-2'),
                workers: [],
                wages: this.game.getWageId(),
            },
            {
                id: draw('c-supermarket-2'),
                workers: [],
                wages: this.game.getWageId(),
            },
        ];

        this.data.companyMarket = [
            this.data.companyDeck.draw().id,
            this.data.companyDeck.draw().id,
            this.data.companyDeck.draw().id,
            this.data.companyDeck.draw().id,
        ];
    }

    setupRound(): void {
        for (let i = this.data.companyMarket.length; i < 4; ++i) {
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

    basicActions = {
        ...createProposeBill(this),
        ...createBuildCompany(this),
        ...createSellCompany(this),
        ...createSellToForeignMarket(this),
        /** pay ¥, goods to storage (tariff ¥) and/or FTZ → discard */
        makeBusinessDeal: createAction({
            playerInputSchema: z.object({
                id: BusinessDealIdSchema,
                storage: z.object({
                    food: z.number().optional(),
                    luxury: z.number().optional(),
                }),
                freeTradeZone: z.object({
                    food: z.number().optional(),
                    luxury: z.number().optional(),
                }),
            }),
            condition: () => [
                ['hasDeals', this.game.data.board.businessDealCards.length > 0],
                [
                    'hasMoney',
                    this.game.data.board.businessDealCards.some(
                        id =>
                            this.data.resources.money.value >=
                            this.game.data.board.decks.businessDealDeck.getOriginalCard(id).cost,
                    ),
                ],
            ],
            run: ({ id, storage, freeTradeZone }) => {
                const card = this.game.data.board.decks.businessDealDeck.getOriginalCard(id);
                this.data.resources.money.remove(card.cost);

                if (storage.food) this.data.resources.food.add(storage.food);
                if (storage.luxury) this.data.resources.luxury.add(storage.luxury);

                if (freeTradeZone.food || freeTradeZone.luxury) {
                    const tariff =
                        card.tariffs[this.game.data.board.policies.foreignTrade as 0 | 1];
                    this.data.resources.money.remove(tariff);
                    this.game.data.roles.state.data.resources.money.add(tariff);

                    if (freeTradeZone.food)
                        this.data.freeTradeZoneResources.food.add(freeTradeZone.food);
                    if (freeTradeZone.luxury)
                        this.data.freeTradeZoneResources.luxury.add(freeTradeZone.luxury);
                }

                this.game.data.board.businessDealCards =
                    this.game.data.board.businessDealCards.filter(c => c !== id);
            },
        }),
        /** pay 30¥ → gain 3🟣 */
        lobby: createAction({
            condition: () => [
                ['hasInfluence', this.game.data.board.availableInfluence > 0],
                ['hasMoney', this.data.resources.money.value >= 30],
            ],
            run: () => {
                const diff = Math.min(3, this.game.data.board.availableInfluence);
                this.data.resources.money.remove(30);
                this.data.resources.influence.add(diff);
                this.game.data.board.availableInfluence -= diff;
            },
        }),
        ...createApplyPoliticalPressure(this),
    };

    freeActions = {
        ...createSkip(this),
        ...createAdjustPrices(this),
        ...createAdjustWages(this),
        /** give 5¥ to a class → commit */
        giveBonus: createAction({
            playerInputSchema: CompanyIdSchema,
            condition: () => [['hasMoney', this.data.resources.money.value >= 5]],
            run: companyId => {
                const { company } = this.game.getCompanyById(companyId);
                let targetRole: z.infer<typeof RoleNameSchema> | null = null;
                for (const workerId of company.workers) {
                    const { worker } = this.game.getWorkerById(workerId);
                    worker.committed = true;
                    targetRole = worker.role;
                }
                if (!targetRole) throw new Error('no target role');
                this.data.resources.money.remove(5);
                this.game.data.roles[targetRole].data.resources.money.add(5);
            },
        }),
        /** buy storage for 20¥ per tile (max 1 storage tile per type for whole game) */
        buyStorage: createAction({
            playerInputSchema: TradeableResourceSchema,
            condition: () => [
                ['hasMoney', this.data.resources.money.value >= 20],
                ['hasStorage', _.filter(this.data.storage).length < 4],
            ],
            run: resource => {
                this.data.storage[resource] = true;
                this.data.resources.money.remove(20);
            },
        }),
        ...createReceiveBenefits(this),
        ...createPayLoan(this),
    };
}
