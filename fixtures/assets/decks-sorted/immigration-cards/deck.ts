import type { ParsedImmigrationCard } from '../types';

interface ImmigrationCardsCard extends ParsedImmigrationCard {}

const immigrationCards = [
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 1: Working Class unskilled worker; Middle Class education worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [1],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 1',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'education',
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 2: Working Class healthcare worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [2],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'healthcare', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 2',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'healthcare',
				industry: 'healthcare',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 3: Working Class education worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [3],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'education', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 3',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'education',
				industry: 'education',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 4: Working Class unskilled worker; Middle Class luxury worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [4],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 4',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'luxury',
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 5: Working Class luxury worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [5],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'luxury', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 5',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'luxury',
				industry: 'luxury',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 6: Working Class unskilled worker; Middle Class education worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [6],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 6',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'education',
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 7: Working Class unskilled worker; Middle Class education worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [7],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 7',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'education',
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 8: Working Class education worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'education', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 8',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'education',
				industry: 'education',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 9: Working Class unskilled worker; Middle Class luxury worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [9],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 9',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'luxury',
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 10: Working Class luxury worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [10],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'luxury', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 10',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'luxury',
				industry: 'luxury',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 11: Working Class unskilled worker; Middle Class luxury worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-3.jpg',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [11],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 11',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'luxury',
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 12: Working Class unskilled worker; Middle Class influence worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-3.jpg',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [12],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 12',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'influence',
				industry: 'influence',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 13: Working Class healthcare worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-3.jpg',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [13],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'healthcare', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 13',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'healthcare',
				industry: 'healthcare',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 14: Working Class unskilled worker; Middle Class healthcare worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-3.jpg',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [14],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 14',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'healthcare',
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 15: Working Class unskilled worker; Middle Class healthcare worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-3.jpg',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [15],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 15',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'healthcare',
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 16: Working Class unskilled worker; Middle Class healthcare worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-4.jpg',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [16],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 16',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'healthcare',
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 17: Working Class food worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-4.jpg',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [17],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'food', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 17',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'food',
				industry: 'food',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 18: Working Class unskilled worker; Middle Class influence worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-4.jpg',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [18],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 18',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'influence',
				industry: 'influence',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 19: Working Class unskilled worker; Middle Class influence worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-4.jpg',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [19],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 19',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'influence',
				industry: 'influence',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 20: Working Class unskilled worker; Middle Class food worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-4.jpg',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [20],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 20',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'food',
				industry: 'food',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 21: Working Class influence worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-5.jpg',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [21],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'influence', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 21',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'influence',
				industry: 'influence',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 22: Working Class influence worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-5.jpg',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [22],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'influence', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 22',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'influence',
				industry: 'influence',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 23: Working Class unskilled worker; Middle Class food worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-5.jpg',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [23],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 23',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'food',
				industry: 'food',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 24: Working Class food worker; Middle Class unskilled worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-5.jpg',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [24],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'food', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 24',
		workers: {
			workingClass: {
				type: 'specialized',
				worker: 'food',
				industry: 'food',
			},
			middleClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 25: Working Class unskilled worker; Middle Class food worker.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-5.jpg',
			position: {
				x: 5,
				y: 5,
			},
		},
		parsed: {
			numbers: [25],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 25',
		workers: {
			workingClass: {
				type: 'unskilled',
				worker: 'unskilled',
			},
			middleClass: {
				type: 'specialized',
				worker: 'food',
				industry: 'food',
			},
		},
	},
] satisfies ImmigrationCardsCard[];

export default immigrationCards;
