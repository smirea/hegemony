import type { ParsedActionCard } from '../types';

interface StateActionCardsCard extends ParsedActionCard {}

const stateActionCards = [
	{
		id: 'state-action-employment-support-scheme-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Vou\n“a / ,\n¢ )\n- aa\nEMPLOYMENT SUPPORT\nSCHEME\nGive 15¥ to the Working Class\nand the Middle Class.\nSg',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [15],
			money: [15],
			resources: ['money'],
			keywords: ['employment', 'support', 'scheme', 'give', 'to', 'the', 'working', 'class', 'and', 'middle', 'sg'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'EMPLOYMENT SUPPORT SCHEME',
		content: 'EMPLOYMENT SUPPORT SCHEME\nGive 15¥ to the Working Class\nand the Middle Class.\nSg',
		stateEffects: [
			{
				type: 'money',
				action: 'provide',
				amount: 15,
				source: 'state',
				target: 'workingClass',
			},
			{
				type: 'money',
				action: 'provide',
				amount: 15,
				source: 'state',
				target: 'middleClass',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-shift-focus-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'?\n' +
			'e b Ss ~ 4\n' +
			'\\ ie eae f\n' +
			'(1 ae\n' +
			'"Fe i ‘a si\n' +
			'SHIFT FOCUS\n' +
			'Look at the top 2 cards of the\n' +
			'Event deck. You may then discard\n' +
			'one of the current Events without\n' +
			'any penalty and replace it with\n' +
			'one of the top 2 cards. Then,\n' +
			'perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 1, 2],
			keywords: [
				'shift',
				'focus',
				'look',
				'at',
				'the',
				'top',
				'cards',
				'of',
				'event',
				'deck',
				'you',
				'may',
				'discard',
				'one',
				'current',
				'events',
				'without',
				'any',
				'penalty',
				'and',
				'replace',
				'it',
				'perform',
				'an',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'SHIFT FOCUS',
		content:
			'SHIFT FOCUS\n' +
			'Look at the top 2 cards of the\n' +
			'Event deck. You may then discard\n' +
			'one of the current Events without\n' +
			'any penalty and replace it with\n' +
			'one of the top 2 cards. Then,\n' +
			'perform an Event Action.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				deck: 'event',
				amount: 2,
				target: 'self',
			},
			{
				type: 'card',
				action: 'discard',
				deck: 'event',
				amount: 1,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-denial-of-free-speech-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'y wha 4\n' +
			'i ‘a ! J\n' +
			'= PRESS” / A h\n' +
			'ow\n' +
			'DENIAL OF FREE SPEECH\n' +
			'Get up to 2 Media @®.\n' +
			'Then, choose 2 other players.\n' +
			'Each of them gives you 1@ and\n' +
			'you get -1) to their class.\n' +
			'é',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 2, 1, -1],
			resources: ['influence'],
			keywords: [
				'denial',
				'of',
				'free',
				'speech',
				'get',
				'up',
				'to',
				'media',
				'choose',
				'other',
				'players',
				'each',
				'them',
				'gives',
				'you',
				'and',
				'their',
				'class',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'DENIAL OF FREE SPEECH',
		content:
			'DENIAL OF FREE SPEECH\n' +
			'Get up to 2 Media @®.\n' +
			'Then, choose 2 other players.\n' +
			'Each of them gives you 1@ and\n' +
			'you get -1) to their class.\n' +
			'é',
		stateEffects: [
			{
				type: 'resource',
				action: 'gain',
				resource: 'influence',
				amount: {
					type: 'up-to',
					amount: 2,
				},
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-step-for-representation-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			't : be\n' +
			'Ee to. oe\n' +
			'4 a\n' +
			', —_ ,\n' +
			'f . uw\n' +
			'STEP FOR REPRESENTATION\n' +
			'Provide 1 Personal @® and 2\n' +
			'Voting cubes to a class. Get @ to\n' +
			'that class.\n' +
			'45a\n' +
			'O18',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 1, 2, 45, 18],
			resources: ['influence'],
			keywords: [
				'step',
				'for',
				'representation',
				'provide',
				'personal',
				'and',
				'voting',
				'cubes',
				'to',
				'class',
				'get',
				'o18',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'STEP FOR REPRESENTATION',
		content:
			'STEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		stateEffects: [
			{
				type: 'resource',
				action: 'provide',
				resource: 'influence',
				amount: 1,
				source: 'self',
				target: 'any',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 2,
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-immediate-response-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= ee ae\n' +
			'SSL eZ 5a SSS aS Ler esate\n' +
			'= a oF Se ie\n' +
			'bd rrr ———————\n' +
			'r Te. . :\n' +
			'iy ’ ib Cee: | | b}\n' +
			'“eed j a. A } yh 7\n' +
			'—\n' +
			'IMMEDIATE RESPONSE\n' +
			'Choose an Event and perform\n' +
			'its Action twice (decisions made\n' +
			'when performing the Action can\n' +
			'be different the second time).',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 7],
			policies: ['5A'],
			resources: ['influence'],
			keywords: [
				'immediate',
				'response',
				'choose',
				'an',
				'event',
				'and',
				'perform',
				'its',
				'action',
				'twice',
				'decisions',
				'made',
				'when',
				'performing',
				'the',
				'can',
				'be',
				'different',
				'second',
				'time',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'IMMEDIATE RESPONSE',
		content:
			'IMMEDIATE RESPONSE\n' +
			'Choose an Event and perform\n' +
			'its Action twice (decisions made\n' +
			'when performing the Action can\n' +
			'be different the second time).',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['5A'],
			},
		],
		stateEffects: [
			{
				type: 'event',
				action: 'perform',
				amount: 2,
				target: 'event',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-geopolitical-support-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'i ,\n, 7 ) ’\nGEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\nV.1s¥\n3:):30¥\n:45¥7',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
			physicalIndex: 6,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 1, 3, 30, 45],
			money: [30, 45],
			resources: ['influence', 'money'],
			keywords: [
				'geopolitical',
				'support',
				'get',
				'money',
				'based',
				'on',
				'the',
				'current',
				'foreign',
				'trade',
				'policy',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'GEOPOLITICAL SUPPORT',
		content: 'GEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\nV.1s¥\n3:):30¥\n:45¥7',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6A'],
				},
			},
			{
				type: 'money',
				action: 'gain',
				amount: 30,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6B'],
				},
			},
			{
				type: 'money',
				action: 'gain',
				amount: 45,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6C'],
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-foreign-students-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			', ) j > & \\ \\ ‘ —\n' +
			't 1 . | oe\n' +
			'- > ay \\ fl \\\n' +
			'wiv §\n' +
			'FOREIGN STUDENTS\n' +
			'Sell up to 8 to the Foreign\n' +
			'Market at the current local price.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
			physicalIndex: 7,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 8],
			keywords: ['foreign', 'students', 'sell', 'up', 'to', 'the', 'market', 'at', 'current', 'local', 'price'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'FOREIGN STUDENTS',
		content: 'FOREIGN STUDENTS\nSell up to 8 to the Foreign\nMarket at the current local price.',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'food',
				amount: 'any',
				target: 'foreign-market',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'luxury',
				amount: 'any',
				target: 'foreign-market',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-healthcare-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'f eT Re <=\n' +
			'<a . &. wer ge\n' +
			'Ce — Ze ae\n' +
			'HEALTHCARE PROGRAM\n' +
			'Provide to a class,\n' +
			'equal to its Population.\n' +
			'Geta @) for that class.\n' +
			'a',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
			physicalIndex: 8,
			copyIndex: 1,
		},
		parsed: {
			resources: ['healthcare'],
			keywords: ['healthcare', 'program', 'provide', 'to', 'class', 'equal', 'its', 'population', 'geta', 'for'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'HEALTHCARE PROGRAM',
		content: 'HEALTHCARE PROGRAM\nProvide to a class,\nequal to its Population.\nGeta @) for that class.\na',
		stateEffects: [
			{
				type: 'resource',
				action: 'provide',
				resource: 'healthcare',
				amount: {
					type: 'per',
					amount: 1,
					per: 'population',
					target: 'chosen',
				},
				source: 'self',
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-medical-tourism-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'— \\ f 4\nt | a\n‘AN i Zz\nod :\n+ j\nMEDICAL TOURISM\nSell up to 8 to the Foreign\nMarket at the current local price.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
			physicalIndex: 9,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 8],
			keywords: [
				'medical',
				'tourism',
				'sell',
				'up',
				'to',
				'the',
				'foreign',
				'market',
				'at',
				'current',
				'local',
				'price',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'MEDICAL TOURISM',
		content: 'MEDICAL TOURISM\nSell up to 8 to the Foreign\nMarket at the current local price.',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'food',
				amount: 'any',
				target: 'foreign-market',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'luxury',
				amount: 'any',
				target: 'foreign-market',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-unemployment-initiative-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'coe a |\n' +
			"' : >\n" +
			'ne ’ ; é 4 i ~\n' +
			"4 mee -* wil '’ : '\n" +
			'UNEMPLOYMENT INITIATIVE\n' +
			'PROGRAM\n' +
			'Assign unemployed Workers\n' +
			'to one of your non-operational\n' +
			'Companies.\n' +
			'REQUIREMENT',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
			physicalIndex: 10,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4],
			keywords: [
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'workers',
				'to',
				'one',
				'of',
				'non',
				'operational',
				'companies',
				'requirement',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'UNEMPLOYMENT INITIATIVE PROGRAM',
		content:
			'UNEMPLOYMENT INITIATIVE PROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies.\nREQUIREMENT',
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: 'any',
				workerType: 'any',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-a-matter-of-high-priority-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'€ ip “oo\n' +
			'‘ a\n' +
			'A MATTER OF HIGH PRIORITY\n' +
			'Look at the top 2 Event cards and,\n' +
			'if able, place one on the board.\n' +
			'Then, perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
			physicalIndex: 11,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			keywords: [
				'matter',
				'of',
				'high',
				'priority',
				'look',
				'at',
				'the',
				'top',
				'event',
				'cards',
				'and',
				'if',
				'able',
				'place',
				'one',
				'on',
				'board',
				'perform',
				'an',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'A MATTER OF HIGH PRIORITY',
		content:
			'A MATTER OF HIGH PRIORITY\n' +
			'Look at the top 2 Event cards and,\n' +
			'if able, place one on the board.\n' +
			'Then, perform an Event Action.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 2,
				deck: 'event-cards',
			},
			{
				type: 'event',
				action: 'place',
				amount: 1,
				target: 'board',
			},
			{
				type: 'event',
				action: 'perform',
				amount: 1,
				target: 'event',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-emergency-state-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			')\n' +
			"a Z ' oo\n" +
			'‘ x d\n' +
			'“ Y 4\n' +
			'a + ——-\n' +
			'EMERGENCY STATE\n' +
			'If there are at least 3 Policies\n' +
			'with proposed Bills, choose\n' +
			'a Policy without a proposed Bill\n' +
			'and move its marker\n' +
			'to an adjacent section.\n' +
			'bg',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
			physicalIndex: 12,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 3],
			keywords: [
				'emergency',
				'state',
				'if',
				'there',
				'are',
				'at',
				'least',
				'policies',
				'proposed',
				'bills',
				'choose',
				'policy',
				'without',
				'bill',
				'and',
				'move',
				'its',
				'marker',
				'to',
				'an',
				'adjacent',
				'section',
				'bg',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'EMERGENCY STATE',
		content:
			'EMERGENCY STATE\n' +
			'If there are at least 3 Policies\n' +
			'with proposed Bills, choose\n' +
			'a Policy without a proposed Bill\n' +
			'and move its marker\n' +
			'to an adjacent section.\n' +
			'bg',
		stateEffects: [
			{
				type: 'policy',
				action: 'change',
				placement: 'normal',
				condition: {
					type: 'proposed-bills',
					count: 3,
					operator: '>=',
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-foreign-investment-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"eS\nN ——y . Sp ve!\n7 | i\noi m De\n' i\\\n———————————\nFOREIGN INVESTMENT\nPROGRAM\nSpend 2 Personal @ to get 40¥V.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
			physicalIndex: 13,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 2, 40],
			money: [40],
			resources: ['money'],
			keywords: ['foreign', 'investment', 'program', 'spend', 'personal', 'to', 'get'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'FOREIGN INVESTMENT PROGRAM',
		content: 'FOREIGN INVESTMENT PROGRAM\nSpend 2 Personal @ to get 40¥V.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 40,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-literacy-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'ee "eS\n' +
			'» Van > et\n' +
			'| ; | | .\n' +
			'LITERACY PROGRAM\n' +
			'Provide to a class,\n' +
			'equal to its Population.\n' +
			'Geta 9) for that class.\n' +
			'REQUIREMENT /',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
			physicalIndex: 14,
			copyIndex: 1,
		},
		parsed: {
			numbers: [9],
			keywords: [
				'literacy',
				'program',
				'provide',
				'to',
				'class',
				'equal',
				'its',
				'population',
				'geta',
				'for',
				'requirement',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'LITERACY PROGRAM',
		content: 'LITERACY PROGRAM\nProvide to a class,\nequal to its Population.\nGeta 9) for that class.\nREQUIREMENT /',
		stateEffects: [
			{
				type: 'resource',
				action: 'provide',
				resource: 'education',
				amount: {
					type: 'per',
					amount: 1,
					per: 'population',
					target: 'chosen',
				},
				source: 'self',
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-growth-in-tourism-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'% = i\n' +
			'wer i aoe ©\n' +
			'Fa “yt ia |\n' +
			'(2% A\n' +
			'GROWTH IN TOURISM\n' +
			'The State, the Middle Class and\n' +
			'the Capitalist Class get 15 each.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
			physicalIndex: 15,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 15],
			keywords: ['growth', 'in', 'tourism', 'the', 'state', 'middle', 'class', 'and', 'capitalist', 'get', 'each'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'GROWTH IN TOURISM',
		content: 'GROWTH IN TOURISM\nThe State, the Middle Class and\nthe Capitalist Class get 15 each.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'middleClass',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'capitalist',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-supplemental-income-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Lo =, ;\n' +
			'trys\n' +
			'~-\n' +
			'd ;\n' +
			'aS\n' +
			'SUPPLEMENTAL INCOME\n' +
			'PROGRAM\n' +
			'Provide 1¥ to a class for each\n' +
			'of its employed Workers.\n' +
			'For every 10¥ you provide,\n' +
			'get +1) to that class.\n' +
			'2B/2C / / io',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
			physicalIndex: 16,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 10, 2],
			money: [1, 10],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'provide',
				'to',
				'class',
				'for',
				'each',
				'of',
				'its',
				'employed',
				'workers',
				'every',
				'you',
				'get',
				'io',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'SUPPLEMENTAL INCOME PROGRAM',
		content:
			'SUPPLEMENTAL INCOME PROGRAM\n' +
			'Provide 1¥ to a class for each\n' +
			'of its employed Workers.\n' +
			'For every 10¥ you provide,\n' +
			'get +1) to that class.\n' +
			'2B/2C / / io',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'provide',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'chosen',
				},
				source: 'self',
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: {
					type: 'per',
					amount: 1,
					per: 'available',
					target: 'chosen',
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-allowances-and-subsidies-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'IS\n| gy\nWl\nM\\\\ y .\n’ y\n4\nALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
			physicalIndex: 17,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 20],
			money: [20],
			resources: ['money'],
			keywords: ['allowances', 'and', 'subsidies', 'provide', 'to', 'class', 'geta', 'for'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ALLOWANCES AND SUBSIDIES',
		content: 'ALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		stateEffects: [
			{
				type: 'money',
				action: 'provide',
				amount: 20,
				source: 'self',
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-agenda-setting-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText: 'J\n"J a.\nAGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
			physicalIndex: 18,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1],
			resources: ['influence'],
			keywords: ['agenda', 'setting', 'get', 'personal', 'for', 'each', 'policy', 'matches', 'current', 'political'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'AGENDA-SETTING',
		content: 'AGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'resource',
				action: 'gain',
				resource: 'influence',
				amount: {
					type: 'per',
					amount: 1,
					per: 'matching-policy',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-pressing-matters-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Ath Th 66 G6 kaka BUC\n' +
			'~S 4 F\n' +
			'— ;\n' +
			'PRESSING MATTERS\n' +
			'Propose a Bill.\n' +
			'You may call for an Immediate\n' +
			'Vote without spending @\n' +
			'Sg',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
			physicalIndex: 19,
			copyIndex: 1,
		},
		parsed: {
			numbers: [66, 6, 4],
			resources: ['influence'],
			keywords: [
				'pressing',
				'matters',
				'propose',
				'bill',
				'you',
				'may',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
				'without',
				'spending',
				'sg',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'PRESSING MATTERS',
		content: 'PRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSg',
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
		id: 'state-action-radical-reforms-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'|. mi ae _ SS .-\n' +
			'A oe t : ,\n' +
			'> —e :\n' +
			'. @ . WF .\n' +
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
			physicalIndex: 20,
			copyIndex: 1,
		},
		parsed: {
			resources: ['influence'],
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
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'RADICAL REFORMS',
		content:
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.',
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
		id: 'state-action-public-sector-overtime-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'he am 5\n' +
			'o =| j te i a fl\n' +
			'7 >| 9 i f\n' +
			'Do eo\n' +
			'2 7 | |\n' +
			'= t, ae\n' +
			'PUBLIC SECTOR OVERTIME\n' +
			'Choose one of your Companies.\n' +
			"Pay the Workers' Wages\n" +
			'and perform a Production.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
			physicalIndex: 21,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 7, 9, 2],
			resources: ['money'],
			keywords: [
				'public',
				'sector',
				'overtime',
				'choose',
				'one',
				'of',
				'companies',
				'pay',
				'the',
				'workers',
				'wages',
				'and',
				'perform',
				'production',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'PUBLIC SECTOR OVERTIME',
		content: "PUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		stateEffects: [
			{
				type: 'company',
				action: 'produce',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'self',
				target: 'other',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-construction-boom-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText: 'gy\nie\nCONSTRUCTION BOOM\nThe State, the Working Class and\nthe Capitalist Class get 15‘¥ each.\né',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
			physicalIndex: 22,
			copyIndex: 1,
		},
		parsed: {
			numbers: [15],
			resources: ['money'],
			keywords: ['construction', 'boom', 'the', 'state', 'working', 'class', 'and', 'capitalist', 'get', 'each'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'CONSTRUCTION BOOM',
		content: 'CONSTRUCTION BOOM\nThe State, the Working Class and\nthe Capitalist Class get 15‘¥ each.\né',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'workingClass',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'capitalist',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-business-grants-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'% Ca lie j\nz = re\nBUSINESS GRANTS\nProvide 5¥ to the Capitalist Class\nfor each of its Companies.\nO sii\nS',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-3.png',
			position: {
				x: 7,
				y: 3,
			},
			physicalIndex: 23,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5],
			money: [5],
			resources: ['money'],
			keywords: [
				'business',
				'grants',
				'provide',
				'to',
				'the',
				'capitalist',
				'class',
				'for',
				'each',
				'of',
				'its',
				'companies',
				'sii',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'BUSINESS GRANTS',
		content: 'BUSINESS GRANTS\nProvide 5¥ to the Capitalist Class\nfor each of its Companies.\nO sii\nS',
		stateEffects: [
			{
				type: 'money',
				action: 'provide',
				amount: {
					type: 'per',
					amount: 5,
					per: 'company',
					target: 'capitalist',
				},
				source: 'self',
				target: 'capitalist',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-higher-vat-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText: 'a\nHIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-3.png',
			position: {
				x: 8,
				y: 3,
			},
			physicalIndex: 24,
			copyIndex: 1,
		},
		parsed: {
			numbers: [15, 1, 2, 6],
			money: [15],
			resources: ['money'],
			keywords: ['higher', 'vat', 'each', 'player', 'pays', 'to', 'the', 'state', 'get', 'classes'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'HIGHER VAT',
		content: 'HIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		stateEffects: [
			{
				type: 'money',
				action: 'tax',
				amount: 15,
				source: 'all',
				target: 'self',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-nationalization-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Mr Fx lag N\n' +
			'ait..e es:\n' +
			'Bae ied 2s Oe\n' +
			'od, : BY ge ame {; 4,\n' +
			'me a ad\n' +
			'a {\n' +
			',\n' +
			'NATIONALIZATION\n' +
			'Remove a non-operational Public\n' +
			'Company and replace it with a non-\n' +
			'operational Capitalist Class Company\n' +
			'of your choice without & (move it to\n' +
			'the Public Sector). You may then Assign\n' +
			'Workers to it. If is in effect, pay the\n' +
			"Company's cost to the Capitalist Class.\n" +
			'1A/1B',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
			physicalIndex: 25,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 4, 1],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'nationalization',
				'remove',
				'non',
				'operational',
				'public',
				'company',
				'and',
				'replace',
				'it',
				'capitalist',
				'class',
				'of',
				'choice',
				'without',
				'move',
				'to',
				'the',
				'sector',
				'you',
				'may',
				'assign',
				'workers',
				'if',
				'is',
				'in',
				'effect',
				'pay',
				'cost',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'NATIONALIZATION',
		content:
			'NATIONALIZATION\n' +
			'Remove a non-operational Public\n' +
			'Company and replace it with a non-\n' +
			'operational Capitalist Class Company\n' +
			'of your choice without & (move it to\n' +
			'the Public Sector). You may then Assign\n' +
			'Workers to it. If is in effect, pay the\n' +
			"Company's cost to the Capitalist Class.\n" +
			'1A/1B',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['1A', '1B'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'transfer',
				source: 'capitalist',
				target: 'state',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'unemployed-workers',
				target: 'company',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 1,
					of: 'cost',
				},
				source: 'state',
				target: 'capitalist',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['1B'],
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-quantitative-easing-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= , e: ee\n' +
			'ar *\n' +
			'“~ ie i\n' +
			'A mia\n' +
			'= ‘ "ae |\n' +
			'< S i :\n' +
			'a_i -* ; y ~~ i\n' +
			'a a Sa a oa\n' +
			'ie ee,\n' +
			'QUANTITATIVE EASING\n' +
			'Get 25¥.\n' +
			'If you have a Loan,\n' +
			'get 35¥ instead.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
			physicalIndex: 26,
			copyIndex: 1,
		},
		parsed: {
			numbers: [25, 35],
			money: [25, 35],
			resources: ['money'],
			keywords: ['quantitative', 'easing', 'get', 'if', 'you', 'have', 'loan', 'instead'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'QUANTITATIVE EASING',
		content: 'QUANTITATIVE EASING\nGet 25¥.\nIf you have a Loan,\nget 35¥ instead.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 25,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 35,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-privatization-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'4 A\n' +
			'Win to : - VEE\n' +
			'v Que perry\n' +
			'a P j «\n' +
			'ra We Aa ta tc We\n' +
			'> If . Iaif/e Fis Fl\n' +
			'PRIVATIZATION\n' +
			'Sell one of your operational\n' +
			'Companies to the Capitalist\n' +
			'Class for its cost (move it\n' +
			'to the Private Sector).\n' +
			'6\n' +
			'i',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
			physicalIndex: 27,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 6],
			resources: ['money'],
			keywords: [
				'privatization',
				'sell',
				'one',
				'of',
				'operational',
				'companies',
				'to',
				'the',
				'capitalist',
				'class',
				'for',
				'its',
				'cost',
				'move',
				'it',
				'private',
				'sector',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'PRIVATIZATION',
		content:
			'PRIVATIZATION\n' +
			'Sell one of your operational\n' +
			'Companies to the Capitalist\n' +
			'Class for its cost (move it\n' +
			'to the Private Sector).\n' +
			'6\n' +
			'i',
		stateEffects: [
			{
				type: 'company',
				action: 'transfer',
				source: 'state',
				target: 'capitalist',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 1,
					of: 'cost',
				},
				source: 'capitalist',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-foreign-financial-assistance-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'-\naD f\nFOREIGN FINANCIAL\nASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
			physicalIndex: 28,
			copyIndex: 1,
		},
		parsed: {
			numbers: [10],
			money: [10],
			resources: ['influence', 'money'],
			keywords: [
				'foreign',
				'financial',
				'assistance',
				'get',
				'for',
				'each',
				'policy',
				'matches',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'FOREIGN FINANCIAL ASSISTANCE',
		content: 'FOREIGN FINANCIAL ASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-immediate-response-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= a oF SE ie\n' +
			'by rrr ——————\n' +
			'r Te. . :\n' +
			'iy ’ ib Cee: | | b}\n' +
			'“eed j a. A } yh ¥\n' +
			'—\n' +
			'IMMEDIATE RESPONSE\n' +
			'Choose an Event and perform\n' +
			'its Action twice (decisions made\n' +
			'when performing the Action can\n' +
			'be different the second time).',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
			physicalIndex: 29,
			copyIndex: 2,
		},
		parsed: {
			resources: ['influence', 'money'],
			keywords: [
				'immediate',
				'response',
				'choose',
				'an',
				'event',
				'and',
				'perform',
				'its',
				'action',
				'twice',
				'decisions',
				'made',
				'when',
				'performing',
				'the',
				'can',
				'be',
				'different',
				'second',
				'time',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'IMMEDIATE RESPONSE',
		content:
			'IMMEDIATE RESPONSE\n' +
			'Choose an Event and perform\n' +
			'its Action twice (decisions made\n' +
			'when performing the Action can\n' +
			'be different the second time).',
		stateEffects: [
			{
				type: 'event',
				action: 'perform',
				amount: 2,
				target: 'event',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-step-for-representation-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'ad\n' +
			'. ™ > : -\n' +
			'- 4 tas i\n' +
			'STEP FOR REPRESENTATION\n' +
			'Provide 1 Personal @® and 2\n' +
			'Voting cubes to a class. Get @ to\n' +
			'that class.\n' +
			'45a\n' +
			'O18',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
			physicalIndex: 30,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 1, 2, 45, 18],
			resources: ['influence'],
			keywords: [
				'step',
				'for',
				'representation',
				'provide',
				'personal',
				'and',
				'voting',
				'cubes',
				'to',
				'class',
				'get',
				'o18',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'STEP FOR REPRESENTATION',
		content:
			'STEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		stateEffects: [
			{
				type: 'resource',
				action: 'provide',
				resource: 'influence',
				amount: 1,
				source: 'self',
				target: 'any',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 2,
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-public-sector-overtime-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'-\n' +
			'7 = | j te i Hi\n' +
			'Xd age 8\n' +
			'a =a - |\n' +
			'= t, ee\n' +
			'PUBLIC SECTOR OVERTIME\n' +
			'Choose one of your Companies.\n' +
			"Pay the Workers' Wages\n" +
			'and perform a Production.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
			physicalIndex: 31,
			copyIndex: 2,
		},
		parsed: {
			numbers: [7, 8],
			resources: ['money'],
			keywords: [
				'public',
				'sector',
				'overtime',
				'choose',
				'one',
				'of',
				'companies',
				'pay',
				'the',
				'workers',
				'wages',
				'and',
				'perform',
				'production',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'PUBLIC SECTOR OVERTIME',
		content: "PUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		stateEffects: [
			{
				type: 'company',
				action: 'produce',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'self',
				target: 'other',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-foreign-investment-program-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText: ": oS —\noi m De\n' i\\\n———————————\nFOREIGN INVESTMENT\nPROGRAM\nSpend 2 Personal @ to get 40¥V.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-4.png',
			position: {
				x: 8,
				y: 4,
			},
			physicalIndex: 32,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2, 40],
			money: [40],
			resources: ['money'],
			keywords: ['foreign', 'investment', 'program', 'spend', 'personal', 'to', 'get'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'FOREIGN INVESTMENT PROGRAM',
		content: 'FOREIGN INVESTMENT PROGRAM\nSpend 2 Personal @ to get 40¥V.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 40,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-higher-vat-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText: 'a.\nBins \\ Ny\net\nHIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
			physicalIndex: 33,
			copyIndex: 2,
		},
		parsed: {
			numbers: [15, 1, 2, 6],
			money: [15],
			resources: ['money'],
			keywords: ['higher', 'vat', 'each', 'player', 'pays', 'to', 'the', 'state', 'get', 'classes'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'HIGHER VAT',
		content: 'HIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		stateEffects: [
			{
				type: 'money',
				action: 'tax',
				amount: 15,
				source: 'all',
				target: 'self',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-shift-focus-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'a i\n' +
			'+ ?\n' +
			'es 1 b nd ™ k\n' +
			"a % Gi a om ' > ; ‘ :\n" +
			'\\ ee ;\n' +
			': Same! ° -)\n' +
			': .. : ’\n' +
			'a “7\n' +
			'SHIFT FOCUS\n' +
			'Look at the top 2 cards of the\n' +
			'Event deck. You may then discard\n' +
			'one of the current Events without\n' +
			'any penalty and replace it with\n' +
			'one of the top 2 cards. Then,\n' +
			'perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
			physicalIndex: 34,
			copyIndex: 2,
		},
		parsed: {
			numbers: [1, 7, 2],
			keywords: [
				'shift',
				'focus',
				'look',
				'at',
				'the',
				'top',
				'cards',
				'of',
				'event',
				'deck',
				'you',
				'may',
				'discard',
				'one',
				'current',
				'events',
				'without',
				'any',
				'penalty',
				'and',
				'replace',
				'it',
				'perform',
				'an',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'SHIFT FOCUS',
		content:
			'SHIFT FOCUS\n' +
			'Look at the top 2 cards of the\n' +
			'Event deck. You may then discard\n' +
			'one of the current Events without\n' +
			'any penalty and replace it with\n' +
			'one of the top 2 cards. Then,\n' +
			'perform an Event Action.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				deck: 'event',
				amount: 2,
				target: 'self',
			},
			{
				type: 'card',
				action: 'discard',
				deck: 'event',
				amount: 1,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-agenda-setting-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'- <>\n' +
			'“4 a.\n' +
			'SS; 2 W.\n' +
			'al , <—\n' +
			'pat = ——\n' +
			'AGENDA-SETTING\n' +
			'Get 1 Personal @ for each Policy\n' +
			'that matches your current\n' +
			'Political Agenda.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
			physicalIndex: 35,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 2, 1],
			resources: ['influence'],
			keywords: ['agenda', 'setting', 'get', 'personal', 'for', 'each', 'policy', 'matches', 'current', 'political'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'AGENDA-SETTING',
		content: 'AGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'resource',
				action: 'gain',
				resource: 'influence',
				amount: {
					type: 'per',
					amount: 1,
					per: 'matching-policy',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-a-matter-of-high-priority-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'‘ ya gar a\n' +
			'A MATTER OF HIGH PRIORITY\n' +
			'Look at the top 2 Event cards and,\n' +
			'if able, place one on the board.\n' +
			'Then, perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
			physicalIndex: 36,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2],
			keywords: [
				'matter',
				'of',
				'high',
				'priority',
				'look',
				'at',
				'the',
				'top',
				'event',
				'cards',
				'and',
				'if',
				'able',
				'place',
				'one',
				'on',
				'board',
				'perform',
				'an',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'A MATTER OF HIGH PRIORITY',
		content:
			'A MATTER OF HIGH PRIORITY\n' +
			'Look at the top 2 Event cards and,\n' +
			'if able, place one on the board.\n' +
			'Then, perform an Event Action.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 2,
				deck: 'event-cards',
			},
			{
				type: 'event',
				action: 'place',
				amount: 1,
				target: 'board',
			},
			{
				type: 'event',
				action: 'perform',
				amount: 1,
				target: 'event',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-allowances-and-subsidies-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'| IS\n| <i\nRY)\nA\\\\ \\ y .\nTDL\nALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
			physicalIndex: 37,
			copyIndex: 2,
		},
		parsed: {
			numbers: [20],
			money: [20],
			resources: ['money'],
			keywords: ['allowances', 'and', 'subsidies', 'provide', 'to', 'class', 'geta', 'for'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ALLOWANCES AND SUBSIDIES',
		content: 'ALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		stateEffects: [
			{
				type: 'money',
				action: 'provide',
				amount: 20,
				source: 'self',
				target: 'any',
			},
			{
				type: 'state:legitimacy-increment',
				className: 'chosen',
				value: 1,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'state-action-foreign-financial-assistance-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'-\naD f\nFOREIGN FINANCIAL\nASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
			physicalIndex: 38,
			copyIndex: 2,
		},
		parsed: {
			numbers: [10],
			money: [10],
			resources: ['influence', 'money'],
			keywords: [
				'foreign',
				'financial',
				'assistance',
				'get',
				'for',
				'each',
				'policy',
				'matches',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'FOREIGN FINANCIAL ASSISTANCE',
		content: 'FOREIGN FINANCIAL ASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-pressing-matters-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'fe m\n' +
			'; a\n' +
			'0 ‘ > om\n' +
			'~S f F\n' +
			'—* 4 ;\n' +
			'PRESSING MATTERS\n' +
			'Propose a Bill.\n' +
			'You may call for an Immediate\n' +
			'Vote without spending @\n' +
			'See',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
			physicalIndex: 39,
			copyIndex: 2,
		},
		parsed: {
			numbers: [0, 4],
			resources: ['influence'],
			keywords: [
				'pressing',
				'matters',
				'propose',
				'bill',
				'you',
				'may',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
				'without',
				'spending',
				'see',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'PRESSING MATTERS',
		content: 'PRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSee',
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
		id: 'state-action-geopolitical-support-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'ON\ni ,\nGEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\n:15¥\n|: 30¥\n:45¥7',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-5.png',
			position: {
				x: 8,
				y: 5,
			},
			physicalIndex: 40,
			copyIndex: 2,
		},
		parsed: {
			numbers: [15, 30, 45, 7],
			money: [15, 30, 45],
			resources: ['influence', 'money'],
			keywords: [
				'geopolitical',
				'support',
				'get',
				'money',
				'based',
				'on',
				'the',
				'current',
				'foreign',
				'trade',
				'policy',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'GEOPOLITICAL SUPPORT',
		content: 'GEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\n:15¥\n|: 30¥\n:45¥7',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6A'],
				},
			},
			{
				type: 'money',
				action: 'gain',
				amount: 30,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6B'],
				},
			},
			{
				type: 'money',
				action: 'gain',
				amount: 45,
				source: 'supply',
				target: 'self',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6C'],
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
] satisfies StateActionCardsCard[];

export default stateActionCards;
