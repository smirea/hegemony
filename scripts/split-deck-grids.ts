#!/usr/bin/env bun

import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const defaultRoot = existsSync('fixtures/assets/decks-sorted')
	? 'fixtures/assets/decks-sorted'
	: 'fixtures/decks-sorted';
const root = path.resolve(process.argv[2] ?? defaultRoot);
const gridName = /^grid_(\d+)-items_(\d+)-(\d+)__(.+)\.(jpe?g|png)$/i;
const backSheetName = /\bbacks?\b/i;

const folders = await readdir(root, { withFileTypes: true });
let written = 0;
let skippedBackSheets = 0;

for (const folder of folders) {
	if (!folder.isDirectory()) continue;

	const folderPath = path.join(root, folder.name);
	const files = await readdir(folderPath, { withFileTypes: true });

	for (const file of files) {
		if (!file.isFile()) continue;
		if (file.name.includes('__pos-')) continue;

		const match = file.name.match(gridName);
		if (!match) continue;

		const [, itemCountText, columnsText, rowsText, gridDescription] = match;
		if (backSheetName.test(gridDescription.replace(/[-_]+/g, ' '))) {
			skippedBackSheets++;
			continue;
		}

		const itemCount = Number(itemCountText);
		const columns = Number(columnsText);
		const rows = Number(rowsText);
		const sourcePath = path.join(folderPath, file.name);
		const { width, height } = identify(sourcePath);
		const ext = path.extname(file.name);
		const base = path.basename(file.name, ext);

		for (let index = 0; index < itemCount; index++) {
			const x = (index % columns) + 1;
			const y = Math.floor(index / columns) + 1;

			if (y > rows) {
				throw new Error(`${file.name} asks for ${itemCount} items but only has ${columns * rows} cells`);
			}

			const left = Math.round(((x - 1) * width) / columns);
			const right = Math.round((x * width) / columns);
			const top = Math.round(((y - 1) * height) / rows);
			const bottom = Math.round((y * height) / rows);
			const outputPath = path.join(folderPath, `${base}__pos-${x}-${y}${ext}`);

			run('magick', [sourcePath, '-crop', `${right - left}x${bottom - top}+${left}+${top}`, '+repage', outputPath]);
			written++;
		}
	}
}

console.log(`Split ${written} grid cells under ${path.relative(process.cwd(), root) || root}`);
if (skippedBackSheets) console.log(`Skipped ${skippedBackSheets} back grid sheet${skippedBackSheets === 1 ? '' : 's'}`);

function identify(file: string) {
	const output = run('magick', ['identify', '-format', '%w %h', file]);
	const [width, height] = output.split(/\s+/).map(Number);

	if (!width || !height) {
		throw new Error(`Could not read image dimensions for ${file}`);
	}

	return { width, height };
}

function run(command: string, args: string[]) {
	const result = spawnSync(command, args, { encoding: 'utf8' });

	if (result.status !== 0) {
		throw new Error(`${command} ${args.join(' ')} failed:\n${result.stderr}`);
	}

	return result.stdout.trim();
}
