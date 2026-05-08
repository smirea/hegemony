#!/usr/bin/env bun

import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

import type { DeckCardImage } from '../fixtures/assets/decks-sorted/types';

const root = path.resolve('fixtures/assets/decks-sorted');
const cardImageName = /^(grid_.+__pos-\d+-\d+|single__.+)\.(jpe?g|png)$/i;

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

	const actualFrontImages = deck.map(card => card.frontImage).sort();
	if (actualFrontImages.length !== expectedFrontImages.length) {
		errors.push(`${folder.name}: expected ${expectedFrontImages.length} front images, got ${actualFrontImages.length}`);
	}

	for (const frontImage of expectedFrontImages) {
		if (!actualFrontImages.includes(frontImage)) errors.push(`${folder.name}: missing ${frontImage}`);
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
