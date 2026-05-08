import type { ParsedActionCard } from '../types';

interface StateActionCardsCard extends ParsedActionCard {}

const stateActionCards = [
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-1-1',
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
		},
		parsed: {
			numbers: [15],
			money: [15],
			resources: ['money'],
			keywords: ['vou', 'employment', 'support', 'scheme', 'give', 'the', 'working', 'class', 'and', 'middle'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'Vou',
		content: '“a / ,\n¢ )\n- aa\nEMPLOYMENT SUPPORT\nSCHEME\nGive 15¥ to the Working Class\nand the Middle Class.\nSg',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'?\ne b Ss ~ 4\n\\ ie eae f\n(1 ae\n"Fe i ‘a si\nSHIFT FOCUS\nLook at the top 2 cards of the\nEvent deck. You may then discard\none of the current Events without\nany penalty and replace it with\none of the top 2 cards. Then,\nperform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 1, 2],
			keywords: [
				'eae',
				'shift',
				'focus',
				'look',
				'the',
				'top',
				'cards',
				'event',
				'deck',
				'you',
				'may',
				'then',
				'discard',
				'one',
				'current',
				'events',
				'without',
				'any',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'e b Ss ~ 4',
		content:
			'?\ne b Ss ~ 4\n\\ ie eae f\n(1 ae\n"Fe i ‘a si\nSHIFT FOCUS\nLook at the top 2 cards of the\nEvent deck. You may then discard\none of the current Events without\nany penalty and replace it with\none of the top 2 cards. Then,\nperform an Event Action.',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'y wha 4\ni ‘a ! J\n= PRESS” / A h\now\nDENIAL OF FREE SPEECH\nGet up to 2 Media @®.\nThen, choose 2 other players.\nEach of them gives you 1@ and\nyou get -1) to their class.\né',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 2, 1, -1],
			resources: ['influence'],
			keywords: [
				'wha',
				'press',
				'denial',
				'free',
				'speech',
				'get',
				'media',
				'then',
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
		name: 'y wha 4',
		content:
			'i ‘a ! J\n= PRESS” / A h\now\nDENIAL OF FREE SPEECH\nGet up to 2 Media @®.\nThen, choose 2 other players.\nEach of them gives you 1@ and\nyou get -1) to their class.\né',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			't : be\nEe to. oe\n4 a\n, —_ ,\nf . uw\nSTEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
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
				'class',
				'get',
				'that',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 't : be',
		content:
			'Ee to. oe\n4 a\n, —_ ,\nf . uw\nSTEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= ee ae\nSSL eZ 5a SSS aS Ler esate\n= a oF Se ie\nbd rrr ———————\nr Te. . :\niy ’ ib Cee: | | b}\n“eed j a. A } yh 7\n—\nIMMEDIATE RESPONSE\nChoose an Event and perform\nits Action twice (decisions made\nwhen performing the Action can\nbe different the second time).',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 7],
			policies: ['5A'],
			resources: ['influence'],
			keywords: [
				'ssl',
				'sss',
				'ler',
				'esate',
				'rrr',
				'cee',
				'eed',
				'immediate',
				'response',
				'choose',
				'event',
				'and',
				'perform',
				'its',
				'action',
				'twice',
				'decisions',
				'made',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ee ae',
		content:
			'= ee ae\nSSL eZ 5a SSS aS Ler esate\n= a oF Se ie\nbd rrr ———————\nr Te. . :\niy ’ ib Cee: | | b}\n“eed j a. A } yh 7\n—\nIMMEDIATE RESPONSE\nChoose an Event and perform\nits Action twice (decisions made\nwhen performing the Action can\nbe different the second time).',
		requirements: [{ type: 'policy', mode: 'any', policies: ['5A'] }],
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-6-1',
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
		},
		parsed: {
			numbers: [7, 1, 3, 30, 45],
			money: [30, 45],
			resources: ['influence', 'money'],
			keywords: ['geopolitical', 'support', 'get', 'money', 'based', 'the', 'current', 'foreign', 'trade', 'policy'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'i ,\n, 7 ) ’\nGEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\nV.1s¥\n3:):30¥\n:45¥7',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-7-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			', ) j > & \\ \\ ‘ —\nt 1 . | oe\n- > ay \\ fl \\\nwiv §\nFOREIGN STUDENTS\nSell up to 8 to the Foreign\nMarket at the current local price.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 8],
			keywords: ['wiv', 'foreign', 'students', 'sell', 'the', 'market', 'current', 'local', 'price'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'j > & \\ \\ ‘',
		content:
			', ) j > & \\ \\ ‘ —\nt 1 . | oe\n- > ay \\ fl \\\nwiv §\nFOREIGN STUDENTS\nSell up to 8 to the Foreign\nMarket at the current local price.',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-8-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'f eT Re <=\n<a . &. wer ge\nCe — Ze ae\nHEALTHCARE PROGRAM\nProvide to a class,\nequal to its Population.\nGeta @) for that class.\na',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
		},
		parsed: {
			resources: ['healthcare'],
			keywords: [
				'wer',
				'healthcare',
				'program',
				'provide',
				'class',
				'equal',
				'its',
				'population',
				'geta',
				'for',
				'that',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'f eT Re',
		content:
			'f eT Re <=\n<a . &. wer ge\nCe — Ze ae\nHEALTHCARE PROGRAM\nProvide to a class,\nequal to its Population.\nGeta @) for that class.\na',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-1-2',
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
		},
		parsed: {
			numbers: [4, 8],
			keywords: ['medical', 'tourism', 'sell', 'the', 'foreign', 'market', 'current', 'local', 'price'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'f 4',
		content:
			'— \\ f 4\nt | a\n‘AN i Zz\nod :\n+ j\nMEDICAL TOURISM\nSell up to 8 to the Foreign\nMarket at the current local price.',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"coe a |\n' : >\nne ’ ; é 4 i ~\n4 mee -* wil '’ : '\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies.\nREQUIREMENT",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [4],
			keywords: [
				'coe',
				'mee',
				'wil',
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'workers',
				'one',
				'your',
				'non-operational',
				'companies',
				'requirement',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'coe a',
		content:
			"coe a |\n' : >\nne ’ ; é 4 i ~\n4 mee -* wil '’ : '\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies.\nREQUIREMENT",
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: 'any',
				workerType: 'any',
				target: 'company',
			},
		],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'€ ip “oo\n‘ a\nA MATTER OF HIGH PRIORITY\nLook at the top 2 Event cards and,\nif able, place one on the board.\nThen, perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [2],
			keywords: [
				'matter',
				'high',
				'priority',
				'look',
				'the',
				'top',
				'event',
				'cards',
				'and',
				'able',
				'place',
				'one',
				'board',
				'then',
				'perform',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ip “oo',
		content:
			'€ ip “oo\n‘ a\nA MATTER OF HIGH PRIORITY\nLook at the top 2 Event cards and,\nif able, place one on the board.\nThen, perform an Event Action.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			")\na Z ' oo\n‘ x d\n“ Y 4\na + ——-\nEMERGENCY STATE\nIf there are at least 3 Policies\nwith proposed Bills, choose\na Policy without a proposed Bill\nand move its marker\nto an adjacent section.\nbg",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 3],
			keywords: [
				'emergency',
				'state',
				'there',
				'are',
				'least',
				'policies',
				'with',
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
				'adjacent',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: "a Z ' oo",
		content:
			")\na Z ' oo\n‘ x d\n“ Y 4\na + ——-\nEMERGENCY STATE\nIf there are at least 3 Policies\nwith proposed Bills, choose\na Policy without a proposed Bill\nand move its marker\nto an adjacent section.\nbg",
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-5-2',
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
		},
		parsed: {
			numbers: [7, 2, 40],
			money: [40],
			resources: ['money'],
			keywords: ['foreign', 'investment', 'program', 'spend', 'personal', 'get'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			"eS\nN ——y . Sp ve!\n7 | i\noi m De\n' i\\\n———————————\nFOREIGN INVESTMENT\nPROGRAM\nSpend 2 Personal @ to get 40¥V.",
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 40,
				source: 'supply',
				target: 'self',
			},
		],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-6-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'ee "eS\n» Van > et\n| ; | | .\nLITERACY PROGRAM\nProvide to a class,\nequal to its Population.\nGeta 9) for that class.\nREQUIREMENT /',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [9],
			keywords: [
				'van',
				'literacy',
				'program',
				'provide',
				'class',
				'equal',
				'its',
				'population',
				'geta',
				'for',
				'that',
				'requirement',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ee "eS',
		content:
			'» Van > et\n| ; | | .\nLITERACY PROGRAM\nProvide to a class,\nequal to its Population.\nGeta 9) for that class.\nREQUIREMENT /',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-7-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'% = i\nwer i aoe ©\nFa “yt ia |\n(2% A\nGROWTH IN TOURISM\nThe State, the Middle Class and\nthe Capitalist Class get 15 each.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 15],
			keywords: [
				'wer',
				'aoe',
				'growth',
				'tourism',
				'the',
				'state',
				'middle',
				'class',
				'and',
				'capitalist',
				'get',
				'each',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'% = i\nwer i aoe ©\nFa “yt ia |\n(2% A\nGROWTH IN TOURISM\nThe State, the Middle Class and\nthe Capitalist Class get 15 each.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-8-2',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Lo =, ;\ntrys\n~-\nd ;\naS\nSUPPLEMENTAL INCOME\nPROGRAM\nProvide 1¥ to a class for each\nof its employed Workers.\nFor every 10¥ you provide,\nget +1) to that class.\n2B/2C / / io',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
		},
		parsed: {
			numbers: [1, 10, 2],
			money: [1, 10],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'trys',
				'supplemental',
				'income',
				'program',
				'provide',
				'class',
				'for',
				'each',
				'its',
				'employed',
				'workers',
				'every',
				'you',
				'get',
				'that',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'Lo =,',
		content:
			'Lo =, ;\ntrys\n~-\nd ;\naS\nSUPPLEMENTAL INCOME\nPROGRAM\nProvide 1¥ to a class for each\nof its employed Workers.\nFor every 10¥ you provide,\nget +1) to that class.\n2B/2C / / io',
		requirements: [{ type: 'policy', mode: 'any', policies: ['2B', '2C'] }],
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-1-3',
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
		},
		parsed: {
			numbers: [4, 20],
			money: [20],
			resources: ['money'],
			keywords: ['allowances', 'and', 'subsidies', 'provide', 'class', 'geta', 'for', 'that'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'IS\n| gy\nWl\nM\\\\ y .\n’ y\n4\nALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-2-3',
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
		},
		parsed: {
			numbers: [1],
			resources: ['influence'],
			keywords: [
				'agenda-setting',
				'get',
				'personal',
				'for',
				'each',
				'policy',
				'that',
				'matches',
				'your',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content: 'J\n"J a.\nAGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-3-3',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'Ath Th 66 G6 kaka BUC\n~S 4 F\n— ;\nPRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSg',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [66, 6, 4],
			resources: ['influence'],
			keywords: [
				'ath',
				'kaka',
				'buc',
				'pressing',
				'matters',
				'propose',
				'bill',
				'you',
				'may',
				'call',
				'for',
				'immediate',
				'vote',
				'without',
				'spending',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'Ath Th 66 G6 kaka BUC',
		content:
			'~S 4 F\n— ;\nPRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSg',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-4-3',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"|. mi ae _ SS .-\nA oe t : ,\n> —e :\n. @ . WF .\nRADICAL REFORMS\nPropose a Bill. You may place\nyour marker on any section (even\nif it's not next to the current one).\nYou may not call for an\nImmediate Vote on this Bill.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
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
				'your',
				'marker',
				'any',
				'section',
				'even',
				'not',
				'next',
				'the',
				'current',
				'one',
				'call',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'mi ae _ SS .-',
		content:
			"|. mi ae _ SS .-\nA oe t : ,\n> —e :\n. @ . WF .\nRADICAL REFORMS\nPropose a Bill. You may place\nyour marker on any section (even\nif it's not next to the current one).\nYou may not call for an\nImmediate Vote on this Bill.",
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-5-3',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"he am 5\no =| j te i a fl\n7 >| 9 i f\nDo eo\n2 7 | |\n= t, ae\nPUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
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
				'your',
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
		name: 'he am 5',
		content:
			"o =| j te i a fl\n7 >| 9 i f\nDo eo\n2 7 | |\n= t, ae\nPUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-6-3',
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
		},
		parsed: {
			numbers: [15],
			resources: ['money'],
			keywords: ['construction', 'boom', 'the', 'state', 'working', 'class', 'and', 'capitalist', 'get', 'each'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content: 'gy\nie\nCONSTRUCTION BOOM\nThe State, the Working Class and\nthe Capitalist Class get 15‘¥ each.\né',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-7-3',
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
		},
		parsed: {
			numbers: [5],
			money: [5],
			resources: ['money'],
			keywords: [
				'lie',
				'business',
				'grants',
				'provide',
				'the',
				'capitalist',
				'class',
				'for',
				'each',
				'its',
				'companies',
				'sii',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'Ca lie j',
		content:
			'% Ca lie j\nz = re\nBUSINESS GRANTS\nProvide 5¥ to the Capitalist Class\nfor each of its Companies.\nO sii\nS',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-8-3',
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
		},
		parsed: {
			numbers: [15, 1, 2, 6],
			money: [15],
			resources: ['money'],
			keywords: ['higher', 'vat', 'each', 'player', 'pays', 'the', 'state', 'then', 'get', 'classes'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content: 'a\nHIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-1-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"Mr Fx lag N\nait..e es:\nBae ied 2s Oe\nod, : BY ge ame {; 4,\nme a ad\na {\n,\nNATIONALIZATION\nRemove a non-operational Public\nCompany and replace it with a non-\noperational Capitalist Class Company\nof your choice without & (move it to\nthe Public Sector). You may then Assign\nWorkers to it. If is in effect, pay the\nCompany's cost to the Capitalist Class.\n1A/1B",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [2, 4, 1],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'lag',
				'ait',
				'bae',
				'ied',
				'ame',
				'nationalization',
				'remove',
				'non-operational',
				'public',
				'company',
				'and',
				'replace',
				'with',
				'non',
				'operational',
				'capitalist',
				'class',
				'your',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'Mr Fx lag N',
		content:
			"ait..e es:\nBae ied 2s Oe\nod, : BY ge ame {; 4,\nme a ad\na {\n,\nNATIONALIZATION\nRemove a non-operational Public\nCompany and replace it with a non-\noperational Capitalist Class Company\nof your choice without & (move it to\nthe Public Sector). You may then Assign\nWorkers to it. If is in effect, pay the\nCompany's cost to the Capitalist Class.\n1A/1B",
		requirements: [{ type: 'policy', mode: 'any', policies: ['1A', '1B'] }],
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-2-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= , e: ee\nar *\n“~ ie i\nA mia\n= ‘ "ae |\n< S i :\na_i -* ; y ~~ i\na a Sa a oa\nie ee,\nQUANTITATIVE EASING\nGet 25¥.\nIf you have a Loan,\nget 35¥ instead.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [25, 35],
			money: [25, 35],
			resources: ['money'],
			keywords: ['mia', 'quantitative', 'easing', 'get', 'you', 'have', 'loan', 'instead'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'e: ee',
		content:
			'= , e: ee\nar *\n“~ ie i\nA mia\n= ‘ "ae |\n< S i :\na_i -* ; y ~~ i\na a Sa a oa\nie ee,\nQUANTITATIVE EASING\nGet 25¥.\nIf you have a Loan,\nget 35¥ instead.',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-3-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'4 A\nWin to : - VEE\nv Que perry\na P j «\nra We Aa ta tc We\n> If . Iaif/e Fis Fl\nPRIVATIZATION\nSell one of your operational\nCompanies to the Capitalist\nClass for its cost (move it\nto the Private Sector).\n6\ni',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 6],
			resources: ['money'],
			keywords: [
				'win',
				'vee',
				'que',
				'perry',
				'iaif',
				'fis',
				'privatization',
				'sell',
				'one',
				'your',
				'operational',
				'companies',
				'the',
				'capitalist',
				'class',
				'for',
				'its',
				'cost',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'4 A\nWin to : - VEE\nv Que perry\na P j «\nra We Aa ta tc We\n> If . Iaif/e Fis Fl\nPRIVATIZATION\nSell one of your operational\nCompanies to the Capitalist\nClass for its cost (move it\nto the Private Sector).\n6\ni',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-4-4',
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
				'that',
				'matches',
				'your',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'aD f',
		content:
			'-\naD f\nFOREIGN FINANCIAL\nASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-5-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'= a oF SE ie\nby rrr ——————\nr Te. . :\niy ’ ib Cee: | | b}\n“eed j a. A } yh ¥\n—\nIMMEDIATE RESPONSE\nChoose an Event and perform\nits Action twice (decisions made\nwhen performing the Action can\nbe different the second time).',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			resources: ['influence', 'money'],
			keywords: [
				'rrr',
				'cee',
				'eed',
				'immediate',
				'response',
				'choose',
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
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'a oF SE ie',
		content:
			'= a oF SE ie\nby rrr ——————\nr Te. . :\niy ’ ib Cee: | | b}\n“eed j a. A } yh ¥\n—\nIMMEDIATE RESPONSE\nChoose an Event and perform\nits Action twice (decisions made\nwhen performing the Action can\nbe different the second time).',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-6-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'ad\n. ™ > : -\n- 4 tas i\nSTEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 1, 2, 45, 18],
			resources: ['influence'],
			keywords: [
				'tas',
				'step',
				'for',
				'representation',
				'provide',
				'personal',
				'and',
				'voting',
				'cubes',
				'class',
				'get',
				'that',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'ad\n. ™ > : -\n- 4 tas i\nSTEP FOR REPRESENTATION\nProvide 1 Personal @® and 2\nVoting cubes to a class. Get @ to\nthat class.\n45a\nO18',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-7-4',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"-\n7 = | j te i Hi\nXd age 8\na =a - |\n= t, ee\nPUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
		},
		parsed: {
			numbers: [7, 8],
			resources: ['money'],
			keywords: [
				'age',
				'public',
				'sector',
				'overtime',
				'choose',
				'one',
				'your',
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
		name: 'j te i Hi',
		content:
			"-\n7 = | j te i Hi\nXd age 8\na =a - |\n= t, ee\nPUBLIC SECTOR OVERTIME\nChoose one of your Companies.\nPay the Workers' Wages\nand perform a Production.",
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-8-4',
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
		},
		parsed: {
			numbers: [2, 40],
			money: [40],
			resources: ['money'],
			keywords: ['foreign', 'investment', 'program', 'spend', 'personal', 'get'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content: ": oS —\noi m De\n' i\\\n———————————\nFOREIGN INVESTMENT\nPROGRAM\nSpend 2 Personal @ to get 40¥V.",
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 40,
				source: 'supply',
				target: 'self',
			},
		],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-1-5',
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
		},
		parsed: {
			numbers: [15, 1, 2, 6],
			money: [15],
			resources: ['money'],
			keywords: ['bins', 'higher', 'vat', 'each', 'player', 'pays', 'the', 'state', 'then', 'get', 'classes'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content: 'a.\nBins \\ Ny\net\nHIGHER VAT\nEach player pays 15¥ to the State.\nThen, get 1) to 2 classes.\n6',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-2-5',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			"a i\n+ ?\nes 1 b nd ™ k\na % Gi a om ' > ; ‘ :\n\\ ee ;\n: Same! ° -)\n: .. : ’\na “7\nSHIFT FOCUS\nLook at the top 2 cards of the\nEvent deck. You may then discard\none of the current Events without\nany penalty and replace it with\none of the top 2 cards. Then,\nperform an Event Action.",
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [1, 7, 2],
			keywords: [
				'same',
				'shift',
				'focus',
				'look',
				'the',
				'top',
				'cards',
				'event',
				'deck',
				'you',
				'may',
				'then',
				'discard',
				'one',
				'current',
				'events',
				'without',
				'any',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'a i',
		content:
			"+ ?\nes 1 b nd ™ k\na % Gi a om ' > ; ‘ :\n\\ ee ;\n: Same! ° -)\n: .. : ’\na “7\nSHIFT FOCUS\nLook at the top 2 cards of the\nEvent deck. You may then discard\none of the current Events without\nany penalty and replace it with\none of the top 2 cards. Then,\nperform an Event Action.",
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-3-5',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'- <>\n“4 a.\nSS; 2 W.\nal , <—\npat = ——\nAGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 2, 1],
			resources: ['influence'],
			keywords: [
				'pat',
				'agenda-setting',
				'get',
				'personal',
				'for',
				'each',
				'policy',
				'that',
				'matches',
				'your',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'- <>\n“4 a.\nSS; 2 W.\nal , <—\npat = ——\nAGENDA-SETTING\nGet 1 Personal @ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-4-5',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'‘ ya gar a\nA MATTER OF HIGH PRIORITY\nLook at the top 2 Event cards and,\nif able, place one on the board.\nThen, perform an Event Action.',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [2],
			keywords: [
				'gar',
				'matter',
				'high',
				'priority',
				'look',
				'the',
				'top',
				'event',
				'cards',
				'and',
				'able',
				'place',
				'one',
				'board',
				'then',
				'perform',
				'action',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'ya gar a',
		content:
			'‘ ya gar a\nA MATTER OF HIGH PRIORITY\nLook at the top 2 Event cards and,\nif able, place one on the board.\nThen, perform an Event Action.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-5-5',
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
		},
		parsed: {
			numbers: [20],
			money: [20],
			resources: ['money'],
			keywords: ['tdl', 'allowances', 'and', 'subsidies', 'provide', 'class', 'geta', 'for', 'that'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'| IS\n| <i\nRY)\nA\\\\ \\ y .\nTDL\nALLOWANCES AND SUBSIDIES\nProvide 20¥ to a class.\nGeta @) for that class.',
		stateEffects: [],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-6-5',
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
				'that',
				'matches',
				'your',
				'current',
				'political',
				'agenda',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'aD f',
		content:
			'-\naD f\nFOREIGN FINANCIAL\nASSISTANCE\nGet 10¥ for each Policy\nthat matches your current\nPolitical Agenda.',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-7-5',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-cards/grid_40-items_8-5__state-actions-deck-171__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/state-action-cards/back__state-actions-deck-171.png',
		rawText:
			'fe m\n; a\n0 ‘ > om\n~S f F\n—* 4 ;\nPRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSee',
		source: {
			deck: 'state-action-cards',
			file: 'grid_40-items_8-5__state-actions-deck-171__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
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
		name: 'fe m',
		content:
			'; a\n0 ‘ > om\n~S f F\n—* 4 ;\nPRESSING MATTERS\nPropose a Bill.\nYou may call for an Immediate\nVote without spending @\nSee',
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
	},
	{
		id: 'state-action-cards-grid-40-items-8-5-state-actions-deck-171-pos-8-5',
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
		},
		parsed: {
			numbers: [15, 30, 45, 7],
			money: [15, 30, 45],
			resources: ['influence', 'money'],
			keywords: ['geopolitical', 'support', 'get', 'money', 'based', 'the', 'current', 'foreign', 'trade', 'policy'],
		},
		kind: 'action',
		role: 'state',
		category: 'base',
		name: 'State Actions',
		content:
			'ON\ni ,\nGEOPOLITICAL SUPPORT\nGet money based on the current\nForeign Trade Policy:\n:15¥\n|: 30¥\n:45¥7',
		stateEffects: [],
	},
] satisfies StateActionCardsCard[];

export default stateActionCards;
