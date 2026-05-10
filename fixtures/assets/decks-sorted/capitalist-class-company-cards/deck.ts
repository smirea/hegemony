import type { ParsedCompanyDeckCard } from '../types';

interface CapitalistClassCompanyCardsCard extends ParsedCompanyDeckCard {}

const capitalistClassCompanyCards = [
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'College: education company, cost 16, production 6, production from automation 2, wages level1 10, level2 20, level3 30. Workers: education workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 10, 20, 30, 2],
			money: [16, 10, 20, 30],
			resources: ['education', 'money'],
			keywords: [
				'college',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-college-1',
		name: 'College',
		cost: 16,
		industry: 'education',
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Vegetable Farm: food company, cost 15, production 5, wages level1 20, level2 25, level3 30. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [15, 5, 20, 25, 30, 3],
			money: [15, 20, 25, 30],
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
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-vegetable-farm-1',
		name: 'Vegetable Farm',
		cost: 15,
		industry: 'food',
		production: 5,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Radio Station: influence company, cost 8, production 2, wages level1 10, level2 15, level3 20. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [8, 2, 10, 15, 20, 2],
			money: [8, 10, 15, 20],
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
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-radio-station-1',
		name: 'Radio Station',
		cost: 8,
		industry: 'influence',
		production: 2,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Hotel: luxury company, cost 15, production 7, production from automation 9, wages level1 20, level2 25, level3 30. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [15, 7, 9, 20, 25, 30, 3],
			money: [15, 20, 25, 30],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-hotel-1',
		name: 'Hotel',
		cost: 15,
		industry: 'luxury',
		production: 7,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 9,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'TV Station: influence company, cost 24, production 4, wages level1 20, level2 30, level3 40. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [24, 4, 20, 30, 40, 3],
			money: [24, 20, 30, 40],
			resources: ['influence', 'money'],
			keywords: [
				'tv',
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
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-tv-station-1',
		name: 'TV Station',
		cost: 24,
		industry: 'influence',
		production: 4,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-1.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Academy: education company, cost 20, production 7, wages level1 10, level2 20, level3 30. Workers: education workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [20, 7, 10, 20, 30, 2],
			money: [20, 10, 20, 30],
			resources: ['education', 'money'],
			keywords: [
				'academy',
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
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-academy-1',
		name: 'Academy',
		cost: 20,
		industry: 'education',
		production: 7,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Car Manufacturer: luxury company, cost 45, production 5, fully automated, wages level1 0, level2 0, level3 0. Workers: none.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [45, 5, 0, 0, 0, 0],
			money: [45],
			resources: ['luxury', 'money'],
			keywords: [
				'car',
				'manufacturer',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'fully',
				'automated',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-car-manufacturer-1',
		name: 'Car Manufacturer',
		cost: 45,
		industry: 'luxury',
		production: 5,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
		fullyAutomated: true,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'University: education company, cost 24, production 9, production from automation 2, wages level1 20, level2 30, level3 40. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [24, 9, 2, 20, 30, 40, 3],
			money: [24, 20, 30, 40],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-university-1',
		name: 'University',
		cost: 24,
		industry: 'education',
		production: 9,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fast Food Chain: food company, cost 8, production 3, wages level1 10, level2 15, level3 20. Workers: food workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8, 3, 10, 15, 20, 2],
			money: [8, 10, 15, 20],
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
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-fast-food-chain-1',
		name: 'Fast Food Chain',
		cost: 8,
		industry: 'food',
		production: 3,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'food',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Electronics Manufacturer: luxury company, cost 25, production 3, fully automated, wages level1 0, level2 0, level3 0. Workers: none.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [25, 3, 0, 0, 0, 0],
			money: [25],
			resources: ['luxury', 'money'],
			keywords: [
				'electronics',
				'manufacturer',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'fully',
				'automated',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-electronics-manufacturer-1',
		name: 'Electronics Manufacturer',
		cost: 25,
		industry: 'luxury',
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
		fullyAutomated: true,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fish Farm: food company, cost 20, production 6, production from automation 1, wages level1 25, level2 30, level3 35. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [20, 6, 1, 25, 30, 35, 3],
			money: [20, 25, 30, 35],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-fish-farm-1',
		name: 'Fish Farm',
		cost: 20,
		industry: 'food',
		production: 6,
		wages: {
			l1: 25,
			l2: 30,
			l3: 35,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 1,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-2.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Publishing House: influence company, cost 12, production 3, wages level1 20, level2 25, level3 30. Workers: influence workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [12, 3, 20, 25, 30, 3],
			money: [12, 20, 25, 30],
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
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-publishing-house-1',
		name: 'Publishing House',
		cost: 12,
		industry: 'influence',
		production: 3,
		wages: {
			l1: 20,
			l2: 25,
			l3: 30,
		},
		workers: [
			{
				type: 'influence',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Clinic: healthcare company, cost 16, production 6, production from automation 2, wages level1 10, level2 20, level3 30. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 10, 20, 30, 2],
			money: [16, 10, 20, 30],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-clinic-1',
		name: 'Clinic',
		cost: 16,
		industry: 'healthcare',
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Stadium: luxury company, cost 20, production 8, production from automation 3, wages level1 25, level2 30, level3 35. Workers: luxury workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [20, 8, 3, 25, 30, 35, 3],
			money: [20, 25, 30, 35],
			resources: ['luxury', 'money'],
			keywords: [
				'stadium',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-stadium-1',
		name: 'Stadium',
		cost: 20,
		industry: 'luxury',
		production: 8,
		wages: {
			l1: 25,
			l2: 30,
			l3: 35,
		},
		workers: [
			{
				type: 'luxury',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 3,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Hospital: healthcare company, cost 20, production 7, wages level1 10, level2 20, level3 30. Workers: healthcare workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [20, 7, 10, 20, 30, 2],
			money: [20, 10, 20, 30],
			resources: ['healthcare', 'money'],
			keywords: [
				'hospital',
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
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-hospital-1',
		name: 'Hospital',
		cost: 20,
		industry: 'healthcare',
		production: 7,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'healthcare',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Medical Village: healthcare company, cost 24, production 9, production from automation 2, wages level1 20, level2 30, level3 40. Workers: healthcare workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [24, 9, 2, 20, 30, 40, 3],
			money: [24, 20, 30, 40],
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
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-medical-village-1',
		name: 'Medical Village',
		cost: 24,
		industry: 'healthcare',
		production: 9,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'healthcare',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Supermarket: food company, cost 16, production 4, production from automation 1, wages level1 15, level2 20, level3 25. Workers: food workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 15, 20, 25, 2],
			money: [16, 15, 20, 25],
			resources: ['food', 'money'],
			keywords: [
				'supermarket',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-supermarket-1',
		name: 'Supermarket',
		cost: 16,
		industry: 'food',
		production: 4,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'food',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 1,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-3.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Shopping Mall: luxury company, cost 16, production 6, production from automation 2, wages level1 15, level2 20, level3 25. Workers: luxury workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 15, 20, 25, 2],
			money: [16, 15, 20, 25],
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
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-shopping-mall-1',
		name: 'Shopping Mall',
		cost: 16,
		industry: 'luxury',
		production: 6,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'luxury',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Lobbying Firm: influence company, cost 16, production 3, wages level1 10, level2 20, level3 30. Workers: influence workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [16, 3, 10, 20, 30, 2],
			money: [16, 10, 20, 30],
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
				'unskilled',
				'workingclass',
				'middleclass',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-lobbying-firm-1',
		name: 'Lobbying Firm',
		cost: 16,
		industry: 'influence',
		production: 3,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'influence',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Institute of Technology: education company, cost 20, production 8, production from automation 3, wages level1 20, level2 30, level3 40. Workers: education workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 8, 3, 20, 30, 40, 3],
			money: [20, 20, 30, 40],
			resources: ['education', 'money'],
			keywords: [
				'institute',
				'of',
				'technology',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-institute-of-technology-1',
		name: 'Institute of Technology',
		cost: 20,
		industry: 'education',
		production: 8,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'education',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 3,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Automated Grain Farm: food company, cost 25, production 2, fully automated, wages level1 0, level2 0, level3 0. Workers: none.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [25, 2, 0, 0, 0, 0],
			money: [25],
			resources: ['food', 'money'],
			keywords: ['automated', 'grain', 'farm', 'food', 'company', 'cost', 'production', 'wages', 'workers', 'fully'],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-automated-grain-farm-1',
		name: 'Automated Grain Farm',
		cost: 25,
		industry: 'food',
		production: 2,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
		fullyAutomated: true,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Fashion Company: luxury company, cost 8, production 4, production from automation 2, wages level1 10, level2 15, level3 20. Workers: unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [8, 4, 2, 10, 15, 20, 2],
			money: [8, 10, 15, 20],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-fashion-company-1',
		name: 'Fashion Company',
		cost: 8,
		industry: 'luxury',
		production: 4,
		wages: {
			l1: 10,
			l2: 15,
			l3: 20,
		},
		workers: [
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Automated Dairy Farm: food company, cost 45, production 3, fully automated, wages level1 0, level2 0, level3 0. Workers: none.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [45, 3, 0, 0, 0, 0],
			money: [45],
			resources: ['food', 'money'],
			keywords: ['automated', 'dairy', 'farm', 'food', 'company', 'cost', 'production', 'wages', 'workers', 'fully'],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-automated-dairy-farm-1',
		name: 'Automated Dairy Farm',
		cost: 45,
		industry: 'food',
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [],
		fullyAutomated: true,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-4.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Pharmaceutical Company: healthcare company, cost 20, production 8, production from automation 3, wages level1 20, level2 30, level3 40. Workers: healthcare workingClass/middleClass optional false; unskilled workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 8, 3, 20, 30, 40, 3],
			money: [20, 20, 30, 40],
			resources: ['healthcare', 'money'],
			keywords: [
				'pharmaceutical',
				'company',
				'healthcare',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		id: 'c-pharmaceutical-company-1',
		name: 'Pharmaceutical Company',
		cost: 20,
		industry: 'healthcare',
		production: 8,
		wages: {
			l1: 20,
			l2: 30,
			l3: 40,
		},
		workers: [
			{
				type: 'healthcare',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 3,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Clinic: healthcare company, cost 16, production 6, production from automation 2, wages level1 10, level2 20, level3 30. Workers: healthcare workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 10, 20, 30, 2],
			money: [16, 10, 20, 30],
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
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		setup: { starting: true, setupWage: 'l2' },
		id: 'c-clinic-2',
		name: 'Clinic',
		cost: 16,
		industry: 'healthcare',
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'healthcare',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'College: education company, cost 16, production 6, production from automation 2, wages level1 10, level2 20, level3 30. Workers: education workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 10, 20, 30, 2],
			money: [16, 10, 20, 30],
			resources: ['education', 'money'],
			keywords: [
				'college',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		setup: { starting: true, setupWage: 'l2' },
		id: 'c-college-2',
		name: 'College',
		cost: 16,
		industry: 'education',
		production: 6,
		wages: {
			l1: 10,
			l2: 20,
			l3: 30,
		},
		workers: [
			{
				type: 'education',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Shopping Mall: luxury company, cost 16, production 6, production from automation 2, wages level1 15, level2 20, level3 25. Workers: luxury workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 6, 2, 15, 20, 25, 2],
			money: [16, 15, 20, 25],
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
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		setup: { starting: true, setupWage: 'l2' },
		id: 'c-shopping-mall-2',
		name: 'Shopping Mall',
		cost: 16,
		industry: 'luxury',
		production: 6,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'luxury',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 2,
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-5.png',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-company-cards/back__capitalist-class-companies-deck-159.png',
		rawText:
			'Supermarket: food company, cost 16, production 4, production from automation 1, wages level1 15, level2 20, level3 25. Workers: food workingClass/middleClass optional false; unskilled workingClass/middleClass optional false.',
		source: {
			deck: 'capitalist-class-company-cards',
			file: 'grid_28-items_6-5__capitalist-class-companies-deck-159__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 15, 20, 25, 2],
			money: [16, 15, 20, 25],
			resources: ['food', 'money'],
			keywords: [
				'supermarket',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'unskilled',
				'workingclass',
				'middleclass',
				'automation',
			],
		},
		kind: 'company',
		owner: 'capitalist',
		sourceType: 'base',
		setup: { starting: true, setupWage: 'l2' },
		id: 'c-supermarket-2',
		name: 'Supermarket',
		cost: 16,
		industry: 'food',
		production: 4,
		wages: {
			l1: 15,
			l2: 20,
			l3: 25,
		},
		workers: [
			{
				type: 'food',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
			{
				type: 'unskilled',
				roles: ['workingClass', 'middleClass'],
				optional: false,
			},
		],
		productionFromAutomation: 1,
	},
] satisfies CapitalistClassCompanyCardsCard[];

export default capitalistClassCompanyCards;
