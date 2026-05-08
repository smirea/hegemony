import type { ParsedActionCard } from '../types';

interface StateActionExpansionCardsCard extends ParsedActionCard {}

const stateActionExpansionCards = [
	{
		id: 'state-action-expansion-cards-grid-5-items-5-2-state-action-expansion-deck-204-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'(= ‘N\nY ; L==]5 oo\n: et ‘\nwt 9°. 3 =a\na\na (am (od eS aa\na! = A\nPROTECT THE STATUS QUO\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\n‘ee aa',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 9, 3, 1],
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
		role: 'state',
		category: 'expansion',
		name: 'State Action Expansion',
		content:
			'(= ‘N\nY ; L==]5 oo\n: et ‘\nwt 9°. 3 =a\na\na (am (od eS aa\na! = A\nPROTECT THE STATUS QUO\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\n‘ee aa',
		stateEffects: [],
	},
	{
		id: 'state-action-expansion-cards-grid-5-items-5-2-state-action-expansion-deck-204-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'< fe\ny~ Bu We\nLa * A\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nShe <4',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 4],
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
		role: 'state',
		category: 'expansion',
		name: 'State Action Expansion',
		content:
			'< fe\ny~ Bu We\nLa * A\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nShe <4',
		stateEffects: [],
	},
	{
		id: 'state-action-expansion-cards-grid-5-items-5-2-state-action-expansion-deck-204-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText: '| = cam w\nREVEAL POLITICAL SCANDAL\nTake 2 @® from another player.\nYk aa',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['cam', 'reveal', 'political', 'scandal', 'take', 'from', 'another', 'player'],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'cam w',
		content: '| = cam w\nREVEAL POLITICAL SCANDAL\nTake 2 @® from another player.\nYk aa',
		stateEffects: [],
	},
	{
		id: 'state-action-expansion-cards-grid-5-items-5-2-state-action-expansion-deck-204-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'= ae Y ni —a\n= = — : ‘ i \\ ead\n«=\nMOMENTUM FOR CHANGE\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nVil aa',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [1],
			resources: ['influence'],
			keywords: [
				'ead',
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
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'ae Y ni —a',
		content:
			'= ae Y ni —a\n= = — : ‘ i \\ ead\n«=\nMOMENTUM FOR CHANGE\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nVil aa',
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
		id: 'state-action-expansion-cards-grid-5-items-5-2-state-action-expansion-deck-204-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'- re\n{ i ——+—\na mia \\ |\ni |\n) a\ney 5 e ee a. | = lh\nOe f aa e | S&S\nCOVID-19 VACCINATION\nPROGRAM\nBuy @& from the Foreign Market\nfor 5¥ each, up to your current capacity.\nThen Provide @ to a class, equal to its\nPopulation. For every 3% you provide,\nget @ to that class.\n-\no 6\nthe a',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, -19, 3, 6],
			money: [5],
			resources: ['money'],
			keywords: [
				'mia',
				'covid-',
				'vaccination',
				'program',
				'buy',
				'from',
				'the',
				'foreign',
				'market',
				'for',
				'each',
				'your',
				'current',
				'capacity',
				'then',
				'provide',
				'class',
				'equal',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'State Action Expansion',
		content:
			'- re\n{ i ——+—\na mia \\ |\ni |\n) a\ney 5 e ee a. | = lh\nOe f aa e | S&S\nCOVID-19 VACCINATION\nPROGRAM\nBuy @& from the Foreign Market\nfor 5¥ each, up to your current capacity.\nThen Provide @ to a class, equal to its\nPopulation. For every 3% you provide,\nget @ to that class.\n-\no 6\nthe a',
		stateEffects: [],
	},
] satisfies StateActionExpansionCardsCard[];

export default stateActionExpansionCards;
