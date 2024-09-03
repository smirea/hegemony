import { type Action, type RoleName } from '../types';
import ResourceManager, { MoneyResourceManager } from '../utils/ResourceManager';

import type Game from '../Game';

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

    abstract basicActions: Record<string, Action<any>>;
    abstract freeActions: Record<string, Action<any>>;
}
