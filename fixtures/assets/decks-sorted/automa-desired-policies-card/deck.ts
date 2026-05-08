import type { ParsedAutomaCard } from '../types';

interface AutomaDesiredPoliciesCardCard extends ParsedAutomaCard {}

const automaDesiredPoliciesCard = [
	{
		id: 'automa-desired-policies-card-single-automa-desired-policies-deck-242',
		frontImage:
			'fixtures/assets/decks-sorted/automa-desired-policies-card/single__automa-desired-policies-deck-242.jpg',
		backImage: 'fixtures/assets/decks-sorted/automa-desired-policies-card/back__automa-desired-policies-deck-242.jpg',
		rawText:
			'rt r\nDESIRED POLICIES\nThe Desired Policies for each other\nplayer are assumed by the Automa\nto be the following:\nry\nti\nbia [2a [3a] 4a [5a | 6c | 78 |\na\nl2c [sc J 4c | 5c [6a] 7c |\nfie [2B | 3B | 48 [5B | 6B | 74)\nlie [2c [3a | 48 [5B] 6B} 7c]\nLe La',
		source: {
			deck: 'automa-desired-policies-card',
			file: 'single__automa-desired-policies-deck-242.jpg',
		},
		parsed: {
			numbers: [2, 3, 4, 5, 6, 78, 7, 48, 74],
			policies: ['2A', '3A', '4A', '5A', '6C', '4C', '5C', '6A', '7C', '2B', '3B', '5B', '6B', '2C'],
			keywords: [
				'desired',
				'policies',
				'the',
				'for',
				'each',
				'other',
				'player',
				'are',
				'assumed',
				'automa',
				'following',
				'bia',
				'fie',
				'lie',
			],
		},
		kind: 'automa',
		deckType: 'desired-policies',
		name: 'rt r',
		content:
			'DESIRED POLICIES\nThe Desired Policies for each other\nplayer are assumed by the Automa\nto be the following:\nry\nti\nbia [2a [3a] 4a [5a | 6c | 78 |\na\nl2c [sc J 4c | 5c [6a] 7c |\nfie [2B | 3B | 48 [5B | 6B | 74)\nlie [2c [3a | 48 [5B] 6B} 7c]\nLe La',
		values: {
			numbers: [2, 3, 4, 5, 6, 78, 7, 48, 74],
			policies: ['2A', '3A', '4A', '5A', '6C', '4C', '5C', '6A', '7C', '2B', '3B', '5B', '6B', '2C'],
			keywords: [
				'desired',
				'policies',
				'the',
				'for',
				'each',
				'other',
				'player',
				'are',
				'assumed',
				'automa',
				'following',
				'bia',
				'fie',
				'lie',
			],
		},
		effects: [
			{
				type: 'raw',
				text: 'DESIRED POLICIES\nThe Desired Policies for each other\nplayer are assumed by the Automa\nto be the following:\nry\nti\nbia [2a [3a] 4a [5a | 6c | 78 |\na\nl2c [sc J 4c | 5c [6a] 7c |\nfie [2B | 3B | 48 [5B | 6B | 74)\nlie [2c [3a | 48 [5B] 6B} 7c]\nLe La',
			},
		],
	},
] satisfies AutomaDesiredPoliciesCardCard[];

export default automaDesiredPoliciesCard;
