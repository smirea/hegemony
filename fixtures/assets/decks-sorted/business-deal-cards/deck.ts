import type { ParsedBusinessDealCard } from '../types';

interface BusinessDealCardsCard extends ParsedBusinessDealCard {}

const businessDealCards = [
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '70\nBUSINESS DEAL\n50¥\n6 | ae a |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [70, 50, 6],
			money: [50],
			resources: ['money'],
			keywords: ['business', 'deal'],
		},
		kind: 'business-deal',
		name: 'Business Deal 1',
		goods: {
			food: 7,
		},
		cost: 50,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 14,
			B: 7,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '2@\n50¥\n6 [Fee | se |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 50, 6],
			money: [50],
			resources: ['money'],
			keywords: ['fee'],
		},
		kind: 'business-deal',
		name: 'Business Deal 2',
		goods: {
			luxury: 12,
		},
		cost: 50,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 24,
			B: 12,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '10@\n40¥\n6 eee ee |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [10, 40, 6],
			money: [40],
			resources: ['money'],
			keywords: ['eee'],
		},
		kind: 'business-deal',
		name: 'Business Deal 3',
		goods: {
			luxury: 10,
		},
		cost: 40,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 20,
			B: 10,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: 'ee)\nBUSINESS DEAL\n60¥\nGl ze',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [60],
			money: [60],
			resources: ['money'],
			keywords: ['business', 'deal'],
		},
		kind: 'business-deal',
		name: 'Business Deal 4',
		goods: {
			food: 5,
			luxury: 6,
		},
		cost: 60,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 22,
			B: 11,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '8+4\nBUSINESS DEAL\n75 ¥\nOlle',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [8, 4, 75],
			money: [75],
			resources: ['money'],
			keywords: ['business', 'deal', 'olle'],
		},
		kind: 'business-deal',
		name: 'Business Deal 5',
		goods: {
			food: 8,
			luxury: 4,
		},
		cost: 75,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 24,
			B: 12,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-1-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '6O\n40¥\n6 ee ee |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [6, 40],
			money: [40],
			resources: ['money'],
		},
		kind: 'business-deal',
		name: 'Business Deal 6',
		goods: {
			food: 6,
		},
		cost: 40,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 12,
			B: 6,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-2-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: 's@\nBUSINESS DEAL\n55¥\n6 Irae | o |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [55, 6],
			money: [55],
			resources: ['money'],
			keywords: ['business', 'deal', 'irae'],
		},
		kind: 'business-deal',
		name: 'Business Deal 7',
		goods: {
			food: 8,
		},
		cost: 55,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 16,
			B: 8,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-3-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '8@\nBUSINESS DEAL\n30¥\n6 | Ae | ae |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8, 30, 6],
			money: [30],
			resources: ['money'],
			keywords: ['business', 'deal'],
		},
		kind: 'business-deal',
		name: 'Business Deal 8',
		goods: {
			luxury: 8,
		},
		cost: 30,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 16,
			B: 8,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-4-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: '4 +8\nBUSINESS DEAL\n60¥\n6 | se | ee |',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 8, 60, 6],
			money: [60],
			resources: ['money'],
			keywords: ['business', 'deal'],
		},
		kind: 'business-deal',
		name: 'Business Deal 9',
		goods: {
			food: 4,
			luxury: 8,
		},
		cost: 60,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 24,
			B: 12,
		},
	},
	{
		id: 'business-deal-cards-grid-10-items-5-2-business-deals-deck-107-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/business-deal-cards/grid_10-items_5-2__business-deals-deck-107__pos-5-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/business-deal-cards/back__business-deals-deck-107.jpg',
		rawText: 'i= 5\nBUSINESS DEAL\n70¥\nSloe',
		source: {
			deck: 'business-deal-cards',
			file: 'grid_10-items_5-2__business-deals-deck-107__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [5, 70],
			money: [70],
			resources: ['money'],
			keywords: ['business', 'deal', 'sloe'],
		},
		kind: 'business-deal',
		name: 'Business Deal 10',
		goods: {
			food: 7,
			luxury: 5,
		},
		cost: 70,
		foreignTradePolicy: '6A',
		tariffs: {
			A: 24,
			B: 12,
		},
	},
] satisfies BusinessDealCardsCard[];

export default businessDealCards;
