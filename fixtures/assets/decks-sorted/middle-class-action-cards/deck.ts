import type { ParsedActionCard } from '../types';

interface MiddleClassActionCardsCard extends ParsedActionCard {}

const middleClassActionCards = [
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-1-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4g\na -\n—< =\npy ety . >\nHEALTHCARE BENEFITS\nBuy & from the State, up to your\nPopulation, paying half the cost\n(rounded up).\nREQUIREMENT\n—',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [4],
			resources: ['healthcare', 'money'],
			keywords: [
				'ety',
				'healthcare',
				'benefits',
				'buy',
				'from',
				'the',
				'state',
				'your',
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
		name: 'Middle Class Actions',
		content:
			'4g\na -\n—< =\npy ety . >\nHEALTHCARE BENEFITS\nBuy & from the State, up to your\nPopulation, paying half the cost\n(rounded up).\nREQUIREMENT\n—',
		effects: [
			{
				type: 'raw',
				text: '4g\na -\n—< =\npy ety . >\nHEALTHCARE BENEFITS\nBuy & from the State, up to your\nPopulation, paying half the cost\n(rounded up).\nREQUIREMENT\n—',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-2-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'<\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
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
				'from',
				'the',
				'foreign',
				'market',
				'your',
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
			'<\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
		effects: [
			{
				type: 'raw',
				text: '<\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-3-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'¥\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
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
				'from',
				'the',
				'foreign',
				'market',
				'your',
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
			'¥\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
		effects: [
			{
				type: 'raw',
				text: '¥\nIMPORT SUBSIDY\nYou may Buy ¢ or 0 from the\nForeign Market, up to your Popu-\nlation, without paying any Tariffs.\n— a Z',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-4-1',
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
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['small', 'business', 'grant', 'build', 'company', 'the', 'state', 'pays', 'its', 'cost'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'ee *t',
		content: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		effects: [
			{
				type: 'raw',
				text: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-5-1',
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
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['small', 'business', 'grant', 'build', 'company', 'the', 'state', 'pays', 'its', 'cost'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'ee *t',
		content: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
		effects: [
			{
				type: 'raw',
				text: '> ee *t =\n¥ i mr? i\n‘ ae “a 2 _\nSMALL BUSINESS GRANT\nBuild a Company.\nThe State pays its cost.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-6-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-1.png',
			position: {
				x: 6,
				y: 1,
			},
		},
		parsed: {
			numbers: [7],
			policies: ['7B', '7C'],
			keywords: [
				'land',
				'opportunity',
				'build',
				'company',
				'using',
				'skilled',
				'middle',
				'class',
				'worker',
				'your',
				'choice',
				'from',
				'the',
				'supply',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Oy us Fe ee',
		content:
			'\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		effects: [
			{
				type: 'raw',
				text: '\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-7-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-1.png',
			position: {
				x: 7,
				y: 1,
			},
		},
		parsed: {
			numbers: [7],
			policies: ['7B', '7C'],
			keywords: [
				'land',
				'opportunity',
				'build',
				'company',
				'using',
				'skilled',
				'middle',
				'class',
				'worker',
				'your',
				'choice',
				'from',
				'the',
				'supply',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Oy us Fe ee',
		content:
			'\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
		effects: [
			{
				type: 'raw',
				text: '\\\n* Oy us Fe ee\nLAND OF OPPORTUNITY\nBuild a Company using a skilled\nMiddle Class Worker of your\nchoice from the Supply.\n7B /7C',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-8-1',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-1.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'we | P oats . .\n“ & :\n“{ — ae\niy s a 5 :\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥V more.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-1.png',
			position: {
				x: 8,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 8],
			money: [8],
			resources: ['money'],
			keywords: [
				'oats',
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
		role: 'middleClass',
		category: 'base',
		name: 'we | P oats .',
		content:
			'we | P oats . .\n“ & :\n“{ — ae\niy s a 5 :\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥V more.',
		effects: [
			{
				type: 'raw',
				text: 'we | P oats . .\n“ & :\n“{ — ae\niy s a 5 :\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥V more.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-1-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'we | Pots . .\n< & :\n{ — ae\ny s a 5 ;\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥ more.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [5, 8],
			money: [8],
			resources: ['money'],
			keywords: [
				'pots',
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
		role: 'middleClass',
		category: 'base',
		name: 'we | Pots .',
		content:
			'we | Pots . .\n< & :\n{ — ae\ny s a 5 ;\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥ more.',
		effects: [
			{
				type: 'raw',
				text: 'we | Pots . .\n< & :\n{ — ae\ny s a 5 ;\n- y .\nINVESTMENT OPPORTUNITIES\nBuild a Company paying 8¥ less.\nSearch the Company deck for\na Company of your choice and\nbuild it paying 8¥ more.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-2-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'X -\n* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
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
				'with',
				'then',
				'sell',
				'and',
				'discard',
				'that',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'X -',
		content:
			'* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
		effects: [
			{
				type: 'raw',
				text: '* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-3-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'X -\n* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
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
				'with',
				'then',
				'sell',
				'and',
				'discard',
				'that',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'X -',
		content:
			'* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
		effects: [
			{
				type: 'raw',
				text: '* . 2 al\n, »\n3 *\nFOREIGN MARKET INSIGHT\nReveal the next Export card.\nYou may replace the current\nExport card with it. Then, Sell to\nthe Foreign Market and discard\nthe Export card that was not\nused. You may perform each\ntransaction up to 2 times.\n= - -',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-4-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'Tm. f° heii\n= _ 7 =\nfe 4 | pete, " a\n"2 = a\nO _ ws ain 4 =\ni] > aay a\n1 @ e ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ff ——<e ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [7, 4, 2, 1, 5, 3],
			money: [5],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'heii',
				'pete',
				'ain',
				'aay',
				'employment',
				'subsidy',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'your',
				'companies',
				'with',
				'working',
				'class',
				'worker',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Tm. f° heii',
		content:
			'= _ 7 =\nfe 4 | pete, " a\n"2 = a\nO _ ws ain 4 =\ni] > aay a\n1 @ e ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ff ——<e ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
		effects: [
			{
				type: 'raw',
				text: '= _ 7 =\nfe 4 | pete, " a\n"2 = a\nO _ ws ain 4 =\ni] > aay a\n1 @ e ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ff ——<e ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-5-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'Tm. Ff} ei\n= _ 7 =\nfe 4 | pete " a\n"2 i a\nO _ as ain 4 =\ni] To Garay a\n1 @ c ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ft —— se ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [7, 4, 2, 1, 5, 3],
			money: [5],
			policies: ['1A', '1B'],
			resources: ['money'],
			keywords: [
				'pete',
				'ain',
				'garay',
				'employment',
				'subsidy',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'your',
				'companies',
				'with',
				'working',
				'class',
				'worker',
				'you',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Tm. Ff} ei',
		content:
			'= _ 7 =\nfe 4 | pete " a\n"2 i a\nO _ as ain 4 =\ni] To Garay a\n1 @ c ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ft —— se ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
		effects: [
			{
				type: 'raw',
				text: '= _ 7 =\nfe 4 | pete " a\n"2 i a\nO _ as ain 4 =\ni] To Garay a\n1 @ c ¢& e\n‘ae — fh\n- —« _—\n| =\n- a ft —— se ~~\nEMPLOYMENT SUBSIDY\nGet 5¥ from the State for each\nof your Companies with\na Working Class Worker in it.\nYou may then perform an Extra\nShift in one of those Companies.\n1A/1B /3\n— 4',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-6-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-2.png',
			position: {
				x: 6,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 5, 4],
			resources: ['influence'],
			keywords: [
				'ree',
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
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
		effects: [
			{
				type: 'raw',
				text: ': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-7-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-2.png',
			position: {
				x: 7,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 5, 4],
			resources: ['influence'],
			keywords: [
				'ree',
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
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
		effects: [
			{
				type: 'raw',
				text: ': ae .\n3 Ree ;\n: a\n! _ i : aa\n,\nPUBLIC OPINION POLLING\nPropose a Bill and reveal 5 Voting\ncubes from the bag. You may then\ncall for an Immediate Vote without\nspending @. If you do, use those 5\ncubes instead of drawing new ones.\nIf not, return them to the bag.\n. 4',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-8-2',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-2.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'“ —__-— Sh\n2 =" i ”\nne WT a Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-2.png',
			position: {
				x: 8,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 4, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'srr',
				'pes',
				'pwecerte',
				'migration',
				'you',
				'have',
				'least',
				'unemployed',
				'workers',
				'remove',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'“ —__-— Sh\n2 =" i ”\nne WT a Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
		effects: [
			{
				type: 'raw',
				text: '“ —__-— Sh\n2 =" i ”\nne WT a Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-1-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'“ —_--— Sh\n2 &" i ”\nae WT Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [2, 4, 5, 10],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'srr',
				'pes',
				'pwecerte',
				'migration',
				'you',
				'have',
				'least',
				'unemployed',
				'workers',
				'remove',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'“ —_--— Sh\n2 &" i ”\nae WT Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
		effects: [
			{
				type: 'raw',
				text: '“ —_--— Sh\n2 &" i ”\nae WT Te\nbe SRR pes\n— =\nay a\nPwecerte\na bs)\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\nnn',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-2-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'~* Bs Nnct + j = Se\nee 4 =\na, SS ae\nVE gx “Noe\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [4, 6],
			resources: ['influence'],
			keywords: [
				'nnct',
				'noe',
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
		role: 'middleClass',
		category: 'base',
		name: 'Bs Nnct + j = Se',
		content:
			'~* Bs Nnct + j = Se\nee 4 =\na, SS ae\nVE gx “Noe\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
		effects: [
			{
				type: 'raw',
				text: '~* Bs Nnct + j = Se\nee 4 =\na, SS ae\nVE gx “Noe\nFAKE NEWS\nDraw 6 Voting cubes from\nthe bag. Remove up to 4 of them\nand return the rest to the bag.\n=',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-3-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
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
				'your',
				'choice',
				'from',
				'the',
				'supply',
				'unemployed',
				'workers',
				'area',
				'then',
				'assign',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
		effects: [
			{
				type: 'raw',
				text: 'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-4-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
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
				'your',
				'choice',
				'from',
				'the',
				'supply',
				'unemployed',
				'workers',
				'area',
				'then',
				'assign',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
		effects: [
			{
				type: 'raw',
				text: 'nn\nJ\nSPECIALIZATION\nPlace a skilled Working Class Worker\nof your choice from the Supply in\nthe Unemployed Workers area. Then,\nassign up to 3 unemployed Working\nClass Workers to your Companies.\n7B/7C\na',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-5-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'q 7 on)! 3\naf 4\nyr, . a\nC *\n~ 9 «\n: \\\n& tN\n7, ,\nSTATE SCHOLARSHIP\nBuy from the State, up to your\nPopulation, paying half the cost\n(rounded up).\n_ id',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [7, 3, 4, 9],
			money: [4],
			resources: ['money'],
			keywords: [
				'state',
				'scholarship',
				'buy',
				'from',
				'the',
				'your',
				'population',
				'paying',
				'half',
				'cost',
				'rounded',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'q 7 on)! 3',
		content:
			'af 4\nyr, . a\nC *\n~ 9 «\n: \\\n& tN\n7, ,\nSTATE SCHOLARSHIP\nBuy from the State, up to your\nPopulation, paying half the cost\n(rounded up).\n_ id',
		effects: [
			{
				type: 'raw',
				text: 'af 4\nyr, . a\nC *\n~ 9 «\n: \\\n& tN\n7, ,\nSTATE SCHOLARSHIP\nBuy from the State, up to your\nPopulation, paying half the cost\n(rounded up).\n_ id',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-6-3',
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
		},
		parsed: {
			numbers: [3, 15],
			money: [15],
			resources: ['money'],
			keywords: ['highlight', 'social', 'issues', 'buy', 'from', 'the', 'state', 'for'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'HIGHLIGHT SOCIAL ISSUES',
		content: '- © *. "’\nHIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15¥.',
		effects: [
			{
				type: 'raw',
				text: '- © *. "’\nHIGHLIGHT SOCIAL ISSUES\nBuy 3 @ from the State for 15¥.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-7-3',
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
		},
		parsed: {
			numbers: [7, 5, 4, 6, 10, 3],
			money: [7, 10, 3],
			resources: ['healthcare', 'money'],
			keywords: ['err', 'segl', 'health', 'crisis', 'sell', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Y 5',
		content:
			'7Y 5 ~*~\nPX 4 .\n“¢ a Se\n_*% ~~ & c\n= Err ~~ SEgl:\nHEALTH CRISIS\nSell up to 6\nto the State for 10¥ each.\n/3\ny',
		effects: [
			{
				type: 'raw',
				text: '7Y 5 ~*~\nPX 4 .\n“¢ a Se\n_*% ~~ & c\n= Err ~~ SEgl:\nHEALTH CRISIS\nSell up to 6\nto the State for 10¥ each.\n/3\ny',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-8-3',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-3.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			"—_\nbs '\n= . )\nD b) € ~ -—_ ’ “ ~\ni ~~\n{Ma 4\na *f “aS\n/ + ane ea f y .\nUNEMPLOYMENT INITIATIVE |\nPROGRAM\nAssign up to 3 unemployed |\nWorking Class Workers to your\nCompanies. Get 5¥ from the\nState for each Worker assigned\nthis way. |\nREQUIREMENT\na”",
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-3.png',
			position: {
				x: 8,
				y: 3,
			},
		},
		parsed: {
			numbers: [4, 3, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'ane',
				'unemployment',
				'initiative',
				'program',
				'assign',
				'unemployed',
				'working',
				'class',
				'workers',
				'your',
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
		role: 'middleClass',
		category: 'base',
		name: "bs '",
		content:
			"—_\nbs '\n= . )\nD b) € ~ -—_ ’ “ ~\ni ~~\n{Ma 4\na *f “aS\n/ + ane ea f y .\nUNEMPLOYMENT INITIATIVE |\nPROGRAM\nAssign up to 3 unemployed |\nWorking Class Workers to your\nCompanies. Get 5¥ from the\nState for each Worker assigned\nthis way. |\nREQUIREMENT\na”",
		effects: [
			{
				type: 'raw',
				text: "—_\nbs '\n= . )\nD b) € ~ -—_ ’ “ ~\ni ~~\n{Ma 4\na *f “aS\n/ + ane ea f y .\nUNEMPLOYMENT INITIATIVE |\nPROGRAM\nAssign up to 3 unemployed |\nWorking Class Workers to your\nCompanies. Get 5¥ from the\nState for each Worker assigned\nthis way. |\nREQUIREMENT\na”",
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-1-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'yj ue < a -\nea\nEs |\nf -\n| f ws\nI f P,) _— >\n7 2 eee\nc i ee h j —\na ee +\nky,\nHIGHER EDUCATION PROGRAM\nSell up to 6\nto the State for 10¥ each.\n/3',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [7, 2, 6, 10, 3],
			money: [10],
			resources: ['education', 'money'],
			keywords: ['eee', 'higher', 'education', 'program', 'sell', 'the', 'state', 'for', 'each'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'yj ue < a -',
		content:
			'ea\nEs |\nf -\n| f ws\nI f P,) _— >\n7 2 eee\nc i ee h j —\na ee +\nky,\nHIGHER EDUCATION PROGRAM\nSell up to 6\nto the State for 10¥ each.\n/3',
		effects: [
			{
				type: 'raw',
				text: 'ea\nEs |\nf -\n| f ws\nI f P,) _— >\n7 2 eee\nc i ee h j —\na ee +\nky,\nHIGHER EDUCATION PROGRAM\nSell up to 6\nto the State for 10¥ each.\n/3',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-2-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'ae uv a\n— FUT » Da\ney" ti a A\nontla\nJo » =\nBt a WF\nVOICE OF MIDDLE CLASS\nWORKERS\nAdd Voting cubes to the bag\nequal to 2 plus the number\nof Public and Capitalist Class\nCompanies where your Workers\nare Employed.\ni',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'fut',
				'ontla',
				'voice',
				'middle',
				'class',
				'workers',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
				'equal',
				'plus',
				'number',
				'public',
				'and',
				'capitalist',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'ae uv a',
		content:
			'— FUT » Da\ney" ti a A\nontla\nJo » =\nBt a WF\nVOICE OF MIDDLE CLASS\nWORKERS\nAdd Voting cubes to the bag\nequal to 2 plus the number\nof Public and Capitalist Class\nCompanies where your Workers\nare Employed.\ni',
		effects: [
			{
				type: 'raw',
				text: '— FUT » Da\ney" ti a A\nontla\nJo » =\nBt a WF\nVOICE OF MIDDLE CLASS\nWORKERS\nAdd Voting cubes to the bag\nequal to 2 plus the number\nof Public and Capitalist Class\nCompanies where your Workers\nare Employed.\ni',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-3-4',
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
		},
		parsed: {
			numbers: [6, 1],
			money: [6],
			resources: ['money'],
			keywords: ['soa', 'new', 'theme', 'park', 'pay', 'per', 'population', 'gain', 'prosperity'],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Soa a Fe',
		content: '— Soa a Fe\nG . ‘\nNEW THEME PARK\nPay 6¥ per Population.\nGain 1 Prosperity.\n—',
		effects: [
			{
				type: 'raw',
				text: '— Soa a Fe\nG . ‘\nNEW THEME PARK\nPay 6¥ per Population.\nGain 1 Prosperity.\n—',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-4-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			"||\n;\n' |\naA \\W -\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents'\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.",
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
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
				'all',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'aA \\W -',
		content:
			"||\n;\n' |\naA \\W -\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents'\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.",
		effects: [
			{
				type: 'raw',
				text: "||\n;\n' |\naA \\W -\nINTEREST GROUPS\nReveal Voting cubes from the bag\nuntil you reveal 3 opponents'\ncubes. Replace them with your\nVoting cubes and return all\nrevealed cubes to the bag.",
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-5-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'olt',
				'export',
				'subsidy',
				'sell',
				'the',
				'foreign',
				'market',
				'for',
				'every',
				'transaction',
				'you',
				'make',
				'get',
				'from',
				'state',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'ey -',
		content:
			'4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
		effects: [
			{
				type: 'raw',
				text: '4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-6-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-4.png',
			position: {
				x: 6,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 5],
			money: [5],
			resources: ['money'],
			keywords: [
				'olt',
				'export',
				'subsidy',
				'sell',
				'the',
				'foreign',
				'market',
				'for',
				'every',
				'transaction',
				'you',
				'make',
				'get',
				'from',
				'state',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'ey -',
		content:
			'4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
		effects: [
			{
				type: 'raw',
				text: '4\n—\n| ey -§\nOlt a ll\nEXPORT SUBSIDY\nSell to the Foreign Market.\nFor every transaction you make,\nget 5¥ from the State.\nS',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-7-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'— ae"\n—_. & “\n——_ i Ee T\nee LOR yar\n=F <\nLa\n= gS\nea 1) Be == “\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5 ¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\n7',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-4.png',
			position: {
				x: 7,
				y: 4,
			},
		},
		parsed: {
			numbers: [1, 4, 2, 5, 10, 7],
			money: [5, 10],
			resources: ['money'],
			keywords: [
				'lor',
				'yar',
				'migration',
				'you',
				'have',
				'least',
				'unemployed',
				'workers',
				'remove',
				'them',
				'get',
				'for',
				'each',
				'unskilled',
				'worker',
				'and',
				'skilled',
				'removed',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'— ae"\n—_. & “\n——_ i Ee T\nee LOR yar\n=F <\nLa\n= gS\nea 1) Be == “\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5 ¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\n7',
		effects: [
			{
				type: 'raw',
				text: '— ae"\n—_. & “\n——_ i Ee T\nee LOR yar\n=F <\nLa\n= gS\nea 1) Be == “\nMIGRATION\nIf you have at least 4 Unemployed\nWorkers, remove up to 2 of them.\nGet 5 ¥ for each Unskilled Worker\nand 10¥ for each Skilled Worker\nremoved this way.\n7',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-8-4',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-4.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			"' ry\n2 4\ns a : . ™ : of\ni. aa TOA Y\nLABOR MARKET\nDEREGULATION\nAssign any number of\nunemployed Workers. If [Ze is in\neffect, you may also reassign any\nnumber of Workers already\nassigned to other Companies.\n2B /2C\n.",
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-4.png',
			position: {
				x: 8,
				y: 4,
			},
		},
		parsed: {
			numbers: [2, 4],
			policies: ['2B', '2C'],
			keywords: [
				'toa',
				'labor',
				'market',
				'deregulation',
				'assign',
				'any',
				'number',
				'unemployed',
				'workers',
				'effect',
				'you',
				'may',
				'also',
				'reassign',
				'already',
				'assigned',
				'other',
				'companies',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			"' ry\n2 4\ns a : . ™ : of\ni. aa TOA Y\nLABOR MARKET\nDEREGULATION\nAssign any number of\nunemployed Workers. If [Ze is in\neffect, you may also reassign any\nnumber of Workers already\nassigned to other Companies.\n2B /2C\n.",
		effects: [
			{
				type: 'raw',
				text: "' ry\n2 4\ns a : . ™ : of\ni. aa TOA Y\nLABOR MARKET\nDEREGULATION\nAssign any number of\nunemployed Workers. If [Ze is in\neffect, you may also reassign any\nnumber of Workers already\nassigned to other Companies.\n2B /2C\n.",
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-1-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'? a il\naed 7 at\n‘ Dy wn ?.\n: ; oy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [7],
			keywords: [
				'aed',
				'personal',
				'consumption',
				'buy',
				'good',
				'service',
				'from',
				'any',
				'number',
				'sources',
				'your',
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
		name: 'a il',
		content:
			'? a il\naed 7 at\n‘ Dy wn ?.\n: ; oy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
		effects: [
			{
				type: 'raw',
				text: '? a il\naed 7 at\n‘ Dy wn ?.\n: ; oy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-2-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'? mi ie\naed 7 at\n‘ Dy wn ?.\n: ; wy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [7],
			keywords: [
				'aed',
				'personal',
				'consumption',
				'buy',
				'good',
				'service',
				'from',
				'any',
				'number',
				'sources',
				'your',
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
		name: 'mi ie',
		content:
			'? mi ie\naed 7 at\n‘ Dy wn ?.\n: ; wy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
		effects: [
			{
				type: 'raw',
				text: '? mi ie\naed 7 at\n‘ Dy wn ?.\n: ; wy\n™ é\nPERSONAL CONSUMPTION\nBuy a good or service from\nany number of sources, up to\nyour Population from each.\nBuy a good or service from\na single source, up to twice\nyour Population.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-3-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'and > a\n——e |\na Ah. ie\nTe ; , ae af)\ni is ‘ neal\nIMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['influence'],
			keywords: [
				'and',
				'neal',
				'immigration',
				'reform',
				'propose',
				'bill',
				'for',
				'add',
				'voting',
				'cubes',
				'the',
				'bag',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'and > a',
		content:
			'——e |\na Ah. ie\nTe ; , ae af)\ni is ‘ neal\nIMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
		effects: [
			{
				type: 'raw',
				text: '——e |\na Ah. ie\nTe ; , ae af)\ni is ‘ neal\nIMMIGRATION REFORM\nPropose a Bill for Immigration.\nAdd 2 Voting cubes to the bag.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-4-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'I fe = be\n“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
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
				'beneath',
				'your',
				'board',
				'corresponding',
				'specific',
				'resource',
				'you',
				'may',
				'then',
				'company',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'I fe = be',
		content:
			'“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
		effects: [
			{
				type: 'raw',
				text: '“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-5-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'I fe = be\n“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
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
				'beneath',
				'your',
				'board',
				'corresponding',
				'specific',
				'resource',
				'you',
				'may',
				'then',
				'company',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'I fe = be',
		content:
			'“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
		effects: [
			{
				type: 'raw',
				text: '“ . _ y ¥ - ae i\n; ‘ J\nsn if a“ :\nGROWING BUSINESS\nBuild a Storage for free and place it\nbeneath your board, corresponding\nto a specific resource. You may then\nBuild a Company. If that Company\nproduces that resource, pay 4¥ less.',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-6-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-6-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			"pe\n5 anf\n- <- ~ 4\neen L Se A\nPUBLIC SECTOR OVERTIME\nChoose an operational Public\nCompany. The State pays its\nWorkers' Wages and performs\na Production for that Company.\nYou may then Buy Goods or\nServices from the State of the type\nproduced by that Company,\nup to your Population.",
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-6-5.png',
			position: {
				x: 6,
				y: 5,
			},
		},
		parsed: {
			numbers: [5, 4],
			resources: ['money'],
			keywords: [
				'anf',
				'een',
				'public',
				'sector',
				'overtime',
				'choose',
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
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			"pe\n5 anf\n- <- ~ 4\neen L Se A\nPUBLIC SECTOR OVERTIME\nChoose an operational Public\nCompany. The State pays its\nWorkers' Wages and performs\na Production for that Company.\nYou may then Buy Goods or\nServices from the State of the type\nproduced by that Company,\nup to your Population.",
		effects: [
			{
				type: 'raw',
				text: "pe\n5 anf\n- <- ~ 4\neen L Se A\nPUBLIC SECTOR OVERTIME\nChoose an operational Public\nCompany. The State pays its\nWorkers' Wages and performs\na Production for that Company.\nYou may then Buy Goods or\nServices from the State of the type\nproduced by that Company,\nup to your Population.",
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-7-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-7-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4} \\ > a >\nPy\n, m7\nat\n.\n3\na a a a\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-7-5.png',
			position: {
				x: 7,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 7, 3, 2, 5],
			policies: ['2B', '2C'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'your',
				'employed',
				'workers',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
				'you',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'4} \\ > a >\nPy\n, m7\nat\n.\n3\na a a a\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
		effects: [
			{
				type: 'raw',
				text: '4} \\ > a >\nPy\n, m7\nat\n.\n3\na a a a\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
			},
		],
	},
	{
		id: 'middle-class-action-cards-grid-40-items-8-5-middle-class-actions-deck-175-pos-8-5',
		frontImage:
			'fixtures/assets/decks-sorted/middle-class-action-cards/grid_40-items_8-5__middle-class-actions-deck-175__pos-8-5.png',
		backImage: 'fixtures/assets/decks-sorted/middle-class-action-cards/back__middle-class-actions-deck-175.jpg',
		rawText:
			'4} \\ > a >\nPy\n, m7\nat\n..\n3\na a a ae\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
		source: {
			deck: 'middle-class-action-cards',
			file: 'grid_40-items_8-5__middle-class-actions-deck-175__pos-8-5.png',
			position: {
				x: 8,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 7, 3, 2, 5],
			policies: ['2B', '2C'],
			keywords: [
				'supplemental',
				'income',
				'program',
				'get',
				'from',
				'the',
				'state',
				'for',
				'each',
				'your',
				'employed',
				'workers',
				'public',
				'and',
				'capitalist',
				'class',
				'companies',
				'you',
			],
		},
		kind: 'action',
		role: 'middleClass',
		category: 'base',
		name: 'Middle Class Actions',
		content:
			'4} \\ > a >\nPy\n, m7\nat\n..\n3\na a a ae\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
		effects: [
			{
				type: 'raw',
				text: '4} \\ > a >\nPy\n, m7\nat\n..\n3\na a a ae\nSUPPLEMENTAL INCOME\nPROGRAM\nGet 2% from the State for each of\nyour employed Workers in Public\nand Capitalist Class Companies.\nYou may then Buy Goods\n& Services.\n2B /2C /5 ;\ny >',
			},
		],
	},
] satisfies MiddleClassActionCardsCard[];

export default middleClassActionCards;
