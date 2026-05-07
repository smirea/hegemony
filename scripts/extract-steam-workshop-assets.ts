#!/usr/bin/env bun
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

type BsonValue = string | number | boolean | null | BsonValue[] | { [key: string]: BsonValue };

type BsonObject = { [key: string]: BsonValue };

type AssetRequest = {
	kind: string;
	pathBase: string;
	sourceUrl: string;
	metadata?: Record<string, unknown>;
};

type DeckDefinition = {
	deckId: string;
	faceUrl: string;
	backUrl: string;
	width: BsonValue | undefined;
	height: BsonValue | undefined;
	uniqueBack: BsonValue | undefined;
	references: DeckReference[];
};

type ManifestAsset = {
	kind: string;
	path: string;
	sourceUrl: string;
	downloadUrl: string;
	bytes: number;
	[key: string]: unknown;
};

type PublishedFileDetails = {
	result: string | number;
	file_url: string;
	title?: string;
	time_updated?: string | number;
};

type DeckReference = {
	path: string;
	guid?: string;
	name?: string;
	nickname?: string;
	description?: string;
	position?: { x: number; y: number; z: number };
	containedCount: number;
	cardIds: number[];
};

const defaultWorkshopUrl = 'https://steamcommunity.com/sharedfiles/filedetails/?id=2652586902';
const workshopUrl = process.argv[2] ?? defaultWorkshopUrl;
const outputDir = path.resolve(process.argv[3] ?? 'fixtures/assets');
const workshopId = workshopUrl.match(/[?&]id=(\d+)/)?.[1] ?? workshopUrl.match(/^\d+$/)?.[0];

if (!workshopId) {
	throw new Error(`Could not find a Workshop id in ${workshopUrl}`);
}

const details = await getPublishedFileDetails(workshopId);
const saveResponse = await fetch(details.file_url);

if (!saveResponse.ok) {
	throw new Error(`Failed to download Workshop save: ${saveResponse.status}`);
}

const root = decodeBson(Buffer.from(await saveResponse.arrayBuffer()));
const assets = collectAssets(root);
const downloaded = new Map<string, Uint8Array>();
const manifestAssets: ManifestAsset[] = [];

for (const asset of assets) {
	const url = normalizeSteamUrl(asset.sourceUrl);
	let bytes = downloaded.get(url);

	if (!bytes) {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to download ${url}: ${response.status}`);
		}

		bytes = new Uint8Array(await response.arrayBuffer());
		downloaded.set(url, bytes);
	}

	const extension = detectExtension(bytes);
	const relativePath = `${asset.pathBase}.${extension}`;
	const absolutePath = path.join(outputDir, relativePath);

	await mkdir(path.dirname(absolutePath), { recursive: true });
	await Bun.write(absolutePath, bytes);

	manifestAssets.push({
		kind: asset.kind,
		path: relativePath,
		sourceUrl: asset.sourceUrl,
		downloadUrl: url,
		bytes: bytes.byteLength,
		...asset.metadata,
	});
}

const manifest = {
	source: {
		workshopId,
		workshopUrl: `https://steamcommunity.com/sharedfiles/filedetails/?id=${workshopId}`,
		title: details.title,
		timeUpdated: Number(details.time_updated),
		fileUrl: details.file_url,
	},
	counts: {
		files: manifestAssets.length,
		uniqueDownloads: downloaded.size,
		deckFiles: manifestAssets.filter(asset => asset.kind === 'deck').length,
		customImages: manifestAssets.filter(asset => asset.kind === 'custom-image').length,
	},
	assets: manifestAssets,
};

await mkdir(outputDir, { recursive: true });
await Bun.write(path.join(outputDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
await Bun.write(path.join(outputDir, 'decks', 'README.md'), renderDeckReadme(manifestAssets));

console.log(
	`Saved ${manifest.counts.files} files from ${manifest.counts.uniqueDownloads} unique downloads to ${outputDir}`,
);

async function getPublishedFileDetails(id: string) {
	const body = new URLSearchParams();
	body.set('itemcount', '1');
	body.set('publishedfileids[0]', id);

	const response = await fetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
		method: 'POST',
		body,
	});

	if (!response.ok) {
		throw new Error(`Steam API request failed: ${response.status}`);
	}

	const data = (await response.json()) as {
		response?: { publishedfiledetails?: PublishedFileDetails[] };
	};
	const details = data.response?.publishedfiledetails?.[0];

	if (!details || Number(details.result) !== 1 || typeof details.file_url !== 'string') {
		throw new Error(`Steam API did not return a downloadable file for ${id}`);
	}

	return details;
}

