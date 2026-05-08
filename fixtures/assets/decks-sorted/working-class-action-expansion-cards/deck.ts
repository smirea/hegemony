import type { ParsedActionCard } from '../types';

interface WorkingClassActionExpansionCardsCard extends ParsedActionCard {}

const workingClassActionExpansionCards = [
	{
		id: 'working-class-action-expansion-rising-covid-19-cases-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'+e eee,\n' +
			'ae aa /\n' +
			'i : |\n' +
			'* RISING COVID-19 CASES °\n' +
			'Get & from the State, up to half\n' +
			'of your Population (rounded up),\n' +
			'without paying its cost. You may\n' +
			'then buy @ from any number\n' +
			'of sources, up to your z\n' +
			'Population from each. Qo\n' +
			'Ae ea',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [-19],
			resources: ['money'],
			keywords: [
				'rising',
				'covid19',
				'cases',
				'get',
				'the',
				'state',
				'up',
				'to',
				'half',
				'of',
				'population',
				'rounded',
				'without',
				'paying',
				'its',
				'cost',
				'you',
				'may',
				'buy',
				'any',
				'number',
				'sources',
				'each',
				'qo',
				'ae',
				'ea',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'RISING COVID-19 CASES',
		content:
			'RISING COVID-19 CASES\n' +
			'Get & from the State, up to half\n' +
			'of your Population (rounded up),\n' +
			'without paying its cost. You may\n' +
			'then buy @ from any number\n' +
			'of sources, up to your z\n' +
			'Population from each. Qo\n' +
			'Ae ea',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-expansion-momentum-for-change-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'——e ST ou te c abi\n' +
			'=\n' +
			'¢ MOMENTUM FOR CHANGE °\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'te a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
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
				'te',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'MOMENTUM FOR CHANGE',
		content:
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'te a',
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
		id: 'working-class-action-expansion-protect-the-status-quo-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'( == B\n' +
			'i i Bt tr Bee, :\n' +
			'Reeser\n' +
			'hy Iitige eee\n' +
			'a om i Oe\n' +
			'I =< = a ee\n' +
			'=m ¢— Pa =\n' +
			'at a _ A\n' +
			'¢ PROTECT THE STATUS QUO °+\n' +
			'Choose a Policy. For the rest\n' +
			'of this round, no Bills may be\n' +
			'proposed for that Policy. (Place\n' +
			'one of your Bill markers in its\n' +
			'current section as a reminder.)\n' +
			'Then, get 1®.\n' +
			'zL a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1],
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
				'zl',
			],
		},
		kind: 'action',
		role: 'workingClass',
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
			'zL a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-expansion-change-of-government-agenda-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'i bs\n' +
			'sf el $\n' +
			', g 4 °\n' +
			'La .: MM\n' +
			'Tee\n' +
			'CHANGE OF\n' +
			'GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'4b <a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 3],
			policies: ['4B'],
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
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'CHANGE OF GOVERNMENT AGENDA',
		content:
			'CHANGE OF GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'4b <a',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['4B'],
			},
		],
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'working-class-action-expansion-reveal-political-scandal-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-5-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText: '¢ REVEAL POLITICAL SCANDAL °\nTake 2 @ from another player.\naL <a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'another', 'player', 'al'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: 'REVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\naL <a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
] satisfies WorkingClassActionExpansionCardsCard[];

export default workingClassActionExpansionCards;
