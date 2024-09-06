import { type z } from 'zod';

import {
    ResourceEnumSchema,
    RoleEnum,
    type TradeableResourceAndInfluenceSchema,
    type Action,
    type RoleName,
} from '../types';
import ResourceManager, { MoneyResourceManager } from '../utils/ResourceManager';

import type Game from '../Game';
import type MiddleClassRole from './MiddleClassRole';
import type StateRole from './StateRole';
import type CapitalistRole from './CapitalistRole';

export interface BaseState<MoneyManager extends MoneyResourceManager = MoneyResourceManager> {
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
}

export default abstract class AbstractRole<Id extends RoleName, State extends BaseState> {
    public abstract readonly id: Id;
    public abstract state: State;
    /** whether this role is in the game (player or automata) */
    public active = false;

    constructor(public readonly game: Game) {}

    protected createBaseState(): BaseState {
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
        };
    }

    abstract setupBoard(): void;
    abstract setupRound(): void;
    abstract basicActions: Record<string, Action<any>>;
    abstract freeActions: Record<string, Action<any>>;

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

        this.state.resources.money.remove(total);
        source.state.resources.money.add(total);

        this.state.resources[resource].add(count);
        source.state.resources[resource].remove(count);

        if (source.id === RoleEnum.state) source.onBuyGoods(this.id as any, resource, count);
    }
}