function collectAssets(root: BsonObject) {
	const assets: AssetRequest[] = [];
	const deckDefinitions = new Map<string, DeckDefinition>();
	const imageUrls = new Map<string, AssetRequest>();
	const objectStates = Array.isArray(root.ObjectStates) ? root.ObjectStates : [];

	const addUnique = (map: Map<string, AssetRequest>, asset: AssetRequest) => {
		if (!map.has(asset.sourceUrl)) {
			map.set(asset.sourceUrl, asset);
		}
	};

	const visitObject = (object: BsonValue, objectPath: string) => {
		if (!isRecord(object)) return;

		const guid = stringValue(object.GUID) ?? objectPath.replace(/\W+/g, '-');
		const name = stringValue(object.Name);
		const nickname = stringValue(object.Nickname);
		const description = stringValue(object.Description);
		const label = cleanLabel(nickname ?? name ?? '');
		const containedObjects = Array.isArray(object.ContainedObjects) ? object.ContainedObjects : [];

		if (isRecord(object.CustomDeck)) {
			for (const [deckId, deck] of Object.entries(object.CustomDeck)) {
				if (!isRecord(deck)) continue;

				const faceUrl = stringValue(deck.FaceURL);
				const backUrl = stringValue(deck.BackURL);

				if (!faceUrl || !backUrl) continue;

				const key = [deckId, faceUrl, backUrl, deck.NumWidth, deck.NumHeight, deck.UniqueBack].join('|');

				if (!deckDefinitions.has(key)) {
					deckDefinitions.set(key, {
						deckId,
						faceUrl,
						backUrl,
						width: deck.NumWidth,
						height: deck.NumHeight,
						uniqueBack: deck.UniqueBack,
						references: [],
					});
				}

				deckDefinitions.get(key)?.references.push({
					path: objectPath,
					guid,
					name,
					nickname,
					description,
					position: getPosition(object),
					containedCount: containedObjects.length,
					cardIds: containedObjects
						.map(child => (isRecord(child) && typeof child.CardID === 'number' ? child.CardID : undefined))
						.filter(value => value !== undefined),
				});
			}
		}

		if (isRecord(object.CustomImage)) {
			for (const [field, suffix] of [
				['ImageURL', 'front'],
				['ImageSecondaryURL', 'secondary'],
			] as const) {
				const sourceUrl = stringValue(object.CustomImage[field]);

				if (!sourceUrl) continue;

				addUnique(imageUrls, {
					kind: 'custom-image',
					pathBase: `custom-images/${slug([label, guid, suffix].filter(Boolean).join('-'))}`,
					sourceUrl,
					metadata: { guid, label, field, references: [objectPath] },
				});
			}
		}

		containedObjects.forEach((child, index) => visitObject(child, `${objectPath}.ContainedObjects.${index}`));
	};

	objectStates.forEach((object, index) => visitObject(object, `ObjectStates.${index}`));

	for (const deck of deckDefinitions.values()) {
		const deckId = String(deck.deckId).padStart(3, '0');
		const metadata = {
			deckId: deck.deckId,
			width: deck.width,
			height: deck.height,
			uniqueBack: deck.uniqueBack,
			references: deck.references,
			sourceSummary: summarizeDeckSource(deck),
		};

		assets.push({
			kind: 'deck',
			pathBase: `decks/deck-${deckId}-face`,
			sourceUrl: String(deck.faceUrl),
			metadata: { ...metadata, side: 'face' },
		});
		assets.push({
			kind: 'deck',
			pathBase: `decks/deck-${deckId}-back`,
			sourceUrl: String(deck.backUrl),
			metadata: { ...metadata, side: 'back' },
		});
	}

	return [...assets, ...imageUrls.values()].sort((left, right) => left.pathBase.localeCompare(right.pathBase));
}

function renderDeckReadme(assets: ManifestAsset[]) {
	const faces = assets
		.filter(asset => asset.kind === 'deck' && asset.side === 'face')
		.sort((left, right) => Number(left.deckId) - Number(right.deckId));

	const lines = [
		'# Deck Assets',
		'',
		'Generated from the Tabletop Simulator Workshop save. Most decks in the save are unnamed, so this index preserves the best provenance the save exposes: source object path, GUID, board position, sheet grid, and contained card count.',
		'',
		'| Deck | Files | Grid | Cards | Source | Position |',
		'| --- | --- | --- | ---: | --- | --- |',
	];

	for (const face of faces) {
		const references = Array.isArray(face.references) ? (face.references as DeckReference[]) : [];
		const source = references.find(reference => !reference.path.includes('.ContainedObjects.')) ?? references[0];
		const back = assets.find(asset => asset.kind === 'deck' && asset.side === 'back' && asset.deckId === face.deckId);
		const cards = Math.max(...references.map(reference => reference.containedCount), 0);

		lines.push(
			[
				`deck-${String(face.deckId).padStart(3, '0')}`,
				`[face](${face.path}) / [back](${back?.path ?? ''})`,
				`${face.width}x${face.height}`,
				String(cards),
				source ? formatSource(source) : '',
				source?.position ? `${source.position.x}, ${source.position.z}` : '',
			]
				.join(' | ')
				.replace(/^/, '| ') + ' |',
		);
	}

	lines.push('');

	return `${lines.join('\n')}\n`;
}

