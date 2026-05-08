import type { ParsedActionCard } from '../types';

interface CapitalistClassActionCardsCard extends ParsedActionCard {}

const capitalistClassActionCards = [
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: '« ~\n= Orr Fb 1\nHEALTH CRISIS\nSell up to 9\nto the State for 10% each.\n4a\nOv',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 9, 10, 4],
			policies: ['4A'],
			resources: ['healthcare'],
			keywords: ['orr', 'health', 'crisis', 'sell', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Orr Fb 1',
		content: '« ~\n= Orr Fb 1\nHEALTH CRISIS\nSell up to 9\nto the State for 10% each.\n4a\nOv',
		effects: [
			{
				type: 'raw',
				text: '« ~\n= Orr Fb 1\nHEALTH CRISIS\nSell up to 9\nto the State for 10% each.\n4a\nOv',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'S|. ee r\n\\ ia o\n< L -\n“~ g aa\nik. * IL}\nHIGHER EDUCATION PROGRAM\nSell up to 9\nto the State for 10¥ each.\nZz\n/3',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [9, 10, 3],
			money: [10],
			resources: ['education', 'money'],
			keywords: ['higher', 'education', 'program', 'sell', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'S|. ee r',
		content:
			'\\ ia o\n< L -\n“~ g aa\nik. * IL}\nHIGHER EDUCATION PROGRAM\nSell up to 9\nto the State for 10¥ each.\nZz\n/3',
		effects: [
			{
				type: 'raw',
				text: '\\ ia o\n< L -\n“~ g aa\nik. * IL}\nHIGHER EDUCATION PROGRAM\nSell up to 9\nto the State for 10¥ each.\nZz\n/3',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: '® ‘s\n‘ i] rhs: / 4\ni .\n. ;\nPUSH POLITICAL AGENDA\nPay 25¥ to Propose 2 Bills.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 25, 2],
			money: [25],
			resources: ['influence', 'money'],
			keywords: ['rhs', 'push', 'political', 'agenda', 'pay', 'propose', 'bills'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content: '® ‘s\n‘ i] rhs: / 4\ni .\n. ;\nPUSH POLITICAL AGENDA\nPay 25¥ to Propose 2 Bills.',
		effects: [
			{
				type: 'raw',
				text: '® ‘s\n‘ i] rhs: / 4\ni .\n. ;\nPUSH POLITICAL AGENDA\nPay 25¥ to Propose 2 Bills.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-4-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			", or a nt ie ae\noa xs O) ‘\nve s '\nL oy a f ; \\ \\\n| Ur Niet\n.A 1) Sl ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\n. 4",
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 10, 7, 4],
			money: [10],
			policies: ['7B', '7C'],
			resources: ['money'],
			keywords: [
				'niet',
				'foreign',
				'recruitment',
				'choose',
				'one',
				'your',
				'non-operational',
				'companies',
				'spend',
				'and',
				'assign',
				'matching',
				'workers',
				'from',
				'the',
				'supply',
				'that',
				'company',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'or a nt ie ae',
		content:
			", or a nt ie ae\noa xs O) ‘\nve s '\nL oy a f ; \\ \\\n| Ur Niet\n.A 1) Sl ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\n. 4",
		effects: [
			{
				type: 'raw',
				text: ", or a nt ie ae\noa xs O) ‘\nve s '\nL oy a f ; \\ \\\n| Ur Niet\n.A 1) Sl ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\n. 4",
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-5-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'me. y\ni | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 2],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'fae',
				'competitive',
				'wages',
				'set',
				'the',
				'one',
				'your',
				'companies',
				'then',
				'choose',
				'operational',
				'company',
				'same',
				'industry',
				'public',
				'sector',
				'with',
				'number',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'me. y',
		content:
			'i | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
		effects: [
			{
				type: 'raw',
				text: 'i | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-6-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			']\na - re\n| ea |\nmms”\nGLOBAL BRANDING\nSell to the Foreign Market.\nYou may also Sell up to 6[)\nfor 10¥ each.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [6, 10],
			money: [10],
			resources: ['money'],
			keywords: ['mms', 'global', 'branding', 'sell', 'the', 'foreign', 'market', 'you', 'may', 'also', 'for', 'each'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a - re',
		content:
			']\na - re\n| ea |\nmms”\nGLOBAL BRANDING\nSell to the Foreign Market.\nYou may also Sell up to 6[)\nfor 10¥ each.',
		effects: [
			{
				type: 'raw',
				text: ']\na - re\n| ea |\nmms”\nGLOBAL BRANDING\nSell to the Foreign Market.\nYou may also Sell up to 6[)\nfor 10¥ each.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-7-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'‘. | }\n| ui\n> § »\nqj e\nvis Ee i i F\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents’\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.\n4',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 4],
			resources: ['influence'],
			keywords: [
				'vis',
				'interest',
				'groups',
				'reveal',
				'voting',
				'cubes',
				'from',
				'the',
				'bag',
				'until',
				'you',
				'opponents',
				'replace',
				'them',
				'with',
				'your',
				'and',
				'return',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'‘. | }\n| ui\n> § »\nqj e\nvis Ee i i F\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents’\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.\n4',
		effects: [
			{
				type: 'raw',
				text: '‘. | }\n| ui\n> § »\nqj e\nvis Ee i i F\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents’\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.\n4',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-8-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'SS\n; ¢ Sars 2\n— _ _— “= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
		},
		parsed: {
			numbers: [2],
			keywords: ['sars', 'offshore', 'companies', 'move', 'half', 'your', 'revenue', 'capital', 'rounded', 'down'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'SS\n; ¢ Sars 2\n— _ _— “= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		effects: [
			{
				type: 'raw',
				text: 'SS\n; ¢ Sars 2\n— _ _— “= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'i ll\nAnna’\nae\n| aaa r\n7 Nae ‘ ’ 2 —*\n- - a‘ a\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [7, 2],
			keywords: [
				'anna',
				'aaa',
				'nae',
				'foreign',
				'market',
				'insight',
				'reveal',
				'the',
				'next',
				'export',
				'cards',
				'you',
				'may',
				'choose',
				'one',
				'replace',
				'current',
				'card',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'i ll',
		content:
			'Anna’\nae\n| aaa r\n7 Nae ‘ ’ 2 —*\n- - a‘ a\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
		effects: [
			{
				type: 'raw',
				text: 'Anna’\nae\n| aaa r\n7 Nae ‘ ’ 2 —*\n- - a‘ a\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'wey\n4 ‘\nee ‘ f\n/ > i =\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.\n,',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'wey',
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'workers',
				'one',
				'your',
				'non-operational',
				'companies',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'worker',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'wey',
		content:
			'4 ‘\nee ‘ f\n/ > i =\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.\n,',
		effects: [
			{
				type: 'raw',
				text: '4 ‘\nee ‘ f\n/ > i =\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.\n,',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a 7 : ) vy\nFOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [7],
			keywords: [
				'foreign',
				'partner',
				'make',
				'business',
				'deal',
				'you',
				'may',
				'then',
				'sell',
				'and',
				'the',
				'market',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a 7 : ) vy',
		content: 'FOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		effects: [
			{
				type: 'raw',
				text: 'FOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'\\\nwe a AN\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\n= 4',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 4],
			keywords: ['business', 'expansion', 'build', 'companies', 'add', 'equal', 'number', 'new', 'the', 'market'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'we a AN',
		content:
			'\\\nwe a AN\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\n= 4',
		effects: [
			{
				type: 'raw',
				text: '\\\nwe a AN\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\n= 4',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'@ lk ls\n’ ‘J -\n\\ ~) ay\nSa “a\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nBe (',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [10],
			money: [10],
			resources: ['money'],
			keywords: [
				'investment',
				'opportunities',
				'build',
				'company',
				'paying',
				'less',
				'search',
				'the',
				'deck',
				'for',
				'your',
				'choice',
				'and',
				'more',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'lk ls',
		content:
			'@ lk ls\n’ ‘J -\n\\ ~) ay\nSa “a\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nBe (',
		effects: [
			{
				type: 'raw',
				text: '@ lk ls\n’ ‘J -\n\\ ~) ay\nSa “a\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nBe (',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-6-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a) b> fz ¥2 é\n. : hy mt P y RuEY\net a 4 5\nas SS ; ee Ey Me Ne\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 4, 5, 6],
			resources: ['influence', 'money'],
			keywords: [
				'ruey',
				'fake',
				'news',
				'draw',
				'voting',
				'cubes',
				'from',
				'the',
				'bag',
				'remove',
				'them',
				'and',
				'return',
				'rest',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a) b> fz ¥2',
		content:
			'a) b> fz ¥2 é\n. : hy mt P y RuEY\net a 4 5\nas SS ; ee Ey Me Ne\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
		effects: [
			{
				type: 'raw',
				text: 'a) b> fz ¥2 é\n. : hy mt P y RuEY\net a 4 5\nas SS ; ee Ey Me Ne\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-7-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			", =\n) PS\n- ff i 4. ,\n) 1 \\o% in :\n¥, Pan * 44 i\n— J\nGLOBAL FOOD CRISIS\nSell to the Foreign Market.\nYou may also Sell up to 4 ¢\n| for 15¥ each.\n' ;",
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 1, 44, 15],
			money: [15],
			resources: ['food', 'money'],
			keywords: [
				'pan',
				'global',
				'food',
				'crisis',
				'sell',
				'the',
				'foreign',
				'market',
				'you',
				'may',
				'also',
				'for',
				'each',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			", =\n) PS\n- ff i 4. ,\n) 1 \\o% in :\n¥, Pan * 44 i\n— J\nGLOBAL FOOD CRISIS\nSell to the Foreign Market.\nYou may also Sell up to 4 ¢\n| for 15¥ each.\n' ;",
		effects: [
			{
				type: 'raw',
				text: ", =\n) PS\n- ff i 4. ,\n) 1 \\o% in :\n¥, Pan * 44 i\n— J\nGLOBAL FOOD CRISIS\nSell to the Foreign Market.\nYou may also Sell up to 4 ¢\n| for 15¥ each.\n' ;",
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-8-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a 78 X\nhet . 2 . eB\nINDUSTRIALIZATION\nBuild a Luxury or Agricultural\nCompany paying half its cost.\nThe other half is paid by the State.\nsea\na]',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
		},
		parsed: {
			numbers: [78, 2],
			resources: ['luxury', 'money'],
			keywords: [
				'het',
				'industrialization',
				'build',
				'luxury',
				'agricultural',
				'company',
				'paying',
				'half',
				'its',
				'cost',
				'the',
				'other',
				'paid',
				'state',
				'sea',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a 78 X',
		content:
			'het . 2 . eB\nINDUSTRIALIZATION\nBuild a Luxury or Agricultural\nCompany paying half its cost.\nThe other half is paid by the State.\nsea\na]',
		effects: [
			{
				type: 'raw',
				text: 'het . 2 . eB\nINDUSTRIALIZATION\nBuild a Luxury or Agricultural\nCompany paying half its cost.\nThe other half is paid by the State.\nsea\na]',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-1-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'I\n.\nec 4\n4 - Le |\nBID RIGGING\nSell up to 6 [)\nto the State for 10¥ each.\nThen, get 1 @\n4x\nOO\nBS',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [4, 6, 10, 1],
			money: [10],
			resources: ['money'],
			keywords: ['bid', 'rigging', 'sell', 'the', 'state', 'for', 'each', 'then', 'get'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'I\n.\nec 4\n4 - Le |\nBID RIGGING\nSell up to 6 [)\nto the State for 10¥ each.\nThen, get 1 @\n4x\nOO\nBS',
		effects: [
			{
				type: 'raw',
				text: 'I\n.\nec 4\n4 - Le |\nBID RIGGING\nSell up to 6 [)\nto the State for 10¥ each.\nThen, get 1 @\n4x\nOO\nBS',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-2-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: '- —— = ——\nat\nBUY PRIVATE ISLAND\nPay 50¥ from your Capital\nto the State.\nGain 7.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [50, 7],
			money: [50],
			resources: ['money'],
			keywords: ['buy', 'private', 'island', 'pay', 'from', 'your', 'capital', 'the', 'state', 'gain'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content: '- —— = ——\nat\nBUY PRIVATE ISLAND\nPay 50¥ from your Capital\nto the State.\nGain 7.',
		effects: [
			{
				type: 'raw',
				text: '- —— = ——\nat\nBUY PRIVATE ISLAND\nPay 50¥ from your Capital\nto the State.\nGain 7.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-3-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSD a',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['exit', 'strategy', 'sell', 'one', 'your', 'companies', 'without', 'for', 'twice', 'its', 'cost'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'EXIT STRATEGY',
		content: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSD a',
		effects: [
			{
				type: 'raw',
				text: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSD a',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-4-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'’ a 7\n> ‘ ;\n\\ : ~,\nBUSINESS GRANTS\nGet 5¥ from the State\nfor each Company you own.\nREQUIREMENT ‘ ai.\nSith',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [7, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'business',
				'grants',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'company',
				'you',
				'own',
				'requirement',
				'sith',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a 7',
		content:
			'’ a 7\n> ‘ ;\n\\ : ~,\nBUSINESS GRANTS\nGet 5¥ from the State\nfor each Company you own.\nREQUIREMENT ‘ ai.\nSith',
		effects: [
			{
				type: 'raw',
				text: '’ a 7\n> ‘ ;\n\\ : ~,\nBUSINESS GRANTS\nGet 5¥ from the State\nfor each Company you own.\nREQUIREMENT ‘ ai.\nSith',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-5-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: 'y - CL . 7\nTAP INTO NEW MARKETS\nPropose a Bill for Foreign Trade.\nAdd 2 Voting cubes to the bag.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [7, 2],
			resources: ['influence'],
			keywords: [
				'tap',
				'into',
				'new',
				'markets',
				'propose',
				'bill',
				'for',
				'foreign',
				'trade',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'y - CL . 7',
		content: 'TAP INTO NEW MARKETS\nPropose a Bill for Foreign Trade.\nAdd 2 Voting cubes to the bag.',
		effects: [
			{
				type: 'raw',
				text: 'TAP INTO NEW MARKETS\nPropose a Bill for Foreign Trade.\nAdd 2 Voting cubes to the bag.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-6-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			"ee Ms ay\nTe! eemee |\n2 aS eee oe\nan t . &\n» ——\n>2 » yt Pa . Ne >\nRADICAL REFORMS\nPropose a Bill. You may place\nyour marker on any section (even\nif it's not next to the current one).\nYou may not call for an\nImmediate Vote on this Bill.",
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'eemee',
				'eee',
				'radical',
				'reforms',
				'propose',
				'bill',
				'you',
				'may',
				'place',
				'your',
				'marker',
				'any',
				'section',
				'even',
				'not',
				'next',
				'the',
				'current',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'ee Ms ay',
		content:
			"Te! eemee |\n2 aS eee oe\nan t . &\n» ——\n>2 » yt Pa . Ne >\nRADICAL REFORMS\nPropose a Bill. You may place\nyour marker on any section (even\nif it's not next to the current one).\nYou may not call for an\nImmediate Vote on this Bill.",
		effects: [
			{
				type: 'raw',
				text: "Te! eemee |\n2 aS eee oe\nan t . &\n» ——\n>2 » yt Pa . Ne >\nRADICAL REFORMS\nPropose a Bill. You may place\nyour marker on any section (even\nif it's not next to the current one).\nYou may not call for an\nImmediate Vote on this Bill.",
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-7-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'Nt\naL ih *\n& AEN HR) my i 3 We. £\nS* ap 3s | a\n=] z\nSe "l\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-3.png',
			position: {
				x: 7,
				y: 3,
			},
		},
		parsed: {
			numbers: [3],
			resources: ['money'],
			keywords: [
				'aen',
				'extra',
				'shift',
				'choose',
				'one',
				'your',
				'non-automated',
				'companies',
				'pay',
				'the',
				'workers',
				'wages',
				'and',
				'perform',
				'production',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'Nt\naL ih *\n& AEN HR) my i 3 We. £\nS* ap 3s | a\n=] z\nSe "l\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		effects: [
			{
				type: 'raw',
				text: 'Nt\naL ih *\n& AEN HR) my i 3 We. £\nS* ap 3s | a\n=] z\nSe "l\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-8-3',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a e 7\nTED\nmec Xone\n,\nTAXED ENOUGH ALREADY!\nPropose a Bill for Taxation.\nAdd 2 Voting cubes to the bag.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-3.png',
			position: {
				x: 8,
				y: 3,
			},
		},
		parsed: {
			numbers: [7, 2],
			resources: ['influence', 'money'],
			keywords: [
				'ted',
				'mec',
				'xone',
				'taxed',
				'enough',
				'already',
				'propose',
				'bill',
				'for',
				'taxation',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'a e 7',
		content: 'TED\nmec Xone\n,\nTAXED ENOUGH ALREADY!\nPropose a Bill for Taxation.\nAdd 2 Voting cubes to the bag.',
		effects: [
			{
				type: 'raw',
				text: 'TED\nmec Xone\n,\nTAXED ENOUGH ALREADY!\nPropose a Bill for Taxation.\nAdd 2 Voting cubes to the bag.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-1-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			"— . Raye\nthe u 04 oe” r\n= , “a ‘ =\n‘ . TIM 0 4 sie ad\n'!> ae Ss Ww. ?-2°e A\n~ \\\n> aN\nENDORSE\nPOLITICAL CAMPAIGN\nSpend 15¥ and add\n6 Voting cubes to the bag.",
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 0, -2, 15, 6],
			money: [15],
			resources: ['influence', 'money'],
			keywords: [
				'raye',
				'the',
				'tim',
				'sie',
				'endorse',
				'political',
				'campaign',
				'spend',
				'and',
				'add',
				'voting',
				'cubes',
				'bag',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Raye',
		content:
			"— . Raye\nthe u 04 oe” r\n= , “a ‘ =\n‘ . TIM 0 4 sie ad\n'!> ae Ss Ww. ?-2°e A\n~ \\\n> aN\nENDORSE\nPOLITICAL CAMPAIGN\nSpend 15¥ and add\n6 Voting cubes to the bag.",
		effects: [
			{
				type: 'raw',
				text: "— . Raye\nthe u 04 oe” r\n= , “a ‘ =\n‘ . TIM 0 4 sie ad\n'!> ae Ss Ww. ?-2°e A\n~ \\\n> aN\nENDORSE\nPOLITICAL CAMPAIGN\nSpend 15¥ and add\n6 Voting cubes to the bag.",
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-2-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'get'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		effects: [
			{
				type: 'raw',
				text: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-3-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'. = \\, Z . : o> | 1%\ne ; Q , . .\n{ a\n== Fai\n| oY\n. . =|\nTRADE PROTECTIONISM\nLOBBY\nAdd 2 Voting cubes to the bag\nfor each Company you own in the\nAgricultural industry. If isin\neffect, also count the Companies\nin the Luxury industry.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [1, 2],
			resources: ['luxury', 'influence'],
			keywords: [
				'fai',
				'trade',
				'protectionism',
				'lobby',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
				'for',
				'each',
				'company',
				'you',
				'own',
				'agricultural',
				'industry',
				'isin',
				'effect',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Z . : o> | 1',
		content:
			'. = \\, Z . : o> | 1%\ne ; Q , . .\n{ a\n== Fai\n| oY\n. . =|\nTRADE PROTECTIONISM\nLOBBY\nAdd 2 Voting cubes to the bag\nfor each Company you own in the\nAgricultural industry. If isin\neffect, also count the Companies\nin the Luxury industry.',
		effects: [
			{
				type: 'raw',
				text: '. = \\, Z . : o> | 1%\ne ; Q , . .\n{ a\n== Fai\n| oY\n. . =|\nTRADE PROTECTIONISM\nLOBBY\nAdd 2 Voting cubes to the bag\nfor each Company you own in the\nAgricultural industry. If isin\neffect, also count the Companies\nin the Luxury industry.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-4-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'3 eae }\n>\ny i ——t m\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may\nthen call for an Immediate Vote\nwithout spending @.\nIf you do, use those 5 cubes\ninstead of drawing new ones.\nIf not, return them to the bag.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [3, 5],
			resources: ['influence'],
			keywords: [
				'eae',
				'public',
				'opinion',
				'polling',
				'propose',
				'bill',
				'and',
				'reveal',
				'voting',
				'cubes',
				'from',
				'the',
				'bag',
				'you',
				'may',
				'then',
				'call',
				'for',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'eae',
		content:
			'3 eae }\n>\ny i ——t m\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may\nthen call for an Immediate Vote\nwithout spending @.\nIf you do, use those 5 cubes\ninstead of drawing new ones.\nIf not, return them to the bag.',
		effects: [
			{
				type: 'raw',
				text: '3 eae }\n>\ny i ——t m\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may\nthen call for an Immediate Vote\nwithout spending @.\nIf you do, use those 5 cubes\ninstead of drawing new ones.\nIf not, return them to the bag.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-5-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'=\nme. y\ni | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [3, 2],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'fae',
				'competitive',
				'wages',
				'set',
				'the',
				'one',
				'your',
				'companies',
				'then',
				'choose',
				'operational',
				'company',
				'same',
				'industry',
				'public',
				'sector',
				'with',
				'number',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'me. y',
		content:
			'=\nme. y\ni | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
		effects: [
			{
				type: 'raw',
				text: '=\nme. y\ni | a Fae . ly\nCOMPETITIVE WAGES\nSet the Wages in one of your\nCompanies to L3. Then, choose\nan operational Company of the same\nindustry in the Public Sector with\nthe same number of Workers. Assign\nthose Workers to your Company.\n2B/2C',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-6-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSg',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['exit', 'strategy', 'sell', 'one', 'your', 'companies', 'without', 'for', 'twice', 'its', 'cost'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'EXIT STRATEGY',
		content: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSg',
		effects: [
			{
				type: 'raw',
				text: '=\nEXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSg',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-7-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'get'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		effects: [
			{
				type: 'raw',
				text: 'i ~~\n} oe\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-8-4',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: 'i “ay\n} Me\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-4.png',
			position: {
				x: 8,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'get'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'i “ay',
		content: '} Me\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		effects: [
			{
				type: 'raw',
				text: '} Me\nTECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-1-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a\nJ oa = -) ‘\ni s \'\nweg a f \\ is\n=" 7 - )) =~\n.A 1) Se ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\nig',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [7, 1, 10],
			money: [10],
			policies: ['7B', '7C'],
			resources: ['money'],
			keywords: [
				'weg',
				'foreign',
				'recruitment',
				'choose',
				'one',
				'your',
				'non-operational',
				'companies',
				'spend',
				'and',
				'assign',
				'matching',
				'workers',
				'from',
				'the',
				'supply',
				'that',
				'company',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'a\nJ oa = -) ‘\ni s \'\nweg a f \\ is\n=" 7 - )) =~\n.A 1) Se ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\nig',
		effects: [
			{
				type: 'raw',
				text: 'a\nJ oa = -) ‘\ni s \'\nweg a f \\ is\n=" 7 - )) =~\n.A 1) Se ws\nJ, : ; \\\nFOREIGN RECRUITMENT\nChoose one of your\nnon-operational Companies.\nSpend 10¥ and assign matching\nWorkers from the Supply\nto that Company.\n7B /7C\nig',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-2-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'it\nes 7 : ) yA\nFOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [7],
			keywords: [
				'foreign',
				'partner',
				'make',
				'business',
				'deal',
				'you',
				'may',
				'then',
				'sell',
				'and',
				'the',
				'market',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'it\nes 7 : ) yA\nFOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		effects: [
			{
				type: 'raw',
				text: 'it\nes 7 : ) yA\nFOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-3-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'— vy a ne\n5 7\ntS\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\nng',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [5, 7, 2],
			keywords: ['business', 'expansion', 'build', 'companies', 'add', 'equal', 'number', 'new', 'the', 'market'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'vy a ne',
		content:
			'— vy a ne\n5 7\ntS\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\nng',
		effects: [
			{
				type: 'raw',
				text: '— vy a ne\n5 7\ntS\nBUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\nng',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-4-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'© Jes 4h) My (NE ) a P\no* ap 3s | a\na a\nmay. ts La "ly\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 3],
			resources: ['money'],
			keywords: [
				'jes',
				'may',
				'extra',
				'shift',
				'choose',
				'one',
				'your',
				'non-automated',
				'companies',
				'pay',
				'the',
				'workers',
				'wages',
				'and',
				'perform',
				'production',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Jes 4h) My (NE ) a P',
		content:
			'© Jes 4h) My (NE ) a P\no* ap 3s | a\na a\nmay. ts La "ly\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		effects: [
			{
				type: 'raw',
				text: '© Jes 4h) My (NE ) a P\no* ap 3s | a\na a\nmay. ts La "ly\nEXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-5-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'. »\n8 | oe!\n| aaa r\n"ll —~\n- - a +\n— NG\nTa LS\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
		},
		parsed: {
			numbers: [8, 2],
			keywords: [
				'aaa',
				'foreign',
				'market',
				'insight',
				'reveal',
				'the',
				'next',
				'export',
				'cards',
				'you',
				'may',
				'choose',
				'one',
				'replace',
				'current',
				'card',
				'discard',
				'other',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content:
			'. »\n8 | oe!\n| aaa r\n"ll —~\n- - a +\n— NG\nTa LS\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
		effects: [
			{
				type: 'raw',
				text: '. »\n8 | oe!\n| aaa r\n"ll —~\n- - a +\n— NG\nTa LS\nFOREIGN MARKET INSIGHT\nReveal the next 2 Export cards.\nYou may choose one to replace\nthe current Export card.\nDiscard the other cards.\nYou may then Sell\nto the Foreign Market.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-6-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'@ lk lk\n’ ‘J -\n\\ ~) ay\n~ a AM\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nSn',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
		},
		parsed: {
			numbers: [10],
			money: [10],
			resources: ['money'],
			keywords: [
				'investment',
				'opportunities',
				'build',
				'company',
				'paying',
				'less',
				'search',
				'the',
				'deck',
				'for',
				'your',
				'choice',
				'and',
				'more',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'lk lk',
		content:
			'@ lk lk\n’ ‘J -\n\\ ~) ay\n~ a AM\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nSn',
		effects: [
			{
				type: 'raw',
				text: '@ lk lk\n’ ‘J -\n\\ ~) ay\n~ a AM\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 10¥ less.\nOR\nSearch the Company deck\nfor a Company of your choice\nand build it paying 10¥ more.\nSn',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-7-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'5 .\n= ‘\n: e ag v -\ny\n\\ f 7 a\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
		},
		parsed: {
			numbers: [5, 7],
			money: [5],
			resources: ['money'],
			keywords: [
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'workers',
				'one',
				'your',
				'non-operational',
				'companies',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'worker',
				'assigned',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'e ag v -',
		content:
			'5 .\n= ‘\n: e ag v -\ny\n\\ f 7 a\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.',
		effects: [
			{
				type: 'raw',
				text: '5 .\n= ‘\n: e ag v -\ny\n\\ f 7 a\nUNEMPLOYMENT INITIATIVE\nPROGRAM\nAssign unemployed Workers\nto one of your non-operational\nCompanies. Get 5¥ from the State\nfor each Worker assigned this way.',
			},
		],
	},
	{
		id: 'capitalist-class-action-cards-grid-40-items-8-5-capitalist-class-actions-deck-176-pos-8-5',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText: 'SS\n; ¢ Sars 2\nae «= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-5.png',
			position: {
				x: 8,
				y: 5,
			},
		},
		parsed: {
			numbers: [2],
			keywords: ['sars', 'offshore', 'companies', 'move', 'half', 'your', 'revenue', 'capital', 'rounded', 'down'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'Capitalist Class Actions',
		content: 'SS\n; ¢ Sars 2\nae «= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		effects: [
			{
				type: 'raw',
				text: 'SS\n; ¢ Sars 2\nae «= ~—\nOFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
			},
		],
	},
] satisfies CapitalistClassActionCardsCard[];

export default capitalistClassActionCards;
