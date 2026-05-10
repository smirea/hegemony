#!/usr/bin/env bun

import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

import { capitalistCompanies, middleClassCompanies, stateCompanies } from '../shared/logic/cards/companyCards';

import type {
	DeckCardImage,
	ParsedActionCard,
	ParsedCompanyDeckCard,
	ParsedEventCard,
	ParsedImmigrationCard,
} from '../fixtures/assets/decks-sorted/types';
import type { CompanyCard } from '../shared/logic/types';

const root = path.resolve('fixtures/assets/decks-sorted');
const cardImageName = /^(grid_.+__pos-\d+-\d+|single__.+)\.(jpe?g|png)$/i;
const expectedCardCounts: Record<string, number> = {
	'business-deal-cards': 20,
	'capitalist-class-action-cards': 40,
	'capitalist-class-company-cards': 28,
	'cooperative-farm-cards': 2,
	'event-cards': 25,
	'export-cards': 16,
	'immigration-cards': 25,
	'loan-cards': 10,
	'middle-class-action-cards': 40,
	'middle-class-company-cards': 17,
	'political-agenda-cards': 10,
	'public-company-cards': 12,
	'state-action-cards': 40,
	'working-class-action-cards': 40,
};
const sourceCompanyDecks: Record<string, CompanyCard[]> = {
	'capitalist-class-company-cards': capitalistCompanies,
	'middle-class-company-cards': middleClassCompanies,
	'public-company-cards': stateCompanies,
};
const actionDecks: Record<
	string,
	{ role: ParsedActionCard['role']; category: NonNullable<ParsedActionCard['category']> }
> = {
	'capitalist-class-action-cards': { role: 'capitalist', category: 'base' },
	'capitalist-class-action-expansion-cards': { role: 'capitalist', category: 'expansion' },
	'middle-class-action-cards': { role: 'middleClass', category: 'base' },
	'middle-class-action-expansion-cards': { role: 'middleClass', category: 'expansion' },
	'state-action-cards': { role: 'state', category: 'base' },
	'state-action-expansion-cards': { role: 'state', category: 'expansion' },
	'working-class-action-cards': { role: 'workingClass', category: 'base' },
	'working-class-action-expansion-cards': { role: 'workingClass', category: 'expansion' },
};
const genericActionNames = new Set([
	'Capitalist Class Actions',
	'Capitalist Class Action Expansion',
	'Middle Class Actions',
	'Middle Class Action Expansion',
	'State Actions',
	'State Action Expansion',
	'Working Class Actions',
	'Working Class Action Expansion',
]);
const companyFields = [
	'id',
	'name',
	'cost',
	'industry',
	'production',
	'productionFromAutomation',
	'productionFromOptionalWorkers',
	'fullyAutomated',
	'wages',
	'workers',
] as const;
const expectedCompanySetup: Record<string, NonNullable<ParsedCompanyDeckCard['setup']>> = {
	'c-clinic-2': { starting: true, setupWage: 'l2' },
	'c-college-2': { starting: true, setupWage: 'l2' },
	'c-shopping-mall-2': { starting: true, setupWage: 'l2' },
	'c-supermarket-2': { starting: true, setupWage: 'l2' },
	'm-convenience-store-2': { starting: true, setupWage: 'l2' },
	'm-doctors-office-2': { starting: true, setupWage: 'l2' },
	's-national-public-broadcasting-1': { starting: true, playerCounts: [3, 4], publicSectorRow: 1, setupWage: 'l2' },
	's-public-hospital-1': { starting: true, playerCounts: [2], publicSectorRow: 1, setupWage: 'l2' },
	's-public-hospital-2': { playerCounts: [2, 3, 4], publicSectorRow: 2 },
	's-public-hospital-3': { playerCounts: [2, 3, 4], publicSectorRow: 3 },
	's-public-university-1': { starting: true, playerCounts: [2], publicSectorRow: 1, setupWage: 'l2' },
	's-public-university-2': { playerCounts: [2, 3, 4], publicSectorRow: 2 },
	's-public-university-3': { playerCounts: [2, 3, 4], publicSectorRow: 3 },
	's-regional-tv-station-1': { starting: true, playerCounts: [2], publicSectorRow: 1, setupWage: 'l2' },
	's-regional-tv-station-2': { playerCounts: [2, 3, 4], publicSectorRow: 2 },
	's-regional-tv-station-3': { playerCounts: [2, 3, 4], publicSectorRow: 3 },
	's-technical-university-1': { starting: true, playerCounts: [3, 4], publicSectorRow: 1, setupWage: 'l2' },
	's-university-hospital-1': { starting: true, playerCounts: [3, 4], publicSectorRow: 1, setupWage: 'l2' },
};

