import type { ParsedActionCard } from '../types';

interface CapitalistClassActionCardsCard extends ParsedActionCard {}

const capitalistClassActionCards = [
	{
		id: 'capitalist-class-action-health-crisis-1',
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
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 9, 10, 4],
			policies: ['4A'],
			resources: ['healthcare'],
			keywords: ['health', 'crisis', 'sell', 'up', 'to', 'the', 'state', 'for', 'each', 'ov'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'HEALTH CRISIS',
		content: 'HEALTH CRISIS\nSell up to 9\nto the State for 10% each.\n4a\nOv',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['4A'],
			},
		],
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'healthcare',
				amount: {
					type: 'up-to',
					amount: 9,
				},
				source: 'self',
				target: 'state',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 10,
					per: 'available',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-higher-education-program-1',
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
			physicalIndex: 2,
			copyIndex: 1,
		},
		parsed: {
			numbers: [9, 10, 3],
			money: [10],
			resources: ['education', 'money'],
			keywords: ['higher', 'education', 'program', 'sell', 'up', 'to', 'the', 'state', 'for', 'each', 'zz'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'HIGHER EDUCATION PROGRAM',
		content: 'HIGHER EDUCATION PROGRAM\nSell up to 9\nto the State for 10¥ each.\nZz\n/3',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'education',
				amount: {
					type: 'up-to',
					amount: 9,
				},
				source: 'self',
				target: 'state',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 10,
					per: 'available',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-push-political-agenda-1',
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
			physicalIndex: 3,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 25, 2],
			money: [25],
			resources: ['influence', 'money'],
			keywords: ['push', 'political', 'agenda', 'pay', 'to', 'propose', 'bills'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'PUSH POLITICAL AGENDA',
		content: 'PUSH POLITICAL AGENDA\nPay 25¥ to Propose 2 Bills.',
		stateEffects: [
			{
				type: 'money',
				action: 'pay',
				amount: 25,
				source: 'self',
				target: 'supply',
			},
			{
				type: 'policy',
				action: 'propose',
			},
			{
				type: 'policy',
				action: 'propose',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-recruitment-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			', or a nt ie ae\n' +
			'oa xs O) ‘\n' +
			"ve s '\n" +
			'L oy a f ; \\ \\\n' +
			'| Ur Niet\n' +
			'.A 1) Sl ws\n' +
			'J, : ; \\\n' +
			'FOREIGN RECRUITMENT\n' +
			'Choose one of your\n' +
			'non-operational Companies.\n' +
			'Spend 10¥ and assign matching\n' +
			'Workers from the Supply\n' +
			'to that Company.\n' +
			'7B /7C\n' +
			'. 4',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 10, 7, 4],
			money: [10],
			policies: ['7B', '7C'],
			resources: ['money'],
			keywords: [
				'foreign',
				'recruitment',
				'choose',
				'one',
				'of',
				'non',
				'operational',
				'companies',
				'spend',
				'and',
				'assign',
				'matching',
				'workers',
				'the',
				'supply',
				'to',
				'company',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN RECRUITMENT',
		content:
			'FOREIGN RECRUITMENT\n' +
			'Choose one of your\n' +
			'non-operational Companies.\n' +
			'Spend 10¥ and assign matching\n' +
			'Workers from the Supply\n' +
			'to that Company.\n' +
			'7B /7C\n' +
			'. 4',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'spend',
				amount: 10,
				source: 'self',
				target: 'supply',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: 'all',
				workerType: 'any',
				source: 'supply',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-competitive-wages-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'me. y\n' +
			'i | a Fae . ly\n' +
			'COMPETITIVE WAGES\n' +
			'Set the Wages in one of your\n' +
			'Companies to L3. Then, choose\n' +
			'an operational Company of the same\n' +
			'industry in the Public Sector with\n' +
			'the same number of Workers. Assign\n' +
			'those Workers to your Company.\n' +
			'2B/2C',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 2],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'competitive',
				'wages',
				'set',
				'the',
				'in',
				'one',
				'of',
				'companies',
				'to',
				'l3',
				'choose',
				'an',
				'operational',
				'company',
				'same',
				'industry',
				'public',
				'sector',
				'number',
				'workers',
				'assign',
				'those',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'COMPETITIVE WAGES',
		content:
			'COMPETITIVE WAGES\n' +
			'Set the Wages in one of your\n' +
			'Companies to L3. Then, choose\n' +
			'an operational Company of the same\n' +
			'industry in the Public Sector with\n' +
			'the same number of Workers. Assign\n' +
			'those Workers to your Company.\n' +
			'2B/2C',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'adjust-wages',
				target: 'company',
				amount: 3,
			},
			{
				type: 'worker',
				action: 'assign',
				amount: 'all',
				source: 'company',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-global-branding-1',
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
			physicalIndex: 6,
			copyIndex: 1,
		},
		parsed: {
			numbers: [6, 10],
			money: [10],
			resources: ['money'],
			keywords: [
				'global',
				'branding',
				'sell',
				'to',
				'the',
				'foreign',
				'market',
				'you',
				'may',
				'also',
				'up',
				'for',
				'each',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'GLOBAL BRANDING',
		content: 'GLOBAL BRANDING\nSell to the Foreign Market.\nYou may also Sell up to 6[)\nfor 10¥ each.',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'luxury',
				amount: {
					type: 'up-to',
					amount: 6,
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 10,
					per: 'available',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-interest-groups-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'‘. | }\n' +
			'| ui\n' +
			'> § »\n' +
			'qj e\n' +
			'vis Ee i i F\n' +
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			'until you reveal 3 opponents’\n' +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.\n' +
			'4',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
			physicalIndex: 7,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 4],
			resources: ['influence'],
			keywords: [
				'interest',
				'groups',
				'reveal',
				'voting',
				'cubes',
				'the',
				'bag',
				'until',
				'you',
				'opponents',
				'replace',
				'them',
				'and',
				'return',
				'all',
				'revealed',
				'to',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'INTEREST GROUPS',
		content:
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			'until you reveal 3 opponents’\n' +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.\n' +
			'4',
		stateEffects: [
			{
				type: 'vote',
				action: 'reveal-cubes',
				amount: 3,
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'replace-cubes',
				amount: 3,
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'return-cubes',
				amount: 'all',
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-offshore-companies-1',
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
			physicalIndex: 8,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			keywords: ['offshore', 'companies', 'move', 'half', 'of', 'revenue', 'to', 'capital', 'rounded', 'down'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'OFFSHORE COMPANIES',
		content: 'OFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		stateEffects: [
			{
				type: 'capital',
				action: 'move-revenue-to-capital',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 2,
					of: 'revenue',
					round: 'down',
				},
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-market-insight-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'i ll\n' +
			'Anna’\n' +
			'ae\n' +
			'| aaa r\n' +
			'7 Nae ‘ ’ 2 —*\n' +
			'- - a‘ a\n' +
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next 2 Export cards.\n' +
			'You may choose one to replace\n' +
			'the current Export card.\n' +
			'Discard the other cards.\n' +
			'You may then Sell\n' +
			'to the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
			physicalIndex: 9,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 2],
			keywords: [
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
				'to',
				'replace',
				'current',
				'card',
				'discard',
				'other',
				'sell',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN MARKET INSIGHT',
		content:
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next 2 Export cards.\n' +
			'You may choose one to replace\n' +
			'the current Export card.\n' +
			'Discard the other cards.\n' +
			'You may then Sell\n' +
			'to the Foreign Market.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 2,
				deck: 'export-cards',
			},
			{
				type: 'choice',
				options: ['Replace the current Export card with one revealed card', 'Keep the current Export card'],
			},
			{
				type: 'card',
				action: 'discard',
				amount: 2,
				deck: 'export-cards',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-unemployment-initiative-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'wey\n' +
			'4 ‘\n' +
			'ee ‘ f\n' +
			'/ > i =\n' +
			'UNEMPLOYMENT INITIATIVE\n' +
			'PROGRAM\n' +
			'Assign unemployed Workers\n' +
			'to one of your non-operational\n' +
			'Companies. Get 5¥ from the State\n' +
			'for each Worker assigned this way.\n' +
			',',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
			physicalIndex: 10,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'workers',
				'to',
				'one',
				'of',
				'non',
				'operational',
				'companies',
				'get',
				'the',
				'state',
				'for',
				'each',
				'worker',
				'assigned',
				'way',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'UNEMPLOYMENT INITIATIVE PROGRAM',
		content:
			'UNEMPLOYMENT INITIATIVE PROGRAM\n' +
			'Assign unemployed Workers\n' +
			'to one of your non-operational\n' +
			'Companies. Get 5¥ from the State\n' +
			'for each Worker assigned this way.\n' +
			',',
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				workerType: 'any',
				source: 'unemployed-workers',
				target: 'company',
			},
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 5,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-partner-1',
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
			physicalIndex: 11,
			copyIndex: 1,
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
				'sell',
				'and',
				'or',
				'to',
				'the',
				'market',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN PARTNER',
		content: 'FOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		stateEffects: [
			{
				type: 'card',
				action: 'play',
				amount: 1,
				deck: 'business-deal-cards',
			},
			{
				type: 'choice',
				options: ['Sell food and/or luxury to the Foreign Market'],
				stateEffects: [
					{
						type: 'resource',
						action: 'sell',
						resource: 'food',
						amount: {
							type: 'up-to',
							amount: 'available',
						},
						source: 'self',
						target: 'foreign-market',
					},
					{
						type: 'resource',
						action: 'sell',
						resource: 'luxury',
						amount: {
							type: 'up-to',
							amount: 'available',
						},
						source: 'self',
						target: 'foreign-market',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-business-expansion-1',
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
			physicalIndex: 12,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 4],
			keywords: [
				'business',
				'expansion',
				'build',
				'companies',
				'add',
				'an',
				'equal',
				'number',
				'of',
				'new',
				'to',
				'the',
				'market',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'BUSINESS EXPANSION',
		content: 'BUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\n= 4',
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				amount: 2,
				target: 'self',
			},
			{
				type: 'card',
				action: 'draw',
				amount: 2,
				deck: 'capitalist-company-market',
				target: 'market',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-investment-opportunities-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'@ lk ls\n' +
			'’ ‘J -\n' +
			'\\ ~) ay\n' +
			'Sa “a\n' +
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 10¥ less.\n' +
			'OR\n' +
			'Search the Company deck\n' +
			'for a Company of your choice\n' +
			'and build it paying 10¥ more.\n' +
			'Be (',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
			physicalIndex: 13,
			copyIndex: 1,
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
				'or',
				'search',
				'the',
				'deck',
				'for',
				'of',
				'choice',
				'and',
				'it',
				'more',
				'be',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'INVESTMENT OPPORTUNITIES',
		content:
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 10¥ less.\n' +
			'OR\n' +
			'Search the Company deck\n' +
			'for a Company of your choice\n' +
			'and build it paying 10¥ more.\n' +
			'Be (',
		stateEffects: [
			{
				type: 'choice',
				options: ['Build a Company paying 10 money less'],
				stateEffects: [
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'receive',
						amount: 10,
						source: 'supply',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Search the Company deck and build a chosen Company paying 10 money more'],
				stateEffects: [
					{
						type: 'card',
						action: 'search',
						amount: 1,
						deck: 'capitalist-class-company-cards',
					},
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'pay',
						amount: 10,
						source: 'self',
						target: 'supply',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-fake-news-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a) b> fz ¥2 é\n' +
			'. : hy mt P y RuEY\n' +
			'et a 4 5\n' +
			'as SS ; ee Ey Me Ne\n' +
			'FAKE NEWS\n' +
			'Draw 6 Voting cubes from\n' +
			'the bag. Remove up to 4 of them\n' +
			'and return the rest to the bag.\n' +
			'=',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
			physicalIndex: 14,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 4, 5, 6],
			resources: ['influence', 'money'],
			keywords: [
				'fake',
				'news',
				'draw',
				'voting',
				'cubes',
				'the',
				'bag',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'and',
				'return',
				'rest',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FAKE NEWS',
		content: 'FAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
		stateEffects: [
			{
				type: 'vote',
				action: 'draw-cubes',
				amount: 6,
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'remove-cubes',
				amount: {
					type: 'up-to',
					amount: 4,
				},
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'return-cubes',
				amount: 'all',
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-global-food-crisis-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			', =\n' +
			') PS\n' +
			'- ff i 4. ,\n' +
			') 1 \\o% in :\n' +
			'¥, Pan * 44 i\n' +
			'— J\n' +
			'GLOBAL FOOD CRISIS\n' +
			'Sell to the Foreign Market.\n' +
			'You may also Sell up to 4 ¢\n' +
			'| for 15¥ each.\n' +
			"' ;",
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
			physicalIndex: 15,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 1, 44, 15],
			money: [15],
			resources: ['food', 'money'],
			keywords: [
				'global',
				'food',
				'crisis',
				'sell',
				'to',
				'the',
				'foreign',
				'market',
				'you',
				'may',
				'also',
				'up',
				'for',
				'each',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'GLOBAL FOOD CRISIS',
		content: "GLOBAL FOOD CRISIS\nSell to the Foreign Market.\nYou may also Sell up to 4 ¢\n| for 15¥ each.\n' ;",
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'food',
				amount: {
					type: 'up-to',
					amount: 4,
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 15,
					per: 'available',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-industrialization-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a 78 X\n' +
			'het . 2 . eB\n' +
			'INDUSTRIALIZATION\n' +
			'Build a Luxury or Agricultural\n' +
			'Company paying half its cost.\n' +
			'The other half is paid by the State.\n' +
			'sea\n' +
			'a]',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
			physicalIndex: 16,
			copyIndex: 1,
		},
		parsed: {
			numbers: [78, 2],
			resources: ['luxury', 'money'],
			keywords: [
				'industrialization',
				'build',
				'luxury',
				'or',
				'agricultural',
				'company',
				'paying',
				'half',
				'its',
				'cost',
				'the',
				'other',
				'is',
				'paid',
				'by',
				'state',
				'sea',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'INDUSTRIALIZATION',
		content:
			'INDUSTRIALIZATION\n' +
			'Build a Luxury or Agricultural\n' +
			'Company paying half its cost.\n' +
			'The other half is paid by the State.\n' +
			'sea\n' +
			'a]',
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				industry: 'agriculture-or-luxury',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 2,
					of: 'cost',
					round: 'up',
				},
				source: 'self',
				target: 'supply',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 2,
					of: 'cost',
					round: 'down',
				},
				source: 'state',
				target: 'supply',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-bid-rigging-1',
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
			physicalIndex: 17,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 6, 10, 1],
			money: [10],
			resources: ['money'],
			keywords: ['bid', 'rigging', 'sell', 'up', 'to', 'the', 'state', 'for', 'each', 'get', 'oo', 'bs'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'BID RIGGING',
		content: 'BID RIGGING\nSell up to 6 [)\nto the State for 10¥ each.\nThen, get 1 @\n4x\nOO\nBS',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'luxury',
				amount: {
					type: 'up-to',
					amount: 6,
				},
				source: 'self',
				target: 'state',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 10,
					per: 'available',
				},
				source: 'state',
				target: 'self',
			},
			{
				type: 'resource',
				action: 'gain',
				resource: 'influence',
				amount: 1,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-buy-private-island-1',
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
			physicalIndex: 18,
			copyIndex: 1,
		},
		parsed: {
			numbers: [50, 7],
			money: [50],
			resources: ['money'],
			keywords: ['buy', 'private', 'island', 'pay', 'capital', 'to', 'the', 'state', 'gain'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'BUY PRIVATE ISLAND',
		content: 'BUY PRIVATE ISLAND\nPay 50¥ from your Capital\nto the State.\nGain 7.',
		stateEffects: [
			{
				type: 'capital',
				action: 'spend',
				amount: 50,
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: 50,
				source: 'self',
				target: 'state',
			},
			{
				type: 'victory-points',
				action: 'gain',
				amount: 7,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-exit-strategy-1',
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
			physicalIndex: 19,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['exit', 'strategy', 'sell', 'one', 'of', 'companies', 'without', 'for', 'twice', 'its', 'cost', 'sd'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'EXIT STRATEGY',
		content: 'EXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSD a',
		stateEffects: [
			{
				type: 'company',
				action: 'sell',
				target: 'self',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 2,
					per: 'company',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-business-grants-1',
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
			physicalIndex: 20,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'business',
				'grants',
				'get',
				'the',
				'state',
				'for',
				'each',
				'company',
				'you',
				'own',
				'requirement',
				'ai',
				'sith',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'BUSINESS GRANTS',
		content: 'BUSINESS GRANTS\nGet 5¥ from the State\nfor each Company you own.\nREQUIREMENT ‘ ai.\nSith',
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 5,
					per: 'company',
					target: 'self',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-tap-into-new-markets-1',
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
			physicalIndex: 21,
			copyIndex: 1,
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
				'to',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TAP INTO NEW MARKETS',
		content: 'TAP INTO NEW MARKETS\nPropose a Bill for Foreign Trade.\nAdd 2 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
				policy: 'foreignTrade',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 2,
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-radical-reforms-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'ee Ms ay\n' +
			'Te! eemee |\n' +
			'2 aS eee oe\n' +
			'an t . &\n' +
			'» ——\n' +
			'>2 » yt Pa . Ne >\n' +
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
			physicalIndex: 22,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'radical',
				'reforms',
				'propose',
				'bill',
				'you',
				'may',
				'place',
				'marker',
				'on',
				'any',
				'section',
				'even',
				'if',
				'it',
				'not',
				'next',
				'to',
				'the',
				'current',
				'one',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'RADICAL REFORMS',
		content:
			'RADICAL REFORMS\n' +
			'Propose a Bill. You may place\n' +
			'your marker on any section (even\n' +
			"if it's not next to the current one).\n" +
			'You may not call for an\n' +
			'Immediate Vote on this Bill.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
				placement: 'any-section',
				immediateVoteAllowed: false,
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-extra-shift-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-3.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'Nt\n' +
			'aL ih *\n' +
			'& AEN HR) my i 3 We. £\n' +
			'S* ap 3s | a\n' +
			'=] z\n' +
			'Se "l\n' +
			'EXTRA SHIFT\n' +
			'Choose one of your\n' +
			'non-automated Companies.\n' +
			'Pay the workers’ wages\n' +
			'and perform a Production.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-3.png',
			position: {
				x: 7,
				y: 3,
			},
			physicalIndex: 23,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3],
			resources: ['money'],
			keywords: [
				'extra',
				'shift',
				'choose',
				'one',
				'of',
				'non',
				'automated',
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
		name: 'EXTRA SHIFT',
		content:
			'EXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		stateEffects: [
			{
				type: 'company',
				action: 'produce',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'self',
				target: 'other',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-taxed-enough-already-1',
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
			physicalIndex: 24,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 2],
			resources: ['influence', 'money'],
			keywords: [
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
				'to',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TAXED ENOUGH ALREADY!',
		content: 'TAXED ENOUGH ALREADY!\nPropose a Bill for Taxation.\nAdd 2 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
				policy: 'taxation',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 2,
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-endorse-political-campaign-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'— . Raye\n' +
			'the u 04 oe” r\n' +
			'= , “a ‘ =\n' +
			'‘ . TIM 0 4 sie ad\n' +
			"'!> ae Ss Ww. ?-2°e A\n" +
			'~ \\\n' +
			'> aN\n' +
			'ENDORSE\n' +
			'POLITICAL CAMPAIGN\n' +
			'Spend 15¥ and add\n' +
			'6 Voting cubes to the bag.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
			physicalIndex: 25,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 0, -2, 15, 6],
			money: [15],
			resources: ['influence', 'money'],
			keywords: ['endorse', 'political', 'campaign', 'spend', 'and', 'add', 'voting', 'cubes', 'to', 'the', 'bag'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'ENDORSE POLITICAL CAMPAIGN',
		content: 'ENDORSE POLITICAL CAMPAIGN\nSpend 15¥ and add\n6 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'money',
				action: 'spend',
				amount: 15,
				source: 'self',
				target: 'supply',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 6,
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-technological-progress-1',
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
			physicalIndex: 26,
			copyIndex: 1,
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'to', 'get', 'or'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TECHNOLOGICAL PROGRESS',
		content: 'TECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		stateEffects: [
			{
				type: 'choice',
				options: ['Pay 20 money to get 1 automation token'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 20,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 1,
						target: 'company',
					},
				],
			},
			{
				type: 'choice',
				options: ['Pay 45 money to get 2 automation tokens'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 45,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 2,
						target: 'company',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-trade-protectionism-lobby-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'. = \\, Z . : o> | 1%\n' +
			'e ; Q , . .\n' +
			'{ a\n' +
			'== Fai\n' +
			'| oY\n' +
			'. . =|\n' +
			'TRADE PROTECTIONISM\n' +
			'LOBBY\n' +
			'Add 2 Voting cubes to the bag\n' +
			'for each Company you own in the\n' +
			'Agricultural industry. If isin\n' +
			'effect, also count the Companies\n' +
			'in the Luxury industry.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
			physicalIndex: 27,
			copyIndex: 1,
		},
		parsed: {
			numbers: [1, 2],
			resources: ['luxury', 'influence'],
			keywords: [
				'trade',
				'protectionism',
				'lobby',
				'add',
				'voting',
				'cubes',
				'to',
				'the',
				'bag',
				'for',
				'each',
				'company',
				'you',
				'own',
				'in',
				'agricultural',
				'industry',
				'if',
				'isin',
				'effect',
				'also',
				'count',
				'companies',
				'luxury',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TRADE PROTECTIONISM LOBBY',
		content:
			'TRADE PROTECTIONISM LOBBY\n' +
			'Add 2 Voting cubes to the bag\n' +
			'for each Company you own in the\n' +
			'Agricultural industry. If isin\n' +
			'effect, also count the Companies\n' +
			'in the Luxury industry.',
		stateEffects: [
			{
				type: 'vote',
				action: 'add-cubes',
				amount: {
					type: 'per',
					amount: 2,
					per: 'company',
					target: 'self',
				},
				target: 'bag',
				condition: {
					type: 'companies',
					owner: 'self',
					industry: 'food',
					count: 1,
					operator: '>=',
				},
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: {
					type: 'per',
					amount: 2,
					per: 'company',
					target: 'self',
				},
				target: 'bag',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['6A'],
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-public-opinion-polling-1',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'3 eae }\n' +
			'>\n' +
			'y i ——t m\n' +
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may\n' +
			'then call for an Immediate Vote\n' +
			'without spending @.\n' +
			'If you do, use those 5 cubes\n' +
			'instead of drawing new ones.\n' +
			'If not, return them to the bag.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
			physicalIndex: 28,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 5],
			resources: ['influence'],
			keywords: [
				'public',
				'opinion',
				'polling',
				'propose',
				'bill',
				'and',
				'reveal',
				'voting',
				'cubes',
				'the',
				'bag',
				'you',
				'may',
				'call',
				'for',
				'an',
				'immediate',
				'vote',
				'without',
				'spending',
				'if',
				'do',
				'use',
				'those',
				'instead',
				'of',
				'drawing',
				'new',
				'ones',
				'not',
				'return',
				'them',
				'to',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'PUBLIC OPINION POLLING',
		content:
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may\n' +
			'then call for an Immediate Vote\n' +
			'without spending @.\n' +
			'If you do, use those 5 cubes\n' +
			'instead of drawing new ones.\n' +
			'If not, return them to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
			},
			{
				type: 'vote',
				action: 'reveal-cubes',
				amount: 5,
				target: 'bag',
			},
			{
				type: 'choice',
				options: ['Call an Immediate Vote with revealed cubes', 'Return revealed cubes to the bag'],
				stateEffects: [
					{
						type: 'vote',
						action: 'immediate-vote',
						amount: 1,
					},
					{
						type: 'vote',
						action: 'return-cubes',
						amount: 'all',
						target: 'bag',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-competitive-wages-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'=\n' +
			'me. y\n' +
			'i | a Fae . ly\n' +
			'COMPETITIVE WAGES\n' +
			'Set the Wages in one of your\n' +
			'Companies to L3. Then, choose\n' +
			'an operational Company of the same\n' +
			'industry in the Public Sector with\n' +
			'the same number of Workers. Assign\n' +
			'those Workers to your Company.\n' +
			'2B/2C',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
			physicalIndex: 29,
			copyIndex: 2,
		},
		parsed: {
			numbers: [3, 2],
			policies: ['2B', '2C'],
			resources: ['money'],
			keywords: [
				'competitive',
				'wages',
				'set',
				'the',
				'in',
				'one',
				'of',
				'companies',
				'to',
				'l3',
				'choose',
				'an',
				'operational',
				'company',
				'same',
				'industry',
				'public',
				'sector',
				'number',
				'workers',
				'assign',
				'those',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'COMPETITIVE WAGES',
		content:
			'COMPETITIVE WAGES\n' +
			'Set the Wages in one of your\n' +
			'Companies to L3. Then, choose\n' +
			'an operational Company of the same\n' +
			'industry in the Public Sector with\n' +
			'the same number of Workers. Assign\n' +
			'those Workers to your Company.\n' +
			'2B/2C',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'adjust-wages',
				target: 'company',
				amount: 3,
			},
			{
				type: 'worker',
				action: 'assign',
				amount: 'all',
				source: 'company',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-exit-strategy-2',
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
			physicalIndex: 30,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['exit', 'strategy', 'sell', 'one', 'of', 'companies', 'without', 'for', 'twice', 'its', 'cost', 'sg'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'EXIT STRATEGY',
		content: 'EXIT STRATEGY\nSell one of your Companies\nwithout 2 for twice its cost.\nSg',
		stateEffects: [
			{
				type: 'company',
				action: 'sell',
				target: 'self',
			},
			{
				type: 'money',
				action: 'receive',
				amount: {
					type: 'per',
					amount: 2,
					per: 'company',
				},
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-technological-progress-2',
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
			physicalIndex: 31,
			copyIndex: 2,
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'to', 'get', 'or'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TECHNOLOGICAL PROGRESS',
		content: 'TECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		stateEffects: [
			{
				type: 'choice',
				options: ['Pay 20 money to get 1 automation token'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 20,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 1,
						target: 'company',
					},
				],
			},
			{
				type: 'choice',
				options: ['Pay 45 money to get 2 automation tokens'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 45,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 2,
						target: 'company',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-technological-progress-3',
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
			physicalIndex: 32,
			copyIndex: 3,
		},
		parsed: {
			numbers: [20, 45, 2],
			money: [20, 45],
			resources: ['money'],
			keywords: ['technological', 'progress', 'pay', 'to', 'get', 'or'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'TECHNOLOGICAL PROGRESS',
		content: 'TECHNOLOGICAL PROGRESS\nPay 20¥ to get a &&\nOR\nPay 45¥ to get 2 &&',
		stateEffects: [
			{
				type: 'choice',
				options: ['Pay 20 money to get 1 automation token'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 20,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 1,
						target: 'company',
					},
				],
			},
			{
				type: 'choice',
				options: ['Pay 45 money to get 2 automation tokens'],
				stateEffects: [
					{
						type: 'money',
						action: 'pay',
						amount: 45,
						source: 'self',
						target: 'supply',
					},
					{
						type: 'company',
						action: 'add-automation',
						amount: 2,
						target: 'company',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-recruitment-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'a\n' +
			'J oa = -) ‘\n' +
			"i s '\n" +
			'weg a f \\ is\n' +
			'=" 7 - )) =~\n' +
			'.A 1) Se ws\n' +
			'J, : ; \\\n' +
			'FOREIGN RECRUITMENT\n' +
			'Choose one of your\n' +
			'non-operational Companies.\n' +
			'Spend 10¥ and assign matching\n' +
			'Workers from the Supply\n' +
			'to that Company.\n' +
			'7B /7C\n' +
			'ig',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
			physicalIndex: 33,
			copyIndex: 2,
		},
		parsed: {
			numbers: [7, 1, 10],
			money: [10],
			policies: ['7B', '7C'],
			resources: ['money'],
			keywords: [
				'foreign',
				'recruitment',
				'choose',
				'one',
				'of',
				'non',
				'operational',
				'companies',
				'spend',
				'and',
				'assign',
				'matching',
				'workers',
				'the',
				'supply',
				'to',
				'company',
				'ig',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN RECRUITMENT',
		content:
			'FOREIGN RECRUITMENT\n' +
			'Choose one of your\n' +
			'non-operational Companies.\n' +
			'Spend 10¥ and assign matching\n' +
			'Workers from the Supply\n' +
			'to that Company.\n' +
			'7B /7C\n' +
			'ig',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'spend',
				amount: 10,
				source: 'self',
				target: 'supply',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: 'all',
				workerType: 'any',
				source: 'supply',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-partner-2',
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
			physicalIndex: 34,
			copyIndex: 2,
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
				'sell',
				'and',
				'or',
				'to',
				'the',
				'market',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN PARTNER',
		content: 'FOREIGN PARTNER\nMake a Business Deal.\nYou may then Sell & and/or\n[] to the Foreign Market.',
		stateEffects: [
			{
				type: 'card',
				action: 'play',
				amount: 1,
				deck: 'business-deal-cards',
			},
			{
				type: 'choice',
				options: ['Sell food and/or luxury to the Foreign Market'],
				stateEffects: [
					{
						type: 'resource',
						action: 'sell',
						resource: 'food',
						amount: {
							type: 'up-to',
							amount: 'available',
						},
						source: 'self',
						target: 'foreign-market',
					},
					{
						type: 'resource',
						action: 'sell',
						resource: 'luxury',
						amount: {
							type: 'up-to',
							amount: 'available',
						},
						source: 'self',
						target: 'foreign-market',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-business-expansion-2',
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
			physicalIndex: 35,
			copyIndex: 2,
		},
		parsed: {
			numbers: [5, 7, 2],
			keywords: [
				'business',
				'expansion',
				'build',
				'companies',
				'add',
				'an',
				'equal',
				'number',
				'of',
				'new',
				'to',
				'the',
				'market',
				'ng',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'BUSINESS EXPANSION',
		content: 'BUSINESS EXPANSION\nBuild 2 Companies.\nAdd an equal number of new\nCompanies to the Market.\nng',
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				amount: 2,
				target: 'self',
			},
			{
				type: 'card',
				action: 'draw',
				amount: 2,
				deck: 'capitalist-company-market',
				target: 'market',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-extra-shift-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'© Jes 4h) My (NE ) a P\n' +
			'o* ap 3s | a\n' +
			'a a\n' +
			'may. ts La "ly\n' +
			'EXTRA SHIFT\n' +
			'Choose one of your\n' +
			'non-automated Companies.\n' +
			'Pay the workers’ wages\n' +
			'and perform a Production.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
			physicalIndex: 36,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 3],
			resources: ['money'],
			keywords: [
				'extra',
				'shift',
				'choose',
				'one',
				'of',
				'non',
				'automated',
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
		name: 'EXTRA SHIFT',
		content:
			'EXTRA SHIFT\nChoose one of your\nnon-automated Companies.\nPay the workers’ wages\nand perform a Production.',
		stateEffects: [
			{
				type: 'company',
				action: 'produce',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'self',
				target: 'other',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-foreign-market-insight-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'. »\n' +
			'8 | oe!\n' +
			'| aaa r\n' +
			'"ll —~\n' +
			'- - a +\n' +
			'— NG\n' +
			'Ta LS\n' +
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next 2 Export cards.\n' +
			'You may choose one to replace\n' +
			'the current Export card.\n' +
			'Discard the other cards.\n' +
			'You may then Sell\n' +
			'to the Foreign Market.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
			physicalIndex: 37,
			copyIndex: 2,
		},
		parsed: {
			numbers: [8, 2],
			keywords: [
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
				'to',
				'replace',
				'current',
				'card',
				'discard',
				'other',
				'sell',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'FOREIGN MARKET INSIGHT',
		content:
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next 2 Export cards.\n' +
			'You may choose one to replace\n' +
			'the current Export card.\n' +
			'Discard the other cards.\n' +
			'You may then Sell\n' +
			'to the Foreign Market.',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 2,
				deck: 'export-cards',
			},
			{
				type: 'choice',
				options: ['Replace the current Export card with one revealed card', 'Keep the current Export card'],
			},
			{
				type: 'card',
				action: 'discard',
				amount: 2,
				deck: 'export-cards',
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-investment-opportunities-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'@ lk lk\n' +
			'’ ‘J -\n' +
			'\\ ~) ay\n' +
			'~ a AM\n' +
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 10¥ less.\n' +
			'OR\n' +
			'Search the Company deck\n' +
			'for a Company of your choice\n' +
			'and build it paying 10¥ more.\n' +
			'Sn',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
			physicalIndex: 38,
			copyIndex: 2,
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
				'or',
				'search',
				'the',
				'deck',
				'for',
				'of',
				'choice',
				'and',
				'it',
				'more',
				'sn',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'INVESTMENT OPPORTUNITIES',
		content:
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 10¥ less.\n' +
			'OR\n' +
			'Search the Company deck\n' +
			'for a Company of your choice\n' +
			'and build it paying 10¥ more.\n' +
			'Sn',
		stateEffects: [
			{
				type: 'choice',
				options: ['Build a Company paying 10 money less'],
				stateEffects: [
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'receive',
						amount: 10,
						source: 'supply',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Search the Company deck and build a chosen Company paying 10 money more'],
				stateEffects: [
					{
						type: 'card',
						action: 'search',
						amount: 1,
						deck: 'capitalist-class-company-cards',
					},
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'pay',
						amount: 10,
						source: 'self',
						target: 'supply',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-unemployment-initiative-program-2',
		frontImage:
			'fixtures/assets/decks-sorted/capitalist-class-action-cards/grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/capitalist-class-action-cards/back__capitalist-class-actions-deck-176.jpg',
		rawText:
			'5 .\n' +
			'= ‘\n' +
			': e ag v -\n' +
			'y\n' +
			'\\ f 7 a\n' +
			'UNEMPLOYMENT INITIATIVE\n' +
			'PROGRAM\n' +
			'Assign unemployed Workers\n' +
			'to one of your non-operational\n' +
			'Companies. Get 5¥ from the State\n' +
			'for each Worker assigned this way.',
		source: {
			deck: 'capitalist-class-action-cards',
			file: 'grid_40-items_8-5__capitalist-class-actions-deck-176__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
			physicalIndex: 39,
			copyIndex: 2,
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
				'to',
				'one',
				'of',
				'non',
				'operational',
				'companies',
				'get',
				'the',
				'state',
				'for',
				'each',
				'worker',
				'assigned',
				'way',
			],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'UNEMPLOYMENT INITIATIVE PROGRAM',
		content:
			'UNEMPLOYMENT INITIATIVE PROGRAM\n' +
			'Assign unemployed Workers\n' +
			'to one of your non-operational\n' +
			'Companies. Get 5¥ from the State\n' +
			'for each Worker assigned this way.',
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				workerType: 'any',
				source: 'unemployed-workers',
				target: 'company',
			},
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 5,
					per: 'employed-worker',
					target: 'self',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'capitalist-class-action-offshore-companies-2',
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
			physicalIndex: 40,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2],
			keywords: ['offshore', 'companies', 'move', 'half', 'of', 'revenue', 'to', 'capital', 'rounded', 'down'],
		},
		kind: 'action',
		role: 'capitalist',
		category: 'base',
		name: 'OFFSHORE COMPANIES',
		content: 'OFFSHORE COMPANIES\nMove half of your Revenue\nto your Capital (rounded down).',
		stateEffects: [
			{
				type: 'capital',
				action: 'move-revenue-to-capital',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 2,
					of: 'revenue',
					round: 'down',
				},
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
] satisfies CapitalistClassActionCardsCard[];

export default capitalistClassActionCards;
