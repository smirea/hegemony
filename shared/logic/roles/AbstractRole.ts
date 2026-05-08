import { type z } from 'zod';

import {
	ResourceEnumSchema,
	RoleEnum,
	type TradeableResourceAndInfluenceSchema,
	type Action,
	type RoleName,
} from '../types';
import ResourceManager, { MoneyResourceManager } from '../utils/ResourceManager';
import { createActionDeck, type ActionCard } from '../cards/actionCards';

import type Game from '../Game';
import type MiddleClassRole from './MiddleClassRole';
import type StateRole from './StateRole';
import type CapitalistRole from './CapitalistRole';
import type Deck from '../cards/Deck';

export interface BaseData<MoneyManager extends MoneyResourceManager = MoneyResourceManager> {
	score: number;
	usedActions: Array<'basic' | 'free'>;
	resources: {
		money: MoneyManager;
		influence: ResourceManager;
		food: ResourceManager;
		healthcare: ResourceManager;
		education: ResourceManager;
		luxury: ResourceManager;
	};
	actionDeck: Deck<ActionCard[]>;
	actionHand: ActionCard['id'][];
	actionDiscard: ActionCard['id'][];
}

export default abstract class AbstractRole<Id extends RoleName, Data extends BaseData> {
	public abstract readonly id: Id;
	public abstract data: Data;
	/** whether this role is in the game (player or automata) */
	public active = false;

	constructor(public readonly game: Game) {}

	protected createBaseState(): BaseData {
		return {
			score: 0,
			usedActions: [],
			resources: {
				money: new MoneyResourceManager({ name: this.id + ':money' }),
				influence: new ResourceManager({ name: this.id + ':influence' }),
				food: new ResourceManager({ name: this.id + ':food' }),
				healthcare: new ResourceManager({ name: this.id + ':healthcare' }),
				education: new ResourceManager({ name: this.id + ':education' }),
				luxury: new ResourceManager({ name: this.id + ':luxury' }),
			},
			actionDeck: createActionDeck(this.id),
			actionHand: [],
			actionDiscard: [],
		};
	}

	abstract setupBoard(): void;
	abstract setupRound(): void;
	abstract basicActions: Record<string, Action<any>>;
	abstract freeActions: Record<string, Action<any>>;

	public drawActionCards(count: number) {
		for (let i = 0; i < count && this.data.actionDeck.size > 0; ++i) {
			this.data.actionHand.push(this.data.actionDeck.draw().id);
		}
	}

	public refillActionHand(target = 7) {
		this.drawActionCards(Math.max(0, target - this.data.actionHand.length));
	}

	public buyGoods(
		source: MiddleClassRole | CapitalistRole | StateRole,
		resource: z.infer<typeof TradeableResourceAndInfluenceSchema>,
		count: number,
	) {
		if (this.id === source.id) throw new Error(`${this.id}: cannot buy goods from yourself`);

		let total;
		if (resource === ResourceEnumSchema.enum.influence) {
			if (source.id !== RoleEnum.state) throw new Error('only the state sells influence');
			total = count * source.getPrice(resource);
		} else {
			total = count * source.getPrice(resource);
		}

		this.data.resources.money.remove(total);
		source.data.resources.money.add(total);

		this.data.resources[resource].add(count);
		source.data.resources[resource].remove(count);

		if (source.id === RoleEnum.state) source.onBuyGoods(this.id as any, resource, count);
	}
}
