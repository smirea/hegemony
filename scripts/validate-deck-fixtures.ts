#!/usr/bin/env bun

import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

import type { DeckCardImage } from '../fixtures/assets/decks-sorted/types';

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

const errors: string[] = [];
const folders = (await readdir(root, { withFileTypes: true })).filter(entry => entry.isDirectory());
let cardCount = 0;
const seenIds = new Set<string>();

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
