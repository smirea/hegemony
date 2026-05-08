import type { ParsedActionCard } from '../types';

interface WorkingClassActionCardsCard extends ParsedActionCard {}

const workingClassActionCards = [
	{
		id: 'working-class-action-specialization-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'f }\n' +
			'Pi 24\n' +
			'r\n' +
			'SPECIALIZATION\n' +
			'Place a skilled Worker of your\n' +
			'choice from the Supply in\n' +
			'the Unemployed Workers area.\n' +
			'Then, assign up to 3 Workers.\n' +
			'7B /7C\n' +
			'] 4',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [24, 3, 7, 4],
			policies: ['7B', '7C'],
			keywords: [
				'specialization',
				'place',
				'skilled',
				'worker',
				'of',
				'choice',
				'the',
				'supply',
				'in',
				'unemployed',
				'workers',
				'area',
				'assign',
				'up',
				'to',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SPECIALIZATION',
		content:
			'SPECIALIZATION\n' +
			'Place a skilled Worker of your\n' +
			'choice from the Supply in\n' +
			'the Unemployed Workers area.\n' +
			'Then, assign up to 3 Workers.\n' +
			'7B /7C\n' +
			'] 4',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 3,
				},
				workerType: 'any',
				target: 'company',
			},
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'unemployed-workers',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-specialization-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'f }\n' +
			'Pi 24\n' +
			'r\n' +
			'SPECIALIZATION\n' +
			'Place a skilled Worker of your\n' +
			'choice from the Supply in\n' +
			'the Unemployed Workers area.\n' +
			'Then, assign up to 3 Workers.\n' +
			'7B /7C\n' +
			'] 4',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 2,
		},
		parsed: {
			numbers: [24, 3, 7, 4],
			policies: ['7B', '7C'],
			keywords: [
				'specialization',
				'place',
				'skilled',
				'worker',
				'of',
				'choice',
				'the',
				'supply',
				'in',
				'unemployed',
				'workers',
				'area',
				'assign',
				'up',
				'to',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SPECIALIZATION',
		content:
			'SPECIALIZATION\n' +
			'Place a skilled Worker of your\n' +
			'choice from the Supply in\n' +
			'the Unemployed Workers area.\n' +
			'Then, assign up to 3 Workers.\n' +
			'7B /7C\n' +
			'] 4',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 3,
				},
				workerType: 'any',
				target: 'company',
			},
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'unemployed-workers',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-highlight-social-issues-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText: '; g REAKE GS\n: a: "%\nz 2\nHIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15 ¥.\n4',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 3, 15, 4],
			money: [15],
			resources: ['money'],
			keywords: ['highlight', 'social', 'issues', 'buy', 'the', 'state', 'for'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'HIGHLIGHT SOCIAL ISSUES',
		content: 'HIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15 ¥.\n4',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-cooperative-farm-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'——— lll s—‘(i‘é ee\n' +
			'OPES ~S Exe ta\n' +
			'~ id ine yy) 35\n' +
			'e eee ~\n' +
			'COOPERATIVE FARM\n' +
			'If you have at least\n' +
			'3 Unemployed Workers,\n' +
			'build a Cooperative Farm\n' +
			'(place it next to your board) and\n' +
			'assign 3 of those Workers there.\n' +
			'7 sy',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [35, 3, 7],
			keywords: [
				'cooperative',
				'farm',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'build',
				'place',
				'it',
				'next',
				'to',
				'board',
				'and',
				'assign',
				'of',
				'those',
				'there',
				'sy',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'COOPERATIVE FARM',
		content:
			'COOPERATIVE FARM\n' +
			'If you have at least\n' +
			'3 Unemployed Workers,\n' +
			'build a Cooperative Farm\n' +
			'(place it next to your board) and\n' +
			'assign 3 of those Workers there.\n' +
			'7 sy',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-cooperative-farm-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'——— lll s—‘(i‘é ee\n' +
			'OPES ~S Exe ta\n' +
			'~ id ine yy) 35\n' +
			'e eee ~\n' +
			'COOPERATIVE FARM\n' +
			'If you have at least\n' +
			'3 Unemployed Workers,\n' +
			'build a Cooperative Farm\n' +
			'(place it next to your board) and\n' +
			'assign 3 of those Workers there.\n' +
			'7 sy',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 2,
		},
		parsed: {
			numbers: [35, 3, 7],
			keywords: [
				'cooperative',
				'farm',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'build',
				'place',
				'it',
				'next',
				'to',
				'board',
				'and',
				'assign',
				'of',
				'those',
				'there',
				'sy',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'COOPERATIVE FARM',
		content:
			'COOPERATIVE FARM\n' +
			'If you have at least\n' +
			'3 Unemployed Workers,\n' +
			'build a Cooperative Farm\n' +
			'(place it next to your board) and\n' +
			'assign 3 of those Workers there.\n' +
			'7 sy',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-healthcare-benefits-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'A\n' +
			'ie te\n' +
			'5 N .\n' +
			'> “bY\n' +
			'HEALTHCARE BENEFITS\n' +
			'Buy @ from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).\n' +
			'a\n' +
			'REQUIREMENT silly,\n' +
			'9d',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
			physicalIndex: 6,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 9],
			resources: ['healthcare', 'money'],
			keywords: [
				'healthcare',
				'benefits',
				'buy',
				'the',
				'state',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'cost',
				'rounded',
				'requirement',
				'silly',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'HEALTHCARE BENEFITS',
		content:
			'HEALTHCARE BENEFITS\n' +
			'Buy @ from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).\n' +
			'a\n' +
			'REQUIREMENT silly,\n' +
			'9d',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-healthcare-benefits-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'A\n' +
			'ie te\n' +
			'5 N .\n' +
			'> “bY\n' +
			'HEALTHCARE BENEFITS\n' +
			'Buy @ from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).\n' +
			'a\n' +
			'REQUIREMENT silly,\n' +
			'9d',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
			physicalIndex: 7,
			copyIndex: 2,
		},
		parsed: {
			numbers: [5, 9],
			resources: ['healthcare', 'money'],
			keywords: [
				'healthcare',
				'benefits',
				'buy',
				'the',
				'state',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'cost',
				'rounded',
				'requirement',
				'silly',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'HEALTHCARE BENEFITS',
		content:
			'HEALTHCARE BENEFITS\n' +
			'Buy @ from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).\n' +
			'a\n' +
			'REQUIREMENT silly,\n' +
			'9d',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-healthcare-movement-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'_ A YY ae /\nHEALTHCARE MOVEMENT\nPropose a Bill for\nWelfare State - Healthcare.\nAdd 2 Voting cubes to the bag.\n7',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
			physicalIndex: 8,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 7],
			resources: ['healthcare', 'influence'],
			keywords: [
				'healthcare',
				'movement',
				'propose',
				'bill',
				'for',
				'welfare',
				'state',
				'add',
				'voting',
				'cubes',
				'to',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'HEALTHCARE MOVEMENT',
		content: 'HEALTHCARE MOVEMENT\nPropose a Bill for\nWelfare State - Healthcare.\nAdd 2 Voting cubes to the bag.\n7',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-need-for-change-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText: '1 ein 2\n1 a © ie\n? A wy t\n| - iy\nol sad Re\nj A\nNEED FOR CHANGE\nPropose 2 Bills.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
			physicalIndex: 9,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 2],
			keywords: ['need', 'for', 'change', 'propose', 'bills'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'NEED FOR CHANGE',
		content: 'NEED FOR CHANGE\nPropose 2 Bills.',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-need-for-change-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText: '1 ein 2\n1 a © ie\n? A wy t\n| - iy\nol sad Re\nj A\nNEED FOR CHANGE\nPropose 2 Bills.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
			physicalIndex: 10,
			copyIndex: 2,
		},
		parsed: {
			numbers: [1, 2],
			keywords: ['need', 'for', 'change', 'propose', 'bills'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'NEED FOR CHANGE',
		content: 'NEED FOR CHANGE\nPropose 2 Bills.',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-need-for-change-3',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText: '1 ein es\n1 a © ie\n? A wy t\n| - Wy\nol sad Re\nj A\nNEED FOR CHANGE\nPropose 2 Bills.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
			physicalIndex: 11,
			copyIndex: 3,
		},
		parsed: {
			numbers: [1, 2],
			keywords: ['need', 'for', 'change', 'propose', 'bills'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'NEED FOR CHANGE',
		content: 'NEED FOR CHANGE\nPropose 2 Bills.',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-labor-market-deregulation-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			"'’ -\n" +
			'= T,\n' +
			'The « art F Vi "\n' +
			'ant Se ee |\n' +
			'LABOR MARKET\n' +
			'DEREGULATION\n' +
			'Assign any number of unemployed\n' +
			'Workers. If Ea is in effect,\n' +
			'you may also reassign any number\n' +
			'of Workers already assigned\n' +
			'to other Companies.\n' +
			'2B/2c\n' +
			'—',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
			physicalIndex: 12,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			policies: ['2B', '2C'],
			keywords: [
				'labor',
				'market',
				'deregulation',
				'assign',
				'any',
				'number',
				'of',
				'unemployed',
				'workers',
				'if',
				'ea',
				'is',
				'in',
				'effect',
				'you',
				'may',
				'also',
				'reassign',
				'already',
				'assigned',
				'to',
				'other',
				'companies',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'LABOR MARKET DEREGULATION',
		content:
			'LABOR MARKET DEREGULATION\n' +
			'Assign any number of unemployed\n' +
			'Workers. If Ea is in effect,\n' +
			'you may also reassign any number\n' +
			'of Workers already assigned\n' +
			'to other Companies.\n' +
			'2B/2c\n' +
			'—',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-labor-market-deregulation-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			"'’ -\n" +
			'= T,\n' +
			'The « art F Vi "\n' +
			'ant Se ee |\n' +
			'LABOR MARKET\n' +
			'DEREGULATION\n' +
			'Assign any number of unemployed\n' +
			'Workers. If Ea is in effect,\n' +
			'you may also reassign any number\n' +
			'of Workers already assigned\n' +
			'to other Companies.\n' +
			'2B/2c\n' +
			'—',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
			physicalIndex: 13,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2],
			policies: ['2B', '2C'],
			keywords: [
				'labor',
				'market',
				'deregulation',
				'assign',
				'any',
				'number',
				'of',
				'unemployed',
				'workers',
				'if',
				'ea',
				'is',
				'in',
				'effect',
				'you',
				'may',
				'also',
				'reassign',
				'already',
				'assigned',
				'to',
				'other',
				'companies',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'LABOR MARKET DEREGULATION',
		content:
			'LABOR MARKET DEREGULATION\n' +
			'Assign any number of unemployed\n' +
			'Workers. If Ea is in effect,\n' +
			'you may also reassign any number\n' +
			'of Workers already assigned\n' +
			'to other Companies.\n' +
			'2B/2c\n' +
			'—',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-migration-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'— —eeeC7O7"E\n' +
			'= = iS i\n' +
			'i tie 1 eT oT\n' +
			'a te y er\n' +
			'yj ae ¥\n' +
			'==. ~\n' +
			're Passports\n' +
			'SS & wu | -\n' +
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'i',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
			physicalIndex: 14,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 1, 4, 2, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'migration',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
				'way',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'MIGRATION',
		content:
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'i',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-migration-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'— —eeeC7O7"E\n' +
			'= = iS i\n' +
			'i tie 1 eT oT\n' +
			'a te y er\n' +
			'yj ae ¥\n' +
			'==. ~\n' +
			're Passports\n' +
			'SS & wu | -\n' +
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'i',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
			physicalIndex: 15,
			copyIndex: 2,
		},
		parsed: {
			numbers: [7, 1, 4, 2, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'migration',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
				'way',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'MIGRATION',
		content:
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'i',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-workers-movement-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'’ Ss te ”\n' +
			'ae -— t\n' +
			'EAD ahh! | GS |p Re\n' +
			'(Lill ¢ > WORKERS + aw\n' +
			'~~ Yd r- >\n' +
			'a P =\n' +
			'‘ig ‘/*\n' +
			'WORKERS MOVEMENT\n' +
			'Propose a Bill for Labor Market.\n' +
			'Add 2 Voting cubes to the bag',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
			physicalIndex: 16,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'workers',
				'movement',
				'propose',
				'bill',
				'for',
				'labor',
				'market',
				'add',
				'voting',
				'cubes',
				'to',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'WORKERS MOVEMENT',
		content: 'WORKERS MOVEMENT\nPropose a Bill for Labor Market.\nAdd 2 Voting cubes to the bag',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-workplace-accident-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'~ i 4\n' +
			'rm\n' +
			'WORKPLACE ACCIDENT\n' +
			'Choose an industry. Get 8¥ from\n' +
			'another player for each of their\n' +
			'Companies of that industry\n' +
			'in which you have Workers.\n' +
			'SO 7 7 7 4',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
			physicalIndex: 17,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 8, 7],
			money: [8],
			resources: ['money'],
			keywords: [
				'workplace',
				'accident',
				'choose',
				'an',
				'industry',
				'get',
				'another',
				'player',
				'for',
				'each',
				'of',
				'their',
				'companies',
				'in',
				'which',
				'you',
				'have',
				'workers',
				'so',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'WORKPLACE ACCIDENT',
		content:
			'WORKPLACE ACCIDENT\n' +
			'Choose an industry. Get 8¥ from\n' +
			'another player for each of their\n' +
			'Companies of that industry\n' +
			'in which you have Workers.\n' +
			'SO 7 7 7 4',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 8,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-proletarians-of-the-world-unite-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'( 3 Fal > Pe\n' +
			'%\n' +
			'oo y\n' +
			'Wo 5\n' +
			'n a] < ;\n' +
			'aud : # bse ie\n' +
			'J\n' +
			'PROLETARIANS\n' +
			'OF THE WORLD, UNITE!\n' +
			'Add Voting cubes to the bag\n' +
			'equal to your Population.\n' +
			'Sea eae',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
			physicalIndex: 18,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 5],
			resources: ['influence'],
			keywords: [
				'proletarians',
				'of',
				'the',
				'world',
				'unite',
				'add',
				'voting',
				'cubes',
				'to',
				'bag',
				'equal',
				'population',
				'sea',
				'eae',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'PROLETARIANS OF THE WORLD, UNITE!',
		content: 'PROLETARIANS OF THE WORLD, UNITE!\nAdd Voting cubes to the bag\nequal to your Population.\nSea eae',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-proletarians-of-the-world-unite-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'( 3 Fal > Pe\n' +
			'%\n' +
			'oo y\n' +
			'Wo 5\n' +
			'n a] < ;\n' +
			'aud : # bse ie\n' +
			'J\n' +
			'PROLETARIANS\n' +
			'OF THE WORLD, UNITE!\n' +
			'Add Voting cubes to the bag\n' +
			'equal to your Population.\n' +
			'Sea eae',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
			physicalIndex: 19,
			copyIndex: 2,
		},
		parsed: {
			numbers: [3, 5],
			resources: ['influence'],
			keywords: [
				'proletarians',
				'of',
				'the',
				'world',
				'unite',
				'add',
				'voting',
				'cubes',
				'to',
				'bag',
				'equal',
				'population',
				'sea',
				'eae',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'PROLETARIANS OF THE WORLD, UNITE!',
		content: 'PROLETARIANS OF THE WORLD, UNITE!\nAdd Voting cubes to the bag\nequal to your Population.\nSea eae',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-boost-domestic-tourism-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'-_\n' +
			'=\n' +
			'> +, bo Je .\n' +
			'z =\n' +
			'‘4\n' +
			'BOOST DOMESTIC TOURISM\n' +
			'Buy 0 from another player, up to\n' +
			'your Population, paying half the\n' +
			'cost (rounded up). The other half\n' +
			'is paid by the State.\n' +
			'a',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
			physicalIndex: 20,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 0],
			resources: ['money'],
			keywords: [
				'boost',
				'domestic',
				'tourism',
				'buy',
				'another',
				'player',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'the',
				'cost',
				'rounded',
				'other',
				'is',
				'paid',
				'by',
				'state',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'BOOST DOMESTIC TOURISM',
		content:
			'BOOST DOMESTIC TOURISM\n' +
			'Buy 0 from another player, up to\n' +
			'your Population, paying half the\n' +
			'cost (rounded up). The other half\n' +
			'is paid by the State.\n' +
			'a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-boost-domestic-tourism-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'-_\n' +
			'=\n' +
			'> +, bo Je .\n' +
			'z =\n' +
			'‘4\n' +
			'BOOST DOMESTIC TOURISM\n' +
			'Buy 0 from another player, up to\n' +
			'your Population, paying half the\n' +
			'cost (rounded up). The other half\n' +
			'is paid by the State.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
			physicalIndex: 21,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 0],
			resources: ['money'],
			keywords: [
				'boost',
				'domestic',
				'tourism',
				'buy',
				'another',
				'player',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'the',
				'cost',
				'rounded',
				'other',
				'is',
				'paid',
				'by',
				'state',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'BOOST DOMESTIC TOURISM',
		content:
			'BOOST DOMESTIC TOURISM\n' +
			'Buy 0 from another player, up to\n' +
			'your Population, paying half the\n' +
			'cost (rounded up). The other half\n' +
			'is paid by the State.',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-public-opinion-polling-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-6-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'a :\n' +
			':\n' +
			': . , |\n' +
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may\n' +
			'then call for an Immediate Vote\n' +
			'without spending @. If you do,\n' +
			'use those 5 cubes instead of\n' +
			'drawing new ones. If not. return\n' +
			'them to the bag.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
			physicalIndex: 22,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5],
			resources: ['influence'],
			keywords: [
				'public',
				'opinion',
				'polling',
				'propose',
				'bill',
				'and',
				'reveal',
				'voting',
				'cubes',
				'the',
				'bag',
				'you',
				'may',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
				'without',
				'spending',
				'if',
				'do',
				'use',
				'those',
				'instead',
				'of',
				'drawing',
				'new',
				'ones',
				'not',
				'return',
				'them',
				'to',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'PUBLIC OPINION POLLING',
		content:
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may\n' +
			'then call for an Immediate Vote\n' +
			'without spending @. If you do,\n' +
			'use those 5 cubes instead of\n' +
			'drawing new ones. If not. return\n' +
			'them to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
			{
				type: 'vote',
				action: 'immediate-vote',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-student-movement-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-7-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'Li sb ||\n' +
			'Cp faa\n' +
			'a pees = Pp +e\n' +
			'ae le q |\n' +
			'Pid. i!\n' +
			'STUDENT MOVEMENT\n' +
			'Propose a Bill for\n' +
			'Welfare State - Education.\n' +
			'Add 2 Voting cubes to the bag.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-7-3.png',
			position: {
				x: 7,
				y: 3,
			},
			physicalIndex: 23,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['education', 'influence'],
			keywords: [
				'student',
				'movement',
				'propose',
				'bill',
				'for',
				'welfare',
				'state',
				'education',
				'add',
				'voting',
				'cubes',
				'to',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'STUDENT MOVEMENT',
		content: 'STUDENT MOVEMENT\nPropose a Bill for\nWelfare State - Education.\nAdd 2 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-supplemental-income-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-8-3.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'4 - ;\n' +
			'ty\n' +
			'Sa\n' +
			'«4\n' +
			'3\n' +
			'2 = i\n' +
			'a Eee\n' +
			'SUPPLEMENTAL INCOME\n' +
			'PROGRAM\n' +
			'Get 1¥ from the State for each\n' +
			'of your employed Workers. You\n' +
			'may then buy Goods & Services.\n' +
			'2B /2Cc nog\n' +
			'ne',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-8-3.png',
			position: {
				x: 8,
				y: 3,
			},
			physicalIndex: 24,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 3, 2, 1],
			money: [1],
			policies: ['2B'],
			resources: ['money'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'employed',
				'workers',
				'you',
				'may',
				'buy',
				'goods',
				'services',
				'cc',
				'nog',
				'ne',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SUPPLEMENTAL INCOME PROGRAM',
		content:
			'SUPPLEMENTAL INCOME PROGRAM\n' +
			'Get 1¥ from the State for each\n' +
			'of your employed Workers. You\n' +
			'may then buy Goods & Services.\n' +
			'2B /2Cc nog\n' +
			'ne',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 1,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-supplemental-income-program-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'q ho ;\n' +
			'ty\n' +
			'Sa\n' +
			'«4\n' +
			'3\n' +
			'2 = i\n' +
			'a Eee\n' +
			'SUPPLEMENTAL INCOME\n' +
			'PROGRAM\n' +
			'Get 1¥ from the State for each\n' +
			'of your employed Workers. You\n' +
			'may then buy Goods & Services.\n' +
			'2B /2Cc nog\n' +
			'ee',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
			physicalIndex: 25,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 3, 2, 1],
			money: [1],
			policies: ['2B'],
			resources: ['money'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'employed',
				'workers',
				'you',
				'may',
				'buy',
				'goods',
				'services',
				'cc',
				'nog',
				'ee',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SUPPLEMENTAL INCOME PROGRAM',
		content:
			'SUPPLEMENTAL INCOME PROGRAM\n' +
			'Get 1¥ from the State for each\n' +
			'of your employed Workers. You\n' +
			'may then buy Goods & Services.\n' +
			'2B /2Cc nog\n' +
			'ee',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 1,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-extra-shift-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'‘ |\n' +
			'=\n' +
			'. |\n' +
			'“ =\n' +
			'>\n' +
			'j\n' +
			'—\n' +
			'EXTRA SHIFT\n' +
			'Choose a Public Company. The State\n' +
			"pays the workers' wages and\n" +
			'performs a Production. You may\n' +
			'then Buy Goods or Services from the\n' +
			'State of the type produced by that\n' +
			'Company, up to your Population.\n' +
			'nc (',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
			physicalIndex: 26,
			copyIndex: 1,
		},
		parsed: {
			resources: ['money'],
			keywords: [
				'extra',
				'shift',
				'choose',
				'public',
				'company',
				'the',
				'state',
				'pays',
				'workers',
				'wages',
				'and',
				'performs',
				'production',
				'you',
				'may',
				'buy',
				'goods',
				'or',
				'services',
				'of',
				'type',
				'produced',
				'by',
				'up',
				'to',
				'population',
				'nc',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'EXTRA SHIFT',
		content:
			'EXTRA SHIFT\n' +
			'Choose a Public Company. The State\n' +
			"pays the workers' wages and\n" +
			'performs a Production. You may\n' +
			'then Buy Goods or Services from the\n' +
			'State of the type produced by that\n' +
			'Company, up to your Population.\n' +
			'nc (',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-extra-shift-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'‘ |\n' +
			'=\n' +
			'. |\n' +
			'“ =\n' +
			'>\n' +
			'j\n' +
			'—\n' +
			'EXTRA SHIFT\n' +
			'Choose a Public Company. The State\n' +
			"pays the workers' wages and\n" +
			'performs a Production. You may\n' +
			'then Buy Goods or Services from the\n' +
			'State of the type produced by that\n' +
			'Company, up to your Population.\n' +
			'nc (',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
			physicalIndex: 27,
			copyIndex: 2,
		},
		parsed: {
			resources: ['money'],
			keywords: [
				'extra',
				'shift',
				'choose',
				'public',
				'company',
				'the',
				'state',
				'pays',
				'workers',
				'wages',
				'and',
				'performs',
				'production',
				'you',
				'may',
				'buy',
				'goods',
				'or',
				'services',
				'of',
				'type',
				'produced',
				'by',
				'up',
				'to',
				'population',
				'nc',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'EXTRA SHIFT',
		content:
			'EXTRA SHIFT\n' +
			'Choose a Public Company. The State\n' +
			"pays the workers' wages and\n" +
			'performs a Production. You may\n' +
			'then Buy Goods or Services from the\n' +
			'State of the type produced by that\n' +
			'Company, up to your Population.\n' +
			'nc (',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-affordable-housing-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'. 4\n' +
			'F “\n' +
			'i %\n' +
			'*. ny \\\n' +
			': _ ) oa .\n' +
			'AFFORDABLE HOUSING\n' +
			'Give 20¥ to the Capitalist.\n' +
			'Get 5.\n' +
			'Give 10¥ to the Middle-Class.\n' +
			'Get 3.\n' +
			'- OS a”',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
			physicalIndex: 28,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 20, 5, 10, 3],
			money: [20, 10],
			resources: ['money'],
			keywords: ['affordable', 'housing', 'give', 'to', 'the', 'capitalist', 'get', 'middle', 'class', 'os'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'AFFORDABLE HOUSING',
		content: 'AFFORDABLE HOUSING\nGive 20¥ to the Capitalist.\nGet 5.\nGive 10¥ to the Middle-Class.\nGet 3.\n- OS a”',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-immigration-reform-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText: 'eet, ae\né\nIMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
			physicalIndex: 29,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['immigration', 'reform', 'propose', 'bill', 'for', 'add', 'voting', 'cubes', 'to', 'the', 'bag'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'IMMIGRATION REFORM',
		content: 'IMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-signing-bonus-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'“ME =\n' +
			'‘\n' +
			'wren\n' +
			'| SIGNING BONUS\n' +
			'Assign up to 4 unemployed\n' +
			'Workers. For each Worker assigned\n' +
			'to a Company this way, get 4¥\n' +
			"from that Company's owner.\n" +
			'ng',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
			physicalIndex: 30,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4],
			money: [4],
			resources: ['money'],
			keywords: [
				'signing',
				'bonus',
				'assign',
				'up',
				'to',
				'unemployed',
				'workers',
				'for',
				'each',
				'worker',
				'assigned',
				'company',
				'way',
				'get',
				'owner',
				'ng',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SIGNING BONUS',
		content:
			'SIGNING BONUS\n' +
			'Assign up to 4 unemployed\n' +
			'Workers. For each Worker assigned\n' +
			'to a Company this way, get 4¥\n' +
			"from that Company's owner.\n" +
			'ng',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 4,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 4,
				},
				workerType: 'any',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-signing-bonus-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'“ME =\n' +
			'‘\n' +
			'wren\n' +
			'| SIGNING BONUS\n' +
			'Assign up to 4 unemployed\n' +
			'Workers. For each Worker assigned\n' +
			'to a Company this way, get 4¥\n' +
			"from that Company's owner.\n" +
			'ng',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
			physicalIndex: 31,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4],
			money: [4],
			resources: ['money'],
			keywords: [
				'signing',
				'bonus',
				'assign',
				'up',
				'to',
				'unemployed',
				'workers',
				'for',
				'each',
				'worker',
				'assigned',
				'company',
				'way',
				'get',
				'owner',
				'ng',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'SIGNING BONUS',
		content:
			'SIGNING BONUS\n' +
			'Assign up to 4 unemployed\n' +
			'Workers. For each Worker assigned\n' +
			'to a Company this way, get 4¥\n' +
			"from that Company's owner.\n" +
			'ng',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 4,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 4,
				},
				workerType: 'any',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-general-strike-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-8-4.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'- x ee eA\n' +
			'5. Sh aes\n' +
			'“ = at\n' +
			'| 7 . 7\n' +
			'\\ !\n' +
			'»,\n' +
			'GENERAL STRIKE\n' +
			'Perform a Strike. You may\n' +
			'place an additional Strike token\n' +
			'for each Trade Union you have.\n' +
			'2B/2C\n' +
			'ng',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-8-4.png',
			position: {
				x: 8,
				y: 4,
			},
			physicalIndex: 32,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 7, 2],
			policies: ['2B', '2C'],
			keywords: [
				'general',
				'strike',
				'perform',
				'you',
				'may',
				'place',
				'an',
				'additional',
				'token',
				'for',
				'each',
				'trade',
				'union',
				'have',
				'ng',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'GENERAL STRIKE',
		content:
			'GENERAL STRIKE\n' +
			'Perform a Strike. You may\n' +
			'place an additional Strike token\n' +
			'for each Trade Union you have.\n' +
			'2B/2C\n' +
			'ng',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'strike',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-fake-news-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'| Ps Ten\n' +
			'Z a ae “d =\n' +
			'SF, O SFENS SS ~\n' +
			'ry’ >. ae\n' +
			'ffl om ~ —ae a\n' +
			'FAKE NEWS\n' +
			'Draw 6 Voting cubes from\n' +
			'the bag. Remove up to 4 of them\n' +
			'and return the rest to the bag.\n' +
			'Sc',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
			physicalIndex: 33,
			copyIndex: 1,
		},
		parsed: {
			numbers: [6, 4],
			resources: ['influence'],
			keywords: [
				'fake',
				'news',
				'draw',
				'voting',
				'cubes',
				'the',
				'bag',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'and',
				'return',
				'rest',
				'sc',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'FAKE NEWS',
		content:
			'FAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\nSc',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-general-strike-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'. “ RoW aN\n' +
			'~\n' +
			'- ~ Si wr\n' +
			'i ->\n' +
			', é ” o- a =\n' +
			'i, 4 —_\n' +
			'. \\ !\n' +
			'| »,\n' +
			'GENERAL STRIKE\n' +
			'Perform a Strike. You may\n' +
			'place an additional Strike token\n' +
			'for each Trade Union you have.\n' +
			'2B/2C',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
			physicalIndex: 34,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 2],
			policies: ['2B', '2C'],
			keywords: [
				'general',
				'strike',
				'perform',
				'you',
				'may',
				'place',
				'an',
				'additional',
				'token',
				'for',
				'each',
				'trade',
				'union',
				'have',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'GENERAL STRIKE',
		content:
			'GENERAL STRIKE\nPerform a Strike. You may\nplace an additional Strike token\nfor each Trade Union you have.\n2B/2C',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'strike',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-state-scholarship-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'A\n' +
			'at\n' +
			'~ m : wn\n' +
			'; aS) .\n' +
			'@ ™ A\n' +
			'’ ¥\n' +
			'\\\n' +
			'| a \\\n' +
			'STATE SCHOLARSHIP\n' +
			'Buy from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
			physicalIndex: 35,
			copyIndex: 1,
		},
		parsed: {
			resources: ['money'],
			keywords: ['state', 'scholarship', 'buy', 'the', 'up', 'to', 'population', 'paying', 'half', 'cost', 'rounded'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'STATE SCHOLARSHIP',
		content: 'STATE SCHOLARSHIP\nBuy from the State,\nup to your Population, paying\nhalf the cost (rounded up).',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-state-scholarship-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'A\n' +
			'at\n' +
			'~ m : wn\n' +
			'; aS) .\n' +
			'@ ™ A\n' +
			'’ ¥\n' +
			'\\\n' +
			'| a \\\n' +
			'STATE SCHOLARSHIP\n' +
			'Buy from the State,\n' +
			'up to your Population, paying\n' +
			'half the cost (rounded up).',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
			physicalIndex: 36,
			copyIndex: 2,
		},
		parsed: {
			resources: ['money'],
			keywords: ['state', 'scholarship', 'buy', 'the', 'up', 'to', 'population', 'paying', 'half', 'cost', 'rounded'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'STATE SCHOLARSHIP',
		content: 'STATE SCHOLARSHIP\nBuy from the State,\nup to your Population, paying\nhalf the cost (rounded up).',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-radical-reforms-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'Pike = MR | j\n' +
			"a ' 4 y ss q E .\n" +
			'pe ?. ¥\n' +
			'hid “4 * ,\n' +
			'im oe is\n' +
			'. A ~\n' +
			'ys ; AZ’\n' +
			'. ~~!\n' +
			". ye a ' Ne —\n" +
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'See',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
			physicalIndex: 37,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4],
			money: [4],
			resources: ['influence', 'money'],
			keywords: [
				'radical',
				'reforms',
				'propose',
				'bill',
				'you',
				'may',
				'place',
				'marker',
				'on',
				'any',
				'section',
				'even',
				'if',
				'it',
				'not',
				'next',
				'to',
				'the',
				'current',
				'one',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
				'see',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'RADICAL REFORMS',
		content:
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'See',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
				placement: 'any-section',
				immediateVoteAllowed: false,
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-unemployment-benefits-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'et J cy] ” ?\n' +
			'A\n' +
			') ’ \\ We |\n' +
			'11) Pom\n' +
			'- oa ca \\\n' +
			'UNEMPLOYMENT BENEFITS\n' +
			'Get 5¥ from the State for each\n' +
			'of your unemployed Workers.\n' +
			'You may then Buy Goods\n' +
			'& Services from the State\n' +
			'sh',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
			physicalIndex: 38,
			copyIndex: 1,
		},
		parsed: {
			numbers: [11, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'unemployment',
				'benefits',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'unemployed',
				'workers',
				'you',
				'may',
				'buy',
				'goods',
				'services',
				'sh',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'UNEMPLOYMENT BENEFITS',
		content:
			'UNEMPLOYMENT BENEFITS\n' +
			'Get 5¥ from the State for each\n' +
			'of your unemployed Workers.\n' +
			'You may then Buy Goods\n' +
			'& Services from the State\n' +
			'sh',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-unemployment-benefits-2',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'et J cy] ” ?\n' +
			'A\n' +
			') ’ \\ We |\n' +
			'11) Pom\n' +
			'- oa ca \\\n' +
			'UNEMPLOYMENT BENEFITS\n' +
			'Get 5¥ from the State for each\n' +
			'of your unemployed Workers.\n' +
			'You may then Buy Goods\n' +
			'& Services from the State\n' +
			'sh',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
			physicalIndex: 39,
			copyIndex: 2,
		},
		parsed: {
			numbers: [11, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'unemployment',
				'benefits',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'unemployed',
				'workers',
				'you',
				'may',
				'buy',
				'goods',
				'services',
				'sh',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'UNEMPLOYMENT BENEFITS',
		content:
			'UNEMPLOYMENT BENEFITS\n' +
			'Get 5¥ from the State for each\n' +
			'of your unemployed Workers.\n' +
			'You may then Buy Goods\n' +
			'& Services from the State\n' +
			'sh',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'working-class-action-interest-groups-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-cards/grid_40-items_8-5__working-class-actions-deck-174__pos-8-5.png',
		backImage: 'fixtures/assets/decks-sorted/working-class-action-cards/back__working-class-actions-deck-174.jpg',
		rawText:
			'ae’ ee\n' +
			'\\ Cee‘ a\n' +
			'—\n' +
			'| lab\n' +
			'iy! Pat kop / Fr\n' +
			'ate J < { “Tk\n' +
			'<= =\n' +
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			'until you reveal 3 opponents’\n' +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.',
		source: {
			deck: 'working-class-action-cards',
			file: 'grid_40-items_8-5__working-class-actions-deck-174__pos-8-5.png',
			position: {
				x: 8,
				y: 5,
			},
			physicalIndex: 40,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3],
			resources: ['influence'],
			keywords: [
				'interest',
				'groups',
				'reveal',
				'voting',
				'cubes',
				'the',
				'bag',
				'until',
				'you',
				'opponents',
				'replace',
				'them',
				'and',
				'return',
				'all',
				'revealed',
				'to',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'base',
		name: 'INTEREST GROUPS',
		content:
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			'until you reveal 3 opponents’\n' +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
] satisfies WorkingClassActionCardsCard[];

export default workingClassActionCards;
