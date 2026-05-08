import type { ParsedActionCard } from '../types';

interface MiddleClassActionExpansionCardsCard extends ParsedActionCard {}

const middleClassActionExpansionCards = [
	{
		id: 'middle-class-action-expansion-cards-grid-5-items-5-2-middle-class-action-expansion-deck-203-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			"i e\nsf Si $\n' ry 4 .\na . a\n«——\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nBT a",
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 3],
			resources: ['money'],
			keywords: [
				'change',
				'government',
				'agenda',
				'there',
				'are',
				'less',
				'proposed',
				'bills',
				'discard',
				'bill',
				'another',
				'player',
				'then',
				'you',
				'may',
				'both',
				'propose',
				'with',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'i e',
		content:
			"sf Si $\n' ry 4 .\na . a\n«——\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nBT a",
		stateEffects: [],
	},
	{
		id: 'middle-class-action-expansion-cards-grid-5-items-5-2-middle-class-action-expansion-deck-203-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'(= = »\nom 32\n- 0 - A444 }\nEe ie\n~< — a ea a a\n‘s. 0 5 ab Or et\nPROTECT THE STATUS QUO\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nhe a',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [32, 0, 444, 5, 1],
			keywords: [
				'protect',
				'the',
				'status',
				'quo',
				'choose',
				'policy',
				'for',
				'rest',
				'this',
				'round',
				'bills',
				'may',
				'proposed',
				'that',
				'place',
				'one',
				'your',
				'bill',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'om 32',
		content:
			'(= = »\nom 32\n- 0 - A444 }\nEe ie\n~< — a ea a a\n‘s. 0 5 ab Or et\nPROTECT THE STATUS QUO\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nhe a',
		stateEffects: [],
	},
	{
		id: 'middle-class-action-expansion-cards-grid-5-items-5-2-middle-class-action-expansion-deck-203-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'= \\\nMOMENTUM FOR CHANGE\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nWe <a',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [1],
			resources: ['influence'],
			keywords: [
				'momentum',
				'for',
				'change',
				'get',
				'each',
				'bill',
				'marker',
				'yours',
				'the',
				'politics',
				'table',
				'then',
				'propose',
				'you',
				'may',
				'not',
				'call',
				'immediate',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'MOMENTUM FOR CHANGE',
		content:
			'= \\\nMOMENTUM FOR CHANGE\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nWe <a',
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
		id: 'middle-class-action-expansion-cards-grid-5-items-5-2-middle-class-action-expansion-deck-203-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'SS =. x 7 |\nim \\ ) =\n= a) —s |\n" COVID-19 .\nSTIMULUS PACKAGE\nGet 2¥ from the State for each\nemployed Worker you have in Public\nand Capitalist Class Companies and\n4¥ for each Company you own.\n4 5%\nis Se',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [7, -19, 2, 4, 5],
			money: [2, 4],
			resources: ['money'],
			keywords: [
				'covid-',
				'stimulus',
				'package',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'employed',
				'worker',
				'you',
				'have',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'SS =. x 7',
		content:
			'SS =. x 7 |\nim \\ ) =\n= a) —s |\n" COVID-19 .\nSTIMULUS PACKAGE\nGet 2¥ from the State for each\nemployed Worker you have in Public\nand Capitalist Class Companies and\n4¥ for each Company you own.\n4 5%\nis Se',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 2,
				source: 'state',
				target: 'self',
			},
		],
	},
	{
		id: 'middle-class-action-expansion-cards-grid-5-items-5-2-middle-class-action-expansion-deck-203-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-5-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText: 'bee See go\n— 4, ila\nWh_cay\nREVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\nhe Cu',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 2],
			resources: ['influence'],
			keywords: ['bee', 'see', 'ila', 'reveal', 'political', 'scandal', 'take', 'from', 'another', 'player'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'bee See go',
		content: '— 4, ila\nWh_cay\nREVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\nhe Cu',
		stateEffects: [],
	},
] satisfies MiddleClassActionExpansionCardsCard[];

export default middleClassActionExpansionCards;
