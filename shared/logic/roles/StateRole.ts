import _ from 'lodash';

import {
    type Company,
    type CompanyCard,
    type Resource,
    type ResourceEnum,
    RoleEnum,
    type RoleNameNoState,
    RoleNameNoStateSchema,
    RoleNameSchema,
    type TradeableResource,
} from '../types';
import action from '../utils/action';
import AbstractRole, { type BaseState } from './AbstractRole';
import { createAdjustWages, createPayLoan, createProposeBill, createSkip } from './commonActions';
import { createCompany } from './commonMethods';
import Deck from '../cards/Deck';
import { stateCompanies } from '../cards/companyCards';

import type Game from '../Game';

type Benefit =
    | { type: 'resource'; resource: Resource; amount: number }
    | { type: 'voting-cube'; amount: number };

interface StateState extends BaseState {
    legitimacy: Record<RoleNameNoState, number>;
    legitimacyTokens: Record<RoleNameNoState, number>;
    companyDeck: Deck<CompanyCard[]>;
    companies: Company[];
    benefits: Record<RoleNameNoState, Benefit[]>;
}

export default class StateRole extends AbstractRole<typeof RoleEnum.state, StateState> {
    readonly id = RoleEnum.state;
    state: StateState;

    constructor(game: Game) {
        super(game);
        this.state = {
            ...this.createBaseState(),
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

    getPrice(resource: TradeableResource | typeof ResourceEnum.influence) {
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

    getBenefits(id: RoleNameNoState) {
        return this.state.benefits[id] || [];
    }

    receiveBenefits(id: RoleNameNoState) {
        const role = this.game.state.roles[id];
        for (const benefit of this.getBenefits(id)) {
            if (benefit.type === 'resource') {
                role.state.resources[benefit.resource].add(benefit.amount);
            } else if (benefit.type === 'voting-cube') {
                this.game.state.board.votingCubeBag[id] += benefit.amount;
            }
        }
        this.state.benefits[id] = [];
        this.state.score += 1;
    }

    updateLegitimacy(id: RoleNameNoState, amount: number) {
        this.state.legitimacy[id] = _.clamp(this.state.legitimacy[id] + amount, 1, 10);
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
        /** 2x personal 🟣 to class → +1 that class's Legitimacy */
        meetWithPartyMps: action({
            playerInputSchema: RoleNameNoStateSchema,
            condition: () => [['hasVotingCubes', this.state.resources.influence.value >= 2]],
            run: target => {
                this.updateLegitimacy(target, +1);
            },
        }),
        /** take 10¥ from each class → -1 Legitimacy from two lowest classes */
        extraTax: action({
            run: () => {
                this.updateLegitimacy(RoleNameSchema.enum.workingClass, -1);
                this.updateLegitimacy(RoleNameSchema.enum.middleClass, -1);
                this.updateLegitimacy(RoleNameSchema.enum.capitalist, -1);

                this.game.state.roles.workingClass.state.resources.money.remove(10);
                this.game.state.roles.middleClass.state.resources.money.remove(10);
                this.game.state.roles.capitalist.state.resources.money.remove(10);

                this.state.resources.money.add(30);
            },
        }),
        /** up to 3x media → personal 🟣 */
        campaign: action({
            condition: () => [['hasVotingCubes', this.state.resources.influence.value >= 1]],
            run: () => {
                const toAdd = Math.min(3, this.game.state.board.availableInfluence);
                this.state.resources.influence.add(toAdd);
                this.game.state.board.availableInfluence -= toAdd;
            },
        }),
    };

    freeActions = {
        ...createSkip(this),
        ...createPayLoan(this),
        ...createAdjustWages(this),
    };
}
