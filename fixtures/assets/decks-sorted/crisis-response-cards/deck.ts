import type { ParsedEventCard } from '../types';

interface CrisisResponseCardsCard extends ParsedEventCard {}

const crisisResponseCards = [
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'WASHINGTON CONSENSUS\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘Te (2c) (3) 4c (Se) (6c) 78\nADDITIONAL EFFECTS\n&: Get ©) equal to half your Popula-\ntion (rounded up). Add 2 Voting\ncubes to the bag per Trade Union.\nRemove 2 unemployed Workers.\nDB: Get 2 ©). Add 2 Voting cubes to\nthe bag for each Public and Capitalist\nClass Company where your Workers\nare employed. Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets é $ .',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 3, 4, 6, 78],
			policies: ['2C', '4C', '6C'],
			resources: ['influence', 'money'],
			keywords: [
				'washington',
				'consensus',
				'discard',
				'proposed',
				'bills',
				'all',
				'change',
				'policies',
				'additional',
				'effects',
				'get',
				'equal',
				'half',
				'your',
				'popula',
				'tion',
				'rounded',
				'add',
			],
		},
		kind: 'crisis-response',
		name: 'WASHINGTON CONSENSUS',
		content:
			'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘Te (2c) (3) 4c (Se) (6c) 78\nADDITIONAL EFFECTS\n&: Get ©) equal to half your Popula-\ntion (rounded up). Add 2 Voting\ncubes to the bag per Trade Union.\nRemove 2 unemployed Workers.\nDB: Get 2 ©). Add 2 Voting cubes to\nthe bag for each Public and Capitalist\nClass Company where your Workers\nare employed. Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets é $ .',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘Te (2c) (3) 4c (Se) (6c) 78\nADDITIONAL EFFECTS\n&: Get ©) equal to half your Popula-\ntion (rounded up). Add 2 Voting\ncubes to the bag per Trade Union.\nRemove 2 unemployed Workers.\nDB: Get 2 ©). Add 2 Voting cubes to\nthe bag for each Public and Capitalist\nClass Company where your Workers\nare employed. Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets é $ .',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'FAILED IMF NEGOTIATIONS\nDISCARD PROPOSED BILLS\nOnly in Policies Band.\nCHANGE POLICIES\n(2c) 78\nADDITIONAL EFFECTS\nEach class pays 10¥ to the State.\nRepeat this as many times\nas needed for the State\nto be able to pay off its Loans.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class for\nevery 10¥ it got from that class.',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 78, 10],
			money: [10],
			policies: ['2C'],
			resources: ['money'],
			keywords: [
				'failed',
				'imf',
				'negotiations',
				'discard',
				'proposed',
				'bills',
				'only',
				'policies',
				'band',
				'change',
				'additional',
				'effects',
				'each',
				'class',
				'pays',
				'the',
				'state',
				'repeat',
			],
		},
		kind: 'crisis-response',
		name: 'FAILED IMF NEGOTIATIONS',
		content:
			'DISCARD PROPOSED BILLS\nOnly in Policies Band.\nCHANGE POLICIES\n(2c) 78\nADDITIONAL EFFECTS\nEach class pays 10¥ to the State.\nRepeat this as many times\nas needed for the State\nto be able to pay off its Loans.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class for\nevery 10¥ it got from that class.',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nOnly in Policies Band.\nCHANGE POLICIES\n(2c) 78\nADDITIONAL EFFECTS\nEach class pays 10¥ to the State.\nRepeat this as many times\nas needed for the State\nto be able to pay off its Loans.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class for\nevery 10¥ it got from that class.',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'MODERATE IMF INTERVENTION\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n=\n{ic} (26) (38) 46 (5B) (Fe\nADDITIONAL EFFECTS\nPolicy 6 is locked until the\nCheck IMF step next round.\n& : Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [26, 38, 46, 5, 6, 2],
			policies: ['5B'],
			resources: ['money'],
			keywords: [
				'moderate',
				'imf',
				'intervention',
				'discard',
				'proposed',
				'bills',
				'all',
				'change',
				'policies',
				'additional',
				'effects',
				'policy',
				'locked',
				'until',
				'the',
				'check',
				'step',
				'next',
			],
		},
		kind: 'crisis-response',
		name: 'MODERATE IMF INTERVENTION',
		content:
			'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n=\n{ic} (26) (38) 46 (5B) (Fe\nADDITIONAL EFFECTS\nPolicy 6 is locked until the\nCheck IMF step next round.\n& : Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n=\n{ic} (26) (38) 46 (5B) (Fe\nADDITIONAL EFFECTS\nPolicy 6 is locked until the\nCheck IMF step next round.\n& : Remove 2 unemployed\nWorkers.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'JAPANESE MODEL\nAll\nCHANGE POLICIES\n‘1c (2B) (38) 4B (5B) (6c) |74)\nADDITIONAL EFFECTS\nThe State gets 40¥.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 2, 38, 4, 5, 6, 74, 40],
			money: [40],
			policies: ['1C', '2B', '4B', '5B', '6C'],
			resources: ['money'],
			keywords: [
				'japanese',
				'model',
				'all',
				'change',
				'policies',
				'additional',
				'effects',
				'the',
				'state',
				'gets',
				'pay',
				'off',
				'loans',
				'legitimacy',
				'lost',
				'each',
				'class',
			],
		},
		kind: 'crisis-response',
		name: 'JAPANESE MODEL',
		content:
			'All\nCHANGE POLICIES\n‘1c (2B) (38) 4B (5B) (6c) |74)\nADDITIONAL EFFECTS\nThe State gets 40¥.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		effects: [
			{
				type: 'raw',
				text: 'All\nCHANGE POLICIES\n‘1c (2B) (38) 4B (5B) (6c) |74)\nADDITIONAL EFFECTS\nThe State gets 40¥.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'BASIC IMF INTERVENTION\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(ig) ize 5A) 46 (5G) (6B!\nADDITIONAL EFFECTS\nPolicies 1 and 3 are locked\nuntil the Check IMF step\nnext round.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy to\nhalf for each class (rounded up).',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 46, 6, 1, 3],
			policies: ['5A', '6B'],
			resources: ['education', 'money'],
			keywords: [
				'basic',
				'imf',
				'intervention',
				'discard',
				'proposed',
				'bills',
				'all',
				'change',
				'policies',
				'ize',
				'additional',
				'effects',
				'and',
				'are',
				'locked',
				'until',
				'the',
				'check',
			],
		},
		kind: 'crisis-response',
		name: 'BASIC IMF INTERVENTION',
		content:
			'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(ig) ize 5A) 46 (5G) (6B!\nADDITIONAL EFFECTS\nPolicies 1 and 3 are locked\nuntil the Check IMF step\nnext round.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy to\nhalf for each class (rounded up).',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(ig) ize 5A) 46 (5G) (6B!\nADDITIONAL EFFECTS\nPolicies 1 and 3 are locked\nuntil the Check IMF step\nnext round.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy to\nhalf for each class (rounded up).',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-1-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'US STIMULUS PACKAGE\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(Te) (2) (58) 4c (5G) (6B) (78\nADDITIONAL EFFECTS\nThe State gets 60€.\ni Get 10¥ and2 (if able)\nfrom the State.\n6: Get 15¥ from the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for the Working Class and\nthe Middle Class (rounded up).',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 58, 4, 5, 6, 78, 60, 10, 15],
			money: [10, 15],
			policies: ['4C', '6B'],
			resources: ['education', 'money'],
			keywords: [
				'stimulus',
				'package',
				'discard',
				'proposed',
				'bills',
				'all',
				'change',
				'policies',
				'additional',
				'effects',
				'the',
				'state',
				'gets',
				'get',
				'able',
				'from',
				'pay',
				'off',
			],
		},
		kind: 'crisis-response',
		name: 'US STIMULUS PACKAGE',
		content:
			'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(Te) (2) (58) 4c (5G) (6B) (78\nADDITIONAL EFFECTS\nThe State gets 60€.\ni Get 10¥ and2 (if able)\nfrom the State.\n6: Get 15¥ from the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for the Working Class and\nthe Middle Class (rounded up).',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n(Te) (2) (58) 4c (5G) (6B) (78\nADDITIONAL EFFECTS\nThe State gets 60€.\ni Get 10¥ and2 (if able)\nfrom the State.\n6: Get 15¥ from the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for the Working Class and\nthe Middle Class (rounded up).',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-2-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'IMF INTERVENTION\nWITH RESISTANCE\nDISCARD PROPOSED BILLS\nAll except Policies 4 and [5].\nCHANGE POLICIES\n(1g) 2¢ 3B (6B) 7A\nJe) ze 3B (eB)\nADDITIONAL EFFECTS\nPolicy 1 is locked until the\nCheck IMF step next round.\n&: Place 3 Strike tokens.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 5, 1, 2, 3, 6, 7],
			policies: ['3B', '6B', '7A'],
			resources: ['money'],
			keywords: [
				'imf',
				'intervention',
				'with',
				'resistance',
				'discard',
				'proposed',
				'bills',
				'all',
				'except',
				'policies',
				'and',
				'change',
				'additional',
				'effects',
				'policy',
				'locked',
				'until',
				'the',
			],
		},
		kind: 'crisis-response',
		name: 'IMF INTERVENTION',
		content:
			'WITH RESISTANCE\nDISCARD PROPOSED BILLS\nAll except Policies 4 and [5].\nCHANGE POLICIES\n(1g) 2¢ 3B (6B) 7A\nJe) ze 3B (eB)\nADDITIONAL EFFECTS\nPolicy 1 is locked until the\nCheck IMF step next round.\n&: Place 3 Strike tokens.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
		effects: [
			{
				type: 'raw',
				text: 'WITH RESISTANCE\nDISCARD PROPOSED BILLS\nAll except Policies 4 and [5].\nCHANGE POLICIES\n(1g) 2¢ 3B (6B) 7A\nJe) ze 3B (eB)\nADDITIONAL EFFECTS\nPolicy 1 is locked until the\nCheck IMF step next round.\n&: Place 3 Strike tokens.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets @ to each class.',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-3-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			"NEW GOVERNMENT BOND\nPROGRAM\nIf this is the 5th Round, draw a new\nCrisis Response card.\nDISCARD CHANGE\nPROPOSED BILLS POLICIES\nNone None\nADDITIONAL EFFECTS\nEach class, in reverse player order,\nmay pay 30¥/ 50¥ to the State.\n+ If the amount gathered is not\nenough to pay off the State's Loans,\nreturn that money and draw a new\nCrisis Response card.\n+ If it is, the State pays off its Loans.\nNothing further happens in this step\nbut it must pay back 40¥/ 70¥ to\neach class it got money from by the\nend of the Action Phase next round.\nPAY OFF LOANS\nLEGITIMACY LOST\nNone",
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [5, 30, 50, 40, 70],
			money: [30, 50, 40, 70],
			resources: ['money'],
			keywords: [
				'new',
				'government',
				'bond',
				'program',
				'this',
				'the',
				'round',
				'draw',
				'crisis',
				'response',
				'card',
				'discard',
				'change',
				'proposed',
				'bills',
				'policies',
				'none',
				'additional',
			],
		},
		kind: 'crisis-response',
		name: 'NEW GOVERNMENT BOND',
		content:
			"PROGRAM\nIf this is the 5th Round, draw a new\nCrisis Response card.\nDISCARD CHANGE\nPROPOSED BILLS POLICIES\nNone None\nADDITIONAL EFFECTS\nEach class, in reverse player order,\nmay pay 30¥/ 50¥ to the State.\n+ If the amount gathered is not\nenough to pay off the State's Loans,\nreturn that money and draw a new\nCrisis Response card.\n+ If it is, the State pays off its Loans.\nNothing further happens in this step\nbut it must pay back 40¥/ 70¥ to\neach class it got money from by the\nend of the Action Phase next round.\nPAY OFF LOANS\nLEGITIMACY LOST\nNone",
		effects: [
			{
				type: 'raw',
				text: "PROGRAM\nIf this is the 5th Round, draw a new\nCrisis Response card.\nDISCARD CHANGE\nPROPOSED BILLS POLICIES\nNone None\nADDITIONAL EFFECTS\nEach class, in reverse player order,\nmay pay 30¥/ 50¥ to the State.\n+ If the amount gathered is not\nenough to pay off the State's Loans,\nreturn that money and draw a new\nCrisis Response card.\n+ If it is, the State pays off its Loans.\nNothing further happens in this step\nbut it must pay back 40¥/ 70¥ to\neach class it got money from by the\nend of the Action Phase next round.\nPAY OFF LOANS\nLEGITIMACY LOST\nNone",
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-4-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'EU AUSTERITY MEASURES\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\nADDITIONAL EFFECTS\n& & B: Pay 10¥ to the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for each class (rounded up).',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [10],
			money: [10],
			resources: ['education', 'money'],
			keywords: [
				'austerity',
				'measures',
				'discard',
				'proposed',
				'bills',
				'all',
				'change',
				'policies',
				'additional',
				'effects',
				'pay',
				'the',
				'state',
				'off',
				'loans',
				'legitimacy',
				'lost',
				'reduces',
			],
		},
		kind: 'crisis-response',
		name: 'EU AUSTERITY MEASURES',
		content:
			'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\nADDITIONAL EFFECTS\n& & B: Pay 10¥ to the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for each class (rounded up).',
		effects: [
			{
				type: 'raw',
				text: 'DISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\nADDITIONAL EFFECTS\n& & B: Pay 10¥ to the State.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State reduces Legitimacy\nto half for each class (rounded up).',
			},
		],
	},
	{
		id: 'crisis-response-cards-grid-10-items-5-2-crisis-response-deck-211-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/crisis-response-cards/grid_10-items_5-2__crisis-response-deck-211__pos-5-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/crisis-response-cards/back__crisis-response-deck-211.jpg',
		rawText:
			'FAILED IMF INTERVENTION:\nREVOLUTION\n" If there are less than 2 Trade Unions,\ndraw a new Crisis Response card.\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘TA [2¢) (3A) 4a (BA) (6A) 7A\nADDITIONAL EFFECTS\nThe State does not pay for new Public\nCompanies this round.\n& : Pay 10¥ to the State.\n«©: Pay 35¥ to the State. Get 1 @ for\nevery 2 of your Companies.\nths: Pay 20% to the State. Get 1 © for\nevery 2 of your Companies.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets 6 é.',
		source: {
			deck: 'crisis-response-cards',
			file: 'grid_10-items_5-2__crisis-response-deck-211__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 3, 4, 6, 7, 10, 35, 1, 20],
			money: [10, 35],
			policies: ['3A', '4A', '6A', '7A'],
			resources: ['money'],
			keywords: [
				'failed',
				'imf',
				'intervention',
				'revolution',
				'there',
				'are',
				'less',
				'than',
				'trade',
				'unions',
				'draw',
				'new',
				'crisis',
				'response',
				'card',
				'discard',
				'proposed',
				'bills',
			],
		},
		kind: 'crisis-response',
		name: 'FAILED IMF INTERVENTION',
		content:
			'FAILED IMF INTERVENTION:\nREVOLUTION\n" If there are less than 2 Trade Unions,\ndraw a new Crisis Response card.\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘TA [2¢) (3A) 4a (BA) (6A) 7A\nADDITIONAL EFFECTS\nThe State does not pay for new Public\nCompanies this round.\n& : Pay 10¥ to the State.\n«©: Pay 35¥ to the State. Get 1 @ for\nevery 2 of your Companies.\nths: Pay 20% to the State. Get 1 © for\nevery 2 of your Companies.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets 6 é.',
		effects: [
			{
				type: 'raw',
				text: 'FAILED IMF INTERVENTION:\nREVOLUTION\n" If there are less than 2 Trade Unions,\ndraw a new Crisis Response card.\nDISCARD PROPOSED BILLS\nAll\nCHANGE POLICIES\n‘TA [2¢) (3A) 4a (BA) (6A) 7A\nADDITIONAL EFFECTS\nThe State does not pay for new Public\nCompanies this round.\n& : Pay 10¥ to the State.\n«©: Pay 35¥ to the State. Get 1 @ for\nevery 2 of your Companies.\nths: Pay 20% to the State. Get 1 © for\nevery 2 of your Companies.\nPAY OFF LOANS\nLEGITIMACY LOST\nThe State gets 6 é.',
			},
		],
	},
] satisfies CrisisResponseCardsCard[];

export default crisisResponseCards;
