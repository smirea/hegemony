interface Transaction {
    resources: number;
    money: number;
}

interface ForeignMarketCard {
    id: string;
    food: [Transaction, Transaction];
    luxury: [Transaction, Transaction];
    healthcare: [Transaction, Transaction];
    education: [Transaction, Transaction];
}

const foreignMarketCards: ForeignMarketCard[] = [];

export default foreignMarketCards;
