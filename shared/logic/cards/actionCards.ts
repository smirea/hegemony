import capitalistActionCards from '../../../fixtures/assets/decks-sorted/capitalist-class-action-cards/deck';
import middleClassActionCards from '../../../fixtures/assets/decks-sorted/middle-class-action-cards/deck';
import stateActionCards from '../../../fixtures/assets/decks-sorted/state-action-cards/deck';
import workingClassActionCards from '../../../fixtures/assets/decks-sorted/working-class-action-cards/deck';

import { RoleEnum, type RoleName } from '../types';
import Deck from './Deck';

import type { ParsedActionCard } from '../../../fixtures/assets/decks-sorted/types';

export type ActionCard = ParsedActionCard;

export const actionCardsByRole = {
	[RoleEnum.workingClass]: workingClassActionCards,
	[RoleEnum.middleClass]: middleClassActionCards,
	[RoleEnum.capitalist]: capitalistActionCards,
	[RoleEnum.state]: stateActionCards,
} satisfies Record<RoleName, ActionCard[]>;

export function createActionDeck(role: RoleName) {
	return new Deck(`${role} action cards`, actionCardsByRole[role]);
}
