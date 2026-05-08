import type { ParsedLoanCard } from '../types';

interface LoanCardsCard extends ParsedLoanCard {}

const loanCards = [
	{
		id: 'loan-cards-single-loan-30-40-deck-206',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-30-40-deck-206.jpg',
		backImage: null,
		rawText: 'Loan 30-40',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-30-40-deck-206.jpg',
		},
		parsed: {
			numbers: [30, -40],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 30-40',
		value: 30,
		range: [30, 40],
	},
	{
		id: 'loan-cards-single-loan-30-40-deck-210',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-30-40-deck-210.jpg',
		backImage: null,
		rawText: 'Loan 30-40',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-30-40-deck-210.jpg',
		},
		parsed: {
			numbers: [30, -40],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 30-40',
		value: 30,
		range: [30, 40],
	},
	{
		id: 'loan-cards-single-loan-50-70-deck-206',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-70-deck-206.jpg',
		backImage: null,
		rawText: 'Loan 50-70',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-70-deck-206.jpg',
		},
		parsed: {
			numbers: [50, -70],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50-70',
		value: 50,
		range: [50, 70],
	},
	{
		id: 'loan-cards-single-loan-50-70-deck-210',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-70-deck-210.jpg',
		backImage: null,
		rawText: 'Loan 50-70',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-70-deck-210.jpg',
		},
		parsed: {
			numbers: [50, -70],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50-70',
		value: 50,
		range: [50, 70],
	},
	{
		id: 'loan-cards-single-loan-50-back-source-deck-014',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-back-source-deck-014.jpg',
		backImage: null,
		rawText: 'Loan 50',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-back-source-deck-014.jpg',
		},
		parsed: {
			numbers: [50],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50',
		value: 50,
	},
	{
		id: 'loan-cards-single-loan-50-back-source-deck-089',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-back-source-deck-089.jpg',
		backImage: null,
		rawText: 'Loan 50',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-back-source-deck-089.jpg',
		},
		parsed: {
			numbers: [50],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50',
		value: 50,
	},
	{
		id: 'loan-cards-single-loan-50-deck-014',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-deck-014.jpg',
		backImage: null,
		rawText: 'Loan 50',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-deck-014.jpg',
		},
		parsed: {
			numbers: [50],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50',
		value: 50,
	},
	{
		id: 'loan-cards-single-loan-50-deck-089',
		frontImage: 'fixtures/assets/decks-sorted/loan-cards/single__loan-50-deck-089.jpg',
		backImage: null,
		rawText: 'Loan 50',
		source: {
			deck: 'loan-cards',
			file: 'single__loan-50-deck-089.jpg',
		},
		parsed: {
			numbers: [50],
			resources: ['money'],
			keywords: ['loan'],
		},
		kind: 'loan',
		name: 'Loan 50',
		value: 50,
	},
] satisfies LoanCardsCard[];

export default loanCards;
