import type { ParsedCompanyDeckCard } from '../types';

interface MiddleClassCompanyCardsCard extends ParsedCompanyDeckCard {}

const middleClassCompanyCards = [
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Jewelry Store: luxury company, cost 16, production 4, wages l1 0, l2 0, l3 0. Workers: luxury middleClass; unskilled middleClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 0, 2, 3],
			resources: ['luxury', 'money'],
			keywords: [
				'jewelry',
				'store',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-1',
		owner: 'middleClass',
		name: 'Jewelry Store',
		industry: 'luxury',
		cost: 16,
		production: 4,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Regional Radio Station: influence company, cost 20, production 2, wages l1 9, l2 12, l3 15. Workers: influence middleClass; influence workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [20, 2, 1, 9, 12, 3, 15],
			resources: ['influence', 'money'],
			keywords: [
				'regional',
				'radio',
				'station',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-2',
		owner: 'middleClass',
		name: 'Regional Radio Station',
		industry: 'influence',
		cost: 20,
		production: 2,
		wages: {
			l1: 9,
			l2: 12,
			l3: 15,
		},
		workers: [
			{
				type: 'influence',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'influence',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			"Doctor's Office: healthcare company, cost 12, production 2, wages l1 6, l2 8, l3 10. Workers: healthcare middleClass; unskilled workingClass.",
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [12, 2, 1, 6, 8, 3, 10],
			resources: ['healthcare', 'money'],
			keywords: [
				'doctor',
				'office',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-3',
		owner: 'middleClass',
		name: "Doctor's Office",
		industry: 'healthcare',
		cost: 12,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'PR Agency: influence company, cost 20, production 3, wages l1 0, l2 0, l3 0. Workers: influence middleClass; unskilled middleClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [20, 3, 1, 0, 2],
			resources: ['influence', 'money'],
			keywords: [
				'agency',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-4',
		owner: 'middleClass',
		name: 'PR Agency',
		industry: 'influence',
		cost: 20,
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'influence',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Fast Food Restaurant: food company, cost 20, production 3, wages l1 0, l2 0, l3 0. Workers: food middleClass; unskilled middleClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [20, 3, 1, 0, 2],
			resources: ['food', 'money'],
			keywords: [
				'fast',
				'food',
				'restaurant',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-5',
		owner: 'middleClass',
		name: 'Fast Food Restaurant',
		industry: 'food',
		cost: 20,
		production: 3,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Tutoring Company: education company, cost 12, production 2, wages l1 6, l2 8, l3 10. Workers: education middleClass; unskilled workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [12, 2, 1, 6, 8, 3, 10],
			resources: ['education', 'money'],
			keywords: [
				'tutoring',
				'company',
				'education',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-6',
		owner: 'middleClass',
		name: 'Tutoring Company',
		industry: 'education',
		cost: 12,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Private School: education company, cost 20, production 2, wages l1 9, l2 12, l3 15. Workers: education middleClass; education workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [20, 2, 1, 9, 12, 3, 15],
			resources: ['education', 'money'],
			keywords: [
				'private',
				'school',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-7',
		owner: 'middleClass',
		name: 'Private School',
		industry: 'education',
		cost: 20,
		production: 2,
		wages: {
			l1: 9,
			l2: 12,
			l3: 15,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'education',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Training Center: education company, cost 16, production 4, wages l1 0, l2 0, l3 0. Workers: education middleClass; unskilled middleClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 0, 2, 3],
			resources: ['education', 'money'],
			keywords: [
				'training',
				'center',
				'education',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-8',
		owner: 'middleClass',
		name: 'Training Center',
		industry: 'education',
		cost: 16,
		production: 4,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'education',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['middleClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Convenience Store: food company, cost 14, production 2, wages l1 6, l2 8, l3 10. Workers: food middleClass; unskilled workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [14, 2, 1, 6, 8, 3, 10],
			resources: ['food', 'money'],
			keywords: [
				'convenience',
				'store',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-9',
		owner: 'middleClass',
		name: 'Convenience Store',
		industry: 'food',
		cost: 14,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Medical Laboratory: healthcare company, cost 20, production 2, wages l1 9, l2 12, l3 15. Workers: healthcare middleClass; healthcare workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [20, 2, 1, 9, 12, 3, 15],
			resources: ['healthcare', 'money'],
			keywords: [
				'medical',
				'laboratory',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-10',
		owner: 'middleClass',
		name: 'Medical Laboratory',
		industry: 'healthcare',
		cost: 20,
		production: 2,
		wages: {
			l1: 9,
			l2: 12,
			l3: 15,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'healthcare',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Electronics Store: luxury company, cost 20, production 2, wages l1 9, l2 12, l3 15. Workers: luxury middleClass; luxury workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [20, 2, 1, 9, 12, 3, 15],
			resources: ['luxury', 'money'],
			keywords: [
				'electronics',
				'store',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-11',
		owner: 'middleClass',
		name: 'Electronics Store',
		industry: 'luxury',
		cost: 20,
		production: 2,
		wages: {
			l1: 9,
			l2: 12,
			l3: 15,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'luxury',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Local Newspaper: influence company, cost 14, production 2, wages l1 6, l2 8, l3 10. Workers: influence middleClass; unskilled workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [14, 2, 1, 6, 8, 3, 10],
			resources: ['influence', 'money'],
			keywords: [
				'local',
				'newspaper',
				'influence',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-12',
		owner: 'middleClass',
		name: 'Local Newspaper',
		industry: 'influence',
		cost: 14,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'influence',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Game Store: luxury company, cost 12, production 2, wages l1 6, l2 8, l3 10. Workers: luxury middleClass; unskilled workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [12, 2, 1, 6, 8, 3, 10],
			resources: ['luxury', 'money'],
			keywords: [
				'game',
				'store',
				'luxury',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-13',
		owner: 'middleClass',
		name: 'Game Store',
		industry: 'luxury',
		cost: 12,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'luxury',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Organic Farm: food company, cost 20, production 2, wages l1 9, l2 12, l3 15. Workers: food middleClass; food workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [20, 2, 1, 9, 12, 3, 15],
			resources: ['food', 'money'],
			keywords: [
				'organic',
				'farm',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-14',
		owner: 'middleClass',
		name: 'Organic Farm',
		industry: 'food',
		cost: 20,
		production: 2,
		wages: {
			l1: 9,
			l2: 12,
			l3: 15,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'food',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			"Doctor's Office: healthcare company, cost 12, production 2, wages l1 6, l2 8, l3 10. Workers: healthcare middleClass; unskilled workingClass.",
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [12, 2, 1, 6, 8, 3, 10],
			resources: ['healthcare', 'money'],
			keywords: [
				'doctor',
				'office',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-15',
		owner: 'middleClass',
		name: "Doctor's Office",
		industry: 'healthcare',
		cost: 12,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Convenience Store: food company, cost 14, production 2, wages l1 6, l2 8, l3 10. Workers: food middleClass; unskilled workingClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [14, 2, 1, 6, 8, 3, 10],
			resources: ['food', 'money'],
			keywords: [
				'convenience',
				'store',
				'food',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
				'workingclass',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-16',
		owner: 'middleClass',
		name: 'Convenience Store',
		industry: 'food',
		cost: 14,
		production: 2,
		wages: {
			l1: 6,
			l2: 8,
			l3: 10,
		},
		workers: [
			{
				type: 'food',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: true,
				roles: ['workingClass'],
			},
		],
	},
	{
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-company-cards/grid_17-items_6-3__middle-class-companies-deck-153__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-company-cards/back__middle-class-companies-deck-153.jpg',
		rawText:
			'Pharmacy: healthcare company, cost 16, production 4, wages l1 0, l2 0, l3 0. Workers: healthcare middleClass; unskilled middleClass.',
		source: {
			deck: 'middle-class-company-cards',
			file: 'grid_17-items_6-3__middle-class-companies-deck-153__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [16, 4, 1, 0, 2, 3],
			resources: ['healthcare', 'money'],
			keywords: [
				'pharmacy',
				'healthcare',
				'company',
				'cost',
				'production',
				'wages',
				'workers',
				'middleclass',
				'unskilled',
			],
		},
		kind: 'company',
		id: 'middle-class-company-cards-17',
		owner: 'middleClass',
		name: 'Pharmacy',
		industry: 'healthcare',
		cost: 16,
		production: 4,
		wages: {
			l1: 0,
			l2: 0,
			l3: 0,
		},
		workers: [
			{
				type: 'healthcare',
				optional: false,
				roles: ['middleClass'],
			},
			{
				type: 'unskilled',
				optional: false,
				roles: ['middleClass'],
			},
		],
	},
] satisfies MiddleClassCompanyCardsCard[];

export default middleClassCompanyCards;
