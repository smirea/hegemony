import type { ParsedCompanyDeckCard } from '../types';

interface CapitalistClassCompanyCardsCard extends ParsedCompanyDeckCard {}

const capitalistClassCompanyCards = [
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'College: education company, cost 16, production 6, wages l1 10, l2 20, l3 30. Workers: education workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 10, 2, 20, 3, 30],
			resources: ['education', 'money'],
			keywords: [
				'college',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-1',
		owner: 'capitalist',
		name: 'College',
		industry: 'education',
		cost: 16,
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Vegetable Farm: food company, cost 15, production 5, wages l1 20, l2 25, l3 30. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [15, 5, 1, 20, 2, 25, 3, 30],
			resources: ['food', 'money'],
			keywords: [
				'vegetable',
				'farm',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-2',
		owner: 'capitalist',
		name: 'Vegetable Farm',
		industry: 'food',
		cost: 15,
		production: 5,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Radio Station: influence company, cost 8, production 2, wages l1 10, l2 15, l3 20. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [8, 2, 1, 10, 15, 3, 20],
			resources: ['influence', 'money'],
			keywords: [
				'radio',
				'station',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-3',
		owner: 'capitalist',
		name: 'Radio Station',
		industry: 'influence',
		cost: 8,
		production: 2,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Hotel: luxury company, cost 15, production 7, wages l1 20, l2 25, l3 30. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [15, 7, 1, 20, 2, 25, 3, 30],
			resources: ['luxury', 'money'],
			keywords: [
				'hotel',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-4',
		owner: 'capitalist',
		name: 'Hotel',
		industry: 'luxury',
		cost: 15,
		production: 7,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'TV Station: influence company, cost 24, production 4, wages l1 20, l2 30, l3 40. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [24, 4, 1, 20, 2, 30, 3, 40],
			resources: ['influence', 'money'],
			keywords: [
				'station',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-5',
		owner: 'capitalist',
		name: 'TV Station',
		industry: 'influence',
		cost: 24,
		production: 4,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Academy: education company, cost 20, production 7, wages l1 10, l2 20, l3 30. Workers: education workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [20, 7, 1, 10, 2, 3, 30],
			resources: ['education', 'money'],
			keywords: [
				'academy',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-6',
		owner: 'capitalist',
		name: 'Academy',
		industry: 'education',
		cost: 20,
		production: 7,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText: 'Car Manufacturer: luxury company, cost 45, production 5, wages l1 0, l2 0, l3 0. Workers: .',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [45, 5, 1, 0, 2, 3],
			resources: ['luxury', 'money'],
			keywords: ['car', 'manufacturer', 'luxury', 'company', 'cost', 'production', 'wages', 'workers'],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-7',
		owner: 'capitalist',
		name: 'Car Manufacturer',
		industry: 'luxury',
		cost: 45,
		production: 5,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'University: education company, cost 24, production 9, wages l1 20, l2 30, l3 40. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [24, 9, 1, 20, 2, 30, 3, 40],
			resources: ['education', 'money'],
			keywords: [
				'university',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-8',
		owner: 'capitalist',
		name: 'University',
		industry: 'education',
		cost: 24,
		production: 9,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fast Food Chain: food company, cost 8, production 3, wages l1 10, l2 15, l3 20. Workers: food workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8, 3, 1, 10, 2, 15, 20],
			resources: ['food', 'money'],
			keywords: [
				'fast',
				'food',
				'chain',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-9',
		owner: 'capitalist',
		name: 'Fast Food Chain',
		industry: 'food',
		cost: 8,
		production: 3,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText: 'Electronics Manufacturer: luxury company, cost 25, production 3, wages l1 0, l2 0, l3 0. Workers: .',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [25, 3, 1, 0, 2],
			resources: ['luxury', 'money'],
			keywords: ['electronics', 'manufacturer', 'luxury', 'company', 'cost', 'production', 'wages', 'workers'],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-10',
		owner: 'capitalist',
		name: 'Electronics Manufacturer',
		industry: 'luxury',
		cost: 25,
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fish Farm: food company, cost 20, production 6, wages l1 25, l2 30, l3 35. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [20, 6, 1, 25, 2, 30, 3, 35],
			resources: ['food', 'money'],
			keywords: [
				'fish',
				'farm',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-11',
		owner: 'capitalist',
		name: 'Fish Farm',
		industry: 'food',
		cost: 20,
		production: 6,
		wages: {
			l1: 25,
			l2: 30,
			l3: 35,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Publishing House: influence company, cost 12, production 3, wages l1 20, l2 25, l3 30. Workers: influence workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [12, 3, 1, 20, 2, 25, 30],
			resources: ['influence', 'money'],
			keywords: [
				'publishing',
				'house',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-12',
		owner: 'capitalist',
		name: 'Publishing House',
		industry: 'influence',
		cost: 12,
		production: 3,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'influence',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Clinic: healthcare company, cost 16, production 6, wages l1 10, l2 20, l3 30. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 10, 2, 20, 3, 30],
			resources: ['healthcare', 'money'],
			keywords: [
				'clinic',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-13',
		owner: 'capitalist',
		name: 'Clinic',
		industry: 'healthcare',
		cost: 16,
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Stadium: luxury company, cost 20, production 8, wages l1 25, l2 30, l3 35. Workers: luxury workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [20, 8, 1, 25, 2, 30, 3, 35],
			resources: ['luxury', 'money'],
			keywords: [
				'stadium',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-14',
		owner: 'capitalist',
		name: 'Stadium',
		industry: 'luxury',
		cost: 20,
		production: 8,
		wages: {
			l1: 25,
			l2: 30,
			l3: 35,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Hospital: healthcare company, cost 20, production 7, wages l1 10, l2 20, l3 30. Workers: healthcare workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [20, 7, 1, 10, 2, 3, 30],
			resources: ['healthcare', 'money'],
			keywords: [
				'hospital',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-15',
		owner: 'capitalist',
		name: 'Hospital',
		industry: 'healthcare',
		cost: 20,
		production: 7,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Medical Village: healthcare company, cost 24, production 9, wages l1 20, l2 30, l3 40. Workers: healthcare workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [24, 9, 1, 20, 2, 30, 3, 40],
			resources: ['healthcare', 'money'],
			keywords: [
				'medical',
				'village',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-16',
		owner: 'capitalist',
		name: 'Medical Village',
		industry: 'healthcare',
		cost: 24,
		production: 9,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Supermarket: food company, cost 16, production 4, wages l1 15, l2 20, l3 25. Workers: food workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 15, 2, 20, 3, 25],
			resources: ['food', 'money'],
			keywords: [
				'supermarket',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-17',
		owner: 'capitalist',
		name: 'Supermarket',
		industry: 'food',
		cost: 16,
		production: 4,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Shopping Mall: luxury company, cost 16, production 6, wages l1 15, l2 20, l3 25. Workers: luxury workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 15, 2, 20, 3, 25],
			resources: ['luxury', 'money'],
			keywords: [
				'shopping',
				'mall',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-18',
		owner: 'capitalist',
		name: 'Shopping Mall',
		industry: 'luxury',
		cost: 16,
		production: 6,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Lobbying Firm: influence company, cost 16, production 3, wages l1 10, l2 20, l3 30. Workers: influence workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [16, 3, 1, 10, 2, 20, 30],
			resources: ['influence', 'money'],
			keywords: [
				'lobbying',
				'firm',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-19',
		owner: 'capitalist',
		name: 'Lobbying Firm',
		industry: 'influence',
		cost: 16,
		production: 3,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'influence',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Institute of Technology: education company, cost 20, production 8, wages l1 20, l2 30, l3 40. Workers: education workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 8, 1, 2, 30, 3, 40],
			resources: ['education', 'money'],
			keywords: [
				'institute',
				'technology',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-20',
		owner: 'capitalist',
		name: 'Institute of Technology',
		industry: 'education',
		cost: 20,
		production: 8,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText: 'Automated Grain Farm: food company, cost 25, production 2, wages l1 0, l2 0, l3 0. Workers: .',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [25, 2, 1, 0, 3],
			resources: ['food', 'money'],
			keywords: ['automated', 'grain', 'farm', 'food', 'company', 'cost', 'production', 'wages', 'workers'],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-21',
		owner: 'capitalist',
		name: 'Automated Grain Farm',
		industry: 'food',
		cost: 25,
		production: 2,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fashion Company: luxury company, cost 8, production 4, wages l1 10, l2 15, l3 20. Workers: unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [8, 4, 1, 10, 2, 15, 3, 20],
			resources: ['luxury', 'money'],
			keywords: [
				'fashion',
				'company',
				'luxury',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-22',
		owner: 'capitalist',
		name: 'Fashion Company',
		industry: 'luxury',
		cost: 8,
		production: 4,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText: 'Automated Dairy Farm: food company, cost 45, production 3, wages l1 0, l2 0, l3 0. Workers: .',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [45, 3, 1, 0, 2],
			resources: ['food', 'money'],
			keywords: ['automated', 'dairy', 'farm', 'food', 'company', 'cost', 'production', 'wages', 'workers'],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-23',
		owner: 'capitalist',
		name: 'Automated Dairy Farm',
		industry: 'food',
		cost: 45,
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Pharmaceutical Company: healthcare company, cost 20, production 8, wages l1 20, l2 30, l3 40. Workers: healthcare workingClass/middleClass; unskilled workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 8, 1, 2, 30, 3, 40],
			resources: ['healthcare', 'money'],
			keywords: [
				'pharmaceutical',
				'company',
				'healthcare',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-24',
		owner: 'capitalist',
		name: 'Pharmaceutical Company',
		industry: 'healthcare',
		cost: 20,
		production: 8,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Clinic: healthcare company, cost 16, production 6, wages l1 10, l2 20, l3 30. Workers: healthcare workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 10, 2, 20, 3, 30],
			resources: ['healthcare', 'money'],
			keywords: [
				'clinic',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-25',
		owner: 'capitalist',
		name: 'Clinic',
		industry: 'healthcare',
		cost: 16,
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'College: education company, cost 16, production 6, wages l1 10, l2 20, l3 30. Workers: education workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 10, 2, 20, 3, 30],
			resources: ['education', 'money'],
			keywords: [
				'college',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-26',
		owner: 'capitalist',
		name: 'College',
		industry: 'education',
		cost: 16,
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Shopping Mall: luxury company, cost 16, production 6, wages l1 15, l2 20, l3 25. Workers: luxury workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 1, 15, 2, 20, 3, 25],
			resources: ['luxury', 'money'],
			keywords: [
				'shopping',
				'mall',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-27',
		owner: 'capitalist',
		name: 'Shopping Mall',
		industry: 'luxury',
		cost: 16,
		production: 6,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Supermarket: food company, cost 16, production 4, wages l1 15, l2 20, l3 25. Workers: food workingClass/middleClass; unskilled workingClass/middleClass.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 15, 2, 20, 3, 25],
			resources: ['food', 'money'],
			keywords: [
				'supermarket',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'workingclass',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'capitalist-class-company-cards-28',
		owner: 'capitalist',
		name: 'Supermarket',
		industry: 'food',
		cost: 16,
		production: 4,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['workingClass', 'middleClass'],
			},
		],
	},
] satisfies CapitalistClassCompanyCardsCard[];

export default capitalistClassCompanyCards;
