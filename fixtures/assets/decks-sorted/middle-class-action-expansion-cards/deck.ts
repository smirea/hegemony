import type { ParsedActionCard } from '../types';

interface MiddleClassActionExpansionCardsCard extends ParsedActionCard {}

const middleClassActionExpansionCards = [
	{
		id: 'middle-class-action-expansion-change-of-government-agenda-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'i e\n' +
			'sf Si $\n' +
			"' ry 4 .\n" +
			'a . a\n' +
			'«——\n' +
			'CHANGE OF\n' +
			'GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'BT a',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 3],
			resources: ['money'],
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
				'bt',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'CHANGE OF GOVERNMENT AGENDA',
		content:
			'CHANGE OF GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'BT a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'middle-class-action-expansion-protect-the-status-quo-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'(= = »\n' +
			'om 32\n' +
			'- 0 - A444 }\n' +
			'Ee ie\n' +
			'~< — a ea a a\n' +
			'‘s. 0 5 ab Or et\n' +
			'PROTECT THE STATUS QUO\n' +
			'Choose a Policy. For the rest\n' +
			'of this round, no Bills may be\n' +
			'proposed for that Policy. (Place\n' +
			'one of your Bill markers in its\n' +
			'current section as a reminder.)\n' +
			'Then, get 1®.\n' +
			'he a',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 1,
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
				'he',
			],
		},
		kind: 'action',
		role: 'middleClass',
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
			'he a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'middle-class-action-expansion-momentum-for-change-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'= \\\n' +
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'We <a',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
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
				'we',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'MOMENTUM FOR CHANGE',
		content:
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'We <a',
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
		id: 'middle-class-action-expansion-covid-19-stimulus-package-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/middle-class-action-expansion-cards/back__middle-class-action-expansion-deck-203.jpg',
		rawText:
			'SS =. x 7 |\n' +
			'im \\ ) =\n' +
			'= a) —s |\n' +
			'" COVID-19 .\n' +
			'STIMULUS PACKAGE\n' +
			'Get 2¥ from the State for each\n' +
			'employed Worker you have in Public\n' +
			'and Capitalist Class Companies and\n' +
			'4¥ for each Company you own.\n' +
			'4 5%\n' +
			'is Se',
		source: {
			deck: 'middle-class-action-expansion-cards',
			file: 'grid_5-items_5-2__middle-class-action-expansion-deck-203__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, -19, 2, 4, 5],
			money: [2, 4],
			resources: ['money'],
			keywords: [
				'covid19',
				'stimulus',
				'package',
				'get',
				'the',
				'state',
				'for',
				'each',
				'employed',
				'worker',
				'you',
				'have',
				'in',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
				'company',
				'own',
				'is',
				'se',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'COVID-19 STIMULUS PACKAGE',
		content:
			'COVID-19 STIMULUS PACKAGE\n' +
			'Get 2¥ from the State for each\n' +
			'employed Worker you have in Public\n' +
			'and Capitalist Class Companies and\n' +
			'4¥ for each Company you own.\n' +
			'4 5%\n' +
			'is Se',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 2,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'middle-class-action-expansion-reveal-political-scandal-1',
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
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 2],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'another', 'player', 'he', 'cu'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: 'REVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\nhe Cu',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
] satisfies MiddleClassActionExpansionCardsCard[];

export default middleClassActionExpansionCards;
