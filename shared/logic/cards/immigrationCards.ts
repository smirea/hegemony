import immigrationFixtureCards from '../../../fixtures/assets/decks-sorted/immigration-cards/deck';

import { type CompanyWorkerType } from '../types';

import type { ParsedImmigrationCard } from '../../../fixtures/assets/decks-sorted/types';

interface ImmigrationWorkerConfig {
	type: ParsedImmigrationCard['workers']['workingClass']['type'];
	worker: CompanyWorkerType;
}

export interface ImmigrationCard {
	id: string;
	name: string;
	frontImage?: ParsedImmigrationCard['frontImage'];
	backImage?: ParsedImmigrationCard['backImage'];
	workingClass: CompanyWorkerType;
	middleClass: CompanyWorkerType;
	workers: {
		workingClass: ImmigrationWorkerConfig;
		middleClass: ImmigrationWorkerConfig;
	};
}

const immigrationCards: ImmigrationCard[] = immigrationFixtureCards.map(card => {
	const workingClass = workerConfig(card.workers.workingClass);
	const middleClass = workerConfig(card.workers.middleClass);
	return {
		id: card.id,
		name: card.name,
		frontImage: card.frontImage,
		backImage: card.backImage,
		workingClass: workingClass.worker,
		middleClass: middleClass.worker,
		workers: {
			workingClass,
			middleClass,
		},
	};
});

export default immigrationCards;

function workerConfig(worker: ParsedImmigrationCard['workers']['workingClass']): ImmigrationWorkerConfig {
	return {
		type: worker.type,
		worker: worker.worker,
	};
}
