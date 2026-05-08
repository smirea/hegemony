import exportCards from '../../../fixtures/assets/decks-sorted/export-cards/deck';

import { ResourceEnum, type TradeableResource } from '../types';

import type { ParsedExportCard } from '../../../fixtures/assets/decks-sorted/types';

export interface ForeignMarketTransaction {
	resources: number;
	money: number;
}

export interface ForeignMarketCard {
	id: string;
	name: string;
	frontImage?: ParsedExportCard['frontImage'];
	backImage?: ParsedExportCard['backImage'];
	transactions: Record<TradeableResource, [ForeignMarketTransaction, ForeignMarketTransaction]>;
	food: [ForeignMarketTransaction, ForeignMarketTransaction];
	luxury: [ForeignMarketTransaction, ForeignMarketTransaction];
	healthcare: [ForeignMarketTransaction, ForeignMarketTransaction];
	education: [ForeignMarketTransaction, ForeignMarketTransaction];
}

const foreignMarketCards: ForeignMarketCard[] = exportCards.map(card => {
	const transactions = {
		[ResourceEnum.food]: transactionsFor(card, ResourceEnum.food),
		[ResourceEnum.luxury]: transactionsFor(card, ResourceEnum.luxury),
		[ResourceEnum.healthcare]: transactionsFor(card, ResourceEnum.healthcare),
		[ResourceEnum.education]: transactionsFor(card, ResourceEnum.education),
	};

	return {
		id: card.id,
		name: card.name,
		frontImage: card.frontImage,
		backImage: card.backImage,
		transactions,
		food: transactions.food,
		luxury: transactions.luxury,
		healthcare: transactions.healthcare,
		education: transactions.education,
	};
});

export default foreignMarketCards;

export function makeForeignMarketCard(
	id: string,
	food: [number, number, number, number],
	luxury: [number, number, number, number],
	healthcare: [number, number, number, number],
	education: [number, number, number, number],
): ForeignMarketCard {
	const transactions = {
		[ResourceEnum.food]: makeTransactions(food),
		[ResourceEnum.luxury]: makeTransactions(luxury),
		[ResourceEnum.healthcare]: makeTransactions(healthcare),
		[ResourceEnum.education]: makeTransactions(education),
	};

	return {
		id,
		name: id,
		transactions,
		food: transactions.food,
		luxury: transactions.luxury,
		healthcare: transactions.healthcare,
		education: transactions.education,
	};
}

function transactionsFor(
	card: ParsedExportCard,
	resource: TradeableResource,
): [ForeignMarketTransaction, ForeignMarketTransaction] {
	const result = card.transactions
		.filter(transaction => transaction.resource === resource)
		.map(({ amount, money }) => ({ resources: amount, money }));
	if (result.length !== 2) throw new Error(`${card.id} must define exactly 2 ${resource} export transactions`);
	return result as [ForeignMarketTransaction, ForeignMarketTransaction];
}

function makeTransactions([resourcesA, moneyA, resourcesB, moneyB]: [number, number, number, number]) {
	return [
		{ resources: resourcesA, money: moneyA },
		{ resources: resourcesB, money: moneyB },
	] satisfies [ForeignMarketTransaction, ForeignMarketTransaction];
}
