import eventFixtureCards from '../../../fixtures/assets/decks-sorted/event-cards/deck';

import Deck from './Deck';

import type { ParsedEventCard } from '../../../fixtures/assets/decks-sorted/types';

export type EventCard = ParsedEventCard;

const eventCards: EventCard[] = eventFixtureCards;

export default eventCards;

export function createEventDeck() {
	return new Deck('event cards', eventCards);
}
