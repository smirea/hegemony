import type { ParsedActionCard } from '../types';

interface WorkingClassActionExpansionCardsCard extends ParsedActionCard {}

const workingClassActionExpansionCards = [
	{
		id: 'working-class-action-expansion-cards-grid-5-items-5-2-working-class-action-expansion-deck-202-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'+e eee,\nae aa /\ni : |\n* RISING COVID-19 CASES °\nGet & from the State, up to half\nof your Population (rounded up),\nwithout paying its cost. You may\nthen buy @ from any number\nof sources, up to your z\nPopulation from each. Qo\nAe ea',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [-19],
			resources: ['money'],
			keywords: [
				'eee',
				'rising',
				'covid-',
				'cases',
				'get',
				'from',
				'the',
				'state',
				'half',
				'your',
				'population',
				'rounded',
				'without',
				'paying',
				'its',
				'cost',
				'you',
				'may',
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'e eee',
		content:
			'+e eee,\nae aa /\ni : |\n* RISING COVID-19 CASES °\nGet & from the State, up to half\nof your Population (rounded up),\nwithout paying its cost. You may\nthen buy @ from any number\nof sources, up to your z\nPopulation from each. Qo\nAe ea',
		stateEffects: [],
	},
	{
		id: 'working-class-action-expansion-cards-grid-5-items-5-2-working-class-action-expansion-deck-202-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'——e ST ou te c abi\n=\n¢ MOMENTUM FOR CHANGE °\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nte a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [1],
			resources: ['influence'],
			keywords: [
				'abi',
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
		role: 'workingClass',
		category: 'expansion',
		name: 'e ST ou te c abi',
		content:
			'——e ST ou te c abi\n=\n¢ MOMENTUM FOR CHANGE °\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nte a',
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
		id: 'working-class-action-expansion-cards-grid-5-items-5-2-working-class-action-expansion-deck-202-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'( == B\ni i Bt tr Bee, :\nReeser\nhy Iitige eee\na om i Oe\nI =< = a ee\n=m ¢— Pa =\nat a _ A\n¢ PROTECT THE STATUS QUO °+\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nzL a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [1],
			keywords: [
				'bee',
				'reeser',
				'iitige',
				'eee',
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
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'Working Class Action Expansion',
		content:
			'( == B\ni i Bt tr Bee, :\nReeser\nhy Iitige eee\na om i Oe\nI =< = a ee\n=m ¢— Pa =\nat a _ A\n¢ PROTECT THE STATUS QUO °+\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nzL a',
		stateEffects: [],
	},
	{
		id: 'working-class-action-expansion-cards-grid-5-items-5-2-working-class-action-expansion-deck-202-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/grid_5-items_5-2__working-class-action-expansion-deck-202__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/working-class-action-expansion-cards/back__working-class-action-expansion-deck-202.jpg',
		rawText:
			'i bs\nsf el $\n, g 4 °\nLa .: MM\nTee\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\n4b <a',
		source: {
			deck: 'working-class-action-expansion-cards',
			file: 'grid_5-items_5-2__working-class-action-expansion-deck-202__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 3],
			policies: ['4B'],
			resources: ['money'],
			keywords: [
				'tee',
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
			],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'i bs',
		content:
			'sf el $\n, g 4 °\nLa .: MM\nTee\nCHANGE OF\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\n4b <a',
		requirements: [{ type: 'policy', mode: 'any', policies: ['4B'] }],
		stateEffects: [],
	},
	{
		id: 'working-class-action-expansion-cards-grid-5-items-5-2-working-class-action-expansion-deck-202-pos-5-1',
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
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'from', 'another', 'player'],
		},
		kind: 'action',
		role: 'workingClass',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: '¢ REVEAL POLITICAL SCANDAL °\nTake 2 @ from another player.\naL <a',
		stateEffects: [],
	},
] satisfies WorkingClassActionExpansionCardsCard[];

export default workingClassActionExpansionCards;
