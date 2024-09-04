import { z } from 'zod';
import _ from 'lodash';

import {
    BusinessDealIdSchema,
    type Company,
    CompanyIdSchema,
    type ResourceEnum,
    RoleEnum,
    type RoleNameSchema,
    type TradeableResource,
    TradeableResourceSchema,
} from '../types';
import action from '../utils/action';
import ResourceManager, { CapitalistMoneyResourceManager } from '../utils/ResourceManager';
import AbstractRole, { type BaseState } from './AbstractRole';
import {
    createBuildCompany,
    createPayLoan,
    createProposeBill,
    createSellCompany,
    createSellForeignMarketCard,
    createSkip,
} from './commonActions';
import { createCompany } from './commonMethods';

import type Game from '../Game';

interface CapitalistState extends BaseState<CapitalistMoneyResourceManager> {
    availableVotingCubes: number;
    prices: Record<TradeableResource, number>;
    storage: Partial<Record<TradeableResource, boolean>>;
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
    CapitalistState
> {
    readonly id = RoleEnum.capitalist;
    state: CapitalistState;

    constructor(game: Game) {
        super(game);
        const base = this.createBaseState();
        this.state = {
            ...base,
            resources: {
                ...base.resources,
                money: new CapitalistMoneyResourceManager(),
            },
            companies: [],
            companyMarket: [],
            availableVotingCubes: 25,
            automationTokens: 4,
            prices: {
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
        // todo
    }

    setupRound(): void {
        // todo
    }

    basicActions = {
        ...createProposeBill(this),
        ...createBuildCompany(this),
        ...createSellCompany(this),
        ...createSellForeignMarketCard(this),
        /** pay ¥, goods to storage (tariff ¥) and/or FTZ → discard */
        makeBusinessDeal: action({
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
                ['hasDeals', this.game.state.board.businessDealCards.length > 0],
                [
                    'hasMoney',
                    this.game.state.board.businessDealCards.some(
                        id =>
                            this.state.resources.money.value >=
                            this.game.getCard('businessDeal', id).cost,
                    ),
                ],
            ],
            run: ({ id, storage, freeTradeZone }) => {
                const card = this.game.getCard('businessDeal', id);
                this.state.resources.money.remove(card.cost);

                if (storage.food) this.state.resources.food.add(storage.food);
                if (storage.luxury) this.state.resources.luxury.add(storage.luxury);

                if (freeTradeZone.food || freeTradeZone.luxury) {
                    const tariff =
                        card.tariffs[this.game.state.board.policies.foreignTrade as 0 | 1];
                    this.state.resources.money.remove(tariff);
                    this.game.state.roles.state.state.resources.money.add(tariff);

                    if (freeTradeZone.food)
                        this.state.freeTradeZoneResources.food.add(freeTradeZone.food);
                    if (freeTradeZone.luxury)
                        this.state.freeTradeZoneResources.luxury.add(freeTradeZone.luxury);
                }

                this.game.state.board.businessDealCards =
                    this.game.state.board.businessDealCards.filter(c => c !== id);
            },
        }),
        /** pay 30¥ → gain 3🟣 */
        lobby: action({
            condition: () => [
                ['hasVotingCubes', this.state.availableVotingCubes > 0],
                ['hasMoney', this.state.resources.money.value >= 30],
            ],
            run: () => {
                const diff = Math.min(3, this.game.state.board.availableInfluence);
                this.state.resources.money.remove(30);
                this.state.availableVotingCubes += diff;
                this.game.state.board.availableInfluence -= diff;
            },
        }),
    };

    freeActions = {
        ...createSkip(this),
        ...createPayLoan(this),
        /** give 5¥ to a class → commit */
        giveBonus: action({
            playerInputSchema: CompanyIdSchema,
            run: companyId => {
                const { company } = this.game.getCompanyById(companyId);
                let targetRole: z.infer<typeof RoleNameSchema> | null = null;
                for (const workerId of company.workers) {
                    const { worker } = this.game.getWorkerById(workerId);
                    worker.committed = true;
                    targetRole = worker.role;
                }
                if (!targetRole) throw new Error('no target role');
                this.state.resources.money.remove(5);
                this.game.state.roles[targetRole].state.resources.money.add(5);
            },
        }),
        /** buy storage for 20¥ per tile (max 1 storage tile per type for whole game) */
        buyStorage: action({
            playerInputSchema: TradeableResourceSchema,
            condition: () => [
                ['hasMoney', this.state.resources.money.value >= 20],
                ['hasStorage', _.filter(this.state.storage).length < 4],
            ],
            run: resource => {
                this.state.storage[resource] = true;
                this.state.resources.money.remove(20);
            },
        }),
    };
}
