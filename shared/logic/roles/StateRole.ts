import _ from 'lodash';
import { z } from 'zod';

import {
    type Company,
    type CompanyCard,
    type CompanyTradeableResource,
    type Resource,
    ResourceEnumSchema,
    RoleEnum,
    type RoleNameNoState,
    RoleNameNoStateSchema,
} from '../types';
import action from '../utils/action';
import AbstractRole, { type BaseData } from './AbstractRole';
import {
    createAdjustWages,
    createPayLoan,
    createProposeBill,
    createSellToForeignMarket,
    createSkip,
} from './commonActions';
import { createCompany } from './commonMethods';
import Deck from '../cards/Deck';
import { stateCompanies } from '../cards/companyCards';
import ResourceManager from '../utils/ResourceManager';

import type Game from '../Game';

type Benefit =
    | { type: 'resource'; resource: Resource; amount: number }
    | { type: 'voting-cube'; amount: number };

interface StateData extends BaseData {
    legitimacy: Record<RoleNameNoState, number>;
    legitimacyTokens: Record<RoleNameNoState, number>;
    companyDeck: Deck<CompanyCard[]>;
    companies: Company[];
    benefits: Record<RoleNameNoState, Benefit[]>;
    resources: BaseData['resources'] & { personalInfluence: ResourceManager };
}

export default class StateRole extends AbstractRole<typeof RoleEnum.state, StateData> {
    readonly id = RoleEnum.state;
    data: StateData;

    constructor(game: Game) {
        super(game);
        const base = this.createBaseState();
        this.data = {
            ...base,
            resources: {
                ...base.resources,
                personalInfluence: new ResourceManager({
                    name: this.id + ':personalInfluence',
                    value: 0,
                }),
            },
            usedActions: [],
            legitimacy: {
                [RoleEnum.workingClass]: 2,
                [RoleEnum.middleClass]: 2,
                [RoleEnum.capitalist]: 2,
            },
            legitimacyTokens: {
                [RoleEnum.workingClass]: 0,
                [RoleEnum.middleClass]: 0,
                [RoleEnum.capitalist]: 0,
            },
            companyDeck: new Deck('state companies', stateCompanies),
            companies: [],
            benefits: {
                [RoleEnum.workingClass]: [],
                [RoleEnum.middleClass]: [],
                [RoleEnum.capitalist]: [],
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

    getPrice(resource: CompanyTradeableResource) {
        switch (resource) {
            case 'food':
                return 12;
            case 'healthcare':
                return [0, 5, 10][this.game.getPolicy('healthcare')];
            case 'education':
                return [0, 5, 10][this.game.getPolicy('education')];
            case 'luxury':
                return 8;
            case 'influence':
                return 10;
        }
    }

    onBuyGoods(roleName: RoleNameNoState, resource: CompanyTradeableResource, count: number) {
        if (
            resource !== ResourceEnumSchema.enum.education &&
            resource !== ResourceEnumSchema.enum.healthcare
        )
            return;
        const policy = this.game.state.board.policies[resource];
        switch (policy) {
            case 0:
                this.updateLegitimacy(roleName, Math.floor(count / 3));
                break;
            case 1:
                this.data.score += 1;
                break;
            case 2:
                // noop
                break;
        }
    }

    getBenefits(id: RoleNameNoState) {
        return this.data.benefits[id] || [];
    }

    receiveBenefits(id: RoleNameNoState) {
        const role = this.game.state.roles[id];
        for (const benefit of this.getBenefits(id)) {
            if (benefit.type === 'resource') {
                role.data.resources[benefit.resource].add(benefit.amount);
            } else if (benefit.type === 'voting-cube') {
                this.game.state.board.votingCubeBag[id] += benefit.amount;
            }
        }
        this.data.benefits[id] = [];
        this.data.score += 1;
    }

    updateLegitimacy(id: RoleNameNoState, amount: number) {
        this.data.legitimacy[id] = _.clamp(this.data.legitimacy[id] + amount, 1, 10);
    }

    basicActions = {
        ...createProposeBill(this),
        /** execute + gain rewards → discard Event Card */
        eventAction: action({
            run: () => {
                // todo
                throw new Error('todo');
            },
        }),
        ...createSellToForeignMarket(this),
        /** 2x personal 🟣 to class → +1 that class's Legitimacy */
        meetWithPartyMps: action({
            playerInputSchema: RoleNameNoStateSchema,
            condition: () => [['hasVotingCubes', this.data.resources.influence.value >= 2]],
            run: target => {
                this.data.resources.influence.remove(2);
                this.updateLegitimacy(target, +1);
            },
        }),
        /** take 10¥ from each class → -1 Legitimacy from two lowest classes */
        extraTax: action({
            // input is only needed in the case of a tie
            // but since it's sometimes needed and sometimes not ...
            // just have the UI always send it
            playerInputSchema: z.tuple([RoleNameNoStateSchema, RoleNameNoStateSchema]),
            run: ([roleA, roleB]) => {
                this.updateLegitimacy(roleA, -1);
                this.updateLegitimacy(roleB, -1);

                this.game.state.roles.workingClass.data.resources.money.remove(10, {
                    canTakeLoans: true,
                });
                this.game.state.roles.middleClass.data.resources.money.remove(10, {
                    canTakeLoans: true,
                });
                this.game.state.roles.capitalist.data.resources.money.remove(10, {
                    canTakeLoans: true,
                });

                this.data.resources.money.add(30);
            },
        }),
        /** up to 3x media → personal 🟣 */
        campaign: action({
            condition: () => [['hasVotingCubes', this.data.resources.influence.value >= 1]],
            playerInputSchema: z.number().min(0).max(3),
            run: count => {
                const toAdd = Math.min(3, count, this.data.resources.influence.value);
                this.data.resources.influence.remove(toAdd);
                this.data.resources.personalInfluence.add(toAdd);
            },
        }),
    };

    freeActions = {
        ...createSkip(this),
        ...createAdjustWages(this),
        ...createPayLoan(this),
    };
}
