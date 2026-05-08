import businessDealFixtureCards from '../../../fixtures/assets/decks-sorted/business-deal-cards/deck';

import { ResourceEnum } from '../types';

import type { ParsedBusinessDealCard } from '../../../fixtures/assets/decks-sorted/types';

export interface BusinessDealCard {
	id: string;
	name: string;
	frontImage?: ParsedBusinessDealCard['frontImage'];
	backImage?: ParsedBusinessDealCard['backImage'];
	cost: number;
	goods: Partial<Record<typeof ResourceEnum.food | typeof ResourceEnum.luxury, number>>;
	[ResourceEnum.food]?: number;
	[ResourceEnum.luxury]?: number;
	tariffs: [A: number, B: number];
}

const businessDealCards: BusinessDealCard[] = businessDealFixtureCards.map(card => ({
	id: card.id,
	name: card.name,
	frontImage: card.frontImage,
	backImage: card.backImage,
	cost: card.cost,
	goods: card.goods,
	[ResourceEnum.food]: card.goods.food,
	[ResourceEnum.luxury]: card.goods.luxury,
	tariffs: [card.tariffs.A ?? 0, card.tariffs.B ?? 0],
}));

export default businessDealCards;
