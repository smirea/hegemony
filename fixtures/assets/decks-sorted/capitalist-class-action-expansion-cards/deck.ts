import type { ParsedActionCard } from '../types';

interface CapitalistClassActionExpansionCardsCard extends ParsedActionCard {}

const capitalistClassActionExpansionCards = [
	{
		id: 'capitalist-class-action-expansion-protect-the-status-quo-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'ie le Ny\n' +
			'. ,\n' +
			'poe = 5 eg rete\n' +
			'Re ns pyc\n' +
			'= 3 = a SS.\n' +
			'a a ==, = ee\n' +
			'2 =a 1 2 ~~ a. ~\n' +
			'J —_ .\n' +
			'¢ PROTECT THE STATUS QUO °-\n' +
			'Choose a Policy. For the rest\n' +
			'of this round, no Bills may be\n' +
			'proposed for that Policy. (Place\n' +
			'one of your Bill markers in its\n' +
			'current section as a reminder.)\n' +
			'Then, get 1®.\n' +
			'ak a',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 3, 2, 1],
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
				'ak',
			],
		},
		kind: 'action',
		role: 'capitalist',
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
			'ak a',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'capitalist-class-action-expansion-covid-19-vaccine-randd-funding-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'A ae eo\n' +
			'eh es = =\n' +
			'f 4 |\n' +
			'Ji BD 2\n' +
			'f 5 7 a fiay SL eee r\n' +
			': . a ea =\n' +
			'a 4, Ns NOT j=. =\n' +
			'PU. ae oe\n' +
			'" COVID-19 VACCINE -\n' +
			'R&D FUNDING\n' +
			'Get 15¥ from the State\n' +
			'for each operational Healthcare\n' +
			'Company you own.\n' +
			'LP er',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 2, 5, 7, -19, 15],
			money: [15],
			resources: ['healthcare', 'money'],
			keywords: [
				'covid19',
				'vaccine',
				'funding',
				'get',
				'the',
				'state',
				'for',
				'each',
				'operational',
				'healthcare',
				'company',
				'you',
				'own',
				'lp',
				'er',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'COVID-19 VACCINE - R&D FUNDING',
		content:
			'COVID-19 VACCINE - R&D FUNDING\nGet 15¥ from the State\nfor each operational Healthcare\nCompany you own.\nLP er',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'partial',
	},
	{
		id: 'capitalist-class-action-expansion-change-of-government-agenda-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			't fe\n' +
			'ie,\n' +
			'T ——e\n' +
			'=e =a a\n' +
			'- CHANGE OF "\n' +
			'GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'We iy',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3],
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
				'we',
				'iy',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'CHANGE OF GOVERNMENT AGENDA',
		content:
			'CHANGE OF GOVERNMENT AGENDA\n' +
			'If there are 3 or less\n' +
			'proposed Bills, discard a Bill\n' +
			'proposed by another player.\n' +
			'Then, you may both Propose\n' +
			'another Bill, with you going first.\n' +
			'We iy',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
	{
		id: 'capitalist-class-action-expansion-momentum-for-change-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'—— = OB 0\n' +
			'ee vp fa gay\n' +
			'. — ¥ hy =X i\n' +
			'z-\\\n' +
			'¢ MOMENTUM FOR CHANGE °\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'SL <a',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [0, 1],
			resources: ['influence', 'money'],
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
				'sl',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'MOMENTUM FOR CHANGE',
		content:
			'MOMENTUM FOR CHANGE\n' +
			'Get 1® for each Bill marker\n' +
			'of yours on the Politics Table.\n' +
			'Then, Propose a Bill.\n' +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.\n' +
			'SL <a',
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
		id: 'capitalist-class-action-expansion-reveal-political-scandal-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-5-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText: '° REVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\na1 aa',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 1],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'another', 'player', 'a1', 'aa'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: 'REVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\na1 aa',
		stateEffects: [],
		stateEffectsCoverage: 'unparsed',
	},
] satisfies CapitalistClassActionExpansionCardsCard[];

export default capitalistClassActionExpansionCards;
