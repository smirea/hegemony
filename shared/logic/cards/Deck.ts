import _ from 'lodash';

export default class Deck<Cards extends ReadonlyArray<{ id: string }>> {
    protected readonly map: Record<string, Cards>;
    protected order: Cards[number]['id'][] = [];
    /** original deck that is unaffected by shuffling or sorting */
    private readonly allCards: Map<Cards[number]['id'], Cards[number]>;

    constructor(
        protected readonly name: string,
        public readonly cards: Cards,
    ) {
        this.map = {} as any;
        for (const card of cards) {
            if (this.map[card.id]) {
                throw new Error(`card ${card.id} already exists in ${this.name}`);
            }
            this.map[card.id] = card as any;
        }
        this.order = Object.keys(this.map);
        this.allCards = new Map(cards.map(c => [c.id, c]));
    }

    get size() {
        return this.order.length;
    }

    getOriginalCard<Safe extends boolean = false>(
        id: Cards[number]['id'],
        { safe }: { safe?: Safe } = {},
    ): Safe extends true ? Cards[number] | undefined : Cards[number] {
        const result = this.allCards.get(id)!;
        if (!safe && !result) throw new Error(`Deck(${this.name}): card ${id} not found!`);
        return result;
    }

    /** returns a card without taking it out of the deck */
    seek<Id extends Cards[number]['id']>(
        id: Id,
        { safe }: { safe?: boolean } = { safe: false },
    ): Cards[number] & { id: Id } {
        if (!safe && !this.map[id]) {
            throw new Error(`Deck(${this.name}): card ${id} not found`);
        }
        return this.map[id] as any;
    }

    shuffle() {
        if (process.env.NODE_ENV === 'test') return; // disable shuffle in tests
        this.order = _.shuffle(this.order);
    }

    draw(): Cards[number] {
        if (!this.order.length) throw new Error(`Deck(${this.name}): no more cards`);
        const id = this.order.pop()!;
        const result = this.seek(id);
        delete this.map[id];
        return result;
    }

    drawById<Id extends Cards[number]['id']>(id: Id): Cards[number] & { id: Id } {
        const result = this.seek(id);
        delete this.map[id];
        const index = this.order.indexOf(id);
        if (index === -1) throw new Error(`Deck(${this.name}): card ${id} not found in order`);
        this.order.splice(index, 1);
        return result;
    }

    clone() {
        return new Deck(this.name, this.cards);
    }
}
