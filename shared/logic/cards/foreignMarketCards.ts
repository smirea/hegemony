interface Transaction {
    resources: number;
    money: number;
}

export interface ForeignMarketCard {
    id: string;
    food: [Transaction, Transaction];
    luxury: [Transaction, Transaction];
    healthcare: [Transaction, Transaction];
    education: [Transaction, Transaction];
}

const foreignMarketCards: ForeignMarketCard[] = [
    makeForeignMarketCard('test', [1, 2, 3, 8], [1, 2, 3, 8], [1, 2, 3, 8], [1, 2, 3, 8]),
];

export default foreignMarketCards;

export function makeForeignMarketCard(
    id: string,
    food: [number, number, number, number],
    luxury: [number, number, number, number],
    healthcare: [number, number, number, number],
    education: [number, number, number, number],
): ForeignMarketCard {
    return {
        id,
        food: [
            { resources: food[0], money: food[1] },
            { resources: food[2], money: food[3] },
        ],
        luxury: [
            { resources: luxury[0], money: luxury[1] },
            { resources: luxury[2], money: luxury[3] },
        ],
        healthcare: [
            { resources: healthcare[0], money: healthcare[1] },
            { resources: healthcare[2], money: healthcare[3] },
        ],
        education: [
            { resources: education[0], money: education[1] },
            { resources: education[2], money: education[3] },
        ],
    };
}
