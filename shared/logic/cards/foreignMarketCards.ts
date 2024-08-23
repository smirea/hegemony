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
    {
        id: 'food',
        food: [
            { resources: 1, money: 2 },
            { resources: 3, money: 8 },
        ],
        luxury: [
            { resources: 1, money: 2 },
            { resources: 3, money: 8 },
        ],
        healthcare: [
            { resources: 1, money: 2 },
            { resources: 3, money: 8 },
        ],
        education: [
            { resources: 1, money: 2 },
            { resources: 3, money: 8 },
        ],
    },
];

export default foreignMarketCards;
