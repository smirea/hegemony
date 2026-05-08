import type { ParsedImmigrationCard } from '../types';

interface ImmigrationCardsCard extends ParsedImmigrationCard {}

const immigrationCards = [
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 1: working class 2 specialized food; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-1.jpg',
			position: {
				x: 1,
				y: 1,
			},
		},
		parsed: {
			numbers: [1, 2, 3],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'food', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 1',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'food',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 2: working class 2 specialized healthcare; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-1.jpg',
			position: {
				x: 2,
				y: 1,
			},
		},
		parsed: {
			numbers: [2, 3],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'healthcare', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 2',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'healthcare',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 3: working class 2 specialized education; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-1.jpg',
			position: {
				x: 3,
				y: 1,
			},
		},
		parsed: {
			numbers: [3, 2],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'education', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 3',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'education',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 4: working class 2 specialized luxury; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-1.jpg',
			position: {
				x: 4,
				y: 1,
			},
		},
		parsed: {
			numbers: [4, 2, 3],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'luxury', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 4',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'luxury',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-1',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-1.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 5: working class 2 specialized influence; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-1.jpg',
			position: {
				x: 5,
				y: 1,
			},
		},
		parsed: {
			numbers: [5, 2, 3],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'influence', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 5',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'influence',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 6: working class 2 specialized food; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-2.jpg',
			position: {
				x: 1,
				y: 2,
			},
		},
		parsed: {
			numbers: [6, 2, 3],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'food', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 6',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'food',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 7: working class 2 specialized healthcare; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-2.jpg',
			position: {
				x: 2,
				y: 2,
			},
		},
		parsed: {
			numbers: [7, 2, 3],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'healthcare', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 7',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'healthcare',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 8: working class 2 specialized education; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-2.jpg',
			position: {
				x: 3,
				y: 2,
			},
		},
		parsed: {
			numbers: [8, 2, 3],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'education', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 8',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'education',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 9: working class 2 specialized luxury; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-2.jpg',
			position: {
				x: 4,
				y: 2,
			},
		},
		parsed: {
			numbers: [9, 2, 3],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'luxury', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 9',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'luxury',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-2',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-2.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 10: working class 2 specialized influence; middle class 3 unskilled.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-2.jpg',
			position: {
				x: 5,
				y: 2,
			},
		},
		parsed: {
			numbers: [10, 2, 3],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'specialized', 'influence', 'middle', 'unskilled'],
		},
		kind: 'immigration',
		name: 'Immigration 10',
		workers: {
			workingClass: {
				type: 'specialized',
				quantity: 2,
				industry: 'influence',
			},
			middleClass: {
				type: 'unskilled',
				quantity: 3,
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 11: working class 2 unskilled; middle class 3 specialized food.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-3.jpg',
			position: {
				x: 1,
				y: 3,
			},
		},
		parsed: {
			numbers: [11, 2, 3],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 11',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'food',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 12: working class 2 unskilled; middle class 3 specialized healthcare.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-3.jpg',
			position: {
				x: 2,
				y: 3,
			},
		},
		parsed: {
			numbers: [12, 2, 3],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 12',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 13: working class 2 unskilled; middle class 3 specialized education.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-3.jpg',
			position: {
				x: 3,
				y: 3,
			},
		},
		parsed: {
			numbers: [13, 2, 3],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 13',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 14: working class 2 unskilled; middle class 3 specialized luxury.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-3.jpg',
			position: {
				x: 4,
				y: 3,
			},
		},
		parsed: {
			numbers: [14, 2, 3],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 14',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-3',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-3.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 15: working class 2 unskilled; middle class 3 specialized influence.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-3.jpg',
			position: {
				x: 5,
				y: 3,
			},
		},
		parsed: {
			numbers: [15, 2, 3],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 15',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'influence',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 16: working class 2 unskilled; middle class 3 specialized food.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-4.jpg',
			position: {
				x: 1,
				y: 4,
			},
		},
		parsed: {
			numbers: [16, 2, 3],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 16',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'food',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 17: working class 2 unskilled; middle class 3 specialized healthcare.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-4.jpg',
			position: {
				x: 2,
				y: 4,
			},
		},
		parsed: {
			numbers: [17, 2, 3],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 17',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 18: working class 2 unskilled; middle class 3 specialized education.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-4.jpg',
			position: {
				x: 3,
				y: 4,
			},
		},
		parsed: {
			numbers: [18, 2, 3],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 18',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 19: working class 2 unskilled; middle class 3 specialized luxury.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-4.jpg',
			position: {
				x: 4,
				y: 4,
			},
		},
		parsed: {
			numbers: [19, 2, 3],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 19',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-4',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-4.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 20: working class 2 unskilled; middle class 3 specialized influence.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-4.jpg',
			position: {
				x: 5,
				y: 4,
			},
		},
		parsed: {
			numbers: [20, 2, 3],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 20',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'influence',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-1-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-1-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 21: working class 2 unskilled; middle class 3 specialized food.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-1-5.jpg',
			position: {
				x: 1,
				y: 5,
			},
		},
		parsed: {
			numbers: [21, 2, 3],
			resources: ['food'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'food'],
		},
		kind: 'immigration',
		name: 'Immigration 21',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'food',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-2-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-2-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 22: working class 2 unskilled; middle class 3 specialized healthcare.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-2-5.jpg',
			position: {
				x: 2,
				y: 5,
			},
		},
		parsed: {
			numbers: [22, 2, 3],
			resources: ['healthcare'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'healthcare'],
		},
		kind: 'immigration',
		name: 'Immigration 22',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'healthcare',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-3-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-3-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 23: working class 2 unskilled; middle class 3 specialized education.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-3-5.jpg',
			position: {
				x: 3,
				y: 5,
			},
		},
		parsed: {
			numbers: [23, 2, 3],
			resources: ['education'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'education'],
		},
		kind: 'immigration',
		name: 'Immigration 23',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'education',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-4-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-4-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 24: working class 2 unskilled; middle class 3 specialized luxury.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-4-5.jpg',
			position: {
				x: 4,
				y: 5,
			},
		},
		parsed: {
			numbers: [24, 2, 3],
			resources: ['luxury'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'luxury'],
		},
		kind: 'immigration',
		name: 'Immigration 24',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'luxury',
			},
		},
	},
	{
		id: 'immigration-cards-grid-25-items-5-5-immigration-deck-109-pos-5-5',
		frontImage: 'fixtures/assets/decks-sorted/immigration-cards/grid_25-items_5-5__immigration-deck-109__pos-5-5.jpg',
		backImage: 'fixtures/assets/decks-sorted/immigration-cards/back__immigration-deck-109.jpg',
		rawText: 'Immigration card 25: working class 2 unskilled; middle class 3 specialized influence.',
		source: {
			deck: 'immigration-cards',
			file: 'grid_25-items_5-5__immigration-deck-109__pos-5-5.jpg',
			position: {
				x: 5,
				y: 5,
			},
		},
		parsed: {
			numbers: [25, 2, 3],
			resources: ['influence'],
			keywords: ['immigration', 'card', 'working', 'class', 'unskilled', 'middle', 'specialized', 'influence'],
		},
		kind: 'immigration',
		name: 'Immigration 25',
		workers: {
			workingClass: {
				type: 'unskilled',
				quantity: 2,
			},
			middleClass: {
				type: 'specialized',
				quantity: 3,
				industry: 'influence',
			},
		},
	},
] satisfies ImmigrationCardsCard[];

export default immigrationCards;
