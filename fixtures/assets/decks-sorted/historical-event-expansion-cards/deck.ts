import type { ParsedEventCard } from '../types';

interface HistoricalEventExpansionCardsCard extends ParsedEventCard {}

const historicalEventExpansionCards = [
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'< .\nFRENCH REVOLUTION\n1789 - 1799\noS Oe\npan a AL IG if\n“4 Ss Cas -Dt — =\nEFFECT\nAt the end of Setup, have each class,\nin order, Propose a Bill.\nep : Start the game without any\nPersonal @.\nbe ag',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [1789, 1799, 4],
			keywords: [
				'french',
				'revolution',
				'pan',
				'cas',
				'effect',
				'the',
				'end',
				'setup',
				'have',
				'each',
				'class',
				'order',
				'propose',
				'bill',
				'start',
				'game',
				'without',
				'any',
			],
		},
		kind: 'historical-event',
		name: 'FRENCH REVOLUTION',
		content:
			'< .\nFRENCH REVOLUTION\n1789 - 1799\noS Oe\npan a AL IG if\n“4 Ss Cas -Dt — =\nEFFECT\nAt the end of Setup, have each class,\nin order, Propose a Bill.\nep : Start the game without any\nPersonal @.\nbe ag',
		effects: [
			{
				type: 'raw',
				text: '< .\nFRENCH REVOLUTION\n1789 - 1799\noS Oe\npan a AL IG if\n“4 Ss Cas -Dt — =\nEFFECT\nAt the end of Setup, have each class,\nin order, Propose a Bill.\nep : Start the game without any\nPersonal @.\nbe ag',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'@ *s\nINDUSTRIAL REVOLUTION\n18th Century\nle aro ae\nMuiiicl ; |\ni 4 i 4\ni ==]\nEFFECT\n& ris : Add 2 Voting cubes to the bag.\n&: Before drawing Action cards,\nsearch your Action deck for\n2 Technological Progress cards\nand add them to your hand.\nThen, shuffle the deck and draw\n5 more Action cards. Get 10¥.\n= uy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [18, 4, 2, 5, 10],
			money: [10],
			resources: ['influence', 'money'],
			keywords: [
				'industrial',
				'revolution',
				'century',
				'aro',
				'muiiicl',
				'effect',
				'ris',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
				'before',
				'drawing',
				'action',
				'cards',
				'search',
				'your',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'@ *s\nINDUSTRIAL REVOLUTION\n18th Century\nle aro ae\nMuiiicl ; |\ni 4 i 4\ni ==]\nEFFECT\n& ris : Add 2 Voting cubes to the bag.\n&: Before drawing Action cards,\nsearch your Action deck for\n2 Technological Progress cards\nand add them to your hand.\nThen, shuffle the deck and draw\n5 more Action cards. Get 10¥.\n= uy',
		effects: [
			{
				type: 'raw',
				text: '@ *s\nINDUSTRIAL REVOLUTION\n18th Century\nle aro ae\nMuiiicl ; |\ni 4 i 4\ni ==]\nEFFECT\n& ris : Add 2 Voting cubes to the bag.\n&: Before drawing Action cards,\nsearch your Action deck for\n2 Technological Progress cards\nand add them to your hand.\nThen, shuffle the deck and draw\n5 more Action cards. Get 10¥.\n= uy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'a >\nREVOLUTIONS OF 1848\n1848 - 1849\n< —— (*) — =\nne nh Paes #7\nAe eg, bY Supe ae\nRBG eeuN®. a\nwg ee\nEFFECT\n& : Before drawing Action cards, search\nyour Action deck for 2 Need for\nChange cards and add them to\nyour hand. Then, shuffle the deck\nand draw 5 more Action cards.\nri : Add 2 Voting cubes to the bag.\nes: Remove 2 Media ®.\nXe EY',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [1848, 1849, 7, 2, 5],
			resources: ['influence'],
			keywords: [
				'revolutions',
				'paes',
				'supe',
				'rbg',
				'eeun',
				'effect',
				'before',
				'drawing',
				'action',
				'cards',
				'search',
				'your',
				'deck',
				'for',
				'need',
				'change',
				'and',
				'add',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'a >\nREVOLUTIONS OF 1848\n1848 - 1849\n< —— (*) — =\nne nh Paes #7\nAe eg, bY Supe ae\nRBG eeuN®. a\nwg ee\nEFFECT\n& : Before drawing Action cards, search\nyour Action deck for 2 Need for\nChange cards and add them to\nyour hand. Then, shuffle the deck\nand draw 5 more Action cards.\nri : Add 2 Voting cubes to the bag.\nes: Remove 2 Media ®.\nXe EY',
		effects: [
			{
				type: 'raw',
				text: 'a >\nREVOLUTIONS OF 1848\n1848 - 1849\n< —— (*) — =\nne nh Paes #7\nAe eg, bY Supe ae\nRBG eeuN®. a\nwg ee\nEFFECT\n& : Before drawing Action cards, search\nyour Action deck for 2 Need for\nChange cards and add them to\nyour hand. Then, shuffle the deck\nand draw 5 more Action cards.\nri : Add 2 Voting cubes to the bag.\nes: Remove 2 Media ®.\nXe EY',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'kf =\nFOUNDATION OF THE\nINTERNATIONAL ALLIANCE\nOF WOMEN\n1904\nTRIGGER\nEnd of Action Phase\nSS a eee\nEFFECT\n& : Add 4 Voting cubes to the bag.\n4 : Add 1 Voting cube to the bag.\nri : Add 2 Voting cubes to the bag.\n8 ae',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [1904, 4, 1, 2, 8],
			resources: ['influence'],
			keywords: [
				'foundation',
				'the',
				'international',
				'alliance',
				'women',
				'trigger',
				'end',
				'action',
				'phase',
				'eee',
				'effect',
				'add',
				'voting',
				'cubes',
				'bag',
				'cube',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'kf =\nFOUNDATION OF THE\nINTERNATIONAL ALLIANCE\nOF WOMEN\n1904\nTRIGGER\nEnd of Action Phase\nSS a eee\nEFFECT\n& : Add 4 Voting cubes to the bag.\n4 : Add 1 Voting cube to the bag.\nri : Add 2 Voting cubes to the bag.\n8 ae',
		effects: [
			{
				type: 'raw',
				text: 'kf =\nFOUNDATION OF THE\nINTERNATIONAL ALLIANCE\nOF WOMEN\n1904\nTRIGGER\nEnd of Action Phase\nSS a eee\nEFFECT\n& : Add 4 Voting cubes to the bag.\n4 : Add 1 Voting cube to the bag.\nri : Add 2 Voting cubes to the bag.\n8 ae',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'if Ty\nINTRODUCTION OF THE\nMOVING ASSEMBLY LINE\n1913\nREQUIREMENT TRIGGER\nThere is at least &:\n1 Company\nwith . FREE ACTION\na\nEFFECT\n& : Luxury Companies with Be 3\nproduce +3[] this round.\na We',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [1913, 1, 3],
			resources: ['luxury'],
			keywords: [
				'introduction',
				'the',
				'moving',
				'assembly',
				'line',
				'requirement',
				'trigger',
				'there',
				'least',
				'company',
				'with',
				'free',
				'action',
				'effect',
				'luxury',
				'companies',
				'produce',
				'this',
			],
		},
		kind: 'historical-event',
		name: 'if Ty',
		content:
			'INTRODUCTION OF THE\nMOVING ASSEMBLY LINE\n1913\nREQUIREMENT TRIGGER\nThere is at least &:\n1 Company\nwith . FREE ACTION\na\nEFFECT\n& : Luxury Companies with Be 3\nproduce +3[] this round.\na We',
		effects: [
			{
				type: 'raw',
				text: 'INTRODUCTION OF THE\nMOVING ASSEMBLY LINE\n1913\nREQUIREMENT TRIGGER\nThere is at least &:\n1 Company\nwith . FREE ACTION\na\nEFFECT\n& : Luxury Companies with Be 3\nproduce +3[] this round.\na We',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-6-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'iG yl\nWORLD WARI\n1914-1918\nTRIGGER\nWhen Revealed\nEO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& a: Remove an unemployed Worker.\n&: Sell one of your Luxury Companies\nto the State for 32¥. Remove a non-\noperational Public Company from\nthe board and place that Luxury\nCompany in its place.\ngy a',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-1.jpg',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [1914, -1918, 32],
			money: [32],
			resources: ['luxury', 'money'],
			keywords: [
				'world',
				'wari',
				'trigger',
				'when',
				'revealed',
				'effect',
				'the',
				'state',
				'pays',
				'only',
				'half',
				'cost',
				'new',
				'public',
				'companies',
				'this',
				'round',
				'remove',
			],
		},
		kind: 'historical-event',
		name: 'iG yl',
		content:
			'WORLD WARI\n1914-1918\nTRIGGER\nWhen Revealed\nEO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& a: Remove an unemployed Worker.\n&: Sell one of your Luxury Companies\nto the State for 32¥. Remove a non-\noperational Public Company from\nthe board and place that Luxury\nCompany in its place.\ngy a',
		effects: [
			{
				type: 'raw',
				text: 'WORLD WARI\n1914-1918\nTRIGGER\nWhen Revealed\nEO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& a: Remove an unemployed Worker.\n&: Sell one of your Luxury Companies\nto the State for 32¥. Remove a non-\noperational Public Company from\nthe board and place that Luxury\nCompany in its place.\ngy a',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-7-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'@ =\nINVENTION OF THE MODEL T\n1908\nREQUIREMENT TRIGGER\nbb: bd bc:\nThere are at least\n2/3 operational FREE ACTION\nLuxury Companies.\nSS\nEFFECT\n&; cet if].\n& ri : Luxury Companies\nproduce +2[] this round.\n: Get 15¥\nWW Lg',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-1.jpg',
			position: {
				x: 7,
				y: 1,
			},
		},
		parsed: {
			numbers: [1908, 2, 3, 15],
			money: [15],
			resources: ['luxury', 'money'],
			keywords: [
				'invention',
				'the',
				'model',
				'requirement',
				'trigger',
				'there',
				'are',
				'least',
				'operational',
				'free',
				'action',
				'luxury',
				'companies',
				'effect',
				'cet',
				'produce',
				'this',
				'round',
			],
		},
		kind: 'historical-event',
		name: 'INVENTION OF THE MODEL T',
		content:
			'@ =\nINVENTION OF THE MODEL T\n1908\nREQUIREMENT TRIGGER\nbb: bd bc:\nThere are at least\n2/3 operational FREE ACTION\nLuxury Companies.\nSS\nEFFECT\n&; cet if].\n& ri : Luxury Companies\nproduce +2[] this round.\n: Get 15¥\nWW Lg',
		effects: [
			{
				type: 'raw',
				text: '@ =\nINVENTION OF THE MODEL T\n1908\nREQUIREMENT TRIGGER\nbb: bd bc:\nThere are at least\n2/3 operational FREE ACTION\nLuxury Companies.\nSS\nEFFECT\n&; cet if].\n& ri : Luxury Companies\nproduce +2[] this round.\n: Get 15¥\nWW Lg',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-8-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'G\nRUSSIAN REVOLUTION\n1917\nREQUIREMENT TRIGGER\nEVES CEYE | &,: sasic action\nThere is at least +2@\n1 Trade Union.\nOS ae a Be\nEFFECT\nSet Policies to [1A | | 2¢ | [3A | | 4A |\nThere will be no further\nElections this round.\nThe State does not pay for new\nPublic Companies this round.\n& : Build a Cooperative Farm.\n& : Remove a non-operational Public\nCompany from the board. Then, give\nthe State one of your Companies\n(place it where the removed Company\nwas) and 20%\n‘a mt',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-1.jpg',
			position: {
				x: 8,
				y: 1,
			},
		},
		parsed: {
			numbers: [1917, 2, 1, 3, 4, 20],
			policies: ['1A', '3A', '4A'],
			resources: ['money'],
			keywords: [
				'russian',
				'revolution',
				'requirement',
				'trigger',
				'eves',
				'ceye',
				'sasic',
				'action',
				'there',
				'least',
				'trade',
				'union',
				'effect',
				'set',
				'policies',
				'will',
				'further',
				'elections',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'G\nRUSSIAN REVOLUTION\n1917\nREQUIREMENT TRIGGER\nEVES CEYE | &,: sasic action\nThere is at least +2@\n1 Trade Union.\nOS ae a Be\nEFFECT\nSet Policies to [1A | | 2¢ | [3A | | 4A |\nThere will be no further\nElections this round.\nThe State does not pay for new\nPublic Companies this round.\n& : Build a Cooperative Farm.\n& : Remove a non-operational Public\nCompany from the board. Then, give\nthe State one of your Companies\n(place it where the removed Company\nwas) and 20%\n‘a mt',
		effects: [
			{
				type: 'raw',
				text: 'G\nRUSSIAN REVOLUTION\n1917\nREQUIREMENT TRIGGER\nEVES CEYE | &,: sasic action\nThere is at least +2@\n1 Trade Union.\nOS ae a Be\nEFFECT\nSet Policies to [1A | | 2¢ | [3A | | 4A |\nThere will be no further\nElections this round.\nThe State does not pay for new\nPublic Companies this round.\n& : Build a Cooperative Farm.\n& : Remove a non-operational Public\nCompany from the board. Then, give\nthe State one of your Companies\n(place it where the removed Company\nwas) and 20%\n‘a mt',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-9-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'He ~y\nRISE OF\nAUTHORITARIANISM\n1920s - 1930s\nTRIGGER\nWhen Revealed\nCD eee 600\nEFFECT\nThere will be no Elections this round.\n& dh : Remove 1@.\n: Choose 2 Policies and move\ntheir markers to adjacent\nsections. Then, get 2\nPersonal @® and @)\nto all classes.\n| We',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-1.jpg',
			position: {
				x: 9,
				y: 1,
			},
		},
		parsed: {
			numbers: [1920, 1930, 600, 1, 2],
			keywords: [
				'rise',
				'authoritarianism',
				'trigger',
				'when',
				'revealed',
				'eee',
				'effect',
				'there',
				'will',
				'elections',
				'this',
				'round',
				'remove',
				'choose',
				'policies',
				'and',
				'move',
				'their',
			],
		},
		kind: 'historical-event',
		name: 'He ~y',
		content:
			'RISE OF\nAUTHORITARIANISM\n1920s - 1930s\nTRIGGER\nWhen Revealed\nCD eee 600\nEFFECT\nThere will be no Elections this round.\n& dh : Remove 1@.\n: Choose 2 Policies and move\ntheir markers to adjacent\nsections. Then, get 2\nPersonal @® and @)\nto all classes.\n| We',
		effects: [
			{
				type: 'raw',
				text: 'RISE OF\nAUTHORITARIANISM\n1920s - 1930s\nTRIGGER\nWhen Revealed\nCD eee 600\nEFFECT\nThere will be no Elections this round.\n& dh : Remove 1@.\n: Choose 2 Policies and move\ntheir markers to adjacent\nsections. Then, get 2\nPersonal @® and @)\nto all classes.\n| We',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-10-1',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'i oy\nOPENING OF THE\nPANAMA CANAL\n1914\nTRIGGER\nWhen Revealed\nee\nEFFECT\nPlace an additional Business Deal\non the board.\nThe State gets 20%\n& he: Get 1 ¢.\n&: You may Sell to the\nForeign Market or\nMake a Business Deal.\nag ne',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-1.jpg',
			position: {
				x: 10,
				y: 1,
			},
		},
		parsed: {
			numbers: [1914, 20, 1],
			keywords: [
				'opening',
				'the',
				'panama',
				'canal',
				'trigger',
				'when',
				'revealed',
				'effect',
				'place',
				'additional',
				'business',
				'deal',
				'board',
				'state',
				'gets',
				'get',
				'you',
				'may',
			],
		},
		kind: 'historical-event',
		name: 'i oy',
		content:
			'OPENING OF THE\nPANAMA CANAL\n1914\nTRIGGER\nWhen Revealed\nee\nEFFECT\nPlace an additional Business Deal\non the board.\nThe State gets 20%\n& he: Get 1 ¢.\n&: You may Sell to the\nForeign Market or\nMake a Business Deal.\nag ne',
		effects: [
			{
				type: 'raw',
				text: 'OPENING OF THE\nPANAMA CANAL\n1914\nTRIGGER\nWhen Revealed\nee\nEFFECT\nPlace an additional Business Deal\non the board.\nThe State gets 20%\n& he: Get 1 ¢.\n&: You may Sell to the\nForeign Market or\nMake a Business Deal.\nag ne',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'He 7\nSPANISH FLU\n1918 - 1919\nREQUIREMENT TRIGGER\nbb: End of\nThere are at most ‘Acti a 5\n2/3 operational con Ghase\nHealth Companies.\nnS\nEFFECT\n& am: Remove 1 Worker\n(unemployed, if able).\n| We',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [7, 1918, 1919, 5, 2, 3, 1],
			resources: ['healthcare'],
			keywords: [
				'spanish',
				'flu',
				'requirement',
				'trigger',
				'end',
				'there',
				'are',
				'most',
				'acti',
				'operational',
				'con',
				'ghase',
				'health',
				'companies',
				'effect',
				'remove',
				'worker',
				'unemployed',
			],
		},
		kind: 'historical-event',
		name: 'He 7',
		content:
			'SPANISH FLU\n1918 - 1919\nREQUIREMENT TRIGGER\nbb: End of\nThere are at most ‘Acti a 5\n2/3 operational con Ghase\nHealth Companies.\nnS\nEFFECT\n& am: Remove 1 Worker\n(unemployed, if able).\n| We',
		effects: [
			{
				type: 'raw',
				text: 'SPANISH FLU\n1918 - 1919\nREQUIREMENT TRIGGER\nbb: End of\nThere are at most ‘Acti a 5\n2/3 operational con Ghase\nHealth Companies.\nnS\nEFFECT\n& am: Remove 1 Worker\n(unemployed, if able).\n| We',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'(i =\nRUSSO-JAPANESE WAR\n1904 - 1905\nTRIGGER\nEnd of Action Phase\nee\nEFFECT\n& ri : Remove an unemployed Worker.\n: Lose 15%\n‘a gl',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [1904, 1905, 15],
			keywords: [
				'russo-japanese',
				'war',
				'trigger',
				'end',
				'action',
				'phase',
				'effect',
				'remove',
				'unemployed',
				'worker',
				'lose',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'(i =\nRUSSO-JAPANESE WAR\n1904 - 1905\nTRIGGER\nEnd of Action Phase\nee\nEFFECT\n& ri : Remove an unemployed Worker.\n: Lose 15%\n‘a gl',
		effects: [
			{
				type: 'raw',
				text: '(i =\nRUSSO-JAPANESE WAR\n1904 - 1905\nTRIGGER\nEnd of Action Phase\nee\nEFFECT\n& ri : Remove an unemployed Worker.\n: Lose 15%\n‘a gl',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& ea\nRISE OF PROTECTIONISM\n+++++1920s - 1930S +--+\n| | ee\nREQUIREMENT\n6B /6C\nEEE\nTRIGGER\n@® cy : FREE ACTION\nTEE\nEFFECT\nSet policy 6 to Gs.\nDiscard all Business Deals.\nea ig',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [1920, 1930, 6],
			policies: ['6B', '6C'],
			keywords: [
				'rise',
				'protectionism',
				'requirement',
				'eee',
				'trigger',
				'free',
				'action',
				'tee',
				'effect',
				'set',
				'policy',
				'discard',
				'all',
				'business',
				'deals',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& ea\nRISE OF PROTECTIONISM\n+++++1920s - 1930S +--+\n| | ee\nREQUIREMENT\n6B /6C\nEEE\nTRIGGER\n@® cy : FREE ACTION\nTEE\nEFFECT\nSet policy 6 to Gs.\nDiscard all Business Deals.\nea ig',
		effects: [
			{
				type: 'raw',
				text: '& ea\nRISE OF PROTECTIONISM\n+++++1920s - 1930S +--+\n| | ee\nREQUIREMENT\n6B /6C\nEEE\nTRIGGER\n@® cy : FREE ACTION\nTEE\nEFFECT\nSet policy 6 to Gs.\nDiscard all Business Deals.\nea ig',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'Ss On\nBENGAL FAMINE\n|! |\nREQUIREMENT\nAe:\nThere are at most 2/3\noperational Health Companies.\nan @\nTRIGGER\nEnd of Action Phase\nEE @§\nEFFECT\n& am: Remove 2 Workers\n(unemployed, if able).\n: Get 66:\nes y',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 3, 66],
			resources: ['healthcare'],
			keywords: [
				'bengal',
				'famine',
				'requirement',
				'there',
				'are',
				'most',
				'operational',
				'health',
				'companies',
				'trigger',
				'end',
				'action',
				'phase',
				'effect',
				'remove',
				'workers',
				'unemployed',
				'able',
			],
		},
		kind: 'historical-event',
		name: 'Ss On',
		content:
			'BENGAL FAMINE\n|! |\nREQUIREMENT\nAe:\nThere are at most 2/3\noperational Health Companies.\nan @\nTRIGGER\nEnd of Action Phase\nEE @§\nEFFECT\n& am: Remove 2 Workers\n(unemployed, if able).\n: Get 66:\nes y',
		effects: [
			{
				type: 'raw',
				text: 'BENGAL FAMINE\n|! |\nREQUIREMENT\nAe:\nThere are at most 2/3\noperational Health Companies.\nan @\nTRIGGER\nEnd of Action Phase\nEE @§\nEFFECT\n& am: Remove 2 Workers\n(unemployed, if able).\n: Get 66:\nes y',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'ke )\nNEW DEAL\nPee 1911993 - 1939 ee ec\n| | ee\nREQUIREMENT\nwe:\nThere are at least 4/7\nunemployed Workers.\nTT\nTRIGGER\ni& ): BASIC ACTION\nEEE 0\nEFFECT\n& ri : Assign any number of unemployed\nWorkers to Public and/or Capitalist\nClass Companies.\na: Receive 5¥ from the State for each\nnew Worker assigned to your\nCompanies this way.\nio sy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [1911993, 1939, 4, 7, 0, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'new',
				'deal',
				'pee',
				'requirement',
				'there',
				'are',
				'least',
				'unemployed',
				'workers',
				'trigger',
				'basic',
				'action',
				'eee',
				'effect',
				'assign',
				'any',
				'number',
				'public',
			],
		},
		kind: 'historical-event',
		name: 'ke )',
		content:
			'NEW DEAL\nPee 1911993 - 1939 ee ec\n| | ee\nREQUIREMENT\nwe:\nThere are at least 4/7\nunemployed Workers.\nTT\nTRIGGER\ni& ): BASIC ACTION\nEEE 0\nEFFECT\n& ri : Assign any number of unemployed\nWorkers to Public and/or Capitalist\nClass Companies.\na: Receive 5¥ from the State for each\nnew Worker assigned to your\nCompanies this way.\nio sy',
		effects: [
			{
				type: 'raw',
				text: 'NEW DEAL\nPee 1911993 - 1939 ee ec\n| | ee\nREQUIREMENT\nwe:\nThere are at least 4/7\nunemployed Workers.\nTT\nTRIGGER\ni& ): BASIC ACTION\nEEE 0\nEFFECT\n& ri : Assign any number of unemployed\nWorkers to Public and/or Capitalist\nClass Companies.\na: Receive 5¥ from the State for each\nnew Worker assigned to your\nCompanies this way.\nio sy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-6-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& Py\nGREAT DEPRESSION\noe ees 1929 - 1939 sores\n| | ee\nREQUIREMENT\nThere are at least 2 Loans\namong all players.\nOR\nThe State has 100¥ or less.\na)\nTRIGGER\nWhen Revealed\nEEE\nEFFECT\n12>] 4>15>)\n& i: Discard 1 operational Company.\nSet all your selling prices to their\nhighest values. You may not\nAdjust Prices during this round.\n* : Lose 30¥.\nas 2g',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-2.jpg',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [1929, 1939, 2, 100, 12, 4, 15, 1, 30],
			money: [100, 30],
			resources: ['money'],
			keywords: [
				'great',
				'depression',
				'ees',
				'sores',
				'requirement',
				'there',
				'are',
				'least',
				'loans',
				'among',
				'all',
				'players',
				'the',
				'state',
				'has',
				'less',
				'trigger',
				'when',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& Py\nGREAT DEPRESSION\noe ees 1929 - 1939 sores\n| | ee\nREQUIREMENT\nThere are at least 2 Loans\namong all players.\nOR\nThe State has 100¥ or less.\na)\nTRIGGER\nWhen Revealed\nEEE\nEFFECT\n12>] 4>15>)\n& i: Discard 1 operational Company.\nSet all your selling prices to their\nhighest values. You may not\nAdjust Prices during this round.\n* : Lose 30¥.\nas 2g',
		effects: [
			{
				type: 'raw',
				text: '& Py\nGREAT DEPRESSION\noe ees 1929 - 1939 sores\n| | ee\nREQUIREMENT\nThere are at least 2 Loans\namong all players.\nOR\nThe State has 100¥ or less.\na)\nTRIGGER\nWhen Revealed\nEEE\nEFFECT\n12>] 4>15>)\n& i: Discard 1 operational Company.\nSet all your selling prices to their\nhighest values. You may not\nAdjust Prices during this round.\n* : Lose 30¥.\nas 2g',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-7-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& )\nBABY BOOM\n+++++1940s -1960S--+--\n| | ee\nREQUIREMENT\n2A /2B\nae:\nThere are at least 2/3\noperational Health Companies.\nEEE Oe\nTRIGGER\n(& ) : FREE ACTION\nSE @\nEFFECT\n& ri’ : Get 3 unskilled Workers\nand gain 1 Prosperity.\nWs aa',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-2.jpg',
			position: {
				x: 7,
				y: 2,
			},
		},
		parsed: {
			numbers: [1940, -1960, 2, 3, 1],
			policies: ['2A', '2B'],
			resources: ['healthcare'],
			keywords: [
				'baby',
				'boom',
				'requirement',
				'there',
				'are',
				'least',
				'operational',
				'health',
				'companies',
				'eee',
				'trigger',
				'free',
				'action',
				'effect',
				'get',
				'unskilled',
				'workers',
				'and',
			],
		},
		kind: 'historical-event',
		name: 'BABY BOOM',
		content:
			'& )\nBABY BOOM\n+++++1940s -1960S--+--\n| | ee\nREQUIREMENT\n2A /2B\nae:\nThere are at least 2/3\noperational Health Companies.\nEEE Oe\nTRIGGER\n(& ) : FREE ACTION\nSE @\nEFFECT\n& ri’ : Get 3 unskilled Workers\nand gain 1 Prosperity.\nWs aa',
		effects: [
			{
				type: 'raw',
				text: '& )\nBABY BOOM\n+++++1940s -1960S--+--\n| | ee\nREQUIREMENT\n2A /2B\nae:\nThere are at least 2/3\noperational Health Companies.\nEEE Oe\nTRIGGER\n(& ) : FREE ACTION\nSE @\nEFFECT\n& ri’ : Get 3 unskilled Workers\nand gain 1 Prosperity.\nWs aa',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-8-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'is On\nSTRIKE IN US\nAUTOMOTIVE INDUSTRY\neee ees 1936-1937 +++\n|! |\nREQUIREMENT\n2B /2C\nThere are at least 2 Trade Unions.\nEE 0\nTRIGGER\niB: FREE ACTION\nEEE 0}\nEFFECT\n& : Get 1 @® and perform a Strike.\nYou may place an additional Strike\ntoken for each Trade Union you have.\nAdd Voting cubes to the bag equal to\nthe number of Public and Capitalist\nClass Companies in which Middle\nClass Workers are employed.\nKia y',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-2.jpg',
			position: {
				x: 8,
				y: 2,
			},
		},
		parsed: {
			numbers: [1936, -1937, 2, 0, 1],
			policies: ['2B', '2C'],
			resources: ['influence'],
			keywords: [
				'strike',
				'automotive',
				'industry',
				'eee',
				'ees',
				'requirement',
				'there',
				'are',
				'least',
				'trade',
				'unions',
				'trigger',
				'free',
				'action',
				'effect',
				'get',
				'and',
				'perform',
			],
		},
		kind: 'historical-event',
		name: 'is On',
		content:
			'STRIKE IN US\nAUTOMOTIVE INDUSTRY\neee ees 1936-1937 +++\n|! |\nREQUIREMENT\n2B /2C\nThere are at least 2 Trade Unions.\nEE 0\nTRIGGER\niB: FREE ACTION\nEEE 0}\nEFFECT\n& : Get 1 @® and perform a Strike.\nYou may place an additional Strike\ntoken for each Trade Union you have.\nAdd Voting cubes to the bag equal to\nthe number of Public and Capitalist\nClass Companies in which Middle\nClass Workers are employed.\nKia y',
		effects: [
			{
				type: 'raw',
				text: 'STRIKE IN US\nAUTOMOTIVE INDUSTRY\neee ees 1936-1937 +++\n|! |\nREQUIREMENT\n2B /2C\nThere are at least 2 Trade Unions.\nEE 0\nTRIGGER\niB: FREE ACTION\nEEE 0}\nEFFECT\n& : Get 1 @® and perform a Strike.\nYou may place an additional Strike\ntoken for each Trade Union you have.\nAdd Voting cubes to the bag equal to\nthe number of Public and Capitalist\nClass Companies in which Middle\nClass Workers are employed.\nKia y',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-9-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'Me a\nWORLD WAR II\noe cece 1939-1945 esse\n| | ee\nTRIGGER\nWhen Revealed\nEHO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& ni : Remove 2 unemployed Workers.\n& : Sell one of your Luxury Companies\nto the State for 32%. Remove a\nnon-operational Public Company\nfrom the board and place that\nLuxury Company in its place.\nes sy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-2.jpg',
			position: {
				x: 9,
				y: 2,
			},
		},
		parsed: {
			numbers: [1939, -1945, 2, 32],
			resources: ['luxury', 'money'],
			keywords: [
				'world',
				'war',
				'cece',
				'esse',
				'trigger',
				'when',
				'revealed',
				'eho',
				'effect',
				'the',
				'state',
				'pays',
				'only',
				'half',
				'cost',
				'new',
				'public',
				'companies',
			],
		},
		kind: 'historical-event',
		name: 'Me a',
		content:
			'WORLD WAR II\noe cece 1939-1945 esse\n| | ee\nTRIGGER\nWhen Revealed\nEHO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& ni : Remove 2 unemployed Workers.\n& : Sell one of your Luxury Companies\nto the State for 32%. Remove a\nnon-operational Public Company\nfrom the board and place that\nLuxury Company in its place.\nes sy',
		effects: [
			{
				type: 'raw',
				text: 'WORLD WAR II\noe cece 1939-1945 esse\n| | ee\nTRIGGER\nWhen Revealed\nEHO\nEFFECT\nThe State pays only half the cost\nof new Public Companies this round.\n& ni : Remove 2 unemployed Workers.\n& : Sell one of your Luxury Companies\nto the State for 32%. Remove a\nnon-operational Public Company\nfrom the board and place that\nLuxury Company in its place.\nes sy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-10-2',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-2.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'is i)\nFOUNDATION OF GATT\n|)! | ee\nREQUIREMENT\nae:\nThere are at least 4 / 6 Agricultural\nand/or Luxury Companies.\nSEE 6 SS\nTRIGGER\n& © : FREE ACTION\n(SE\nEFFECT\nPlace an additional Business Deal\non the board.\n&: Make a Business Deal.\n: Whenever another player Sells.\n~ to the Foreign Market this\nround, get (+1) to their class.\n‘Se =',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-2.jpg',
			position: {
				x: 10,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 6, 1],
			resources: ['luxury'],
			keywords: [
				'foundation',
				'gatt',
				'requirement',
				'there',
				'are',
				'least',
				'agricultural',
				'and',
				'luxury',
				'companies',
				'see',
				'trigger',
				'free',
				'action',
				'effect',
				'place',
				'additional',
				'business',
			],
		},
		kind: 'historical-event',
		name: 'is i)',
		content:
			'FOUNDATION OF GATT\n|)! | ee\nREQUIREMENT\nae:\nThere are at least 4 / 6 Agricultural\nand/or Luxury Companies.\nSEE 6 SS\nTRIGGER\n& © : FREE ACTION\n(SE\nEFFECT\nPlace an additional Business Deal\non the board.\n&: Make a Business Deal.\n: Whenever another player Sells.\n~ to the Foreign Market this\nround, get (+1) to their class.\n‘Se =',
		effects: [
			{
				type: 'raw',
				text: 'FOUNDATION OF GATT\n|)! | ee\nREQUIREMENT\nae:\nThere are at least 4 / 6 Agricultural\nand/or Luxury Companies.\nSEE 6 SS\nTRIGGER\n& © : FREE ACTION\n(SE\nEFFECT\nPlace an additional Business Deal\non the board.\n&: Make a Business Deal.\n: Whenever another player Sells.\n~ to the Foreign Market this\nround, get (+1) to their class.\n‘Se =',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-1-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& ea\nINDIA GAINS INDEPENDENCE\n| | ee\nTRIGGER\n& : FREE ACTION\nEEE 0\nEFFECT\n& : Add 4 Voting cubes to the bag.\n& : Add 1 Voting cube to the bag.\nri : Add 1 Voting cube to the bag.\nie ay',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-3.jpg',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [0, 4, 1],
			resources: ['influence'],
			keywords: [
				'india',
				'gains',
				'independence',
				'trigger',
				'free',
				'action',
				'eee',
				'effect',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
				'cube',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& ea\nINDIA GAINS INDEPENDENCE\n| | ee\nTRIGGER\n& : FREE ACTION\nEEE 0\nEFFECT\n& : Add 4 Voting cubes to the bag.\n& : Add 1 Voting cube to the bag.\nri : Add 1 Voting cube to the bag.\nie ay',
		effects: [
			{
				type: 'raw',
				text: '& ea\nINDIA GAINS INDEPENDENCE\n| | ee\nTRIGGER\n& : FREE ACTION\nEEE 0\nEFFECT\n& : Add 4 Voting cubes to the bag.\n& : Add 1 Voting cube to the bag.\nri : Add 1 Voting cube to the bag.\nie ay',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-2-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& a\nPOST-WAR\nECONOMIC MIRACLE\n1950s - 1970s\n——————S\nTRIGGER\nWhen Revealed\n1, JU Ey RSE SRE A 0 PSP TESST\nEFFECT\n& : Assign any number\nof unemployed Workers.\n&: During this round, Companies\nwith %& produce 2 additional\nresources.\nBe Sy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-3.jpg',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [1950, 1970, 1, 0, 2],
			keywords: [
				'post-war',
				'economic',
				'miracle',
				'trigger',
				'when',
				'revealed',
				'rse',
				'sre',
				'psp',
				'tesst',
				'effect',
				'assign',
				'any',
				'number',
				'unemployed',
				'workers',
				'during',
				'this',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& a\nPOST-WAR\nECONOMIC MIRACLE\n1950s - 1970s\n——————S\nTRIGGER\nWhen Revealed\n1, JU Ey RSE SRE A 0 PSP TESST\nEFFECT\n& : Assign any number\nof unemployed Workers.\n&: During this round, Companies\nwith %& produce 2 additional\nresources.\nBe Sy',
		effects: [
			{
				type: 'raw',
				text: '& a\nPOST-WAR\nECONOMIC MIRACLE\n1950s - 1970s\n——————S\nTRIGGER\nWhen Revealed\n1, JU Ey RSE SRE A 0 PSP TESST\nEFFECT\n& : Assign any number\nof unemployed Workers.\n&: During this round, Companies\nwith %& produce 2 additional\nresources.\nBe Sy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-3-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'i Py\nCHINESE\nCOMMUNIST REVOLUTION\n1945 - 1949\n<_—_¢nt¢-.___——=¥%\nREQUIREMENT\n2B /2c\nThe Working Class has 3 or less &.\nThere are at least 2 Trade Unions.\n—————\nTRIGGER\ni& ©»: BASIC ACTION\nae a eee\nEFFECT\nThere will be no further Elections\nthis round.\n& : Choose up to 2 Policies and move\ntheir markers to an adjacent section.\n&: Pay 40¥ to the State.\n=,,1 Choose a Policy (not chosen by the\n~ Working Class) and move its marker\nto an adjacent section.\nsre lg',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-3.jpg',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [1945, 1949, 2, 3, 40, 1],
			money: [40],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'chinese',
				'communist',
				'revolution',
				'requirement',
				'the',
				'working',
				'class',
				'has',
				'less',
				'there',
				'are',
				'least',
				'trade',
				'unions',
				'trigger',
				'basic',
				'action',
				'eee',
			],
		},
		kind: 'historical-event',
		name: 'i Py',
		content:
			'CHINESE\nCOMMUNIST REVOLUTION\n1945 - 1949\n<_—_¢nt¢-.___——=¥%\nREQUIREMENT\n2B /2c\nThe Working Class has 3 or less &.\nThere are at least 2 Trade Unions.\n—————\nTRIGGER\ni& ©»: BASIC ACTION\nae a eee\nEFFECT\nThere will be no further Elections\nthis round.\n& : Choose up to 2 Policies and move\ntheir markers to an adjacent section.\n&: Pay 40¥ to the State.\n=,,1 Choose a Policy (not chosen by the\n~ Working Class) and move its marker\nto an adjacent section.\nsre lg',
		effects: [
			{
				type: 'raw',
				text: 'CHINESE\nCOMMUNIST REVOLUTION\n1945 - 1949\n<_—_¢nt¢-.___——=¥%\nREQUIREMENT\n2B /2c\nThe Working Class has 3 or less &.\nThere are at least 2 Trade Unions.\n—————\nTRIGGER\ni& ©»: BASIC ACTION\nae a eee\nEFFECT\nThere will be no further Elections\nthis round.\n& : Choose up to 2 Policies and move\ntheir markers to an adjacent section.\n&: Pay 40¥ to the State.\n=,,1 Choose a Policy (not chosen by the\n~ Working Class) and move its marker\nto an adjacent section.\nsre lg',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-4-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& =)\nCIVIL RIGHTS MOVEMENT\n1950s - 1960s\n<¢$_$<_____ 7\nREQUIREMENT\nThe Working Class has 3 or less &.\nhash\nTRIGGER\niB ) : FREE ACTION\n—— +e\nEFFECT\n&: Perform a Strike.\nAdd 4 Voting cubes to the bag.\nri : Add 2 Voting cubes to the bag.\nee By',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-3.jpg',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [1950, 1960, 7, 3, 4, 2],
			resources: ['influence', 'money'],
			keywords: [
				'civil',
				'rights',
				'movement',
				'requirement',
				'the',
				'working',
				'class',
				'has',
				'less',
				'hash',
				'trigger',
				'free',
				'action',
				'effect',
				'perform',
				'strike',
				'add',
				'voting',
			],
		},
		kind: 'historical-event',
		name: 'CIVIL RIGHTS MOVEMENT',
		content:
			'& =)\nCIVIL RIGHTS MOVEMENT\n1950s - 1960s\n<¢$_$<_____ 7\nREQUIREMENT\nThe Working Class has 3 or less &.\nhash\nTRIGGER\niB ) : FREE ACTION\n—— +e\nEFFECT\n&: Perform a Strike.\nAdd 4 Voting cubes to the bag.\nri : Add 2 Voting cubes to the bag.\nee By',
		effects: [
			{
				type: 'raw',
				text: '& =)\nCIVIL RIGHTS MOVEMENT\n1950s - 1960s\n<¢$_$<_____ 7\nREQUIREMENT\nThe Working Class has 3 or less &.\nhash\nTRIGGER\niB ) : FREE ACTION\n—— +e\nEFFECT\n&: Perform a Strike.\nAdd 4 Voting cubes to the bag.\nri : Add 2 Voting cubes to the bag.\nee By',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-5-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& oN\nEMBARGO AGAINST CUBA\nSince 1960\nwMH!_-_ dy *\nREQUIREMENT\nThere are at least 2 Socialist Policies\n(Policies 1-5 in section A).\n(on\nTRIGGER\ni& cy : FREE ACTION\n*—_—___ ———\nEFFECT\nDiscard all Business Deals.\nPlayers may not Sell to the Foreign Market\nor Buy Goods & Services from the Foreign\nMarket during this round.\nRic ag',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-3.jpg',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [1960, 2, 1, -5],
			keywords: [
				'embargo',
				'against',
				'cuba',
				'since',
				'wmh',
				'requirement',
				'there',
				'are',
				'least',
				'socialist',
				'policies',
				'section',
				'trigger',
				'free',
				'action',
				'effect',
				'discard',
				'all',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& oN\nEMBARGO AGAINST CUBA\nSince 1960\nwMH!_-_ dy *\nREQUIREMENT\nThere are at least 2 Socialist Policies\n(Policies 1-5 in section A).\n(on\nTRIGGER\ni& cy : FREE ACTION\n*—_—___ ———\nEFFECT\nDiscard all Business Deals.\nPlayers may not Sell to the Foreign Market\nor Buy Goods & Services from the Foreign\nMarket during this round.\nRic ag',
		effects: [
			{
				type: 'raw',
				text: '& oN\nEMBARGO AGAINST CUBA\nSince 1960\nwMH!_-_ dy *\nREQUIREMENT\nThere are at least 2 Socialist Policies\n(Policies 1-5 in section A).\n(on\nTRIGGER\ni& cy : FREE ACTION\n*—_—___ ———\nEFFECT\nDiscard all Business Deals.\nPlayers may not Sell to the Foreign Market\nor Buy Goods & Services from the Foreign\nMarket during this round.\nRic ag',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-6-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'& ay\nMARSHALL PLAN\n1948-1951\n<$—_#$<\\_——_—__4 0\nREQUIREMENT\nThere are 2 or less Socialist Policies\n(Policies 1-5 in section A).\nSS eee\nTRIGGER\ni Ce: FREE ACTION\n¥&————_+4+-—______—_#®\nEFFECT\nThe State gets 30%\n&: Build a non-automated Company\nfor free.\neS ey',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-3.jpg',
			position: {
				x: 6,
				y: 3,
			},
		},
		parsed: {
			numbers: [1948, -1951, 4, 0, 2, 1, -5, 30],
			resources: ['money'],
			keywords: [
				'marshall',
				'plan',
				'requirement',
				'there',
				'are',
				'less',
				'socialist',
				'policies',
				'section',
				'eee',
				'trigger',
				'free',
				'action',
				'effect',
				'the',
				'state',
				'gets',
				'build',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'& ay\nMARSHALL PLAN\n1948-1951\n<$—_#$<\\_——_—__4 0\nREQUIREMENT\nThere are 2 or less Socialist Policies\n(Policies 1-5 in section A).\nSS eee\nTRIGGER\ni Ce: FREE ACTION\n¥&————_+4+-—______—_#®\nEFFECT\nThe State gets 30%\n&: Build a non-automated Company\nfor free.\neS ey',
		effects: [
			{
				type: 'raw',
				text: '& ay\nMARSHALL PLAN\n1948-1951\n<$—_#$<\\_——_—__4 0\nREQUIREMENT\nThere are 2 or less Socialist Policies\n(Policies 1-5 in section A).\nSS eee\nTRIGGER\ni Ce: FREE ACTION\n¥&————_+4+-—______—_#®\nEFFECT\nThe State gets 30%\n&: Build a non-automated Company\nfor free.\neS ey',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-7-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'&é Oy\nPOST-WWII\nDECOLONIZATION\n1940s - 1970s\n%’$—_\\_\\_—_+ +\nREQUIREMENT\nbbb:\nPlayers have at least 4/5 / 7 @ in total.\n(Count only Personal @ for the State.)\n(eS\nTRIGGER\ni& i (cy : FREE ACTION\na\nEFFECT\nWhenever a player Proposes a Bill during\nthis round, they may call for an Immediate\nVote without spending @.\n& : Add 3 Voting cubes to the bag.\n&: Add 1 Voting cube to the bag.\nee: Add 2 Voting cubes to the bag.\nSs =]',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-3.jpg',
			position: {
				x: 7,
				y: 3,
			},
		},
		parsed: {
			numbers: [1940, 1970, 4, 5, 7, 3, 1, 2],
			resources: ['influence', 'money'],
			keywords: [
				'post-wwii',
				'decolonization',
				'requirement',
				'bbb',
				'players',
				'have',
				'least',
				'total',
				'count',
				'only',
				'personal',
				'for',
				'the',
				'state',
				'trigger',
				'free',
				'action',
				'effect',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'&é Oy\nPOST-WWII\nDECOLONIZATION\n1940s - 1970s\n%’$—_\\_\\_—_+ +\nREQUIREMENT\nbbb:\nPlayers have at least 4/5 / 7 @ in total.\n(Count only Personal @ for the State.)\n(eS\nTRIGGER\ni& i (cy : FREE ACTION\na\nEFFECT\nWhenever a player Proposes a Bill during\nthis round, they may call for an Immediate\nVote without spending @.\n& : Add 3 Voting cubes to the bag.\n&: Add 1 Voting cube to the bag.\nee: Add 2 Voting cubes to the bag.\nSs =]',
		effects: [
			{
				type: 'raw',
				text: '&é Oy\nPOST-WWII\nDECOLONIZATION\n1940s - 1970s\n%’$—_\\_\\_—_+ +\nREQUIREMENT\nbbb:\nPlayers have at least 4/5 / 7 @ in total.\n(Count only Personal @ for the State.)\n(eS\nTRIGGER\ni& i (cy : FREE ACTION\na\nEFFECT\nWhenever a player Proposes a Bill during\nthis round, they may call for an Immediate\nVote without spending @.\n& : Add 3 Voting cubes to the bag.\n&: Add 1 Voting cube to the bag.\nee: Add 2 Voting cubes to the bag.\nSs =]',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-8-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'i i)\nERA OF KEYNESIANISM\n1950s - 1970s\nne\nREQUIREMENT\nae:\nThere are at least 4/7\nunemployed Workers.\n= OSSD\nTRIGGER\n& & & ce : Basic ACTION\nSh\nEFFECT\nSet Policies to\n1 ES ES OS 6\nSe ay',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-3.jpg',
			position: {
				x: 8,
				y: 3,
			},
		},
		parsed: {
			numbers: [1950, 1970, 4, 7, 1, 6],
			keywords: [
				'era',
				'keynesianism',
				'requirement',
				'there',
				'are',
				'least',
				'unemployed',
				'workers',
				'ossd',
				'trigger',
				'basic',
				'action',
				'effect',
				'set',
				'policies',
			],
		},
		kind: 'historical-event',
		name: 'i i)',
		content:
			'ERA OF KEYNESIANISM\n1950s - 1970s\nne\nREQUIREMENT\nae:\nThere are at least 4/7\nunemployed Workers.\n= OSSD\nTRIGGER\n& & & ce : Basic ACTION\nSh\nEFFECT\nSet Policies to\n1 ES ES OS 6\nSe ay',
		effects: [
			{
				type: 'raw',
				text: 'ERA OF KEYNESIANISM\n1950s - 1970s\nne\nREQUIREMENT\nae:\nThere are at least 4/7\nunemployed Workers.\n= OSSD\nTRIGGER\n& & & ce : Basic ACTION\nSh\nEFFECT\nSet Policies to\n1 ES ES OS 6\nSe ay',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-9-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'ee =)\nLEFTIST MOVEMENTS\nIN EUROPE\n1950s - 1960s\n*—_—_—_—__++—__———*\nREQUIREMENT\nThere are at least 3 Policies from\nPolicies 1-5 in section B.\nThere are at least 2 Trade Unions.\n&: The Middle Class has at least\n5 Population.\n(SS SE ee\nTRIGGER\niB (\\: FREE ACTION\ntei\nEFFECT\n& : Add 4 Voting cubes to the bag.\nri :Get1@.\n: Get 1 &\nKu wy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-3.jpg',
			position: {
				x: 9,
				y: 3,
			},
		},
		parsed: {
			numbers: [1950, 1960, 3, 1, -5, 2, 5, 4],
			resources: ['influence'],
			keywords: [
				'leftist',
				'movements',
				'europe',
				'requirement',
				'there',
				'are',
				'least',
				'policies',
				'from',
				'section',
				'trade',
				'unions',
				'the',
				'middle',
				'class',
				'has',
				'population',
				'trigger',
			],
		},
		kind: 'historical-event',
		name: 'ee =)',
		content:
			'LEFTIST MOVEMENTS\nIN EUROPE\n1950s - 1960s\n*—_—_—_—__++—__———*\nREQUIREMENT\nThere are at least 3 Policies from\nPolicies 1-5 in section B.\nThere are at least 2 Trade Unions.\n&: The Middle Class has at least\n5 Population.\n(SS SE ee\nTRIGGER\niB (\\: FREE ACTION\ntei\nEFFECT\n& : Add 4 Voting cubes to the bag.\nri :Get1@.\n: Get 1 &\nKu wy',
		effects: [
			{
				type: 'raw',
				text: 'LEFTIST MOVEMENTS\nIN EUROPE\n1950s - 1960s\n*—_—_—_—__++—__———*\nREQUIREMENT\nThere are at least 3 Policies from\nPolicies 1-5 in section B.\nThere are at least 2 Trade Unions.\n&: The Middle Class has at least\n5 Population.\n(SS SE ee\nTRIGGER\niB (\\: FREE ACTION\ntei\nEFFECT\n& : Add 4 Voting cubes to the bag.\nri :Get1@.\n: Get 1 &\nKu wy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-10-3',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-3.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'is ay\nPOST-WAR RISE\nOF CONSUMERISM\n1950s\nCe lp eee ae\nREQUIREMENT\nThere are at least 3 operational\nLuxury Companies.\na ES SS SS\nTRIGGER\ni& ): FREE ACTION\n§&—_—_—_—_++—_____#\nEFFECT\n& : You may buy 0 from the Capitalist\nClass, up to half of your Population.\nee: You may buy oO from the Capitalist\nClass, up to your Population.\nKe gf',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-3.jpg',
			position: {
				x: 10,
				y: 3,
			},
		},
		parsed: {
			numbers: [1950, 3, 0],
			resources: ['luxury'],
			keywords: [
				'post-war',
				'rise',
				'consumerism',
				'eee',
				'requirement',
				'there',
				'are',
				'least',
				'operational',
				'luxury',
				'companies',
				'trigger',
				'free',
				'action',
				'effect',
				'you',
				'may',
				'buy',
			],
		},
		kind: 'historical-event',
		name: 'is ay',
		content:
			'POST-WAR RISE\nOF CONSUMERISM\n1950s\nCe lp eee ae\nREQUIREMENT\nThere are at least 3 operational\nLuxury Companies.\na ES SS SS\nTRIGGER\ni& ): FREE ACTION\n§&—_—_—_—_++—_____#\nEFFECT\n& : You may buy 0 from the Capitalist\nClass, up to half of your Population.\nee: You may buy oO from the Capitalist\nClass, up to your Population.\nKe gf',
		effects: [
			{
				type: 'raw',
				text: 'POST-WAR RISE\nOF CONSUMERISM\n1950s\nCe lp eee ae\nREQUIREMENT\nThere are at least 3 operational\nLuxury Companies.\na ES SS SS\nTRIGGER\ni& ): FREE ACTION\n§&—_—_—_—_++—_____#\nEFFECT\n& : You may buy 0 from the Capitalist\nClass, up to half of your Population.\nee: You may buy oO from the Capitalist\nClass, up to your Population.\nKe gf',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-1-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'a\nARAB NATIONALIZATION\nOF OIL\n1960s - 1970s\noe\nREQUIREMENT \\\nThe Capitalist Class has at least\n9 Companies.\na: The State has at least 3 Personal @®.\nTRIGGER\n*\ni& cy: FREE ACTION\nEFFECT\n&: Remove a Public Company from the\nboard (non-operational, if able).\nThen, give the State one of your\noperational Companies (place it\nwhere the removed Company was).\ngp: Get 6.\nbie =a',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-4.jpg',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [1960, 1970, 9, 3, 6],
			keywords: [
				'arab',
				'nationalization',
				'oil',
				'requirement',
				'the',
				'capitalist',
				'class',
				'has',
				'least',
				'companies',
				'state',
				'personal',
				'trigger',
				'free',
				'action',
				'effect',
				'remove',
				'public',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'a\nARAB NATIONALIZATION\nOF OIL\n1960s - 1970s\noe\nREQUIREMENT \\\nThe Capitalist Class has at least\n9 Companies.\na: The State has at least 3 Personal @®.\nTRIGGER\n*\ni& cy: FREE ACTION\nEFFECT\n&: Remove a Public Company from the\nboard (non-operational, if able).\nThen, give the State one of your\noperational Companies (place it\nwhere the removed Company was).\ngp: Get 6.\nbie =a',
		effects: [
			{
				type: 'raw',
				text: 'a\nARAB NATIONALIZATION\nOF OIL\n1960s - 1970s\noe\nREQUIREMENT \\\nThe Capitalist Class has at least\n9 Companies.\na: The State has at least 3 Personal @®.\nTRIGGER\n*\ni& cy: FREE ACTION\nEFFECT\n&: Remove a Public Company from the\nboard (non-operational, if able).\nThen, give the State one of your\noperational Companies (place it\nwhere the removed Company was).\ngp: Get 6.\nbie =a',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-2-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'aN\nCHINESE ECONOMIC\nREFORM\nSince 1970s\n——\nREQUIREMENT \\\nThere are at least 3 Socialist Policies\n(Policies 1-5 in section A).\nTRIGGER\nEnd of Action Phase\nEFFECT\nThe State gets 30¥.\nee e?',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-4.jpg',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [1970, 3, 1, -5, 30],
			money: [30],
			resources: ['money'],
			keywords: [
				'chinese',
				'economic',
				'reform',
				'since',
				'requirement',
				'there',
				'are',
				'least',
				'socialist',
				'policies',
				'section',
				'trigger',
				'end',
				'action',
				'phase',
				'effect',
				'the',
				'state',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'aN\nCHINESE ECONOMIC\nREFORM\nSince 1970s\n——\nREQUIREMENT \\\nThere are at least 3 Socialist Policies\n(Policies 1-5 in section A).\nTRIGGER\nEnd of Action Phase\nEFFECT\nThe State gets 30¥.\nee e?',
		effects: [
			{
				type: 'raw',
				text: 'aN\nCHINESE ECONOMIC\nREFORM\nSince 1970s\n——\nREQUIREMENT \\\nThere are at least 3 Socialist Policies\n(Policies 1-5 in section A).\nTRIGGER\nEnd of Action Phase\nEFFECT\nThe State gets 30¥.\nee e?',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-3-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'oN\nASIAN TIGERS\nECONOMIC MIRACLE\n1960s - 1990s\nIv.\nREQUIREMENT\n6A / 6B\nTRIGGER\n(cy : FREE ACTION\nEFFECT\n& fh : Whenever you Build a Company\nthis round, get 10¥ from the State.\nWhenever you Sell to the Foreign\nMarket this round, get 10¥ from\nthe State.\n«: Whenever another player Builds\na Company or Sells to the Foreign\nMarket, get [+1] to their class.\n‘e _',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-4.jpg',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [1960, 1990, 6, 10, 1],
			money: [10],
			policies: ['6A', '6B'],
			resources: ['money'],
			keywords: [
				'asian',
				'tigers',
				'economic',
				'miracle',
				'requirement',
				'trigger',
				'free',
				'action',
				'effect',
				'whenever',
				'you',
				'build',
				'company',
				'this',
				'round',
				'get',
				'from',
				'the',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'oN\nASIAN TIGERS\nECONOMIC MIRACLE\n1960s - 1990s\nIv.\nREQUIREMENT\n6A / 6B\nTRIGGER\n(cy : FREE ACTION\nEFFECT\n& fh : Whenever you Build a Company\nthis round, get 10¥ from the State.\nWhenever you Sell to the Foreign\nMarket this round, get 10¥ from\nthe State.\n«: Whenever another player Builds\na Company or Sells to the Foreign\nMarket, get [+1] to their class.\n‘e _',
		effects: [
			{
				type: 'raw',
				text: 'oN\nASIAN TIGERS\nECONOMIC MIRACLE\n1960s - 1990s\nIv.\nREQUIREMENT\n6A / 6B\nTRIGGER\n(cy : FREE ACTION\nEFFECT\n& fh : Whenever you Build a Company\nthis round, get 10¥ from the State.\nWhenever you Sell to the Foreign\nMarket this round, get 10¥ from\nthe State.\n«: Whenever another player Builds\na Company or Sells to the Foreign\nMarket, get [+1] to their class.\n‘e _',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-4-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'ae\nINVENTION OF THE\nWORLD WIDE WEB\n1989\nIv.\nREQUIREMENT\nbe: There are at least 3/5 opera-\ntional Education Companies.\nTRIGGER\niB de fh) ce : FREE ACTION\nEFFECT\nMedia Companies produce\nan additional @® during this round.\n&: Upgrade one of your Workers\nand get 1@.\n& fi : You may Sell to the Foreign Market,\n_ performing up to 2 transactions.\n<p: Get 1@ for every 2 operational\nCompanies you have.\nee oy',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-4.jpg',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [1989, 3, 5, 1, 2],
			resources: ['education', 'influence'],
			keywords: [
				'invention',
				'the',
				'world',
				'wide',
				'web',
				'requirement',
				'there',
				'are',
				'least',
				'opera',
				'tional',
				'education',
				'companies',
				'trigger',
				'free',
				'action',
				'effect',
				'media',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'ae\nINVENTION OF THE\nWORLD WIDE WEB\n1989\nIv.\nREQUIREMENT\nbe: There are at least 3/5 opera-\ntional Education Companies.\nTRIGGER\niB de fh) ce : FREE ACTION\nEFFECT\nMedia Companies produce\nan additional @® during this round.\n&: Upgrade one of your Workers\nand get 1@.\n& fi : You may Sell to the Foreign Market,\n_ performing up to 2 transactions.\n<p: Get 1@ for every 2 operational\nCompanies you have.\nee oy',
		effects: [
			{
				type: 'raw',
				text: 'ae\nINVENTION OF THE\nWORLD WIDE WEB\n1989\nIv.\nREQUIREMENT\nbe: There are at least 3/5 opera-\ntional Education Companies.\nTRIGGER\niB de fh) ce : FREE ACTION\nEFFECT\nMedia Companies produce\nan additional @® during this round.\n&: Upgrade one of your Workers\nand get 1@.\n& fi : You may Sell to the Foreign Market,\n_ performing up to 2 transactions.\n<p: Get 1@ for every 2 operational\nCompanies you have.\nee oy',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-5-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'oN\nEND OF MEDITERRANEAN\nDICTATORSHIPS\n1970s\nIv.\nREQUIREMENT \\\\\nAe:\nThe classes have at least\n4/5 @ in total.\nTRIGGER\n(& & (FREE ACTION\nEFFECT\nRemove 3 @® from Public Services.\n& & ris :Get1 @.\ncp: Get @ in any 2 classes.\noi ay',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-4.jpg',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [1970, 4, 5, 3, 1, 2],
			keywords: [
				'end',
				'mediterranean',
				'dictatorships',
				'requirement',
				'the',
				'classes',
				'have',
				'least',
				'total',
				'trigger',
				'free',
				'action',
				'effect',
				'remove',
				'from',
				'public',
				'services',
				'ris',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'oN\nEND OF MEDITERRANEAN\nDICTATORSHIPS\n1970s\nIv.\nREQUIREMENT \\\\\nAe:\nThe classes have at least\n4/5 @ in total.\nTRIGGER\n(& & (FREE ACTION\nEFFECT\nRemove 3 @® from Public Services.\n& & ris :Get1 @.\ncp: Get @ in any 2 classes.\noi ay',
		effects: [
			{
				type: 'raw',
				text: 'oN\nEND OF MEDITERRANEAN\nDICTATORSHIPS\n1970s\nIv.\nREQUIREMENT \\\\\nAe:\nThe classes have at least\n4/5 @ in total.\nTRIGGER\n(& & (FREE ACTION\nEFFECT\nRemove 3 @® from Public Services.\n& & ris :Get1 @.\ncp: Get @ in any 2 classes.\noi ay',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-6-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'oN\nFALL OF THE BERLIN WALL\n1989\nWV.\nTRIGGER\nWhen Revealed\nEFFECT\nSet Policy 7 to i.\n& ri : Reveal an Immigration card.\nAdd the Worker shown in it to\nthe Unemployed Workers area.\nNe SY',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-4.jpg',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [1989, 7],
			keywords: [
				'fall',
				'the',
				'berlin',
				'wall',
				'trigger',
				'when',
				'revealed',
				'effect',
				'set',
				'policy',
				'reveal',
				'immigration',
				'card',
				'add',
				'worker',
				'shown',
				'unemployed',
				'workers',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'oN\nFALL OF THE BERLIN WALL\n1989\nWV.\nTRIGGER\nWhen Revealed\nEFFECT\nSet Policy 7 to i.\n& ri : Reveal an Immigration card.\nAdd the Worker shown in it to\nthe Unemployed Workers area.\nNe SY',
		effects: [
			{
				type: 'raw',
				text: 'oN\nFALL OF THE BERLIN WALL\n1989\nWV.\nTRIGGER\nWhen Revealed\nEFFECT\nSet Policy 7 to i.\n& ri : Reveal an Immigration card.\nAdd the Worker shown in it to\nthe Unemployed Workers area.\nNe SY',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-7-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'a,\nLATIN AMERICAN\nDEBT CRISIS\n1980s\n——.\nREQUIREMENT \\\nThe State has less than 100¥\nand a Loan.\nTRIGGER\n8 | BASIC ACTION + ®\nEFFECT\nLi >[2>]4 >|\n‘Se ay',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-4.jpg',
			position: {
				x: 7,
				y: 4,
			},
		},
		parsed: {
			numbers: [1980, 100, 8, 2, 4],
			money: [100],
			resources: ['money'],
			keywords: [
				'latin',
				'american',
				'debt',
				'crisis',
				'requirement',
				'the',
				'state',
				'has',
				'less',
				'than',
				'and',
				'loan',
				'trigger',
				'basic',
				'action',
				'effect',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'a,\nLATIN AMERICAN\nDEBT CRISIS\n1980s\n——.\nREQUIREMENT \\\nThe State has less than 100¥\nand a Loan.\nTRIGGER\n8 | BASIC ACTION + ®\nEFFECT\nLi >[2>]4 >|\n‘Se ay',
		effects: [
			{
				type: 'raw',
				text: 'a,\nLATIN AMERICAN\nDEBT CRISIS\n1980s\n——.\nREQUIREMENT \\\nThe State has less than 100¥\nand a Loan.\nTRIGGER\n8 | BASIC ACTION + ®\nEFFECT\nLi >[2>]4 >|\n‘Se ay',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-8-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'es,\nOIL CRISIS\n1973 - 1974\nIv.\nTRIGGER\nWhen Revealed\nEFFECT\n¢ and 0 bought from the Foreign\nMarket this round cost 15¥ and 9%\nrespectively (before tariffs).\n& ri : Set your selling prices for and 0\nto their highest values. You may\nnot Adjust Prices for those goods\nduring this round.\na oY',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-4.jpg',
			position: {
				x: 8,
				y: 4,
			},
		},
		parsed: {
			numbers: [1973, 1974, 0, 15, 9],
			money: [15],
			resources: ['money'],
			keywords: [
				'oil',
				'crisis',
				'trigger',
				'when',
				'revealed',
				'effect',
				'and',
				'bought',
				'from',
				'the',
				'foreign',
				'market',
				'this',
				'round',
				'cost',
				'respectively',
				'before',
				'tariffs',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'es,\nOIL CRISIS\n1973 - 1974\nIv.\nTRIGGER\nWhen Revealed\nEFFECT\n¢ and 0 bought from the Foreign\nMarket this round cost 15¥ and 9%\nrespectively (before tariffs).\n& ri : Set your selling prices for and 0\nto their highest values. You may\nnot Adjust Prices for those goods\nduring this round.\na oY',
		effects: [
			{
				type: 'raw',
				text: 'es,\nOIL CRISIS\n1973 - 1974\nIv.\nTRIGGER\nWhen Revealed\nEFFECT\n¢ and 0 bought from the Foreign\nMarket this round cost 15¥ and 9%\nrespectively (before tariffs).\n& ri : Set your selling prices for and 0\nto their highest values. You may\nnot Adjust Prices for those goods\nduring this round.\na oY',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-9-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'ia,\nINDIAN DROUGHT\n1987\nIV.\nTRIGGER\nWhen Revealed\nEFFECT\nAgricultural Companies produce\n1 ¢ less during this round.\nYe ay',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-4.jpg',
			position: {
				x: 9,
				y: 4,
			},
		},
		parsed: {
			numbers: [1987, 1],
			keywords: [
				'indian',
				'drought',
				'trigger',
				'when',
				'revealed',
				'effect',
				'agricultural',
				'companies',
				'produce',
				'less',
				'during',
				'this',
				'round',
			],
		},
		kind: 'historical-event',
		name: 'Historical Event Expansion',
		content:
			'ia,\nINDIAN DROUGHT\n1987\nIV.\nTRIGGER\nWhen Revealed\nEFFECT\nAgricultural Companies produce\n1 ¢ less during this round.\nYe ay',
		effects: [
			{
				type: 'raw',
				text: 'ia,\nINDIAN DROUGHT\n1987\nIV.\nTRIGGER\nWhen Revealed\nEFFECT\nAgricultural Companies produce\n1 ¢ less during this round.\nYe ay',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-10-4',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-4.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'ELECTIONS IN @\nEX-SOVIET COUNTRIES Hips)\n1990s ss\nTRIGGER L |\nWhen Revealed\n—\nEFFECT\nWhenever a player Proposes a Bill\nduring this round, they may call for\nan Immediate Vote without\nspending ©).',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-4.jpg',
			position: {
				x: 10,
				y: 4,
			},
		},
		parsed: {
			numbers: [1990],
			resources: ['influence'],
			keywords: [
				'elections',
				'ex-soviet',
				'countries',
				'hips',
				'trigger',
				'when',
				'revealed',
				'effect',
				'whenever',
				'player',
				'proposes',
				'bill',
				'during',
				'this',
				'round',
				'they',
				'may',
				'call',
			],
		},
		kind: 'historical-event',
		name: 'ELECTIONS IN',
		content:
			'ELECTIONS IN @\nEX-SOVIET COUNTRIES Hips)\n1990s ss\nTRIGGER L |\nWhen Revealed\n—\nEFFECT\nWhenever a player Proposes a Bill\nduring this round, they may call for\nan Immediate Vote without\nspending ©).',
		effects: [
			{
				type: 'raw',
				text: 'ELECTIONS IN @\nEX-SOVIET COUNTRIES Hips)\n1990s ss\nTRIGGER L |\nWhen Revealed\n—\nEFFECT\nWhenever a player Proposes a Bill\nduring this round, they may call for\nan Immediate Vote without\nspending ©).',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-1-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'EU EMISSIONS @\nTRADING SYSTEM vine\nSince 2005 ta\nREQUIREMENT TRIGGER ; |\nmB ¢ tec: |\n3A/3B | FREE ACTION\nzi a\nEFFECT\n& ri : Pay 10¥ to the State for each\nof your operational Luxury\nCompanies.',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-1-5.jpg',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [2005, 3, 10],
			money: [10],
			policies: ['3A', '3B'],
			resources: ['luxury', 'money'],
			keywords: [
				'emissions',
				'trading',
				'system',
				'vine',
				'since',
				'requirement',
				'trigger',
				'tec',
				'free',
				'action',
				'effect',
				'pay',
				'the',
				'state',
				'for',
				'each',
				'your',
				'operational',
			],
		},
		kind: 'historical-event',
		name: 'EU EMISSIONS',
		content:
			'EU EMISSIONS @\nTRADING SYSTEM vine\nSince 2005 ta\nREQUIREMENT TRIGGER ; |\nmB ¢ tec: |\n3A/3B | FREE ACTION\nzi a\nEFFECT\n& ri : Pay 10¥ to the State for each\nof your operational Luxury\nCompanies.',
		effects: [
			{
				type: 'raw',
				text: 'EU EMISSIONS @\nTRADING SYSTEM vine\nSince 2005 ta\nREQUIREMENT TRIGGER ; |\nmB ¢ tec: |\n3A/3B | FREE ACTION\nzi a\nEFFECT\n& ri : Pay 10¥ to the State for each\nof your operational Luxury\nCompanies.',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-2-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			"US FINANCIAL CRISIS @\n2007 - 2008\nREQUIREMENT TRIGGER\nThere are at least 2 When |\nLoans among all players. Revealed\nEFFECT\n2> 3>\né : Get 10¥ from the State.\n& rig Get 10¥ from the State. Then,\ndiscard an operational Company.\n(4: The State may pay to prevent\nw _ this - see below.)\n@g: Get -1 in any 2 classes. You may\nprevent the Companies chosen\nby «© and/or 4h from being\ndiscarded by paying half of their\ncost (rounded down). For each\nCompany you prevent from |\nbeing discarded, get *1 to its |\nowner's class.",
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-2-5.jpg',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [2007, 2008, 2, 3, 10, 4, -1, 1],
			money: [10],
			resources: ['money'],
			keywords: [
				'financial',
				'crisis',
				'requirement',
				'trigger',
				'there',
				'are',
				'least',
				'when',
				'loans',
				'among',
				'all',
				'players',
				'revealed',
				'effect',
				'get',
				'from',
				'the',
				'state',
			],
		},
		kind: 'historical-event',
		name: 'US FINANCIAL CRISIS',
		content:
			"US FINANCIAL CRISIS @\n2007 - 2008\nREQUIREMENT TRIGGER\nThere are at least 2 When |\nLoans among all players. Revealed\nEFFECT\n2> 3>\né : Get 10¥ from the State.\n& rig Get 10¥ from the State. Then,\ndiscard an operational Company.\n(4: The State may pay to prevent\nw _ this - see below.)\n@g: Get -1 in any 2 classes. You may\nprevent the Companies chosen\nby «© and/or 4h from being\ndiscarded by paying half of their\ncost (rounded down). For each\nCompany you prevent from |\nbeing discarded, get *1 to its |\nowner's class.",
		effects: [
			{
				type: 'raw',
				text: "US FINANCIAL CRISIS @\n2007 - 2008\nREQUIREMENT TRIGGER\nThere are at least 2 When |\nLoans among all players. Revealed\nEFFECT\n2> 3>\né : Get 10¥ from the State.\n& rig Get 10¥ from the State. Then,\ndiscard an operational Company.\n(4: The State may pay to prevent\nw _ this - see below.)\n@g: Get -1 in any 2 classes. You may\nprevent the Companies chosen\nby «© and/or 4h from being\ndiscarded by paying half of their\ncost (rounded down). For each\nCompany you prevent from |\nbeing discarded, get *1 to its |\nowner's class.",
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-3-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'US-CHINESE TRADE WAR @\nSince 2018 | |\nTRIGGER |\n|\nWhen Revealed\nEFFECT\nRemove a random Business Deal\nfrom the board.\n& BR: Set your selling price for 0\nto its highest value.\nYou may not Adjust Prices for 0\nduring this round.',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-3-5.jpg',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [2018, 0],
			keywords: [
				'us-chinese',
				'trade',
				'war',
				'since',
				'trigger',
				'when',
				'revealed',
				'effect',
				'remove',
				'random',
				'business',
				'deal',
				'from',
				'the',
				'board',
				'set',
				'your',
				'selling',
			],
		},
		kind: 'historical-event',
		name: 'US-CHINESE TRADE WAR',
		content:
			'US-CHINESE TRADE WAR @\nSince 2018 | |\nTRIGGER |\n|\nWhen Revealed\nEFFECT\nRemove a random Business Deal\nfrom the board.\n& BR: Set your selling price for 0\nto its highest value.\nYou may not Adjust Prices for 0\nduring this round.',
		effects: [
			{
				type: 'raw',
				text: 'US-CHINESE TRADE WAR @\nSince 2018 | |\nTRIGGER |\n|\nWhen Revealed\nEFFECT\nRemove a random Business Deal\nfrom the board.\n& BR: Set your selling price for 0\nto its highest value.\nYou may not Adjust Prices for 0\nduring this round.',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-4-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			"EUROPEAN DEBT CRISIS @\n2009 - 2010s Wry)\nREQUIREMENT TRIGGER =|\nThere are ' ™ ,\nat least 2 Loans When Revealed\namong all\nplayers.\nEFFECT\n& Be: Discard an operational\nCompany.\nGe Get -1 to all classes.",
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-4-5.jpg',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [2009, 2010, 2, -1],
			resources: ['money'],
			keywords: [
				'european',
				'debt',
				'crisis',
				'wry',
				'requirement',
				'trigger',
				'there',
				'are',
				'least',
				'loans',
				'when',
				'revealed',
				'among',
				'all',
				'players',
				'effect',
				'discard',
				'operational',
			],
		},
		kind: 'historical-event',
		name: 'EUROPEAN DEBT CRISIS',
		content:
			"EUROPEAN DEBT CRISIS @\n2009 - 2010s Wry)\nREQUIREMENT TRIGGER =|\nThere are ' ™ ,\nat least 2 Loans When Revealed\namong all\nplayers.\nEFFECT\n& Be: Discard an operational\nCompany.\nGe Get -1 to all classes.",
		effects: [
			{
				type: 'raw',
				text: "EUROPEAN DEBT CRISIS @\n2009 - 2010s Wry)\nREQUIREMENT TRIGGER =|\nThere are ' ™ ,\nat least 2 Loans When Revealed\namong all\nplayers.\nEFFECT\n& Be: Discard an operational\nCompany.\nGe Get -1 to all classes.",
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-5-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'MAASTRICHT TREATY @\n1992 |\nTRIGGER\n& & ri ee: : |\nFREE ACTION\nEFFECT\nPerform a single election to change\nboth Policies 6 and 7 to:\nIf the Bills pass or both Policies\nare already in those sections:\n@B:cetioe os: Get 25¥\n& : Get 2 Personal ©.\nPlayers do not gain any ww\nfor winning this election.',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-5-5.jpg',
			position: {
				x: 5,
				y: 5,
			},
		},
		parsed: {
			numbers: [1992, 6, 7, 25, 2],
			money: [25],
			resources: ['money'],
			keywords: [
				'maastricht',
				'treaty',
				'trigger',
				'free',
				'action',
				'effect',
				'perform',
				'single',
				'election',
				'change',
				'both',
				'policies',
				'and',
				'the',
				'bills',
				'pass',
				'are',
				'already',
			],
		},
		kind: 'historical-event',
		name: 'MAASTRICHT TREATY',
		content:
			'MAASTRICHT TREATY @\n1992 |\nTRIGGER\n& & ri ee: : |\nFREE ACTION\nEFFECT\nPerform a single election to change\nboth Policies 6 and 7 to:\nIf the Bills pass or both Policies\nare already in those sections:\n@B:cetioe os: Get 25¥\n& : Get 2 Personal ©.\nPlayers do not gain any ww\nfor winning this election.',
		effects: [
			{
				type: 'raw',
				text: 'MAASTRICHT TREATY @\n1992 |\nTRIGGER\n& & ri ee: : |\nFREE ACTION\nEFFECT\nPerform a single election to change\nboth Policies 6 and 7 to:\nIf the Bills pass or both Policies\nare already in those sections:\n@B:cetioe os: Get 25¥\n& : Get 2 Personal ©.\nPlayers do not gain any ww\nfor winning this election.',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-6-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'DISSOLUTION OF THE a\nSOVIET UNION I]\n1991\nREQUIREMENT TRIGGER |\nThe State has 50¥ or less. & & >\nOR a\nThere are at least ri es:\n3 Socialist Policies BASIC\n(Policies 1-5 in section A). ACTION\nEFFECT\n& Oe: Return all unemployed\nWorkers to the Supply.\n& : You may buy a Public Company\nat half its cost.',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-6-5.jpg',
			position: {
				x: 6,
				y: 5,
			},
		},
		parsed: {
			numbers: [1991, 50, 3, 1, -5],
			money: [50],
			resources: ['money'],
			keywords: [
				'dissolution',
				'the',
				'soviet',
				'union',
				'requirement',
				'trigger',
				'state',
				'has',
				'less',
				'there',
				'are',
				'least',
				'socialist',
				'policies',
				'basic',
				'section',
				'action',
				'effect',
			],
		},
		kind: 'historical-event',
		name: 'DISSOLUTION OF THE a',
		content:
			'SOVIET UNION I]\n1991\nREQUIREMENT TRIGGER |\nThe State has 50¥ or less. & & >\nOR a\nThere are at least ri es:\n3 Socialist Policies BASIC\n(Policies 1-5 in section A). ACTION\nEFFECT\n& Oe: Return all unemployed\nWorkers to the Supply.\n& : You may buy a Public Company\nat half its cost.',
		effects: [
			{
				type: 'raw',
				text: 'SOVIET UNION I]\n1991\nREQUIREMENT TRIGGER |\nThe State has 50¥ or less. & & >\nOR a\nThere are at least ri es:\n3 Socialist Policies BASIC\n(Policies 1-5 in section A). ACTION\nEFFECT\n& Oe: Return all unemployed\nWorkers to the Supply.\n& : You may buy a Public Company\nat half its cost.',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-7-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'RISE OF THE MIDDLE a\nCLASS IN ASIA |}\nSince 2000s\nREQUIREMENT TRIGGER |\nThe Working Class\nand the Middle | & ah:\nClass have atleast || FREE ACTION\n5 Prosperity each. |\nEFFECT\n& Be: Whenever you Use Healthcare,\nEducation, or Luxury during\nthis turn, gain $Y.',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-7-5.jpg',
			position: {
				x: 7,
				y: 5,
			},
		},
		parsed: {
			numbers: [2000, 5],
			resources: ['luxury', 'healthcare', 'education', 'money'],
			keywords: [
				'rise',
				'the',
				'middle',
				'class',
				'asia',
				'since',
				'requirement',
				'trigger',
				'working',
				'and',
				'have',
				'atleast',
				'free',
				'action',
				'prosperity',
				'each',
				'effect',
				'whenever',
			],
		},
		kind: 'historical-event',
		name: 'RISE OF THE MIDDLE a',
		content:
			'CLASS IN ASIA |}\nSince 2000s\nREQUIREMENT TRIGGER |\nThe Working Class\nand the Middle | & ah:\nClass have atleast || FREE ACTION\n5 Prosperity each. |\nEFFECT\n& Be: Whenever you Use Healthcare,\nEducation, or Luxury during\nthis turn, gain $Y.',
		effects: [
			{
				type: 'raw',
				text: 'CLASS IN ASIA |}\nSince 2000s\nREQUIREMENT TRIGGER |\nThe Working Class\nand the Middle | & ah:\nClass have atleast || FREE ACTION\n5 Prosperity each. |\nEFFECT\n& Be: Whenever you Use Healthcare,\nEducation, or Luxury during\nthis turn, gain $Y.',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-8-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'_| FIRST PHASE OF @\nYELLOW VEST PROTESTS |),\n2018 - 2020 H|\nsX\\*\nREQUIREMENT TRIGGER |\name y 6 és:\n3A/3B | FREEACTION |',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-8-5.jpg',
			position: {
				x: 8,
				y: 5,
			},
		},
		parsed: {
			numbers: [2018, 2020, 6, 3],
			policies: ['3A', '3B'],
			keywords: ['first', 'phase', 'yellow', 'vest', 'protests', 'requirement', 'trigger', 'ame', 'freeaction'],
		},
		kind: 'historical-event',
		name: 'FIRST PHASE OF',
		content:
			'_| FIRST PHASE OF @\nYELLOW VEST PROTESTS |),\n2018 - 2020 H|\nsX\\*\nREQUIREMENT TRIGGER |\name y 6 és:\n3A/3B | FREEACTION |',
		effects: [
			{
				type: 'raw',
				text: '_| FIRST PHASE OF @\nYELLOW VEST PROTESTS |),\n2018 - 2020 H|\nsX\\*\nREQUIREMENT TRIGGER |\name y 6 és:\n3A/3B | FREEACTION |',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-9-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			'G *)\nBISMARCK WELFARE STATE |\n1880s\na a\nss Cd Il\nBoa eeeereeN S| ||| h/ i) | | i I)\nCialis) . d ¥ :\nEFFECT\nStarting Policies:\nlic] 26 | 3B} 4a] 5a] 6B | 78 |\n& : Remove 2 & :Get2@.\nVoting cubes w\nfrom thebag. 7: Get &-\nSe Y',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-9-5.jpg',
			position: {
				x: 9,
				y: 5,
			},
		},
		parsed: {
			numbers: [1880, 26, 3, 4, 5, 6, 78, 2, 7],
			policies: ['3B', '4A', '5A', '6B'],
			resources: ['influence', 'money'],
			keywords: [
				'bismarck',
				'welfare',
				'state',
				'boa',
				'eeeereen',
				'cialis',
				'effect',
				'starting',
				'policies',
				'lic',
				'remove',
				'voting',
				'cubes',
				'from',
				'thebag',
				'get',
			],
		},
		kind: 'historical-event',
		name: 'G *)',
		content:
			'BISMARCK WELFARE STATE |\n1880s\na a\nss Cd Il\nBoa eeeereeN S| ||| h/ i) | | i I)\nCialis) . d ¥ :\nEFFECT\nStarting Policies:\nlic] 26 | 3B} 4a] 5a] 6B | 78 |\n& : Remove 2 & :Get2@.\nVoting cubes w\nfrom thebag. 7: Get &-\nSe Y',
		effects: [
			{
				type: 'raw',
				text: 'BISMARCK WELFARE STATE |\n1880s\na a\nss Cd Il\nBoa eeeereeN S| ||| h/ i) | | i I)\nCialis) . d ¥ :\nEFFECT\nStarting Policies:\nlic] 26 | 3B} 4a] 5a] 6B | 78 |\n& : Remove 2 & :Get2@.\nVoting cubes w\nfrom thebag. 7: Get &-\nSe Y',
			},
		],
	},
	{
		id: 'historical-event-expansion-cards-grid-50-items-10-5-historical-event-expansion-deck-190-pos-10-5',
		frontImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-5.jpg',
		backImage:
			'fixtures/assets/decks-sorted/historical-event-expansion-cards/back__historical-event-expansion-deck-190.jpg',
		rawText:
			',\nAMERICAN REVOLUTION\n1775 - 1783 |\nx Cm) al\nee J Le Se j aheens\n. oa %, iv Ju\nRe i ¢/ i\nEFFECT\nStarting Policies:\nLic | 2B | 3B | 4B sc} 6a] 78 |\n&:Get3@. @:ce1®@.\n&,: Add 4 Voting .{~:Get A.\n©" cubes to the a o |\nbag.\nKes 4',
		source: {
			deck: 'historical-event-expansion-cards',
			file: 'grid_50-items_10-5__historical-event-expansion-deck-190__pos-10-5.jpg',
			position: {
				x: 10,
				y: 5,
			},
		},
		parsed: {
			numbers: [1775, 1783, 2, 3, 4, 6, 78, 1],
			policies: ['2B', '3B', '4B', '6A'],
			resources: ['influence'],
			keywords: [
				'american',
				'revolution',
				'aheens',
				'effect',
				'starting',
				'policies',
				'lic',
				'add',
				'voting',
				'get',
				'cubes',
				'the',
				'bag',
				'kes',
			],
		},
		kind: 'historical-event',
		name: 'AMERICAN REVOLUTION',
		content:
			',\nAMERICAN REVOLUTION\n1775 - 1783 |\nx Cm) al\nee J Le Se j aheens\n. oa %, iv Ju\nRe i ¢/ i\nEFFECT\nStarting Policies:\nLic | 2B | 3B | 4B sc} 6a] 78 |\n&:Get3@. @:ce1®@.\n&,: Add 4 Voting .{~:Get A.\n©" cubes to the a o |\nbag.\nKes 4',
		effects: [
			{
				type: 'raw',
				text: ',\nAMERICAN REVOLUTION\n1775 - 1783 |\nx Cm) al\nee J Le Se j aheens\n. oa %, iv Ju\nRe i ¢/ i\nEFFECT\nStarting Policies:\nLic | 2B | 3B | 4B sc} 6a] 78 |\n&:Get3@. @:ce1®@.\n&,: Add 4 Voting .{~:Get A.\n©" cubes to the a o |\nbag.\nKes 4',
			},
		],
	},
] satisfies HistoricalEventExpansionCardsCard[];

export default historicalEventExpansionCards;
