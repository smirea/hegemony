import _ from 'lodash';

export default class Deck<Cards extends ReadonlyArray<{ id: string }>> {
    protected readonly map: Record<string, Cards>;
    protected order: Cards[number]['id'][] = [];

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
    }

    /** returns a card without taking it out of the deck */
    seek<Id extends Cards[number]['id']>(
        id: Id,
        { safe }: { safe?: boolean } = { safe: false },
    ): Cards[number] & { id: Id } {
        if (!safe && !this.map[id]) {
            throw new Error(`card ${id} not found in ${this.name}`);
        }
        return this.map[id] as any;
    }

    shuffle() {
        this.order = _.shuffle(this.order);
    }

    draw(): Cards[number] {
        if (!this.order.length) throw new Error('no more cards in deck');
        const id = this.order.pop()!;
        const result = this.seek(id);
        delete this.map[id];
        return result;
    }

    clone() {
        return new Deck(this.name, this.cards);
    }
}