const errors: string[] = [];
const folders = (await readdir(root, { withFileTypes: true })).filter(entry => entry.isDirectory());
const folderNames = new Set(folders.map(folder => folder.name));
let cardCount = 0;
const seenIds = new Set<string>();

for (const folderName of Object.keys(expectedCardCounts)) {
	if (!folderNames.has(folderName)) errors.push(`${folderName}: missing base-game deck folder`);
}

for (const folder of folders) {
	const folderPath = path.join(root, folder.name);
	const deckPath = path.join(folderPath, 'deck.ts');
	const expectedFrontImages = (await readdir(folderPath))
		.filter(file => cardImageName.test(file))
		.map(file => toAssetPath(path.join(folderPath, file)))
		.sort();

	if (!existsSync(deckPath)) {
		errors.push(`${folder.name}: missing deck.ts`);
		continue;
	}

	const module = await import(pathToFileUrl(deckPath));
	const deck = module.default as DeckCardImage[];
	if (!Array.isArray(deck)) {
		errors.push(`${folder.name}: default export is not an array`);
		continue;
	}
	cardCount += deck.length;
	const expectedCardCount = expectedCardCounts[folder.name];
	if (expectedCardCount != null && deck.length !== expectedCardCount) {
		errors.push(`${folder.name}: expected ${expectedCardCount} cards from rules, got ${deck.length}`);
	}

	const actualFrontImages = [...new Set(deck.map(card => card.frontImage))].sort();
	if (actualFrontImages.length !== expectedFrontImages.length) {
		errors.push(
			`${folder.name}: expected ${expectedFrontImages.length} unique front images, got ${actualFrontImages.length}`,
		);
	}

	for (const frontImage of expectedFrontImages) {
		if (!actualFrontImages.includes(frontImage)) errors.push(`${folder.name}: missing ${frontImage}`);
	}
	for (const frontImage of actualFrontImages) {
		if (!expectedFrontImages.includes(frontImage)) errors.push(`${folder.name}: unexpected ${frontImage}`);
	}

	for (const card of deck) {
		if (seenIds.has(card.id)) errors.push(`${folder.name}: duplicate id ${card.id}`);
		seenIds.add(card.id);
		if (!existsSync(path.resolve(card.frontImage)))
			errors.push(`${folder.name}: front image missing on disk: ${card.frontImage}`);
		if (card.backImage && !existsSync(path.resolve(card.backImage))) {
			errors.push(`${folder.name}: back image missing on disk: ${card.backImage}`);
		}
		if (!card.rawText.trim()) errors.push(`${folder.name}: ${card.id} has empty rawText`);
		if ('effects' in card) errors.push(`${folder.name}: ${card.id} uses effects instead of stateEffects`);
		const parsedCard = card as DeckCardImage & { kind?: string; stateEffects?: unknown };
		if (['action', 'automa', 'crisis-response', 'event', 'historical-event'].includes(parsedCard.kind ?? '')) {
			if (!Array.isArray(parsedCard.stateEffects)) errors.push(`${folder.name}: ${card.id} is missing stateEffects`);
		}
	}

	for (const [frontImage, cards] of groupBy(deck, card => card.frontImage)) {
		if (cards.length <= 1) continue;
		const copyIndexes = cards.map(card => card.source.copyIndex);
		if (copyIndexes.some(copyIndex => !Number.isInteger(copyIndex))) {
			errors.push(`${folder.name}: duplicate front image ${frontImage} must set source.copyIndex on every card`);
		}
		if (new Set(copyIndexes).size !== cards.length) {
			errors.push(`${folder.name}: duplicate front image ${frontImage} has duplicate source.copyIndex values`);
		}
	}

	const sourceCompanyDeck = sourceCompanyDecks[folder.name];
	if (sourceCompanyDeck) validateCompanyDeck(folder.name, deck as ParsedCompanyDeckCard[], sourceCompanyDeck);
	const actionDeck = actionDecks[folder.name];
	if (actionDeck) validateActionDeck(folder.name, deck as ParsedActionCard[], actionDeck);
	if (folder.name === 'cooperative-farm-cards') validateCooperativeFarmDeck(deck as ParsedCompanyDeckCard[]);
	if (folder.name === 'event-cards') validateEventDeck(deck as ParsedEventCard[]);
	if (folder.name === 'immigration-cards') validateImmigrationDeck(deck as ParsedImmigrationCard[]);
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Validated ${cardCount} cards across ${folders.length} deck fixture folders`);

function toAssetPath(file: string) {
	return path.relative(process.cwd(), file) as DeckCardImage['frontImage'];
}

function pathToFileUrl(file: string) {
	return `file://${file}`;
}

