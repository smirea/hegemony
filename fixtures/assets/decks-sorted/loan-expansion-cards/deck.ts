import type { ParsedLoanCard } from '../types';

interface LoanExpansionCardsCard extends ParsedLoanCard {}

const loanExpansionCards = [
	{
		id: 'loan-expansion-cards-loan-30-40-50-70-deck-210-copy-1',
		frontImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
		backImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
		rawText: 'Loan 30/40 front; Loan 50/70 back.',
		source: {
			deck: 'loan-expansion-cards',
			file: 'single__loan-30-40-deck-210.jpg',
			cardId: 21000,
			copyIndex: 1,
			physicalIndex: 1,
		},
		parsed: {
			numbers: [30, 40, 50, 70],
			money: [30, 40, 50, 70],
			resources: ['money'],
			keywords: ['loan', 'expansion', 'double-sided'],
		},
		notes: ['Double-sided expansion loan card; back face shows the 50/70 side.'],
		kind: 'loan',
		name: 'Loan 30-40 / 50-70',
		value: 30,
		repayment: 40,
		range: [30, 40],
		sides: [
			{
				label: 'front',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
				value: 30,
				repayment: 40,
			},
			{
				label: 'back',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
				value: 50,
				repayment: 70,
			},
		],
	},
	{
		id: 'loan-expansion-cards-loan-30-40-50-70-deck-210-copy-2',
		frontImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
		backImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
		rawText: 'Loan 30/40 front; Loan 50/70 back.',
		source: {
			deck: 'loan-expansion-cards',
			file: 'single__loan-30-40-deck-210.jpg',
			cardId: 21000,
			copyIndex: 2,
			physicalIndex: 2,
		},
		parsed: {
			numbers: [30, 40, 50, 70],
			money: [30, 40, 50, 70],
			resources: ['money'],
			keywords: ['loan', 'expansion', 'double-sided'],
		},
		notes: ['Double-sided expansion loan card; back face shows the 50/70 side.'],
		kind: 'loan',
		name: 'Loan 30-40 / 50-70',
		value: 30,
		repayment: 40,
		range: [30, 40],
		sides: [
			{
				label: 'front',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
				value: 30,
				repayment: 40,
			},
			{
				label: 'back',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
				value: 50,
				repayment: 70,
			},
		],
	},
	{
		id: 'loan-expansion-cards-loan-30-40-50-70-deck-210-copy-3',
		frontImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
		backImage: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
		rawText: 'Loan 30/40 front; Loan 50/70 back.',
		source: {
			deck: 'loan-expansion-cards',
			file: 'single__loan-30-40-deck-210.jpg',
			cardId: 21000,
			copyIndex: 3,
			physicalIndex: 3,
		},
		parsed: {
			numbers: [30, 40, 50, 70],
			money: [30, 40, 50, 70],
			resources: ['money'],
			keywords: ['loan', 'expansion', 'double-sided'],
		},
		notes: ['Double-sided expansion loan card; back face shows the 50/70 side.'],
		kind: 'loan',
		name: 'Loan 30-40 / 50-70',
		value: 30,
		repayment: 40,
		range: [30, 40],
		sides: [
			{
				label: 'front',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/single__loan-30-40-deck-210.jpg',
				value: 30,
				repayment: 40,
			},
			{
				label: 'back',
				image: 'fixtures/assets/decks-sorted/loan-expansion-cards/back__loan-50-70-deck-210.jpg',
				value: 50,
				repayment: 70,
			},
		],
	},
] satisfies LoanExpansionCardsCard[];

export default loanExpansionCards;
