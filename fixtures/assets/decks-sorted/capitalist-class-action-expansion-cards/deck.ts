import type { ParsedActionCard } from '../types';

interface CapitalistClassActionExpansionCardsCard extends ParsedActionCard {}

const capitalistClassActionExpansionCards = [
	{
		id: 'capitalist-class-action-expansion-cards-grid-5-items-5-2-capitalist-class-action-expansion-deck-205-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-1-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'ie le Ny\n. ,\npoe = 5 eg rete\nRe ns pyc\n= 3 = a SS.\na a ==, = ee\n2 =a 1 2 ~~ a. ~\nJ —_ .\n¢ PROTECT THE STATUS QUO °-\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nak a',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 3, 2, 1],
			keywords: [
				'poe',
				'rete',
				'pyc',
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
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'ie le Ny',
		content:
			'. ,\npoe = 5 eg rete\nRe ns pyc\n= 3 = a SS.\na a ==, = ee\n2 =a 1 2 ~~ a. ~\nJ —_ .\n¢ PROTECT THE STATUS QUO °-\nChoose a Policy. For the rest\nof this round, no Bills may be\nproposed for that Policy. (Place\none of your Bill markers in its\ncurrent section as a reminder.)\nThen, get 1®.\nak a',
		stateEffects: [],
	},
	{
		id: 'capitalist-class-action-expansion-cards-grid-5-items-5-2-capitalist-class-action-expansion-deck-205-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-2-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'A ae eo\neh es = =\nf 4 |\nJi BD 2\nf 5 7 a fiay SL eee r\n: . a ea =\na 4, Ns NOT j=. =\nPU. ae oe\n" COVID-19 VACCINE -\nR&D FUNDING\nGet 15¥ from the State\nfor each operational Healthcare\nCompany you own.\nLP er',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 2, 5, 7, -19, 15],
			money: [15],
			resources: ['healthcare', 'money'],
			keywords: [
				'fiay',
				'eee',
				'not',
				'covid-',
				'vaccine',
				'funding',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'operational',
				'healthcare',
				'company',
				'you',
				'own',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'A ae eo',
		content:
			'eh es = =\nf 4 |\nJi BD 2\nf 5 7 a fiay SL eee r\n: . a ea =\na 4, Ns NOT j=. =\nPU. ae oe\n" COVID-19 VACCINE -\nR&D FUNDING\nGet 15¥ from the State\nfor each operational Healthcare\nCompany you own.\nLP er',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: 15,
				source: 'state',
				target: 'self',
			},
		],
	},
	{
		id: 'capitalist-class-action-expansion-cards-grid-5-items-5-2-capitalist-class-action-expansion-deck-205-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-3-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			't fe\nie,\nT ——e\n=e =a a\n- CHANGE OF "\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nWe iy',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [3],
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
		role: 'capitalist',
		category: 'expansion',
		name: 't fe',
		content:
			'ie,\nT ——e\n=e =a a\n- CHANGE OF "\nGOVERNMENT AGENDA\nIf there are 3 or less\nproposed Bills, discard a Bill\nproposed by another player.\nThen, you may both Propose\nanother Bill, with you going first.\nWe iy',
		stateEffects: [],
	},
	{
		id: 'capitalist-class-action-expansion-cards-grid-5-items-5-2-capitalist-class-action-expansion-deck-205-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-4-1.jpg',
		backImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-expansion-cards/back__capitalist-class-action-expansion-deck-205.jpg',
		rawText:
			'—— = OB 0\nee vp fa gay\n. — ¥ hy =X i\nz-\\\n¢ MOMENTUM FOR CHANGE °\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nSL <a',
		source: {
			deck: 'capitalist-class-action-expansion-cards',
			file: 'grid_5-items_5-2__capitalist-class-action-expansion-deck-205__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [0, 1],
			resources: ['influence', 'money'],
			keywords: [
				'gay',
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
		role: 'capitalist',
		category: 'expansion',
		name: 'OB 0',
		content:
			'—— = OB 0\nee vp fa gay\n. — ¥ hy =X i\nz-\\\n¢ MOMENTUM FOR CHANGE °\nGet 1® for each Bill marker\nof yours on the Politics Table.\nThen, Propose a Bill.\nYou may not call for an\nImmediate Vote on this Bill.\nSL <a',
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
		id: 'capitalist-class-action-expansion-cards-grid-5-items-5-2-capitalist-class-action-expansion-deck-205-pos-5-1',
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
		},
		parsed: {
			numbers: [2, 1],
			resources: ['influence'],
			keywords: ['reveal', 'political', 'scandal', 'take', 'from', 'another', 'player'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'expansion',
		name: 'REVEAL POLITICAL SCANDAL',
		content: '° REVEAL POLITICAL SCANDAL\nTake 2 @ from another player.\na1 aa',
		stateEffects: [],
	},
] satisfies CapitalistClassActionExpansionCardsCard[];

export default capitalistClassActionExpansionCards;
