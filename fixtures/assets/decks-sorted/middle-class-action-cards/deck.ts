import type { ParsedActionCard } from '../types';

interface MiddleClassActionCardsCard extends ParsedActionCard {}

const middleClassActionCards = [
	{
		id: 'middle-class-action-healthcare-benefits-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4g\n' +
			'a -\n' +
			'—< =\n' +
			'py ety . >\n' +
			'HEALTHCARE BENEFITS\n' +
			'Buy & from the State, up to your\n' +
			'Population, paying half the cost\n' +
			'(rounded up).\n' +
			'REQUIREMENT\n' +
			'—',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
			physicalIndex: 1,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4],
			resources: ['healthcare', 'money'],
			keywords: [
				'healthcare',
				'benefits',
				'buy',
				'the',
				'state',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'cost',
				'rounded',
				'requirement',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'HEALTHCARE BENEFITS',
		content:
			'HEALTHCARE BENEFITS\n' +
			'Buy & from the State, up to your\n' +
			'Population, paying half the cost\n' +
			'(rounded up).\n' +
			'REQUIREMENT\n' +
			'—',
		stateEffects: [
			{
				type: 'resource',
				action: 'buy',
				resource: 'healthcare',
				amount: {
					type: 'up-to',
					amount: 'population',
				},
				source: 'state',
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
				target: 'state',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-import-subsidy-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'<\n' +
			'IMPORT SUBSIDY\n' +
			'You may Buy ¢ or 0 from the\n' +
			'Foreign Market, up to your Popu-\n' +
			'lation, without paying any Tariffs.\n' +
			'— a Z',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
			physicalIndex: 2,
			copyIndex: 1,
		},
		parsed: {
			numbers: [0],
			resources: ['money'],
			keywords: [
				'import',
				'subsidy',
				'you',
				'may',
				'buy',
				'or',
				'the',
				'foreign',
				'market',
				'up',
				'to',
				'popu',
				'lation',
				'without',
				'paying',
				'any',
				'tariffs',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'IMPORT SUBSIDY',
		content:
			'IMPORT SUBSIDY\n' +
			'You may Buy ¢ or 0 from the\n' +
			'Foreign Market, up to your Popu-\n' +
			'lation, without paying any Tariffs.\n' +
			'— a Z',
		stateEffects: [
			{
				type: 'choice',
				options: ['Buy food or luxury from the Foreign Market without tariffs'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'food',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'foreign-market',
						target: 'self',
					},
					{
						type: 'resource',
						action: 'buy',
						resource: 'luxury',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'foreign-market',
						target: 'self',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-import-subsidy-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'¥\n' +
			'IMPORT SUBSIDY\n' +
			'You may Buy ¢ or 0 from the\n' +
			'Foreign Market, up to your Popu-\n' +
			'lation, without paying any Tariffs.\n' +
			'— a Z',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
			physicalIndex: 3,
			copyIndex: 2,
		},
		parsed: {
			numbers: [0],
			resources: ['money'],
			keywords: [
				'import',
				'subsidy',
				'you',
				'may',
				'buy',
				'or',
				'the',
				'foreign',
				'market',
				'up',
				'to',
				'popu',
				'lation',
				'without',
				'paying',
				'any',
				'tariffs',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'IMPORT SUBSIDY',
		content:
			'IMPORT SUBSIDY\n' +
			'You may Buy ¢ or 0 from the\n' +
			'Foreign Market, up to your Popu-\n' +
			'lation, without paying any Tariffs.\n' +
			'— a Z',
		stateEffects: [
			{
				type: 'choice',
				options: ['Buy food or luxury from the Foreign Market without tariffs'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'food',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'foreign-market',
						target: 'self',
					},
					{
						type: 'resource',
						action: 'buy',
						resource: 'luxury',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'foreign-market',
						target: 'self',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-small-business-grant-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
			physicalIndex: 4,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['small', 'business', 'grant', 'build', 'company', 'the', 'state', 'pays', 'its', 'cost'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SMALL BUSINESS GRANT',
		content: 'SMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 1,
					of: 'cost',
				},
				source: 'state',
				target: 'supply',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-small-business-grant-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
			physicalIndex: 5,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['small', 'business', 'grant', 'build', 'company', 'the', 'state', 'pays', 'its', 'cost'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SMALL BUSINESS GRANT',
		content: 'SMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'fraction',
					numerator: 1,
					denominator: 1,
					of: 'cost',
				},
				source: 'state',
				target: 'supply',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-land-of-opportunity-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'\\\n' +
			'* Oy us Fe ee\n' +
			'LAND OF OPPORTUNITY\n' +
			'Build a Company using a skilled\n' +
			'Middle Class Worker of your\n' +
			'choice from the Supply.\n' +
			'7B /7C',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
			physicalIndex: 6,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7],
			policies: ['7B', '7C'],
			keywords: [
				'land',
				'of',
				'opportunity',
				'build',
				'company',
				'using',
				'skilled',
				'middle',
				'class',
				'worker',
				'choice',
				'the',
				'supply',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'LAND OF OPPORTUNITY',
		content:
			'LAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-land-of-opportunity-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'\\\n' +
			'* Oy us Fe ee\n' +
			'LAND OF OPPORTUNITY\n' +
			'Build a Company using a skilled\n' +
			'Middle Class Worker of your\n' +
			'choice from the Supply.\n' +
			'7B /7C',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
			physicalIndex: 7,
			copyIndex: 2,
		},
		parsed: {
			numbers: [7],
			policies: ['7B', '7C'],
			keywords: [
				'land',
				'of',
				'opportunity',
				'build',
				'company',
				'using',
				'skilled',
				'middle',
				'class',
				'worker',
				'choice',
				'the',
				'supply',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'LAND OF OPPORTUNITY',
		content:
			'LAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-investment-opportunities-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'we | P oats . .\n' +
			'“ & :\n' +
			'“{ — ae\n' +
			'iy s a 5 :\n' +
			'- y .\n' +
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 8¥ less.\n' +
			'Search the Company deck for\n' +
			'a Company of your choice and\n' +
			'build it paying 8¥V more.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
			physicalIndex: 8,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 8],
			money: [8],
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
				'of',
				'choice',
				'and',
				'it',
				'more',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'INVESTMENT OPPORTUNITIES',
		content:
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 8¥ less.\n' +
			'Search the Company deck for\n' +
			'a Company of your choice and\n' +
			'build it paying 8¥V more.',
		stateEffects: [
			{
				type: 'choice',
				options: ['Build a Company paying 8 money less'],
				stateEffects: [
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'receive',
						amount: 8,
						source: 'supply',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Search the Company deck and build a chosen Company paying 8 money more'],
				stateEffects: [
					{
						type: 'card',
						action: 'search',
						amount: 1,
						deck: 'middle-class-company-cards',
					},
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'pay',
						amount: 8,
						source: 'self',
						target: 'supply',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-investment-opportunities-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'we | Pots . .\n' +
			'< & :\n' +
			'{ — ae\n' +
			'y s a 5 ;\n' +
			'- y .\n' +
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 8¥ less.\n' +
			'Search the Company deck for\n' +
			'a Company of your choice and\n' +
			'build it paying 8¥ more.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
			physicalIndex: 9,
			copyIndex: 2,
		},
		parsed: {
			numbers: [5, 8],
			money: [8],
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
				'of',
				'choice',
				'and',
				'it',
				'more',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'INVESTMENT OPPORTUNITIES',
		content:
			'INVESTMENT OPPORTUNITIES\n' +
			'Build a Company paying 8¥ less.\n' +
			'Search the Company deck for\n' +
			'a Company of your choice and\n' +
			'build it paying 8¥ more.',
		stateEffects: [
			{
				type: 'choice',
				options: ['Build a Company paying 8 money less'],
				stateEffects: [
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'receive',
						amount: 8,
						source: 'supply',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Search the Company deck and build a chosen Company paying 8 money more'],
				stateEffects: [
					{
						type: 'card',
						action: 'search',
						amount: 1,
						deck: 'middle-class-company-cards',
					},
					{
						type: 'company',
						action: 'build',
						target: 'self',
					},
					{
						type: 'money',
						action: 'pay',
						amount: 8,
						source: 'self',
						target: 'supply',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-foreign-market-insight-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'X -\n' +
			'* . 2 al\n' +
			', »\n' +
			'3 *\n' +
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next Export card.\n' +
			'You may replace the current\n' +
			'Export card with it. Then, Sell to\n' +
			'the Foreign Market and discard\n' +
			'the Export card that was not\n' +
			'used. You may perform each\n' +
			'transaction up to 2 times.\n' +
			'= - -',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
			physicalIndex: 10,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 3],
			keywords: [
				'foreign',
				'market',
				'insight',
				'reveal',
				'the',
				'next',
				'export',
				'card',
				'you',
				'may',
				'replace',
				'current',
				'it',
				'sell',
				'to',
				'and',
				'discard',
				'was',
				'not',
				'used',
				'perform',
				'each',
				'transaction',
				'up',
				'times',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'FOREIGN MARKET INSIGHT',
		content:
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next Export card.\n' +
			'You may replace the current\n' +
			'Export card with it. Then, Sell to\n' +
			'the Foreign Market and discard\n' +
			'the Export card that was not\n' +
			'used. You may perform each\n' +
			'transaction up to 2 times.\n' +
			'= - -',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 1,
				deck: 'export-cards',
			},
			{
				type: 'choice',
				options: ['Replace the current Export card', 'Keep the current Export card'],
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'per',
					amount: 2,
					per: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'card',
				action: 'discard',
				amount: 1,
				deck: 'export-cards',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-foreign-market-insight-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'X -\n' +
			'* . 2 al\n' +
			', »\n' +
			'3 *\n' +
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next Export card.\n' +
			'You may replace the current\n' +
			'Export card with it. Then, Sell to\n' +
			'the Foreign Market and discard\n' +
			'the Export card that was not\n' +
			'used. You may perform each\n' +
			'transaction up to 2 times.\n' +
			'= - -',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
			physicalIndex: 11,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2, 3],
			keywords: [
				'foreign',
				'market',
				'insight',
				'reveal',
				'the',
				'next',
				'export',
				'card',
				'you',
				'may',
				'replace',
				'current',
				'it',
				'sell',
				'to',
				'and',
				'discard',
				'was',
				'not',
				'used',
				'perform',
				'each',
				'transaction',
				'up',
				'times',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'FOREIGN MARKET INSIGHT',
		content:
			'FOREIGN MARKET INSIGHT\n' +
			'Reveal the next Export card.\n' +
			'You may replace the current\n' +
			'Export card with it. Then, Sell to\n' +
			'the Foreign Market and discard\n' +
			'the Export card that was not\n' +
			'used. You may perform each\n' +
			'transaction up to 2 times.\n' +
			'= - -',
		stateEffects: [
			{
				type: 'card',
				action: 'reveal',
				amount: 1,
				deck: 'export-cards',
			},
			{
				type: 'choice',
				options: ['Replace the current Export card', 'Keep the current Export card'],
			},
			{
				type: 'resource',
				action: 'sell',
				resource: 'any',
				amount: {
					type: 'per',
					amount: 2,
					per: 'available',
				},
				source: 'self',
				target: 'foreign-market',
			},
			{
				type: 'card',
				action: 'discard',
				amount: 1,
				deck: 'export-cards',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-employment-subsidy-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'Tm. f° heii\n' +
			'= _ 7 =\n' +
			'fe 4 | pete, " a\n' +
			'"2 = a\n' +
			'O _ ws ain 4 =\n' +
			'i] > aay a\n' +
			'1 @ e ¢& e\n' +
			'‘ae — fh\n' +
			'- —« _—\n' +
			'| =\n' +
			'- a ff ——<e ~~\n' +
			'EMPLOYMENT SUBSIDY\n' +
			'Get 5¥ from the State for each\n' +
			'of your Companies with\n' +
			'a Working Class Worker in it.\n' +
			'You may then perform an Extra\n' +
			'Shift in one of those Companies.\n' +
			'1A/1B /3\n' +
			'— 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
			physicalIndex: 12,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 4, 2, 1, 5, 3],
			money: [5],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'employment',
				'subsidy',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'companies',
				'working',
				'class',
				'worker',
				'in',
				'it',
				'you',
				'may',
				'perform',
				'an',
				'extra',
				'shift',
				'one',
				'those',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'EMPLOYMENT SUBSIDY',
		content:
			'EMPLOYMENT SUBSIDY\n' +
			'Get 5¥ from the State for each\n' +
			'of your Companies with\n' +
			'a Working Class Worker in it.\n' +
			'You may then perform an Extra\n' +
			'Shift in one of those Companies.\n' +
			'1A/1B /3\n' +
			'— 4',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['1A', '1B'],
			},
		],
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
			{
				type: 'company',
				action: 'produce',
				amount: 1,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-employment-subsidy-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'Tm. Ff} ei\n' +
			'= _ 7 =\n' +
			'fe 4 | pete " a\n' +
			'"2 i a\n' +
			'O _ as ain 4 =\n' +
			'i] To Garay a\n' +
			'1 @ c ¢& e\n' +
			'‘ae — fh\n' +
			'- —« _—\n' +
			'| =\n' +
			'- a ft —— se ~~\n' +
			'EMPLOYMENT SUBSIDY\n' +
			'Get 5¥ from the State for each\n' +
			'of your Companies with\n' +
			'a Working Class Worker in it.\n' +
			'You may then perform an Extra\n' +
			'Shift in one of those Companies.\n' +
			'1A/1B /3\n' +
			'— 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
			physicalIndex: 13,
			copyIndex: 2,
		},
		parsed: {
			numbers: [7, 4, 2, 1, 5, 3],
			money: [5],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'employment',
				'subsidy',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'companies',
				'working',
				'class',
				'worker',
				'in',
				'it',
				'you',
				'may',
				'perform',
				'an',
				'extra',
				'shift',
				'one',
				'those',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'EMPLOYMENT SUBSIDY',
		content:
			'EMPLOYMENT SUBSIDY\n' +
			'Get 5¥ from the State for each\n' +
			'of your Companies with\n' +
			'a Working Class Worker in it.\n' +
			'You may then perform an Extra\n' +
			'Shift in one of those Companies.\n' +
			'1A/1B /3\n' +
			'— 4',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['1A', '1B'],
			},
		],
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
			{
				type: 'company',
				action: 'produce',
				amount: 1,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-public-opinion-polling-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			': ae .\n' +
			'3 Ree ;\n' +
			': a\n' +
			'! _ i : aa\n' +
			',\n' +
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may then\n' +
			'call for an Immediate Vote without\n' +
			'spending @. If you do, use those 5\n' +
			'cubes instead of drawing new ones.\n' +
			'If not, return them to the bag.\n' +
			'. 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
			physicalIndex: 14,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 5, 4],
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
		role: 'middleClass',
		category: 'base',
		name: 'PUBLIC OPINION POLLING',
		content:
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may then\n' +
			'call for an Immediate Vote without\n' +
			'spending @. If you do, use those 5\n' +
			'cubes instead of drawing new ones.\n' +
			'If not, return them to the bag.\n' +
			'. 4',
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
		id: 'middle-class-action-public-opinion-polling-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			': ae .\n' +
			'3 Ree ;\n' +
			': a\n' +
			'! _ i : aa\n' +
			',\n' +
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may then\n' +
			'call for an Immediate Vote without\n' +
			'spending @. If you do, use those 5\n' +
			'cubes instead of drawing new ones.\n' +
			'If not, return them to the bag.\n' +
			'. 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
			physicalIndex: 15,
			copyIndex: 2,
		},
		parsed: {
			numbers: [3, 5, 4],
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
		role: 'middleClass',
		category: 'base',
		name: 'PUBLIC OPINION POLLING',
		content:
			'PUBLIC OPINION POLLING\n' +
			'Propose a Bill and reveal 5 Voting\n' +
			'cubes from the bag. You may then\n' +
			'call for an Immediate Vote without\n' +
			'spending @. If you do, use those 5\n' +
			'cubes instead of drawing new ones.\n' +
			'If not, return them to the bag.\n' +
			'. 4',
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
		id: 'middle-class-action-migration-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'“ —__-— Sh\n' +
			'2 =" i ”\n' +
			'ne WT a Te\n' +
			'be SRR pes\n' +
			'— =\n' +
			'ay a\n' +
			'Pwecerte\n' +
			'a bs)\n' +
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'nn',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
			physicalIndex: 16,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 4, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'migration',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
				'way',
				'nn',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'MIGRATION',
		content:
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'nn',
		stateEffects: [
			{
				type: 'worker',
				action: 'remove',
				amount: {
					type: 'up-to',
					amount: 2,
				},
				workerType: 'any',
				source: 'unemployed-workers',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-migration-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'“ —_--— Sh\n' +
			'2 &" i ”\n' +
			'ae WT Te\n' +
			'be SRR pes\n' +
			'— =\n' +
			'ay a\n' +
			'Pwecerte\n' +
			'a bs)\n' +
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'nn',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
			physicalIndex: 17,
			copyIndex: 2,
		},
		parsed: {
			numbers: [2, 4, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'migration',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
				'way',
				'nn',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'MIGRATION',
		content:
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'nn',
		stateEffects: [
			{
				type: 'worker',
				action: 'remove',
				amount: {
					type: 'up-to',
					amount: 2,
				},
				workerType: 'any',
				source: 'unemployed-workers',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-fake-news-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'~* Bs Nnct + j = Se\n' +
			'ee 4 =\n' +
			'a, SS ae\n' +
			'VE gx “Noe\n' +
			'FAKE NEWS\n' +
			'Draw 6 Voting cubes from\n' +
			'the bag. Remove up to 4 of them\n' +
			'and return the rest to the bag.\n' +
			'=',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
			physicalIndex: 18,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 6],
			resources: ['influence'],
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
		role: 'middleClass',
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
		id: 'middle-class-action-specialization-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'nn\n' +
			'J\n' +
			'SPECIALIZATION\n' +
			'Place a skilled Working Class Worker\n' +
			'of your choice from the Supply in\n' +
			'the Unemployed Workers area. Then,\n' +
			'assign up to 3 unemployed Working\n' +
			'Class Workers to your Companies.\n' +
			'7B/7C\n' +
			'a',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
			physicalIndex: 19,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 7],
			policies: ['7B', '7C'],
			keywords: [
				'specialization',
				'place',
				'skilled',
				'working',
				'class',
				'worker',
				'of',
				'choice',
				'the',
				'supply',
				'in',
				'unemployed',
				'workers',
				'area',
				'assign',
				'up',
				'to',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SPECIALIZATION',
		content:
			'SPECIALIZATION\n' +
			'Place a skilled Working Class Worker\n' +
			'of your choice from the Supply in\n' +
			'the Unemployed Workers area. Then,\n' +
			'assign up to 3 unemployed Working\n' +
			'Class Workers to your Companies.\n' +
			'7B/7C\n' +
			'a',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'unemployed-workers',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 3,
				},
				workerType: 'any',
				source: 'unemployed-workers',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-specialization-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'nn\n' +
			'J\n' +
			'SPECIALIZATION\n' +
			'Place a skilled Working Class Worker\n' +
			'of your choice from the Supply in\n' +
			'the Unemployed Workers area. Then,\n' +
			'assign up to 3 unemployed Working\n' +
			'Class Workers to your Companies.\n' +
			'7B/7C\n' +
			'a',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
			physicalIndex: 20,
			copyIndex: 2,
		},
		parsed: {
			numbers: [3, 7],
			policies: ['7B', '7C'],
			keywords: [
				'specialization',
				'place',
				'skilled',
				'working',
				'class',
				'worker',
				'of',
				'choice',
				'the',
				'supply',
				'in',
				'unemployed',
				'workers',
				'area',
				'assign',
				'up',
				'to',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SPECIALIZATION',
		content:
			'SPECIALIZATION\n' +
			'Place a skilled Working Class Worker\n' +
			'of your choice from the Supply in\n' +
			'the Unemployed Workers area. Then,\n' +
			'assign up to 3 unemployed Working\n' +
			'Class Workers to your Companies.\n' +
			'7B/7C\n' +
			'a',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['7B', '7C'],
			},
		],
		stateEffects: [
			{
				type: 'worker',
				action: 'add',
				amount: 1,
				workerType: 'any',
				source: 'supply',
				target: 'unemployed-workers',
			},
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 3,
				},
				workerType: 'any',
				source: 'unemployed-workers',
				target: 'company',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-state-scholarship-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'q 7 on)! 3\n' +
			'af 4\n' +
			'yr, . a\n' +
			'C *\n' +
			'~ 9 «\n' +
			': \\\n' +
			'& tN\n' +
			'7, ,\n' +
			'STATE SCHOLARSHIP\n' +
			'Buy from the State, up to your\n' +
			'Population, paying half the cost\n' +
			'(rounded up).\n' +
			'_ id',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
			physicalIndex: 21,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 3, 4, 9],
			money: [4],
			resources: ['money'],
			keywords: [
				'state',
				'scholarship',
				'buy',
				'the',
				'up',
				'to',
				'population',
				'paying',
				'half',
				'cost',
				'rounded',
				'id',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'STATE SCHOLARSHIP',
		content: 'STATE SCHOLARSHIP\nBuy from the State, up to your\nPopulation, paying half the cost\n(rounded up).\n_ id',
		stateEffects: [
			{
				type: 'resource',
				action: 'buy',
				resource: 'education',
				amount: {
					type: 'up-to',
					amount: 'population',
				},
				source: 'state',
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
				target: 'state',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-highlight-social-issues-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText: '- © *. "’\nHIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15¥.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-3.png',
			position: {
				x: 6,
				y: 3,
			},
			physicalIndex: 22,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3, 15],
			money: [15],
			resources: ['money'],
			keywords: ['highlight', 'social', 'issues', 'buy', 'the', 'state', 'for'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'HIGHLIGHT SOCIAL ISSUES',
		content: 'HIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15¥.',
		stateEffects: [
			{
				type: 'resource',
				action: 'buy',
				resource: 'influence',
				amount: 3,
				source: 'state',
				target: 'self',
			},
			{
				type: 'money',
				action: 'pay',
				amount: 15,
				source: 'self',
				target: 'state',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-health-crisis-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'7Y 5 ~*~\nPX 4 .\n“¢ a Se\n_*% ~~ & c\n= Err ~~ SEgl:\nHEALTH CRISIS\nSell up to 6\nto the State for 10¥ each.\n/3\ny',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-3.png',
			position: {
				x: 7,
				y: 3,
			},
			physicalIndex: 23,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 5, 4, 6, 10, 3],
			money: [7, 10, 3],
			resources: ['healthcare', 'money'],
			keywords: ['health', 'crisis', 'sell', 'up', 'to', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'HEALTH CRISIS',
		content: 'HEALTH CRISIS\nSell up to 6\nto the State for 10¥ each.\n/3\ny',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'healthcare',
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
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-unemployment-initiative-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'—_\n' +
			"bs '\n" +
			'= . )\n' +
			'D b) € ~ -—_ ’ “ ~\n' +
			'i ~~\n' +
			'{Ma 4\n' +
			'a *f “aS\n' +
			'/ + ane ea f y .\n' +
			'UNEMPLOYMENT INITIATIVE |\n' +
			'PROGRAM\n' +
			'Assign up to 3 unemployed |\n' +
			'Working Class Workers to your\n' +
			'Companies. Get 5¥ from the\n' +
			'State for each Worker assigned\n' +
			'this way. |\n' +
			'REQUIREMENT\n' +
			'a”',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-3.png',
			position: {
				x: 8,
				y: 3,
			},
			physicalIndex: 24,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 3, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'unemployment',
				'initiative',
				'program',
				'assign',
				'up',
				'to',
				'unemployed',
				'working',
				'class',
				'workers',
				'companies',
				'get',
				'the',
				'state',
				'for',
				'each',
				'worker',
				'assigned',
				'way',
				'requirement',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'UNEMPLOYMENT INITIATIVE PROGRAM',
		content:
			'UNEMPLOYMENT INITIATIVE PROGRAM\n' +
			'Assign up to 3 unemployed |\n' +
			'Working Class Workers to your\n' +
			'Companies. Get 5¥ from the\n' +
			'State for each Worker assigned\n' +
			'this way. |\n' +
			'REQUIREMENT\n' +
			'a”',
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: {
					type: 'up-to',
					amount: 3,
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
		id: 'middle-class-action-higher-education-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'yj ue < a -\n' +
			'ea\n' +
			'Es |\n' +
			'f -\n' +
			'| f ws\n' +
			'I f P,) _— >\n' +
			'7 2 eee\n' +
			'c i ee h j —\n' +
			'a ee +\n' +
			'ky,\n' +
			'HIGHER EDUCATION PROGRAM\n' +
			'Sell up to 6\n' +
			'to the State for 10¥ each.\n' +
			'/3',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
			physicalIndex: 25,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7, 2, 6, 10, 3],
			money: [10],
			resources: ['education', 'money'],
			keywords: ['higher', 'education', 'program', 'sell', 'up', 'to', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'HIGHER EDUCATION PROGRAM',
		content: 'HIGHER EDUCATION PROGRAM\nSell up to 6\nto the State for 10¥ each.\n/3',
		stateEffects: [
			{
				type: 'resource',
				action: 'sell',
				resource: 'education',
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
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-voice-of-middle-class-workers-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'ae uv a\n' +
			'— FUT » Da\n' +
			'ey" ti a A\n' +
			'ontla\n' +
			'Jo » =\n' +
			'Bt a WF\n' +
			'VOICE OF MIDDLE CLASS\n' +
			'WORKERS\n' +
			'Add Voting cubes to the bag\n' +
			'equal to 2 plus the number\n' +
			'of Public and Capitalist Class\n' +
			'Companies where your Workers\n' +
			'are Employed.\n' +
			'i',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
			physicalIndex: 26,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'voice',
				'of',
				'middle',
				'class',
				'workers',
				'add',
				'voting',
				'cubes',
				'to',
				'the',
				'bag',
				'equal',
				'plus',
				'number',
				'public',
				'and',
				'capitalist',
				'companies',
				'where',
				'are',
				'employed',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'VOICE OF MIDDLE CLASS WORKERS',
		content:
			'VOICE OF MIDDLE CLASS WORKERS\n' +
			'Add Voting cubes to the bag\n' +
			'equal to 2 plus the number\n' +
			'of Public and Capitalist Class\n' +
			'Companies where your Workers\n' +
			'are Employed.\n' +
			'i',
		stateEffects: [
			{
				type: 'vote',
				action: 'add-cubes',
				amount: 2,
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: {
					type: 'per',
					amount: 1,
					per: 'company',
					target: 'state',
				},
				target: 'bag',
			},
			{
				type: 'vote',
				action: 'add-cubes',
				amount: {
					type: 'per',
					amount: 1,
					per: 'company',
					target: 'capitalist',
				},
				target: 'bag',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-new-theme-park-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText: '— Soa a Fe\nG . ‘\nNEW THEME PARK\nPay 6¥ per Population.\nGain 1 Prosperity.\n—',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
			physicalIndex: 27,
			copyIndex: 1,
		},
		parsed: {
			numbers: [6, 1],
			money: [6],
			resources: ['money'],
			keywords: ['new', 'theme', 'park', 'pay', 'per', 'population', 'gain', 'prosperity'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'NEW THEME PARK',
		content: 'NEW THEME PARK\nPay 6¥ per Population.\nGain 1 Prosperity.\n—',
		stateEffects: [
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 6,
					per: 'population',
				},
				source: 'self',
				target: 'supply',
			},
			{
				type: 'prosperity',
				action: 'gain',
				amount: 1,
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-interest-groups-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'||\n' +
			';\n' +
			"' |\n" +
			'aA \\W -\n' +
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			"until you reveal 3 opponents'\n" +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
			physicalIndex: 28,
			copyIndex: 1,
		},
		parsed: {
			numbers: [3],
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
		role: 'middleClass',
		category: 'base',
		name: 'INTEREST GROUPS',
		content:
			'INTEREST GROUPS\n' +
			'Reveal Voting cubes from the bag\n' +
			"until you reveal 3 opponents'\n" +
			'cubes. Replace them with your\n' +
			'Voting cubes and return all\n' +
			'revealed cubes to the bag.',
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
		id: 'middle-class-action-export-subsidy-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4\n' +
			'—\n' +
			'| ey -§\n' +
			'Olt a ll\n' +
			'EXPORT SUBSIDY\n' +
			'Sell to the Foreign Market.\n' +
			'For every transaction you make,\n' +
			'get 5¥ from the State.\n' +
			'S',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
			physicalIndex: 29,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'export',
				'subsidy',
				'sell',
				'to',
				'the',
				'foreign',
				'market',
				'for',
				'every',
				'transaction',
				'you',
				'make',
				'get',
				'state',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'EXPORT SUBSIDY',
		content: 'EXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
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
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 5,
					per: 'available',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-export-subsidy-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4\n' +
			'—\n' +
			'| ey -§\n' +
			'Olt a ll\n' +
			'EXPORT SUBSIDY\n' +
			'Sell to the Foreign Market.\n' +
			'For every transaction you make,\n' +
			'get 5¥ from the State.\n' +
			'S',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
			physicalIndex: 30,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'export',
				'subsidy',
				'sell',
				'to',
				'the',
				'foreign',
				'market',
				'for',
				'every',
				'transaction',
				'you',
				'make',
				'get',
				'state',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'EXPORT SUBSIDY',
		content: 'EXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
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
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 5,
					per: 'available',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-migration-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'— ae"\n' +
			'—_. & “\n' +
			'——_ i Ee T\n' +
			'ee LOR yar\n' +
			'=F <\n' +
			'La\n' +
			'= gS\n' +
			'ea 1) Be == “\n' +
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5 ¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'7',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
			physicalIndex: 31,
			copyIndex: 3,
		},
		parsed: {
			numbers: [1, 4, 2, 5, 10, 7],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'migration',
				'if',
				'you',
				'have',
				'at',
				'least',
				'unemployed',
				'workers',
				'remove',
				'up',
				'to',
				'of',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
				'way',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'MIGRATION',
		content:
			'MIGRATION\n' +
			'If you have at least 4 Unemployed\n' +
			'Workers, remove up to 2 of them.\n' +
			'Get 5 ¥ for each Unskilled Worker\n' +
			'and 10¥ for each Skilled Worker\n' +
			'removed this way.\n' +
			'7',
		stateEffects: [
			{
				type: 'worker',
				action: 'remove',
				amount: {
					type: 'up-to',
					amount: 2,
				},
				workerType: 'any',
				source: 'unemployed-workers',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 5,
				source: 'supply',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: 10,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-labor-market-deregulation-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			"' ry\n" +
			'2 4\n' +
			's a : . ™ : of\n' +
			'i. aa TOA Y\n' +
			'LABOR MARKET\n' +
			'DEREGULATION\n' +
			'Assign any number of\n' +
			'unemployed Workers. If [Ze is in\n' +
			'effect, you may also reassign any\n' +
			'number of Workers already\n' +
			'assigned to other Companies.\n' +
			'2B /2C\n' +
			'.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-4.png',
			position: {
				x: 8,
				y: 4,
			},
			physicalIndex: 32,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2, 4],
			policies: ['2B', '2C'],
			keywords: [
				'labor',
				'market',
				'deregulation',
				'assign',
				'any',
				'number',
				'of',
				'unemployed',
				'workers',
				'if',
				'ze',
				'is',
				'in',
				'effect',
				'you',
				'may',
				'also',
				'reassign',
				'already',
				'assigned',
				'to',
				'other',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'LABOR MARKET DEREGULATION',
		content:
			'LABOR MARKET DEREGULATION\n' +
			'Assign any number of\n' +
			'unemployed Workers. If [Ze is in\n' +
			'effect, you may also reassign any\n' +
			'number of Workers already\n' +
			'assigned to other Companies.\n' +
			'2B /2C\n' +
			'.',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'worker',
				action: 'assign',
				amount: 'all',
				workerType: 'any',
				source: 'unemployed-workers',
				target: 'company',
			},
			{
				type: 'worker',
				action: 'swap',
				amount: 'all',
				workerType: 'any',
				source: 'company',
				target: 'company',
				condition: {
					type: 'policy',
					mode: 'any',
					policies: ['2A'],
				},
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-personal-consumption-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'? a il\n' +
			'aed 7 at\n' +
			'‘ Dy wn ?.\n' +
			': ; oy\n' +
			'™ é\n' +
			'PERSONAL CONSUMPTION\n' +
			'Buy a good or service from\n' +
			'any number of sources, up to\n' +
			'your Population from each.\n' +
			'Buy a good or service from\n' +
			'a single source, up to twice\n' +
			'your Population.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
			physicalIndex: 33,
			copyIndex: 1,
		},
		parsed: {
			numbers: [7],
			keywords: [
				'personal',
				'consumption',
				'buy',
				'good',
				'or',
				'service',
				'any',
				'number',
				'of',
				'sources',
				'up',
				'to',
				'population',
				'each',
				'single',
				'source',
				'twice',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'PERSONAL CONSUMPTION',
		content:
			'PERSONAL CONSUMPTION\n' +
			'Buy a good or service from\n' +
			'any number of sources, up to\n' +
			'your Population from each.\n' +
			'Buy a good or service from\n' +
			'a single source, up to twice\n' +
			'your Population.',
		stateEffects: [
			{
				type: 'choice',
				options: ['Buy one good or service from any number of sources, up to Population from each'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'any',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'any',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Buy one good or service from one source, up to twice Population'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'any',
						amount: {
							type: 'per',
							amount: 2,
							per: 'population',
						},
						source: 'any',
						target: 'self',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-personal-consumption-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'? mi ie\n' +
			'aed 7 at\n' +
			'‘ Dy wn ?.\n' +
			': ; wy\n' +
			'™ é\n' +
			'PERSONAL CONSUMPTION\n' +
			'Buy a good or service from\n' +
			'any number of sources, up to\n' +
			'your Population from each.\n' +
			'Buy a good or service from\n' +
			'a single source, up to twice\n' +
			'your Population.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-5.png',
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
				'personal',
				'consumption',
				'buy',
				'good',
				'or',
				'service',
				'any',
				'number',
				'of',
				'sources',
				'up',
				'to',
				'population',
				'each',
				'single',
				'source',
				'twice',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'PERSONAL CONSUMPTION',
		content:
			'PERSONAL CONSUMPTION\n' +
			'Buy a good or service from\n' +
			'any number of sources, up to\n' +
			'your Population from each.\n' +
			'Buy a good or service from\n' +
			'a single source, up to twice\n' +
			'your Population.',
		stateEffects: [
			{
				type: 'choice',
				options: ['Buy one good or service from any number of sources, up to Population from each'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'any',
						amount: {
							type: 'up-to',
							amount: 'population',
						},
						source: 'any',
						target: 'self',
					},
				],
			},
			{
				type: 'choice',
				options: ['Buy one good or service from one source, up to twice Population'],
				stateEffects: [
					{
						type: 'resource',
						action: 'buy',
						resource: 'any',
						amount: {
							type: 'per',
							amount: 2,
							per: 'population',
						},
						source: 'any',
						target: 'self',
					},
				],
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-immigration-reform-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'and > a\n' +
			'——e |\n' +
			'a Ah. ie\n' +
			'Te ; , ae af)\n' +
			'i is ‘ neal\n' +
			'IMMIGRATION REFORM\n' +
			'Propose a Bill for Immigration.\n' +
			'Add 2 Voting cubes to the bag.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
			physicalIndex: 35,
			copyIndex: 1,
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: ['immigration', 'reform', 'propose', 'bill', 'for', 'add', 'voting', 'cubes', 'to', 'the', 'bag'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'IMMIGRATION REFORM',
		content: 'IMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
		stateEffects: [
			{
				type: 'policy',
				action: 'propose',
				policy: 'immigration',
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
		id: 'middle-class-action-growing-business-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'I fe = be\n' +
			'“ . _ y ¥ - ae i\n' +
			'; ‘ J\n' +
			'sn if a“ :\n' +
			'GROWING BUSINESS\n' +
			'Build a Storage for free and place it\n' +
			'beneath your board, corresponding\n' +
			'to a specific resource. You may then\n' +
			'Build a Company. If that Company\n' +
			'produces that resource, pay 4¥ less.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
			physicalIndex: 36,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4],
			money: [4],
			resources: ['money'],
			keywords: [
				'growing',
				'business',
				'build',
				'storage',
				'for',
				'free',
				'and',
				'place',
				'it',
				'beneath',
				'board',
				'corresponding',
				'to',
				'specific',
				'resource',
				'you',
				'may',
				'company',
				'if',
				'produces',
				'pay',
				'less',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'GROWING BUSINESS',
		content:
			'GROWING BUSINESS\n' +
			'Build a Storage for free and place it\n' +
			'beneath your board, corresponding\n' +
			'to a specific resource. You may then\n' +
			'Build a Company. If that Company\n' +
			'produces that resource, pay 4¥ less.',
		stateEffects: [
			{
				type: 'storage',
				action: 'build',
				resource: 'any',
				target: 'self',
			},
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'money',
				action: 'receive',
				amount: 4,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-growing-business-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'I fe = be\n' +
			'“ . _ y ¥ - ae i\n' +
			'; ‘ J\n' +
			'sn if a“ :\n' +
			'GROWING BUSINESS\n' +
			'Build a Storage for free and place it\n' +
			'beneath your board, corresponding\n' +
			'to a specific resource. You may then\n' +
			'Build a Company. If that Company\n' +
			'produces that resource, pay 4¥ less.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
			physicalIndex: 37,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4],
			money: [4],
			resources: ['money'],
			keywords: [
				'growing',
				'business',
				'build',
				'storage',
				'for',
				'free',
				'and',
				'place',
				'it',
				'beneath',
				'board',
				'corresponding',
				'to',
				'specific',
				'resource',
				'you',
				'may',
				'company',
				'if',
				'produces',
				'pay',
				'less',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'GROWING BUSINESS',
		content:
			'GROWING BUSINESS\n' +
			'Build a Storage for free and place it\n' +
			'beneath your board, corresponding\n' +
			'to a specific resource. You may then\n' +
			'Build a Company. If that Company\n' +
			'produces that resource, pay 4¥ less.',
		stateEffects: [
			{
				type: 'storage',
				action: 'build',
				resource: 'any',
				target: 'self',
			},
			{
				type: 'company',
				action: 'build',
				target: 'self',
			},
			{
				type: 'money',
				action: 'receive',
				amount: 4,
				source: 'supply',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-public-sector-overtime-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'pe\n' +
			'5 anf\n' +
			'- <- ~ 4\n' +
			'een L Se A\n' +
			'PUBLIC SECTOR OVERTIME\n' +
			'Choose an operational Public\n' +
			'Company. The State pays its\n' +
			"Workers' Wages and performs\n" +
			'a Production for that Company.\n' +
			'You may then Buy Goods or\n' +
			'Services from the State of the type\n' +
			'produced by that Company,\n' +
			'up to your Population.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
			physicalIndex: 38,
			copyIndex: 1,
		},
		parsed: {
			numbers: [5, 4],
			resources: ['money'],
			keywords: [
				'public',
				'sector',
				'overtime',
				'choose',
				'an',
				'operational',
				'company',
				'the',
				'state',
				'pays',
				'its',
				'workers',
				'wages',
				'and',
				'performs',
				'production',
				'for',
				'you',
				'may',
				'buy',
				'goods',
				'or',
				'services',
				'of',
				'type',
				'produced',
				'by',
				'up',
				'to',
				'population',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'PUBLIC SECTOR OVERTIME',
		content:
			'PUBLIC SECTOR OVERTIME\n' +
			'Choose an operational Public\n' +
			'Company. The State pays its\n' +
			"Workers' Wages and performs\n" +
			'a Production for that Company.\n' +
			'You may then Buy Goods or\n' +
			'Services from the State of the type\n' +
			'produced by that Company,\n' +
			'up to your Population.',
		stateEffects: [
			{
				type: 'company',
				action: 'produce',
				target: 'state',
			},
			{
				type: 'money',
				action: 'pay',
				amount: {
					type: 'per',
					amount: 1,
					per: 'employed-worker',
					target: 'state',
				},
				source: 'state',
				target: 'other',
			},
			{
				type: 'resource',
				action: 'buy',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'population',
				},
				source: 'state',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-supplemental-income-program-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4} \\ > a >\n' +
			'Py\n' +
			', m7\n' +
			'at\n' +
			'.\n' +
			'3\n' +
			'a a a a\n' +
			'SUPPLEMENTAL INCOME\n' +
			'PROGRAM\n' +
			'Get 2% from the State for each of\n' +
			'your employed Workers in Public\n' +
			'and Capitalist Class Companies.\n' +
			'You may then Buy Goods\n' +
			'& Services.\n' +
			'2B /2C /5 ;\n' +
			'y >',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
			physicalIndex: 39,
			copyIndex: 1,
		},
		parsed: {
			numbers: [4, 7, 3, 2, 5],
			policies: ['2B', '2C'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'employed',
				'workers',
				'in',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
				'you',
				'may',
				'buy',
				'goods',
				'services',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SUPPLEMENTAL INCOME PROGRAM',
		content:
			'SUPPLEMENTAL INCOME PROGRAM\n' +
			'Get 2% from the State for each of\n' +
			'your employed Workers in Public\n' +
			'and Capitalist Class Companies.\n' +
			'You may then Buy Goods\n' +
			'& Services.\n' +
			'2B /2C /5 ;\n' +
			'y >',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 2,
					per: 'employed-worker',
					target: 'state',
				},
				source: 'state',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 2,
					per: 'employed-worker',
					target: 'capitalist',
				},
				source: 'state',
				target: 'self',
			},
			{
				type: 'resource',
				action: 'buy',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'any',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
	{
		id: 'middle-class-action-supplemental-income-program-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4} \\ > a >\n' +
			'Py\n' +
			', m7\n' +
			'at\n' +
			'..\n' +
			'3\n' +
			'a a a ae\n' +
			'SUPPLEMENTAL INCOME\n' +
			'PROGRAM\n' +
			'Get 2% from the State for each of\n' +
			'your employed Workers in Public\n' +
			'and Capitalist Class Companies.\n' +
			'You may then Buy Goods\n' +
			'& Services.\n' +
			'2B /2C /5 ;\n' +
			'y >',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-5.png',
			position: {
				x: 8,
				y: 5,
			},
			physicalIndex: 40,
			copyIndex: 2,
		},
		parsed: {
			numbers: [4, 7, 3, 2, 5],
			policies: ['2B', '2C'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'the',
				'state',
				'for',
				'each',
				'of',
				'employed',
				'workers',
				'in',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
				'you',
				'may',
				'buy',
				'goods',
				'services',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'SUPPLEMENTAL INCOME PROGRAM',
		content:
			'SUPPLEMENTAL INCOME PROGRAM\n' +
			'Get 2% from the State for each of\n' +
			'your employed Workers in Public\n' +
			'and Capitalist Class Companies.\n' +
			'You may then Buy Goods\n' +
			'& Services.\n' +
			'2B /2C /5 ;\n' +
			'y >',
		requirements: [
			{
				type: 'policy',
				mode: 'any',
				policies: ['2B', '2C'],
			},
		],
		stateEffects: [
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 2,
					per: 'employed-worker',
					target: 'state',
				},
				source: 'state',
				target: 'self',
			},
			{
				type: 'money',
				action: 'gain',
				amount: {
					type: 'per',
					amount: 2,
					per: 'employed-worker',
					target: 'capitalist',
				},
				source: 'state',
				target: 'self',
			},
			{
				type: 'resource',
				action: 'buy',
				resource: 'any',
				amount: {
					type: 'up-to',
					amount: 'available',
				},
				source: 'any',
				target: 'self',
			},
		],
		stateEffectsCoverage: 'complete',
	},
] satisfies MiddleClassActionCardsCard[];

export default middleClassActionCards;
