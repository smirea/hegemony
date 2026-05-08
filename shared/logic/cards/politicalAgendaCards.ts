import politicalAgendaFixtureCards from '../../../fixtures/assets/decks-sorted/political-agenda-cards/deck';

import Deck from './Deck';

import type { ParsedPoliticalAgendaCard } from '../../../fixtures/assets/decks-sorted/types';

export type PoliticalAgendaCard = ParsedPoliticalAgendaCard;

const politicalAgendaCards: PoliticalAgendaCard[] = politicalAgendaFixtureCards;

export default politicalAgendaCards;

export function createPoliticalAgendaDeck() {
	return new Deck('political agenda cards', politicalAgendaCards);
}
