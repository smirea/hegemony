import type { ParsedAutomaCard } from '../types';

interface AutomaAgendaCardsCard extends ParsedAutomaCard {}

const automaAgendaCards = [
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: '“\nLEVIATHAN\nPerform the task of at least\n10 Events.\nQo x\nAnytime\n4',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [10, 4],
			keywords: ['leviathan', 'perform', 'the', 'task', 'least', 'events', 'anytime'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'LEVIATHAN',
		content: '“\nLEVIATHAN\nPerform the task of at least\n10 Events.\nQo x\nAnytime\n4',
		values: {
			numbers: [10, 4],
			keywords: ['leviathan', 'perform', 'the', 'task', 'least', 'events', 'anytime'],
		},
		effects: [
			{
				type: 'raw',
				text: '“\nLEVIATHAN\nPerform the task of at least\n10 Events.\nQo x\nAnytime\n4',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“7\nEXPERT BUDGETER\nFinish the game without\ntaking a Loan.\nIf you ever take a Loan,\ndiscard this Agenda.\nGame End\na',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [7],
			resources: ['money'],
			keywords: [
				'expert',
				'budgeter',
				'finish',
				'the',
				'game',
				'without',
				'taking',
				'loan',
				'you',
				'ever',
				'take',
				'discard',
				'this',
				'agenda',
				'end',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'EXPERT BUDGETER',
		content:
			'“7\nEXPERT BUDGETER\nFinish the game without\ntaking a Loan.\nIf you ever take a Loan,\ndiscard this Agenda.\nGame End\na',
		values: {
			numbers: [7],
			resources: ['money'],
			keywords: [
				'expert',
				'budgeter',
				'finish',
				'the',
				'game',
				'without',
				'taking',
				'loan',
				'you',
				'ever',
				'take',
				'discard',
				'this',
				'agenda',
				'end',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“7\nEXPERT BUDGETER\nFinish the game without\ntaking a Loan.\nIf you ever take a Loan,\ndiscard this Agenda.\nGame End\na',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“a\nACCORDING TO PLAN\na\nsas _.\na\nat] 4+\nHave at least 4 Policies\nmatch your current Political\nAgenda card.\no -#£\nScoring Phase\nail',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [4],
			resources: ['influence'],
			keywords: [
				'according',
				'plan',
				'sas',
				'have',
				'least',
				'policies',
				'match',
				'your',
				'current',
				'political',
				'agenda',
				'card',
				'scoring',
				'phase',
				'ail',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'“a\nACCORDING TO PLAN\na\nsas _.\na\nat] 4+\nHave at least 4 Policies\nmatch your current Political\nAgenda card.\no -#£\nScoring Phase\nail',
		values: {
			numbers: [4],
			resources: ['influence'],
			keywords: [
				'according',
				'plan',
				'sas',
				'have',
				'least',
				'policies',
				'match',
				'your',
				'current',
				'political',
				'agenda',
				'card',
				'scoring',
				'phase',
				'ail',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“a\nACCORDING TO PLAN\na\nsas _.\na\nat] 4+\nHave at least 4 Policies\nmatch your current Political\nAgenda card.\no -#£\nScoring Phase\nail',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'a,\nSTRONG WELFARE STATE\n150+ [ Q\nHave at least 150¥ and have\nPolicies 4 and 5 in section A.\n@ wh\nAnytime\n”',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [150, 4, 5],
			money: [150],
			resources: ['money'],
			keywords: ['strong', 'welfare', 'state', 'have', 'least', 'and', 'policies', 'section', 'anytime'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'a,\nSTRONG WELFARE STATE\n150+ [ Q\nHave at least 150¥ and have\nPolicies 4 and 5 in section A.\n@ wh\nAnytime\n”',
		values: {
			numbers: [150, 4, 5],
			money: [150],
			resources: ['money'],
			keywords: ['strong', 'welfare', 'state', 'have', 'least', 'and', 'policies', 'section', 'anytime'],
		},
		effects: [
			{
				type: 'raw',
				text: 'a,\nSTRONG WELFARE STATE\n150+ [ Q\nHave at least 150¥ and have\nPolicies 4 and 5 in section A.\n@ wh\nAnytime\n”',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“a\nSTATE-LED ECONOMY\nLele\nOPERATIONAL\nHave Policy 1 in section A\nand have at least 6 operational\nPublic Companies.\no -#£\nAnytime\nail',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 6],
			keywords: [
				'state-led',
				'economy',
				'lele',
				'operational',
				'have',
				'policy',
				'section',
				'and',
				'least',
				'public',
				'companies',
				'anytime',
				'ail',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'“a\nSTATE-LED ECONOMY\nLele\nOPERATIONAL\nHave Policy 1 in section A\nand have at least 6 operational\nPublic Companies.\no -#£\nAnytime\nail',
		values: {
			numbers: [1, 6],
			keywords: [
				'state-led',
				'economy',
				'lele',
				'operational',
				'have',
				'policy',
				'section',
				'and',
				'least',
				'public',
				'companies',
				'anytime',
				'ail',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“a\nSTATE-LED ECONOMY\nLele\nOPERATIONAL\nHave Policy 1 in section A\nand have at least 6 operational\nPublic Companies.\no -#£\nAnytime\nail',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-1-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'>\nENTREPRENEUR\n4\n-0? f\n8+ 8+ 8+ 8+\nHave at least 8 ¢, 8],\n8%, and 8 Si\nin your Storages.\noO x\nAnytime\noil',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 0, 8],
			keywords: ['entrepreneur', 'have', 'least', 'and', 'your', 'storages', 'anytime', 'oil'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'ENTREPRENEUR',
		content:
			'>\nENTREPRENEUR\n4\n-0? f\n8+ 8+ 8+ 8+\nHave at least 8 ¢, 8],\n8%, and 8 Si\nin your Storages.\noO x\nAnytime\noil',
		values: {
			numbers: [4, 0, 8],
			keywords: ['entrepreneur', 'have', 'least', 'and', 'your', 'storages', 'anytime', 'oil'],
		},
		effects: [
			{
				type: 'raw',
				text: '>\nENTREPRENEUR\n4\n-0? f\n8+ 8+ 8+ 8+\nHave at least 8 ¢, 8],\n8%, and 8 Si\nin your Storages.\noO x\nAnytime\noil',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-2-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“-\nSUCCESSFUL STARTUP\n@ iii\n3 ce\nOPERATIONAL\nHave at least 5 fully\noperational Companies\nby the end of the 3rd round.\no -#\nAnytime\n(before the\n4th round)\nwa',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 5, 4],
			keywords: [
				'successful',
				'startup',
				'iii',
				'operational',
				'have',
				'least',
				'fully',
				'companies',
				'the',
				'end',
				'round',
				'anytime',
				'before',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'SUCCESSFUL STARTUP',
		content:
			'“-\nSUCCESSFUL STARTUP\n@ iii\n3 ce\nOPERATIONAL\nHave at least 5 fully\noperational Companies\nby the end of the 3rd round.\no -#\nAnytime\n(before the\n4th round)\nwa',
		values: {
			numbers: [3, 5, 4],
			keywords: [
				'successful',
				'startup',
				'iii',
				'operational',
				'have',
				'least',
				'fully',
				'companies',
				'the',
				'end',
				'round',
				'anytime',
				'before',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“-\nSUCCESSFUL STARTUP\n@ iii\n3 ce\nOPERATIONAL\nHave at least 5 fully\noperational Companies\nby the end of the 3rd round.\no -#\nAnytime\n(before the\n4th round)\nwa',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-3-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'>\nGROWING MIDDLE CLASS\nia ata\n8 5+\nHave 8 fully operational\nCompanies and have Workers\nin at least 5 Public and/or\nCapitalist Class Companies.\n@ wh\nAnytime\nsil',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8, 5],
			keywords: [
				'growing',
				'middle',
				'class',
				'ata',
				'have',
				'fully',
				'operational',
				'companies',
				'and',
				'workers',
				'least',
				'public',
				'capitalist',
				'anytime',
				'sil',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'GROWING MIDDLE CLASS',
		content:
			'>\nGROWING MIDDLE CLASS\nia ata\n8 5+\nHave 8 fully operational\nCompanies and have Workers\nin at least 5 Public and/or\nCapitalist Class Companies.\n@ wh\nAnytime\nsil',
		values: {
			numbers: [8, 5],
			keywords: [
				'growing',
				'middle',
				'class',
				'ata',
				'have',
				'fully',
				'operational',
				'companies',
				'and',
				'workers',
				'least',
				'public',
				'capitalist',
				'anytime',
				'sil',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '>\nGROWING MIDDLE CLASS\nia ata\n8 5+\nHave 8 fully operational\nCompanies and have Workers\nin at least 5 Public and/or\nCapitalist Class Companies.\n@ wh\nAnytime\nsil',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-4-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: 'a.\nGOLDEN COMPROMISE\ni EE al\nHave Policies 1-5\nin section B.\noO x\nAnytime\ner',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [1, -5],
			keywords: ['golden', 'compromise', 'have', 'policies', 'section', 'anytime'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content: 'a.\nGOLDEN COMPROMISE\ni EE al\nHave Policies 1-5\nin section B.\noO x\nAnytime\ner',
		values: {
			numbers: [1, -5],
			keywords: ['golden', 'compromise', 'have', 'policies', 'section', 'anytime'],
		},
		effects: [
			{
				type: 'raw',
				text: 'a.\nGOLDEN COMPROMISE\ni EE al\nHave Policies 1-5\nin section B.\noO x\nAnytime\ner',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-5-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: '-\nWE WORK, WE THRIVE\nA\nWORKERS,\nHave no unemployed\nWorkers.\noO -£\nGame End\n=',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			keywords: ['work', 'thrive', 'workers', 'have', 'unemployed', 'game', 'end'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'WE WORK, WE THRIVE',
		content: '-\nWE WORK, WE THRIVE\nA\nWORKERS,\nHave no unemployed\nWorkers.\noO -£\nGame End\n=',
		values: {
			keywords: ['work', 'thrive', 'workers', 'have', 'unemployed', 'game', 'end'],
		},
		effects: [
			{
				type: 'raw',
				text: '-\nWE WORK, WE THRIVE\nA\nWORKERS,\nHave no unemployed\nWorkers.\noO -£\nGame End\n=',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-1-3',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-1-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: 'i.\nRALLY THE MASSES\nHave at least 6@®.\nQo wx\nAnytime\nii',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-1-3.jpg',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [6],
			keywords: ['rally', 'the', 'masses', 'have', 'least', 'anytime'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content: 'i.\nRALLY THE MASSES\nHave at least 6@®.\nQo wx\nAnytime\nii',
		values: {
			numbers: [6],
			keywords: ['rally', 'the', 'masses', 'have', 'least', 'anytime'],
		},
		effects: [
			{
				type: 'raw',
				text: 'i.\nRALLY THE MASSES\nHave at least 6@®.\nQo wx\nAnytime\nii',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-2-3',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-2-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: 've\nWORKERS, UNITE!\n* ae\nHave at least\n4 Trade Unions.\nQ wv\nAnytime\na',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-2-3.jpg',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [4],
			keywords: ['workers', 'unite', 'have', 'least', 'trade', 'unions', 'anytime'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content: 've\nWORKERS, UNITE!\n* ae\nHave at least\n4 Trade Unions.\nQ wv\nAnytime\na',
		values: {
			numbers: [4],
			keywords: ['workers', 'unite', 'have', 'least', 'trade', 'unions', 'anytime'],
		},
		effects: [
			{
				type: 'raw',
				text: 've\nWORKERS, UNITE!\n* ae\nHave at least\n4 Trade Unions.\nQ wv\nAnytime\na',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-3-3',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-3-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'>\nWORKING CLASS PUSH\n: 2\n1\nPass 3 Bills you have\nproposed during the same\nElections Phase.\n@ wt\nElections\nPhase\niil',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-3-3.jpg',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [2, 1, 3],
			keywords: [
				'working',
				'class',
				'push',
				'pass',
				'bills',
				'you',
				'have',
				'proposed',
				'during',
				'the',
				'same',
				'elections',
				'phase',
				'iil',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'WORKING CLASS PUSH',
		content:
			'>\nWORKING CLASS PUSH\n: 2\n1\nPass 3 Bills you have\nproposed during the same\nElections Phase.\n@ wt\nElections\nPhase\niil',
		values: {
			numbers: [2, 1, 3],
			keywords: [
				'working',
				'class',
				'push',
				'pass',
				'bills',
				'you',
				'have',
				'proposed',
				'during',
				'the',
				'same',
				'elections',
				'phase',
				'iil',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '>\nWORKING CLASS PUSH\n: 2\n1\nPass 3 Bills you have\nproposed during the same\nElections Phase.\n@ wt\nElections\nPhase\niil',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-4-3',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-4-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: 'a.\nSMALL LABOR FORCE\nig : Up to Z\nHave a Population\nof 7 or less.\nQo -£\nGame End\naa',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-4-3.jpg',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [7],
			keywords: ['small', 'labor', 'force', 'have', 'population', 'less', 'game', 'end'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content: 'a.\nSMALL LABOR FORCE\nig : Up to Z\nHave a Population\nof 7 or less.\nQo -£\nGame End\naa',
		values: {
			numbers: [7],
			keywords: ['small', 'labor', 'force', 'have', 'population', 'less', 'game', 'end'],
		},
		effects: [
			{
				type: 'raw',
				text: 'a.\nSMALL LABOR FORCE\nig : Up to Z\nHave a Population\nof 7 or less.\nQo -£\nGame End\naa',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-5-3',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-5-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“a\nTHE SURPLUS VALUE\nIS OURS!\nBAB : 240+\nGet at least 240¥\nin Wages in a single\nProduction Phase.\nOo x\nProduction\nPhase\nail',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-5-3.jpg',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [240],
			money: [240],
			resources: ['money'],
			keywords: [
				'the',
				'surplus',
				'value',
				'ours',
				'bab',
				'get',
				'least',
				'wages',
				'single',
				'production',
				'phase',
				'ail',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'“a\nTHE SURPLUS VALUE\nIS OURS!\nBAB : 240+\nGet at least 240¥\nin Wages in a single\nProduction Phase.\nOo x\nProduction\nPhase\nail',
		values: {
			numbers: [240],
			money: [240],
			resources: ['money'],
			keywords: [
				'the',
				'surplus',
				'value',
				'ours',
				'bab',
				'get',
				'least',
				'wages',
				'single',
				'production',
				'phase',
				'ail',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“a\nTHE SURPLUS VALUE\nIS OURS!\nBAB : 240+\nGet at least 240¥\nin Wages in a single\nProduction Phase.\nOo x\nProduction\nPhase\nail',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-1-4',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-1-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'>\nCORPORATE EMPIRE\nEE\n12\n11+ OPERATIONAL\nHave 12 Companies.\nAt least 11 of them\nmust be operational.\nAnytime\nail',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-1-4.jpg',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [12, 11],
			keywords: ['corporate', 'empire', 'operational', 'have', 'companies', 'least', 'them', 'must', 'anytime', 'ail'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'CORPORATE EMPIRE',
		content:
			'>\nCORPORATE EMPIRE\nEE\n12\n11+ OPERATIONAL\nHave 12 Companies.\nAt least 11 of them\nmust be operational.\nAnytime\nail',
		values: {
			numbers: [12, 11],
			keywords: ['corporate', 'empire', 'operational', 'have', 'companies', 'least', 'them', 'must', 'anytime', 'ail'],
		},
		effects: [
			{
				type: 'raw',
				text: '>\nCORPORATE EMPIRE\nEE\n12\n11+ OPERATIONAL\nHave 12 Companies.\nAt least 11 of them\nmust be operational.\nAnytime\nail',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-2-4',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-2-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“7\nTOWARD A NEOLIBERAL\nSTATE\n- Eq =\nok\nHave at least 3\nNeoliberal Policies\n(Policies 1 - 5 in section C).\no xg\nAnytime\n(after the\nIst round)\n-',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-2-4.jpg',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [7, 3, 1, 5],
			keywords: [
				'toward',
				'neoliberal',
				'state',
				'have',
				'least',
				'policies',
				'section',
				'anytime',
				'after',
				'the',
				'ist',
				'round',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'TOWARD A NEOLIBERAL',
		content:
			'“7\nTOWARD A NEOLIBERAL\nSTATE\n- Eq =\nok\nHave at least 3\nNeoliberal Policies\n(Policies 1 - 5 in section C).\no xg\nAnytime\n(after the\nIst round)\n-',
		values: {
			numbers: [7, 3, 1, 5],
			keywords: [
				'toward',
				'neoliberal',
				'state',
				'have',
				'least',
				'policies',
				'section',
				'anytime',
				'after',
				'the',
				'ist',
				'round',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“7\nTOWARD A NEOLIBERAL\nSTATE\n- Eq =\nok\nHave at least 3\nNeoliberal Policies\n(Policies 1 - 5 in section C).\no xg\nAnytime\n(after the\nIst round)\n-',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-3-4',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-3-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“s\nEXPORT TYCOON\nett : 240+\nGet at least 240¥ in\na single Sell to the Foreign\nMarket Action.\nQ wv\nAction Phase\n”',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-3-4.jpg',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [240],
			money: [240],
			resources: ['money'],
			keywords: [
				'export',
				'tycoon',
				'ett',
				'get',
				'least',
				'single',
				'sell',
				'the',
				'foreign',
				'market',
				'action',
				'phase',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'“s\nEXPORT TYCOON\nett : 240+\nGet at least 240¥ in\na single Sell to the Foreign\nMarket Action.\nQ wv\nAction Phase\n”',
		values: {
			numbers: [240],
			money: [240],
			resources: ['money'],
			keywords: [
				'export',
				'tycoon',
				'ett',
				'get',
				'least',
				'single',
				'sell',
				'the',
				'foreign',
				'market',
				'action',
				'phase',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“s\nEXPORT TYCOON\nett : 240+\nGet at least 240¥ in\na single Sell to the Foreign\nMarket Action.\nQ wv\nAction Phase\n”',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-4-4',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-4-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText:
			'“y\nDIVERSIFIED PORTFOLIO\n‘ives?\niffia Oa Gita la Gia\n2+ 2+ at: 2+ 2%\nHave at least 2 Companies\nfrom each industry.\nQO #\nGame End\naid',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-4-4.jpg',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [2],
			keywords: [
				'diversified',
				'portfolio',
				'ives',
				'iffia',
				'gita',
				'gia',
				'have',
				'least',
				'companies',
				'from',
				'each',
				'industry',
				'game',
				'end',
				'aid',
			],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'Automa Agendas',
		content:
			'“y\nDIVERSIFIED PORTFOLIO\n‘ives?\niffia Oa Gita la Gia\n2+ 2+ at: 2+ 2%\nHave at least 2 Companies\nfrom each industry.\nQO #\nGame End\naid',
		values: {
			numbers: [2],
			keywords: [
				'diversified',
				'portfolio',
				'ives',
				'iffia',
				'gita',
				'gia',
				'have',
				'least',
				'companies',
				'from',
				'each',
				'industry',
				'game',
				'end',
				'aid',
			],
		},
		effects: [
			{
				type: 'raw',
				text: '“y\nDIVERSIFIED PORTFOLIO\n‘ives?\niffia Oa Gita la Gia\n2+ 2+ at: 2+ 2%\nHave at least 2 Companies\nfrom each industry.\nQO #\nGame End\naid',
			},
		],
	},
	{
		id: 'automa-agenda-cards-grid-20-items-5-4-automa-agendas-deck-209-pos-5-4',
		frontImage:
			'fixtures/assets/decks-sorted/automa-agenda-cards/grid_20-items_5-4__automa-agendas-deck-209__pos-5-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-agenda-cards/back__automa-agendas-deck-209.jpg',
		rawText: '“"\nVENTURE CAPITALIST\nCAPITAL\nHave at least 320¥\nin your Capital.\nQ\nGame End\n”',
		source: {
			deck: 'automa-agenda-cards',
			file: 'grid_20-items_5-4__automa-agendas-deck-209__pos-5-4.jpg',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [320],
			money: [320],
			resources: ['money'],
			keywords: ['venture', 'capitalist', 'capital', 'have', 'least', 'your', 'game', 'end'],
		},
		kind: 'automa',
		deckType: 'agenda',
		name: 'VENTURE CAPITALIST',
		content: '“"\nVENTURE CAPITALIST\nCAPITAL\nHave at least 320¥\nin your Capital.\nQ\nGame End\n”',
		values: {
			numbers: [320],
			money: [320],
			resources: ['money'],
			keywords: ['venture', 'capitalist', 'capital', 'have', 'least', 'your', 'game', 'end'],
		},
		effects: [
			{
				type: 'raw',
				text: '“"\nVENTURE CAPITALIST\nCAPITAL\nHave at least 320¥\nin your Capital.\nQ\nGame End\n”',
			},
		],
	},
] satisfies AutomaAgendaCardsCard[];

export default automaAgendaCards;
