import type { ParsedCompanyDeckCard } from '../types';

interface CooperativeFarmCardsCard extends ParsedCompanyDeckCard {}

const cooperativeFarmCards = [
	{
		frontImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/single__cooperative-farm-deck-184.png',
		backImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/back__cooperative-farm-deck-184.jpg',
		rawText:
			'Cooperative Farm: food company, cost 0, production 2, wages level1 0, level2 0, level3 0. Workers: unskilled workingClass optional false; unskilled workingClass optional false; unskilled workingClass optional false.',
		source: {
			deck: 'cooperative-farm-cards',
			file: 'single__cooperative-farm-deck-184.png',
		},
		parsed: {
			numbers: [0, 2, 0, 0, 0, 3],
			money: [],
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
		notes: [
			'Rules components.md says Cooperative Farm requires 3 unskilled Working Class workers and produces 2 Food.',
		],
		kind: 'company',
		owner: 'workingClass',
		sourceType: 'cooperative-farm',
		id: 'cooperative-farm-1',
		name: 'Cooperative Farm',
		cost: 0,
		industry: 'food',
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
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
				optional: false,
			},
		],
	},
	{
		frontImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/single__cooperative-farm-deck-185.png',
		backImage: 'fixtures/assets/decks-sorted/cooperative-farm-cards/back__cooperative-farm-deck-184.jpg',
		rawText:
			'Cooperative Farm: food company, cost 0, production 2, wages level1 0, level2 0, level3 0. Workers: unskilled workingClass optional false; unskilled workingClass optional false; unskilled workingClass optional false.',
		source: {
			deck: 'cooperative-farm-cards',
			file: 'single__cooperative-farm-deck-185.png',
		},
		parsed: {
			numbers: [0, 2, 0, 0, 0, 3],
			money: [],
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
		notes: [
			'Rules components.md says Cooperative Farm requires 3 unskilled Working Class workers and produces 2 Food.',
		],
		kind: 'company',
		owner: 'workingClass',
		sourceType: 'cooperative-farm',
		id: 'cooperative-farm-2',
		name: 'Cooperative Farm',
		cost: 0,
		industry: 'food',
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
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass'],
				optional: false,
			},
		],
	},
] satisfies CooperativeFarmCardsCard[];

export default cooperativeFarmCards;
