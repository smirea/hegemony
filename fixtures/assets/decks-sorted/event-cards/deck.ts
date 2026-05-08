import type { ParsedEventCard } from '../types';

interface EventCardsCard extends ParsedEventCard {}

const eventCards = [
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-1-1',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-1-1.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 . >»\nRESMING POLITICAL SCANDAL\ngy\n\\ SPEND 25¥% AND PROVIDE UP TO\n/ 3 MEDIA @® TO THE CLASSES\nIVE f IN ANY COMBINATION.\n1 @ ea,\n6 |.e%.|%. | &\n, 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-1-1.png',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 25, 3, 1, 6],
			money: [25],
			resources: ['influence', 'money'],
			keywords: [
				'resming',
				'political',
				'scandal',
				'spend',
				'and',
				'provide',
				'media',
				'the',
				'classes',
				'ive',
				'any',
				'combination',
			],
		},
		kind: 'event',
		name: 'RESMING POLITICAL SCANDAL',
		content:
			'4 . >»\nRESMING POLITICAL SCANDAL\ngy\n\\ SPEND 25¥% AND PROVIDE UP TO\n/ 3 MEDIA @® TO THE CLASSES\nIVE f IN ANY COMBINATION.\n1 @ ea,\n6 |.e%.|%. | &\n, 4',
		effects: [
			{
				type: 'raw',
				text: '4 . >»\nRESMING POLITICAL SCANDAL\ngy\n\\ SPEND 25¥% AND PROVIDE UP TO\n/ 3 MEDIA @® TO THE CLASSES\nIVE f IN ANY COMBINATION.\n1 @ ea,\n6 |.e%.|%. | &\n, 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-2-1',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-2-1.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText: ', — >\n4\ny» 7, SPEND UP TO 6 @&\nLIVE f\nBS w\nK y',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-2-1.png',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 7, 6],
			money: [4],
			keywords: ['spend', 'live'],
		},
		kind: 'event',
		name: 'y» 7, SPEND UP TO 6',
		content: ', — >\n4\ny» 7, SPEND UP TO 6 @&\nLIVE f\nBS w\nK y',
		effects: [
			{
				type: 'raw',
				text: ', — >\n4\ny» 7, SPEND UP TO 6 @&\nLIVE f\nBS w\nK y',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-3-1',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-3-1.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'di a BUY SS FROM THE OTHER PLAYERS,\ny y IN ANY COMBINATION, UP TO\nVE f THE NUMBER OF PUBLIC COMPANIES.\n; seh\nsea, +1 oe\nBa\nS 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-3-1.png',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 4],
			keywords: [
				'buy',
				'from',
				'the',
				'other',
				'players',
				'any',
				'combination',
				'number',
				'public',
				'companies',
				'seh',
				'sea',
			],
		},
		kind: 'event',
		name: 'di a BUY SS FROM THE OTHER PLAYERS',
		content:
			'di a BUY SS FROM THE OTHER PLAYERS,\ny y IN ANY COMBINATION, UP TO\nVE f THE NUMBER OF PUBLIC COMPANIES.\n; seh\nsea, +1 oe\nBa\nS 4',
		effects: [
			{
				type: 'raw',
				text: 'di a BUY SS FROM THE OTHER PLAYERS,\ny y IN ANY COMBINATION, UP TO\nVE f THE NUMBER OF PUBLIC COMPANIES.\n; seh\nsea, +1 oe\nBa\nS 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-4-1',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-4-1.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'le >\nBANC | STRIKE AT THE PORT\ng\ny Y, PROVIDE 2 MEDIA @\nTO A CLASS.\nLIVE f\ns a\nW253 Xs\n99 +1)\n\\K y',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-4-1.png',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 253, 99, 1],
			resources: ['influence'],
			keywords: ['banc', 'strike', 'the', 'port', 'provide', 'media', 'class', 'live'],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'le >\nBANC | STRIKE AT THE PORT\ng\ny Y, PROVIDE 2 MEDIA @\nTO A CLASS.\nLIVE f\ns a\nW253 Xs\n99 +1)\n\\K y',
		effects: [
			{
				type: 'raw',
				text: 'le >\nBANC | STRIKE AT THE PORT\ng\ny Y, PROVIDE 2 MEDIA @\nTO A CLASS.\nLIVE f\ns a\nW253 Xs\n99 +1)\n\\K y',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-5-1',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-5-1.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'a - »\nay LOW EDUCATION INDEX\ny _\n% y PROVIDE wi TOA CLASS,\nEQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\na +1 +1\n\\ 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-5-1.png',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 4],
			resources: ['education'],
			keywords: [
				'low',
				'education',
				'index',
				'provide',
				'toa',
				'class',
				'equal',
				'half',
				'its',
				'population',
				'ive',
				'rounded',
			],
		},
		kind: 'event',
		name: 'a -',
		content:
			'a - »\nay LOW EDUCATION INDEX\ny _\n% y PROVIDE wi TOA CLASS,\nEQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\na +1 +1\n\\ 4',
		effects: [
			{
				type: 'raw',
				text: 'a - »\nay LOW EDUCATION INDEX\ny _\n% y PROVIDE wi TOA CLASS,\nEQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\na +1 +1\n\\ 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-1-2',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-1-2.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'fo >\nR NEED FOR SUSTAINABILITY\nINITIATIVE\nwa\n¥ j CHOOSE 2 CLASSES.\nPROVIDE 25% TO EACH OF THEM.\n-1 oo | -\nyy »\nJy',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-1-2.png',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [2, 25, -1],
			resources: ['money'],
			keywords: ['need', 'for', 'sustainability', 'initiative', 'choose', 'classes', 'provide', 'each', 'them'],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'fo >\nR NEED FOR SUSTAINABILITY\nINITIATIVE\nwa\n¥ j CHOOSE 2 CLASSES.\nPROVIDE 25% TO EACH OF THEM.\n-1 oo | -\nyy »\nJy',
		effects: [
			{
				type: 'raw',
				text: 'fo >\nR NEED FOR SUSTAINABILITY\nINITIATIVE\nwa\n¥ j CHOOSE 2 CLASSES.\nPROVIDE 25% TO EACH OF THEM.\n-1 oo | -\nyy »\nJy',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-2-2',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-2-2.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText: '4 - 4\nBAKING f FEAR OF DEFLATION\n+4\n4 y SPEND 15% 30¥ OR 45%\nBS b 2 4\na »',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-2-2.png',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 15, 30, 45, 2],
			money: [4, 30],
			resources: ['money'],
			keywords: ['baking', 'fear', 'deflation', 'spend'],
		},
		kind: 'event',
		name: 'BAKING f FEAR OF DEFLATION',
		content: '4 - 4\nBAKING f FEAR OF DEFLATION\n+4\n4 y SPEND 15% 30¥ OR 45%\nBS b 2 4\na »',
		effects: [
			{
				type: 'raw',
				text: '4 - 4\nBAKING f FEAR OF DEFLATION\n+4\n4 y SPEND 15% 30¥ OR 45%\nBS b 2 4\na »',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-3-2',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-3-2.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 = a\nREARING DECLINING BIRTH RATE\nma en\n\\ PROVIDE & TO A CLASS,\né EQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\n1 | +1\nwy 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-3-2.png',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [4, 1],
			keywords: [
				'rearing',
				'declining',
				'birth',
				'rate',
				'provide',
				'class',
				'equal',
				'half',
				'its',
				'population',
				'ive',
				'rounded',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'4 = a\nREARING DECLINING BIRTH RATE\nma en\n\\ PROVIDE & TO A CLASS,\né EQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\n1 | +1\nwy 4',
		effects: [
			{
				type: 'raw',
				text: '4 = a\nREARING DECLINING BIRTH RATE\nma en\n\\ PROVIDE & TO A CLASS,\né EQUAL TO HALF ITS POPULATION\nive f (ROUNDED UP).\n1 | +1\nwy 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-4-2',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-4-2.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'< >\nPEAKING NEED FOR STIMULUS PACKAGE\ng\n\\3 j CHOOSE ONE:\nPROVIDE 10*% OR 15*¥ TO EACH CLASS.\na| WW ae\n1@ a H @ 1\n. 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-4-2.png',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [3, 10, 15, 1, 4],
			resources: ['money'],
			keywords: ['peaking', 'need', 'for', 'stimulus', 'package', 'choose', 'one', 'provide', 'each', 'class'],
		},
		kind: 'event',
		name: 'PEAKING NEED FOR STIMULUS PACKAGE',
		content:
			'< >\nPEAKING NEED FOR STIMULUS PACKAGE\ng\n\\3 j CHOOSE ONE:\nPROVIDE 10*% OR 15*¥ TO EACH CLASS.\na| WW ae\n1@ a H @ 1\n. 4',
		effects: [
			{
				type: 'raw',
				text: '< >\nPEAKING NEED FOR STIMULUS PACKAGE\ng\n\\3 j CHOOSE ONE:\nPROVIDE 10*% OR 15*¥ TO EACH CLASS.\na| WW ae\n1@ a H @ 1\n. 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-5-2',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-5-2.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'& : NY\ni: DEMAND FOR\nTHIRTEEN MONTH PAY\n& a PROVIDE 5¥ TO A CLASS\ny “ FOR EACH OF ITS WORKERS\nive EMPLOYED IN THE PUBLIC SECTOR.\n-\nite\n+1] +1\n-1\n@ 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-5-2.png',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [5, 1, -1, 4],
			money: [5],
			resources: ['money'],
			keywords: [
				'demand',
				'for',
				'thirteen',
				'month',
				'pay',
				'provide',
				'class',
				'each',
				'its',
				'workers',
				'ive',
				'employed',
				'the',
				'public',
				'sector',
				'ite',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'& : NY\ni: DEMAND FOR\nTHIRTEEN MONTH PAY\n& a PROVIDE 5¥ TO A CLASS\ny “ FOR EACH OF ITS WORKERS\nive EMPLOYED IN THE PUBLIC SECTOR.\n-\nite\n+1] +1\n-1\n@ 4',
		effects: [
			{
				type: 'raw',
				text: '& : NY\ni: DEMAND FOR\nTHIRTEEN MONTH PAY\n& a PROVIDE 5¥ TO A CLASS\ny “ FOR EACH OF ITS WORKERS\nive EMPLOYED IN THE PUBLIC SECTOR.\n-\nite\n+1] +1\n-1\n@ 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-1-3',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-1-3.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'fa oy\nREA COMPANIES DEMAND |\nBETTER INTERNET\na PROVIDE [] TO ACLASS,\n"Re EQUAL TO HALF THE NUMBER\nOF ITS OPERATIONAL COMPANIES\nIVE f (ROUNDED UP).\n& sea |\nsea, +1 41\nDa\n0 0 |\nLo y',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-1-3.png',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [1, 41, 0],
			keywords: [
				'rea',
				'companies',
				'demand',
				'better',
				'internet',
				'provide',
				'aclass',
				'equal',
				'half',
				'the',
				'number',
				'its',
				'operational',
				'ive',
				'rounded',
				'sea',
			],
		},
		kind: 'event',
		name: 'fa oy',
		content:
			'REA COMPANIES DEMAND |\nBETTER INTERNET\na PROVIDE [] TO ACLASS,\n"Re EQUAL TO HALF THE NUMBER\nOF ITS OPERATIONAL COMPANIES\nIVE f (ROUNDED UP).\n& sea |\nsea, +1 41\nDa\n0 0 |\nLo y',
		effects: [
			{
				type: 'raw',
				text: 'REA COMPANIES DEMAND |\nBETTER INTERNET\na PROVIDE [] TO ACLASS,\n"Re EQUAL TO HALF THE NUMBER\nOF ITS OPERATIONAL COMPANIES\nIVE f (ROUNDED UP).\n& sea |\nsea, +1 41\nDa\n0 0 |\nLo y',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-2-3',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-2-3.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 . y\nay. DROUGHT 1\ni\n| PROVIDE ¢ TO ACLASS, ,\nyy EQUAL TO HALF ITS POPULATION\n| OR HALF ITS OPERATIONAL |\nBD iive { COMPANIES (ROUNDED-UP). ff\n, Re rs |\n| sed it. |\noo| G\nhe J',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-2-3.png',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [4, 1],
			keywords: [
				'drought',
				'provide',
				'aclass',
				'equal',
				'half',
				'its',
				'population',
				'operational',
				'iive',
				'companies',
				'rounded-up',
				'sed',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'4 . y\nay. DROUGHT 1\ni\n| PROVIDE ¢ TO ACLASS, ,\nyy EQUAL TO HALF ITS POPULATION\n| OR HALF ITS OPERATIONAL |\nBD iive { COMPANIES (ROUNDED-UP). ff\n, Re rs |\n| sed it. |\noo| G\nhe J',
		effects: [
			{
				type: 'raw',
				text: '4 . y\nay. DROUGHT 1\ni\n| PROVIDE ¢ TO ACLASS, ,\nyy EQUAL TO HALF ITS POPULATION\n| OR HALF ITS OPERATIONAL |\nBD iive { COMPANIES (ROUNDED-UP). ff\n, Re rs |\n| sed it. |\noo| G\nhe J',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-3-3',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-3-3.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 >\nPEAKING LOCAL INDUSTRIES IN TURMOIL\n”\n\\ PROVIDE 5% TO A CLASS\ny FOR EACH OPERATIONAL\nLive COMPANY IT OWNS.\n; BA\nsea @ S 2\n97\na 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-3-3.png',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [4, 5, 2, 97],
			keywords: [
				'peaking',
				'local',
				'industries',
				'turmoil',
				'provide',
				'class',
				'for',
				'each',
				'operational',
				'live',
				'company',
				'owns',
				'sea',
			],
		},
		kind: 'event',
		name: 'PEAKING LOCAL INDUSTRIES IN TURMOIL',
		content:
			'4 >\nPEAKING LOCAL INDUSTRIES IN TURMOIL\n”\n\\ PROVIDE 5% TO A CLASS\ny FOR EACH OPERATIONAL\nLive COMPANY IT OWNS.\n; BA\nsea @ S 2\n97\na 4',
		effects: [
			{
				type: 'raw',
				text: '4 >\nPEAKING LOCAL INDUSTRIES IN TURMOIL\n”\n\\ PROVIDE 5% TO A CLASS\ny FOR EACH OPERATIONAL\nLive COMPANY IT OWNS.\n; BA\nsea @ S 2\n97\na 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-4-3',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-4-3.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'fe >\nPANG TECHNOLOGICAL ILLITERACY\nig PROVIDE [] AND i TO A CLASS,\n‘ IN ANY COMBINATION, EQUAL (IN TOTAL)\ny F, TO HALF ITS POPULATION\nOR HALF ITS OPERATIONAL COMPANIES\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n: seedy\n@| © a\n9 @\na 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-4-3.png',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [1, 9, 4],
			keywords: [
				'pang',
				'technological',
				'illiteracy',
				'provide',
				'and',
				'class',
				'any',
				'combination',
				'equal',
				'total',
				'half',
				'its',
				'population',
				'operational',
				'companies',
				'live',
				'rounded',
				'min',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'fe >\nPANG TECHNOLOGICAL ILLITERACY\nig PROVIDE [] AND i TO A CLASS,\n‘ IN ANY COMBINATION, EQUAL (IN TOTAL)\ny F, TO HALF ITS POPULATION\nOR HALF ITS OPERATIONAL COMPANIES\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n: seedy\n@| © a\n9 @\na 4',
		effects: [
			{
				type: 'raw',
				text: 'fe >\nPANG TECHNOLOGICAL ILLITERACY\nig PROVIDE [] AND i TO A CLASS,\n‘ IN ANY COMBINATION, EQUAL (IN TOTAL)\ny F, TO HALF ITS POPULATION\nOR HALF ITS OPERATIONAL COMPANIES\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n: seedy\n@| © a\n9 @\na 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-5-3',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-5-3.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'& >»\n. DEMAND FOR HIGHER\nWELFARE STANDARDS\nae PROVIDE & AND & TO ACLASS,\n» 7, IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED, MIN 1 OF EACH).\n1 +1 +1\na y',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-5-3.png',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [7, 1],
			keywords: [
				'demand',
				'for',
				'higher',
				'welfare',
				'standards',
				'provide',
				'and',
				'aclass',
				'any',
				'combination',
				'equal',
				'total',
				'half',
				'its',
				'population',
				'live',
				'rounded',
				'min',
			],
		},
		kind: 'event',
		name: 'DEMAND FOR HIGHER',
		content:
			'& >»\n. DEMAND FOR HIGHER\nWELFARE STANDARDS\nae PROVIDE & AND & TO ACLASS,\n» 7, IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED, MIN 1 OF EACH).\n1 +1 +1\na y',
		effects: [
			{
				type: 'raw',
				text: '& >»\n. DEMAND FOR HIGHER\nWELFARE STANDARDS\nae PROVIDE & AND & TO ACLASS,\n» 7, IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED, MIN 1 OF EACH).\n1 +1 +1\na y',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-1-4',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-1-4.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText: 'fe »\nBAKING DEVELOPING COUNTRIES IN NEED\n4\n¥ 7, SPEND UP TO 6 &.\n%.\nBs tw\n\\ yD',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-1-4.png',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 7, 6],
			money: [4],
			resources: ['money'],
			keywords: ['baking', 'developing', 'countries', 'need', 'spend'],
		},
		kind: 'event',
		name: 'Base Events',
		content: 'fe »\nBAKING DEVELOPING COUNTRIES IN NEED\n4\n¥ 7, SPEND UP TO 6 &.\n%.\nBs tw\n\\ yD',
		effects: [
			{
				type: 'raw',
				text: 'fe »\nBAKING DEVELOPING COUNTRIES IN NEED\n4\n¥ 7, SPEND UP TO 6 &.\n%.\nBs tw\n\\ yD',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-2-4',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-2-4.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 >\nay. INFANT INDUSTRY REQUIRES HELP\n4 5 PAY THE COST AND BUILD\ny / A COMPANY COSTING 15¥%\n‘ve OR MORE FOR ANOTHER CLASS.\nsca Bt\no: +1)\n. 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-2-4.png',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 5, 15, 1],
			money: [15],
			resources: ['money'],
			keywords: [
				'infant',
				'industry',
				'requires',
				'help',
				'pay',
				'the',
				'cost',
				'and',
				'build',
				'company',
				'costing',
				'more',
				'for',
				'another',
				'class',
				'sca',
			],
		},
		kind: 'event',
		name: 'ay. INFANT INDUSTRY REQUIRES HELP',
		content:
			'4 >\nay. INFANT INDUSTRY REQUIRES HELP\n4 5 PAY THE COST AND BUILD\ny / A COMPANY COSTING 15¥%\n‘ve OR MORE FOR ANOTHER CLASS.\nsca Bt\no: +1)\n. 4',
		effects: [
			{
				type: 'raw',
				text: '4 >\nay. INFANT INDUSTRY REQUIRES HELP\n4 5 PAY THE COST AND BUILD\ny / A COMPANY COSTING 15¥%\n‘ve OR MORE FOR ANOTHER CLASS.\nsca Bt\no: +1)\n. 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-3-4',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-3-4.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'a »\naR OUTDATED PUBLIC SECTOR\nINFRASTRUCTURE\n& 5 BUY FROM THE OTHER PLAYERS,\n\\] / IN ANY COMBINATION, UP TO\nuve f THE NUMBER OF PUBLIC COMPANIES.\n3 seh\nsed, | 41\na:\n0 a\n\\ 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-3-4.png',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [5, 3, 41, 0, 4],
			keywords: [
				'outdated',
				'public',
				'sector',
				'infrastructure',
				'buy',
				'from',
				'the',
				'other',
				'players',
				'any',
				'combination',
				'uve',
				'number',
				'companies',
				'seh',
				'sed',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'a »\naR OUTDATED PUBLIC SECTOR\nINFRASTRUCTURE\n& 5 BUY FROM THE OTHER PLAYERS,\n\\] / IN ANY COMBINATION, UP TO\nuve f THE NUMBER OF PUBLIC COMPANIES.\n3 seh\nsed, | 41\na:\n0 a\n\\ 4',
		effects: [
			{
				type: 'raw',
				text: 'a »\naR OUTDATED PUBLIC SECTOR\nINFRASTRUCTURE\n& 5 BUY FROM THE OTHER PLAYERS,\n\\] / IN ANY COMBINATION, UP TO\nuve f THE NUMBER OF PUBLIC COMPANIES.\n3 seh\nsed, | 41\na:\n0 a\n\\ 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-4-4',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-4-4.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 >\na PROVIDE ¢ AND & TO ACLASS,\n7 , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n+1 +1\n1 @\n. 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-4-4.png',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 7, 1],
			keywords: [
				'provide',
				'and',
				'aclass',
				'any',
				'combination',
				'equal',
				'total',
				'half',
				'its',
				'population',
				'live',
				'rounded',
				'min',
				'each',
			],
		},
		kind: 'event',
		name: 'a PROVIDE ¢ AND & TO ACLASS',
		content:
			'4 >\na PROVIDE ¢ AND & TO ACLASS,\n7 , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n+1 +1\n1 @\n. 4',
		effects: [
			{
				type: 'raw',
				text: '4 >\na PROVIDE ¢ AND & TO ACLASS,\n7 , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN 1 OF EACH).\n+1 +1\n1 @\n. 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-5-4',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-5-4.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 >\nny DEMAND FOR PENSION REFORM\na\n\\ PROVIDE ¥ TO A CLASS\n; EQUAL TO 5 TIMES\n‘ve f ITS POPULATION.\nb 2 4 a\n| = | +1)\n, 7 7 d',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-5-4.png',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [4, 5, 2, 1, 7],
			resources: ['money'],
			keywords: ['demand', 'for', 'pension', 'reform', 'provide', 'class', 'equal', 'times', 'its', 'population'],
		},
		kind: 'event',
		name: 'ny DEMAND FOR PENSION REFORM',
		content:
			'4 >\nny DEMAND FOR PENSION REFORM\na\n\\ PROVIDE ¥ TO A CLASS\n; EQUAL TO 5 TIMES\n‘ve f ITS POPULATION.\nb 2 4 a\n| = | +1)\n, 7 7 d',
		effects: [
			{
				type: 'raw',
				text: '4 >\nny DEMAND FOR PENSION REFORM\na\n\\ PROVIDE ¥ TO A CLASS\n; EQUAL TO 5 TIMES\n‘ve f ITS POPULATION.\nb 2 4 a\n| = | +1)\n, 7 7 d',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-1-5',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-1-5.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'C »\n« a SPEND 30¥ AND PROVIDE\nd 4 VOTING CUBES TO THE CLASSES\nive IN ANY COMBINATION.\n&\nry sea,\n&| © | ©\nD @\na _d',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-1-5.png',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [30, 4],
			money: [30],
			resources: ['influence', 'money'],
			keywords: ['spend', 'and', 'provide', 'voting', 'cubes', 'the', 'classes', 'ive', 'any', 'combination', 'sea'],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'C »\n« a SPEND 30¥ AND PROVIDE\nd 4 VOTING CUBES TO THE CLASSES\nive IN ANY COMBINATION.\n&\nry sea,\n&| © | ©\nD @\na _d',
		effects: [
			{
				type: 'raw',
				text: 'C »\n« a SPEND 30¥ AND PROVIDE\nd 4 VOTING CUBES TO THE CLASSES\nive IN ANY COMBINATION.\n&\nry sea,\n&| © | ©\nD @\na _d',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-2-5',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-2-5.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText: "f >\naay CIVIL UNREST\nyg\n¥ j PROPOSE A BILL\nOF ANOTHER PLAYER'S CHOICE.\nsea sea,\n2 @ #2 a2\na Ad",
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-2-5.png',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['money'],
			keywords: ['aay', 'civil', 'unrest', 'propose', 'bill', 'another', 'player', 'choice', 'sea'],
		},
		kind: 'event',
		name: 'Base Events',
		content: "f >\naay CIVIL UNREST\nyg\n¥ j PROPOSE A BILL\nOF ANOTHER PLAYER'S CHOICE.\nsea sea,\n2 @ #2 a2\na Ad",
		effects: [
			{
				type: 'raw',
				text: "f >\naay CIVIL UNREST\nyg\n¥ j PROPOSE A BILL\nOF ANOTHER PLAYER'S CHOICE.\nsea sea,\n2 @ #2 a2\na Ad",
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-3-5',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-3-5.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'a >\nBEAMING f UNFAIR REPRESENTATION\n4 5 PROVIDE 1 PERSONAL @®\nae) AND 2 VOTING CUBES\nrIVE f TO A CLASS.\na | .\n7 3 sea\na 4',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-3-5.png',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 5, 1, 2, 7, 3],
			resources: ['influence'],
			keywords: [
				'beaming',
				'unfair',
				'representation',
				'provide',
				'personal',
				'and',
				'voting',
				'cubes',
				'rive',
				'class',
				'sea',
			],
		},
		kind: 'event',
		name: 'Base Events',
		content:
			'a >\nBEAMING f UNFAIR REPRESENTATION\n4 5 PROVIDE 1 PERSONAL @®\nae) AND 2 VOTING CUBES\nrIVE f TO A CLASS.\na | .\n7 3 sea\na 4',
		effects: [
			{
				type: 'raw',
				text: 'a >\nBEAMING f UNFAIR REPRESENTATION\n4 5 PROVIDE 1 PERSONAL @®\nae) AND 2 VOTING CUBES\nrIVE f TO A CLASS.\na | .\n7 3 sea\na 4',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-4-5',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-4-5.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 \\\nEE, LOW UNIVERSITY RATINGS\n& 5 BUY | FROM THE OTHER PLAYERS,\ny 7 IN ANY COMBINATION, UP TO\ngy THE NUMBER OF PUBLIC COMPANIES.\n2 sed\nseh +1 41\nO.\nY y',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-4-5.png',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 5, 7, 2, 1, 41],
			resources: ['education'],
			keywords: [
				'low',
				'university',
				'ratings',
				'buy',
				'from',
				'the',
				'other',
				'players',
				'any',
				'combination',
				'number',
				'public',
				'companies',
				'sed',
				'seh',
			],
		},
		kind: 'event',
		name: 'EE, LOW UNIVERSITY RATINGS',
		content:
			'4 \\\nEE, LOW UNIVERSITY RATINGS\n& 5 BUY | FROM THE OTHER PLAYERS,\ny 7 IN ANY COMBINATION, UP TO\ngy THE NUMBER OF PUBLIC COMPANIES.\n2 sed\nseh +1 41\nO.\nY y',
		effects: [
			{
				type: 'raw',
				text: '4 \\\nEE, LOW UNIVERSITY RATINGS\n& 5 BUY | FROM THE OTHER PLAYERS,\ny 7 IN ANY COMBINATION, UP TO\ngy THE NUMBER OF PUBLIC COMPANIES.\n2 sed\nseh +1 41\nO.\nY y',
			},
		],
	},
	{
		id: 'event-cards-grid-25-items-5-5-base-events-deck-163-pos-5-5',
		frontImage: 'fixtures/assets/decks-sorted/event-cards/grid_25-items_5-5__base-events-deck-163__pos-5-5.png',
		backImage: 'fixtures/assets/decks-sorted/event-cards/back__base-events-deck-163.png',
		rawText:
			'4 - >\nBERING GLOBAL SUPPLY CHAIN CRISIS\na PROVIDE ¢ AND [] TOA CLASS,\n% , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN. 1 OF EACH).\nES wr\n-1\na A',
		source: {
			deck: 'event-cards',
			file: 'grid_25-items_5-5__base-events-deck-163__pos-5-5.png',
			position: {
				x: 5,
				y: 5,
			},
		},
		parsed: {
			numbers: [4, 1, -1],
			keywords: [
				'bering',
				'global',
				'supply',
				'chain',
				'crisis',
				'provide',
				'and',
				'toa',
				'class',
				'any',
				'combination',
				'equal',
				'total',
				'half',
				'its',
				'population',
				'live',
				'rounded',
			],
		},
		kind: 'event',
		name: 'BERING GLOBAL SUPPLY CHAIN CRISIS',
		content:
			'4 - >\nBERING GLOBAL SUPPLY CHAIN CRISIS\na PROVIDE ¢ AND [] TOA CLASS,\n% , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN. 1 OF EACH).\nES wr\n-1\na A',
		effects: [
			{
				type: 'raw',
				text: '4 - >\nBERING GLOBAL SUPPLY CHAIN CRISIS\na PROVIDE ¢ AND [] TOA CLASS,\n% , IN ANY COMBINATION, EQUAL\n(IN TOTAL) TO HALF ITS POPULATION\nLIVE f (ROUNDED UP, MIN. 1 OF EACH).\nES wr\n-1\na A',
			},
		],
	},
] satisfies EventCardsCard[];

export default eventCards;
