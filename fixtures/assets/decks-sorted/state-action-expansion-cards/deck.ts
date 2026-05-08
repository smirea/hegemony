import type { ParsedActionCard } from '../types';

interface StateActionExpansionCardsCard extends ParsedActionCard {}

const stateActionExpansionCards = [
	{
		id: 'state-action-expansion-protect-the-status-quo-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'(= ‘N\n' +
			'Y ; L==]5 oo\n' +
			': et ‘\n' +
			'wt 9°. 3 =a\n' +
			'a\n' +
			'a (am (od eS aa\n' +
			'a! = A\n' +
			'PROTECT THE STATUS QUO\n' +
			'Choose a Policy. For the rest\n' +
			'of this round, no Bills may be\n' +
			'proposed for that Policy. (Place\n' +
			'one of your Bill markers in its\n' +
			'current section as a reminder.)\n' +
			'Then, get 1®.\n' +
			'‘ee aa',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
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
				'of',
				'round',
				'no',
				'bills',
				'may',
				'be',
				'proposed',
				'place',
				'one',
				'bill',
				'markers',
				'in',
				'its',
				'current',
				'section',
				'as',
				'reminder',
				'get',
				'ee',
				'aa',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'PROTECT THE STATUS QUO',
		content:
			'PROTECT THE STATUS QUO\n' +
			'Choose a Policy. For the rest\n' +
			'of this round, no Bills may be\n' +
			'proposed for that Policy. (Place\n' +
			'one of your Bill markers in its\n' +
			'current section as a reminder.)\n' +
			'Then, get 1®.\n' +
			'‘ee aa',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'state-action-expansion-change-of-government-agenda-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'< fe\n' +
			'y~ Bu We\n' +
			'La * A\n' +
			'CHANGE OF\n' +
			'GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'She <4',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 4],
			keywords: [
				'change',
				'of',
				'government',
				'agenda',
				'if',
				'there',
				'are',
				'or',
				'less',
				'proposed',
				'bills',
				'discard',
				'bill',
				'by',
				'another',
				'player',
				'you',
				'may',
				'both',
				'propose',
				'going',
				'first',
				'she',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'CHANGE OF GOVERNMENT AGENDA',
		content:
			'CHANGE OF GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'She <4',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'state-action-expansion-reveal-political-scandal-1',
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
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'another', 'player', 'yk', 'aa'],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: 'REVEAL POLITICAL SCANDAL\nTake 2 @® from another player.\nYk aa',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'state-action-expansion-momentum-for-change-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'= ae Y ni —a\n' +
			'= = — : ‘ i \\ ead\n' +
			'«=\n' +
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'Vil aa',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
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
				'of',
				'yours',
				'on',
				'the',
				'politics',
				'table',
				'propose',
				'you',
				'may',
				'not',
				'call',
				'an',
				'immediate',
				'vote',
				'vil',
				'aa',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'MOMENTUM FOR CHANGE',
		content:
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'Vil aa',
		stateEffects: [
			{
				type: 'vote',
				action: 'add-cubes',
				target: 'bag',
				amount: {
					type: 'per',
					amount: 1,
					per: 'proposed-bill',
					target: 'self',
				},
			},
			{
				type: 'policy',
				action: 'propose',
				immediateVoteAllowed: false,
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'state-action-expansion-covid-19-vaccination-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/state-action-expansion-cards/grid_5-items_5-2__state-action-expansion-deck-204__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/state-action-expansion-cards/back__state-action-expansion-deck-204.png',
		rawText:
			'- re\n' +
			'{ i ——+—\n' +
			'a mia \\ |\n' +
			'i |\n' +
			') a\n' +
			'ey 5 e ee a. | = lh\n' +
			'Oe f aa e | S&S\n' +
			'COVID-19 VACCINATION\n' +
			'PROGRAM\n' +
			'Buy @& from the Foreign Market\n' +
			'for 5¥ each, up to your current capacity.\n' +
			'Then Provide @ to a class, equal to its\n' +
			'Population. For every 3% you provide,\n' +
			'get @ to that class.\n' +
			'-\n' +
			'o 6\n' +
			'the a',
		source: {
			deck: 'state-action-expansion-cards',
			file: 'grid_5-items_5-2__state-action-expansion-deck-204__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, -19, 3, 6],
			money: [5],
			resources: ['money'],
			keywords: [
				'covid19',
				'vaccination',
				'program',
				'buy',
				'the',
				'foreign',
				'market',
				'for',
				'each',
				'up',
				'to',
				'current',
				'capacity',
				'provide',
				'class',
				'equal',
				'its',
				'population',
				'every',
				'you',
				'get',
			],
		},
		kind: 'action',
		role: 'state',
		category: 'expansion',
		name: 'COVID-19 VACCINATION PROGRAM',
		content:
			'COVID-19 VACCINATION PROGRAM\n' +
			'Buy @& from the Foreign Market\n' +
			'for 5¥ each, up to your current capacity.\n' +
			'Then Provide @ to a class, equal to its\n' +
			'Population. For every 3% you provide,\n' +
			'get @ to that class.\n' +
			'-\n' +
			'o 6\n' +
			'the a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
] satisfies StateActionExpansionCardsCard[];

export default stateActionExpansionCards;
