import type { ParsedCompanyDeckCard } from '../types';

interface CooperativeFarmCardsCard extends ParsedCompanyDeckCard {}

const cooperativeFarmCards = [
	{
		frontImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/single__cooperative-farm-deck-184.png',
		backImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/back__cooperative-farm-deck-184.jpg',
		rawText:
			'Cooperative Farm: food company, cost 0, production 2, wages . Workers: unskilled workingClass; unskilled workingClass.',
		source: {
			deck: 'cooperative-farm-cards',
			file: 'single__cooperative-farm-deck-184.png',
		},
		parsed: {
			numbers: [0, 2],
			resources: ['food', 'money'],
			keywords: [
				'cooperative',
				'farm',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'cooperative-farm-1',
		owner: 'workingClass',
		name: 'Cooperative Farm',
		industry: 'food',
		cost: 0,
		production: 2,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass'],
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/single__cooperative-farm-deck-185.png',
		backImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/back__cooperative-farm-deck-184.jpg',
		rawText:
			'Cooperative Farm: food company, cost 0, production 2, wages . Workers: unskilled workingClass; unskilled workingClass.',
		source: {
			deck: 'cooperative-farm-cards',
			file: 'single__cooperative-farm-deck-185.png',
		},
		parsed: {
			numbers: [0, 2],
			resources: ['food', 'money'],
			keywords: [
				'cooperative',
				'farm',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'cooperative-farm-2',
		owner: 'workingClass',
		name: 'Cooperative Farm',
		industry: 'food',
		cost: 0,
		production: 2,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass'],
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
			},
		],
	},
] satisfies CooperativeFarmCardsCard[];

export default cooperativeFarmCards;