function groupBy<T, K>(items: T[], getKey: (item: T) => K) {
	const groups = new Map<K, T[]>();
	for (const item of items) {
		const key = getKey(item);
		groups.set(key, [...(groups.get(key) ?? []), item]);
	}
	return groups;
}

function validateCompanyDeck(folderName: string, deck: ParsedCompanyDeckCard[], sourceCards: CompanyCard[]) {
	if (deck.length !== sourceCards.length) {
		errors.push(`${folderName}: expected ${sourceCards.length} source company cards, got ${deck.length}`);
	}
	const cardsById = new Map(deck.map(card => [card.id, card]));
	const sourceIds = new Set(sourceCards.map(card => card.id));
	for (const card of deck) {
		if (!sourceIds.has(card.id)) errors.push(`${folderName}: ${card.id} is not in shared companyCards source data`);
	}
	for (const sourceCard of sourceCards) {
		const parsedCard = cardsById.get(sourceCard.id);
		if (!parsedCard) {
			errors.push(`${folderName}: missing source company ${sourceCard.id}`);
			continue;
		}
		for (const field of companyFields) {
			const expected = getCompanyField(sourceCard, field);
			const actual = getCompanyField(parsedCard, field);
			if (JSON.stringify(actual) !== JSON.stringify(expected)) {
				errors.push(
					`${folderName}: ${sourceCard.id}.${field} mismatch: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
				);
			}
		}
		const expectedSetup = expectedCompanySetup[sourceCard.id];
		if (expectedSetup && JSON.stringify(parsedCard.setup) !== JSON.stringify(expectedSetup)) {
			errors.push(
				`${folderName}: ${sourceCard.id}.setup mismatch: expected ${JSON.stringify(expectedSetup)}, got ${JSON.stringify(parsedCard.setup)}`,
			);
		}
	}
}

function validateCooperativeFarmDeck(deck: ParsedCompanyDeckCard[]) {
	for (const card of deck) {
		const expected = {
			owner: 'workingClass',
			name: 'Cooperative Farm',
			cost: 0,
			industry: 'food',
			production: 2,
			wages: { l1: 0, l2: 0, l3: 0 },
			workers: [
				{ type: 'unskilled', roles: ['workingClass'], optional: false },
				{ type: 'unskilled', roles: ['workingClass'], optional: false },
				{ type: 'unskilled', roles: ['workingClass'], optional: false },
			],
		};
		for (const [field, expectedValue] of Object.entries(expected)) {
			const actualValue = field === 'workers' ? getCompanyField(card, 'workers') : card[field as keyof typeof card];
			if (JSON.stringify(actualValue) !== JSON.stringify(expectedValue)) {
				errors.push(
					`cooperative-farm-cards: ${card.id}.${field} mismatch: expected ${JSON.stringify(expectedValue)}, got ${JSON.stringify(actualValue)}`,
				);
			}
		}
	}
}

function validateEventDeck(deck: ParsedEventCard[]) {
	const genericNames = new Set(['Base Events', 'Event Cards']);
	for (const card of deck) {
		if (card.kind !== 'event') errors.push(`event-cards: ${card.id} is not an event card`);
		if (genericNames.has(card.name)) errors.push(`event-cards: ${card.id} still has generic event name`);
		if (!/^[A-Z0-9][A-Za-z0-9 &'.,:!?/()-]+$/.test(card.name)) {
			errors.push(`event-cards: ${card.id} has suspicious event name ${JSON.stringify(card.name)}`);
		}
		if (!card.content.startsWith(card.name))
			errors.push(`event-cards: ${card.id} content does not start with its name`);
		if (!card.task?.trim()) errors.push(`event-cards: ${card.id} is missing task`);
		if (!card.choices?.length) errors.push(`event-cards: ${card.id} is missing choices`);
		if (!card.noAction?.text.trim()) errors.push(`event-cards: ${card.id} is missing noAction text`);
		if (card.stateEffectsCoverage && !['complete', 'partial', 'unparsed'].includes(card.stateEffectsCoverage)) {
			errors.push(`event-cards: ${card.id} has invalid stateEffectsCoverage ${card.stateEffectsCoverage}`);
		}
		if (
			card.stateEffectsCoverage === 'complete' &&
			!card.stateEffects.length &&
			!card.choices?.some(choice => choice.stateEffects?.length)
		) {
			errors.push(`event-cards: ${card.id} is marked complete without declarative effects`);
		}
	}
}

function validateImmigrationDeck(deck: ParsedImmigrationCard[]) {
	const industryCounts = {
		workingClass: new Map<string, number>(),
		middleClass: new Map<string, number>(),
	};
	const specializedCounts = { workingClass: 0, middleClass: 0 };

	for (const card of deck) {
		for (const className of ['workingClass', 'middleClass'] as const) {
			const worker = card.workers[className];
			if ('quantity' in worker) errors.push(`immigration-cards: ${card.id}.${className} still uses quantity`);
			if (worker.type === 'unskilled') {
				if (worker.worker !== 'unskilled') {
					errors.push(`immigration-cards: ${card.id}.${className} has unskilled type with ${worker.worker} worker`);
				}
				if (worker.industry) errors.push(`immigration-cards: ${card.id}.${className} has industry on unskilled worker`);
			} else {
				specializedCounts[className] += 1;
				if (!worker.industry) errors.push(`immigration-cards: ${card.id}.${className} is missing industry`);
				if (worker.worker !== worker.industry) {
					errors.push(
						`immigration-cards: ${card.id}.${className} worker/industry mismatch: ${worker.worker}/${worker.industry}`,
					);
				}
				industryCounts[className].set(worker.worker, (industryCounts[className].get(worker.worker) ?? 0) + 1);
			}
		}
	}

	if (specializedCounts.workingClass !== 10) {
		errors.push(
			`immigration-cards: expected 10 Working Class specialized cards, got ${specializedCounts.workingClass}`,
		);
	}
	if (specializedCounts.middleClass !== 15) {
		errors.push(`immigration-cards: expected 15 Middle Class specialized cards, got ${specializedCounts.middleClass}`);
	}
	for (const industry of ['food', 'healthcare', 'education', 'luxury', 'influence']) {
		if (industryCounts.workingClass.get(industry) !== 2) {
			errors.push(
				`immigration-cards: expected 2 Working Class ${industry} workers, got ${industryCounts.workingClass.get(industry) ?? 0}`,
			);
		}
		if (industryCounts.middleClass.get(industry) !== 3) {
			errors.push(
				`immigration-cards: expected 3 Middle Class ${industry} workers, got ${industryCounts.middleClass.get(industry) ?? 0}`,
			);
		}
	}
}

function validateActionDeck(
	folderName: string,
	deck: ParsedActionCard[],
	expected: { role: ParsedActionCard['role']; category: NonNullable<ParsedActionCard['category']> },
) {
	for (const card of deck) {
		if (card.kind !== 'action') errors.push(`${folderName}: ${card.id} is not an action card`);
		if (card.role !== expected.role) errors.push(`${folderName}: ${card.id} has role ${card.role}`);
		if (card.category !== expected.category) errors.push(`${folderName}: ${card.id} has category ${card.category}`);
		if (genericActionNames.has(card.name)) errors.push(`${folderName}: ${card.id} still has generic action name`);
		if (!/^[A-Z0-9][A-Z0-9 &'’.,:!?/()-]+$/.test(card.name)) {
			errors.push(`${folderName}: ${card.id} has suspicious action name ${JSON.stringify(card.name)}`);
		}
		if (!card.content.startsWith(card.name)) {
			errors.push(`${folderName}: ${card.id} content does not start with its normalized name`);
		}
		if (!['complete', 'partial', 'unparsed'].includes(card.stateEffectsCoverage)) {
			errors.push(`${folderName}: ${card.id} has invalid stateEffectsCoverage ${card.stateEffectsCoverage}`);
		}
		if (expected.category === 'base' && card.stateEffectsCoverage !== 'complete') {
			errors.push(`${folderName}: ${card.id} is not fully parsed`);
		}
		if (card.stateEffectsCoverage === 'unparsed' && card.stateEffects.length) {
			errors.push(`${folderName}: ${card.id} has effects but is marked unparsed`);
		}
		if (card.stateEffectsCoverage !== 'unparsed' && !card.stateEffects.length) {
			errors.push(`${folderName}: ${card.id} has parsed coverage but no stateEffects`);
		}
		if (/may not call for an\s+Immediate Vote/i.test(card.content)) {
			const hasImmediateVote = card.stateEffects.some(
				effect => effect.type === 'vote' && effect.action === 'immediate-vote',
			);
			const blocksImmediateVote = card.stateEffects.some(
				effect => effect.type === 'policy' && effect.action === 'propose' && effect.immediateVoteAllowed === false,
			);
			if (hasImmediateVote) errors.push(`${folderName}: ${card.id} incorrectly adds an immediate-vote effect`);
			if (!blocksImmediateVote) errors.push(`${folderName}: ${card.id} does not encode immediateVoteAllowed: false`);
		}
		if (!Number.isInteger(card.source.physicalIndex)) {
			errors.push(`${folderName}: ${card.id} is missing source.physicalIndex`);
		}
		if (!Number.isInteger(card.source.copyIndex)) {
			errors.push(`${folderName}: ${card.id} is missing source.copyIndex`);
		}
	}

	for (const [name, cards] of groupBy(deck, card => card.name)) {
		const copyIndexes = cards.map(card => card.source.copyIndex);
		if (new Set(copyIndexes).size !== cards.length) {
			errors.push(`${folderName}: action name ${name} has duplicate source.copyIndex values`);
		}
		for (const card of cards) {
			const expectedId = `${actionIdPrefix(expected.role)}-action-${expected.category === 'expansion' ? 'expansion-' : ''}${slug(card.name)}-${card.source.copyIndex}`;
			if (card.id !== expectedId) errors.push(`${folderName}: expected ${expectedId}, got ${card.id}`);
		}
	}
}

function getCompanyField(card: CompanyCard, field: (typeof companyFields)[number]) {
	if (field === 'workers') {
		return card.workers.map(worker => ({
			type: worker.type,
			roles: worker.roles,
			optional: worker.optional,
		}));
	}
	return card[field];
}

function actionIdPrefix(role: ParsedActionCard['role']) {
	switch (role) {
		case 'capitalist':
			return 'capitalist-class';
		case 'middleClass':
			return 'middle-class';
		case 'workingClass':
			return 'working-class';
		case 'state':
			return 'state';
	}
}

function slug(value: string) {
	return value
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}
