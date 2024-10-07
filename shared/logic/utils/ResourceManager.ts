export default class ResourceManager {
    public readonly name: string;
    protected _value: number;
    protected readonly min: number;
    protected readonly max?: number;
    protected readonly limitBehavior: 'throw' | 'clamp';

    constructor({
        name,
        value = 0,
        min = 0,
        max,
        limitBehavior = 'throw',
    }: {
        name: string;
        value?: number;
        limitBehavior?: 'throw' | 'clamp';
        min?: number;
        max?: number;
    }) {
        this.name = name;
        this._value = value;
        this.min = min;
        this.max = max;
        this.limitBehavior = limitBehavior;
    }

    get value() {
        return this._value;
    }

    protected handleValue(v: number) {
        if (typeof v !== 'number') throw new Error('invalid value');
        if (this.min) {
            if (v < this.min) {
                if (this.limitBehavior === 'throw') {
                    throw new Error(`not enough ${this.name} (${v} < ${this.min})`);
                }
                v = this.min;
            }
        }
        if (this.max) {
            if (v > this.max) {
                if (this.limitBehavior === 'throw') {
                    throw new Error(`too many ${this.name} (${v} > ${this.max})`);
                }
                v = this.max;
            }
        }
        return v;
    }

    add(amount: number) {
        this._value = this.handleValue(this._value + amount);
        return this.value;
    }

    remove(amount: number) {
        this._value = this.handleValue(this._value - amount);
        return this.value;
    }
}

export class MoneyResourceManager extends ResourceManager {
    protected _loans = 0;

    constructor(config: { name?: string; value?: number; loans?: number } = {}) {
        super({ name: config.name || 'money', value: config.value });
        this._loans = config.loans ?? 0;
    }

    get loans() {
        return this._loans;
    }

    addLoans(amount: number) {
        this._loans += amount;
    }

    removeLoans(amount: number) {
        this._loans -= amount;
    }

    remove(amount: number, { canTakeLoans = false }: { canTakeLoans?: boolean } = {}) {
        if (this._value >= amount) return super.remove(amount);
        if (!canTakeLoans) throw new Error('not enough money');
        const numLoans = Math.ceil((amount - this._value) / 50);
        this.addLoans(numLoans);
        this._value += numLoans * 50;
        this._value -= amount;
        return this.value;
    }
}

export class CapitalistMoneyResourceManager extends MoneyResourceManager {
    protected _revenue: number;
    protected _capital: number;

    constructor(config: { revenue?: number; capital?: number; loans?: number } = {}) {
        super(config);
        this._revenue = config.revenue ?? 0;
        this._capital = config.capital ?? 0;
    }

    get revenue() {
        return this._revenue;
    }
    get capital() {
        return this._capital;
    }
    get value() {
        return this._revenue + this._capital;
    }

    add(amount: number, { useCapital }: { useCapital?: boolean } = {}) {
        if (useCapital) {
            this._capital += amount;
        } else {
            this._revenue += amount;
        }
        return this.value;
    }

    remove(
        amount: number,
        {
            useCapital = false,
            canTakeLoans = false,
        }: { canTakeLoans?: boolean; useCapital?: boolean } = {},
    ) {
        const value = useCapital ? this._capital : this._revenue;
        const bucket = useCapital ? '_capital' : '_revenue';
        const otherBucket = useCapital ? '_revenue' : '_capital';

        // no need to use both buckets
        if (value >= amount) {
            this[bucket] -= amount;
            return this.value;
        }

        // no loans needed
        if (this.value >= amount) {
            const remaining = amount - this[bucket];
            this[bucket] = 0;
            this[otherBucket] -= remaining;
            return this.value;
        }

        if (!canTakeLoans) throw new Error('not enough money');

        const remaining = amount - this.value;
        this._capital = 0;
        this._revenue = 0;
        const numLoans = Math.ceil(remaining / 50);
        this.addLoans(numLoans);
        this._capital += numLoans * 50;
        this._capital -= remaining;

        return this.value;
    }
}