function formatSource(reference: DeckReference) {
	const label = cleanLabel(reference.nickname || reference.name || '').replace(/\|/g, '\\|');
	const parts = [`${reference.path}`, reference.guid ? `guid ${reference.guid}` : '', label].filter(Boolean);
	return parts.join('<br>');
}

function summarizeDeckSource(deck: DeckDefinition) {
	const topLevel = deck.references.filter(reference => !reference.path.includes('.ContainedObjects.'));
	const sourceReferences = topLevel.length > 0 ? topLevel : deck.references;
	const maxContainedCount = Math.max(...deck.references.map(reference => reference.containedCount), 0);
	const cardIds = [...new Set(deck.references.flatMap(reference => reference.cardIds))].sort(
		(left, right) => left - right,
	);

	return {
		sourceReferences,
		maxContainedCount,
		cardIds,
	};
}

function getPosition(object: BsonObject) {
	const transform = object.Transform;

	if (!isRecord(transform)) return undefined;

	const x = numberValue(transform.posX);
	const y = numberValue(transform.posY);
	const z = numberValue(transform.posZ);

	if (x === undefined || y === undefined || z === undefined) return undefined;

	return {
		x: Math.round(x * 100) / 100,
		y: Math.round(y * 100) / 100,
		z: Math.round(z * 100) / 100,
	};
}

function decodeBson(buffer: Buffer) {
	let offset = 0;

	const cstring = () => {
		const start = offset;
		while (buffer[offset] !== 0) offset++;
		const value = buffer.toString('utf8', start, offset);
		offset++;
		return value;
	};

	const string = () => {
		const length = buffer.readInt32LE(offset);
		offset += 4;
		const value = buffer.toString('utf8', offset, offset + length - 1);
		offset += length;
		return value;
	};

	const document = (): BsonObject => {
		const start = offset;
		const length = buffer.readInt32LE(offset);
		offset += 4;
		const object: BsonObject = {};

		while (buffer[offset] !== 0) {
			const type = buffer[offset++];
			const key = cstring();
			object[key] = value(type);
		}

		offset++;

		if (offset !== start + length) {
			throw new Error(`Invalid BSON document length at ${start}`);
		}

		return object;
	};

	const array = (object: BsonObject): BsonValue[] =>
		Object.keys(object)
			.sort((left, right) => Number(left) - Number(right))
			.map(key => object[key]);

	const value = (type: number): BsonValue => {
		switch (type) {
			case 0x01: {
				const number = buffer.readDoubleLE(offset);
				offset += 8;
				return number;
			}
			case 0x02:
				return string();
			case 0x03:
				return document();
			case 0x04:
				return array(document());
			case 0x05: {
				const length = buffer.readInt32LE(offset);
				offset += 5 + length;
				return null;
			}
			case 0x07:
				offset += 12;
				return null;
			case 0x08:
				return buffer[offset++] === 1;
			case 0x09:
				offset += 8;
				return null;
			case 0x0a:
				return null;
			case 0x0b:
				cstring();
				cstring();
				return null;
			case 0x0d:
			case 0x0e:
				return string();
			case 0x10: {
				const number = buffer.readInt32LE(offset);
				offset += 4;
				return number;
			}
			case 0x11:
			case 0x12: {
				const number = Number(buffer.readBigInt64LE(offset));
				offset += 8;
				return number;
			}
			default:
				throw new Error(`Unsupported BSON type 0x${type.toString(16)}`);
		}
	};

	return document();
}

function normalizeSteamUrl(sourceUrl: string) {
	const url = new URL(sourceUrl);

	if (/^cloud-\d+\.steamusercontent\.com$/.test(url.hostname)) {
		url.protocol = 'https:';
		url.hostname = 'cdn.steamusercontent.com';
	}

	return url.toString();
}

function detectExtension(bytes: Uint8Array) {
	if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
		return 'png';
	}

	if (bytes[0] === 0xff && bytes[1] === 0xd8) {
		return 'jpg';
	}

	if (
		bytes[0] === 0x52 &&
		bytes[1] === 0x49 &&
		bytes[2] === 0x46 &&
		bytes[3] === 0x46 &&
		bytes[8] === 0x57 &&
		bytes[9] === 0x45 &&
		bytes[10] === 0x42 &&
		bytes[11] === 0x50
	) {
		return 'webp';
	}

	if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
		return 'gif';
	}

	return 'bin';
}

function cleanLabel(value: string) {
	return value.replace(/\[[^\]]+\]/g, '').trim();
}

function slug(value: string) {
	return (
		value
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '') || 'asset'
	);
}

function isRecord(value: BsonValue | undefined): value is BsonObject {
	return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function stringValue(value: BsonValue | undefined) {
	return typeof value === 'string' ? value : undefined;
}

function numberValue(value: BsonValue | undefined) {
	return typeof value === 'number' ? value : undefined;
}
