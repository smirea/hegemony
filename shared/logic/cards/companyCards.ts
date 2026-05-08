import capitalistClassCompanyCards from '../../../fixtures/assets/decks-sorted/capitalist-class-company-cards/deck';
import middleClassCompanyCards from '../../../fixtures/assets/decks-sorted/middle-class-company-cards/deck';
import publicCompanyCards from '../../../fixtures/assets/decks-sorted/public-company-cards/deck';
import cooperativeFarmCards from '../../../fixtures/assets/decks-sorted/cooperative-farm-cards/deck';

import type { ParsedCompanyDeckCard } from '../../../fixtures/assets/decks-sorted/types';

export type CompanyDeckCard = ParsedCompanyDeckCard;

export const capitalistCompanies: CompanyDeckCard[] = capitalistClassCompanyCards;
export const middleClassCompanies: CompanyDeckCard[] = middleClassCompanyCards;
export const stateCompanies: CompanyDeckCard[] = publicCompanyCards;
export const cooperativeFarms: CompanyDeckCard[] = cooperativeFarmCards;
