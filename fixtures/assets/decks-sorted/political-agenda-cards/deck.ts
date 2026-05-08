import type { ParsedPoliticalAgendaCard } from '../types';

interface PoliticalAgendaCardsCard extends ParsedPoliticalAgendaCard {}

const politicalAgendaCards = [
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: '. re\nPOLITICAL AGENDA\nfor each\n(se) matching\nPolicy\n4A during the\nScoring\n5c Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 5],
			policies: ['4A', '5C'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 1',
		policies: ['4A', '5C'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA\nfor each\n3A matching\nPolicy\n4B during the\nScoring\n5c Phase\n_ Zt',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 4, 5],
			policies: ['3A', '4B', '5C'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 2',
		policies: ['3A', '4B', '5C'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'f oy\nPOLITICAL AGENDA\nfor each\n3B matching\nPolicy\n4c during the\nScoring\n5A Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 4, 5],
			policies: ['3B', '4C', '5A'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 3',
		policies: ['3B', '4C', '5A'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA\nfor each\n3B matching\nPolicy\n4B during the\nScoring\n5A Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 4, 5],
			policies: ['3B', '4B', '5A'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 4',
		policies: ['3B', '4B', '5A'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'ee "2\nPOLITICAL AGENDA\nfor each\n3A matching\nPolicy\n4B during the\nScoring\n5A Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 3, 4, 5],
			policies: ['3A', '4B', '5A'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 5',
		policies: ['3A', '4B', '5A'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA |\nfor each |\n3A matching |\nPolicy )\n4c during the |\nScoring )\nSB Phase |\n4',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 4],
			policies: ['3A', '4C'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 6',
		policies: ['3A', '4C'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA\nfor each\n3c matching\nPolicy\n4c during the\nScoring\n5A Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 4, 5],
			policies: ['3C', '4C', '5A'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 7',
		policies: ['3C', '4C', '5A'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA\nfor each\nBe) matching\nPolicy\n4B during the\nScoring\n5c Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 5],
			policies: ['4B', '5C'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 8',
		policies: ['4B', '5C'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: '| POLITICAL AGENDA\n| 2B for each\n| 3B matching\n| Policy\n4A during the\n| Scoring\n| SB Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 3, 4],
			policies: ['2B', '3B', '4A'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 9',
		policies: ['2B', '3B', '4A'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
	{
		id: 'political-agenda-cards-grid-10-items-5-2-political-agendas-deck-140-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/political-agenda-cards/grid_10-items_5-2__political-agendas-deck-140__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/political-agenda-cards/back__political-agendas-deck-140.png',
		rawText: 'POLITICAL AGENDA\n2 for each |\n3B matching\nPolicy |\n4A during the\n| Scoring\n| 5B Phase',
		source: {
			deck: 'political-agenda-cards',
			file: 'grid_10-items_5-2__political-agendas-deck-140__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 3, 4, 5],
			policies: ['3B', '4A', '5B'],
			resources: ['influence'],
			keywords: ['political', 'agenda', 'for', 'each', 'matching', 'policy', 'during', 'the', 'scoring', 'phase'],
		},
		kind: 'political-agenda',
		name: 'Political Agenda 10',
		policies: ['3B', '4A', '5B'],
		scoring: 'Gain 1 victory point for each listed policy that is enacted during scoring.',
	},
] satisfies PoliticalAgendaCardsCard[];

export default politicalAgendaCards;
