import { describe, expect, test } from 'vitest';

import Game from 'shared/logic/Game';
import { PolicyEnum, RoleEnum, type PolicyString, type PolicyValue } from 'shared/logic/types';
import baseGameDecks from '../baseGameDecks';

describe('base game decks', () => {
	test('uses the base game fixture card counts', () => {
		expect(baseGameDecks.actionCardsByRole.workingClass).toHaveLength(40);
		expect(baseGameDecks.actionCardsByRole.middleClass).toHaveLength(40);
		expect(baseGameDecks.actionCardsByRole.capitalist).toHaveLength(40);
		expect(baseGameDecks.actionCardsByRole.state).toHaveLength(40);
		expect(baseGameDecks.businessDealCards).toHaveLength(20);
		expect(baseGameDecks.capitalistCompanies).toHaveLength(28);
		expect(baseGameDecks.cooperativeFarms).toHaveLength(2);
		expect(baseGameDecks.eventCards).toHaveLength(25);
		expect(baseGameDecks.exportCards).toHaveLength(16);
		expect(baseGameDecks.immigrationCards).toHaveLength(25);
		expect(baseGameDecks.loanCards).toHaveLength(10);
		expect(baseGameDecks.middleClassCompanies).toHaveLength(17);
		expect(baseGameDecks.politicalAgendaCards).toHaveLength(10);
		expect(baseGameDecks.stateCompanies).toHaveLength(12);
	});

	test('keeps export cards as reusable transaction configs', () => {
		for (const card of baseGameDecks.exportCards) {
			expect(Object.values(card.transactions).flat()).toHaveLength(8);
			expect(card.food).toBe(card.transactions.food);
			expect(card.luxury).toBe(card.transactions.luxury);
			expect(card.healthcare).toBe(card.transactions.healthcare);
			expect(card.education).toBe(card.transactions.education);
		}
	});

	test('keeps business deals as goods plus tariff configs', () => {
		for (const card of baseGameDecks.businessDealCards) {
			expect((card.goods.food ?? 0) + (card.goods.luxury ?? 0)).toBeGreaterThan(0);
			expect(card.food).toBe(card.goods.food);
			expect(card.luxury).toBe(card.goods.luxury);
			expect(card.tariffs).toHaveLength(2);
		}
	});

	test('adapts immigration cards to one worker type per class', () => {
		const workingSpecialized = baseGameDecks.immigrationCards.filter(
			card => card.workers.workingClass.type === 'specialized',
		);
		const middleSpecialized = baseGameDecks.immigrationCards.filter(
			card => card.workers.middleClass.type === 'specialized',
		);
		expect(workingSpecialized).toHaveLength(10);
		expect(middleSpecialized).toHaveLength(15);
		for (const card of baseGameDecks.immigrationCards) {
			expect(card.workingClass).toBe(card.workers.workingClass.worker);
			expect(card.middleClass).toBe(card.workers.middleClass.worker);
		}
		for (const worker of ['food', 'healthcare', 'education', 'luxury', 'influence']) {
			expect(workingSpecialized.filter(card => card.workingClass === worker)).toHaveLength(2);
			expect(middleSpecialized.filter(card => card.middleClass === worker)).toHaveLength(3);
		}
	});

	test('keeps every base action card mapped to declarative state effects', () => {
		for (const deck of Object.values(baseGameDecks.actionCardsByRole)) {
			for (const card of deck) {
				expect(card.stateEffectsCoverage).not.toBe('unparsed');
				expect(card.stateEffects.length).toBeGreaterThan(0);
			}
		}
	});

	test('keeps setup metadata on company fixture cards', () => {
		expect(
			baseGameDecks.capitalistCompanies
				.filter(card => card.setup?.starting)
				.map(card => card.id)
				.sort(),
		).toEqual(['c-clinic-2', 'c-college-2', 'c-shopping-mall-2', 'c-supermarket-2']);
		expect(
			baseGameDecks.middleClassCompanies
				.filter(card => card.setup?.starting)
				.map(card => card.id)
				.sort(),
		).toEqual(['m-convenience-store-2', 'm-doctors-office-2']);
		expect(
			baseGameDecks.stateCompanies
				.filter(card => card.setup?.starting && card.setup.playerCounts?.includes(2))
				.map(card => card.id)
				.sort(),
		).toEqual(['s-public-hospital-1', 's-public-university-1', 's-regional-tv-station-1']);
		expect(
			baseGameDecks.stateCompanies
				.filter(card => card.setup?.starting && card.setup.playerCounts?.includes(4))
				.map(card => card.id)
				.sort(),
		).toEqual(['s-national-public-broadcasting-1', 's-technical-university-1', 's-university-hospital-1']);
	});

	test('keeps event card task and choice text normalized', () => {
		const politicalScandal = baseGameDecks.eventCards.find(card => card.name === 'Political Scandal');
		expect(politicalScandal?.task).toContain('provide up to 3 media influence');
		expect(politicalScandal?.choices).toHaveLength(3);
		for (const card of baseGameDecks.eventCards) {
			expect(card.name).not.toBe('Base Events');
			expect(card.task).toBeTruthy();
			expect(card.noAction?.text).toBeTruthy();
			expect(card.choices?.length).toBeGreaterThan(0);
		}
	});
});

describe('game deck setup', () => {
	test('draws the standard setup decks for a four-player game', () => {
		const game = new Game({
			players: [
				{ name: 'working', role: RoleEnum.workingClass },
				{ name: 'middle', role: RoleEnum.middleClass },
				{ name: 'capitalist', role: RoleEnum.capitalist },
				{ name: 'state', role: RoleEnum.state },
			],
		});

		game.setupBoard();
		game.setupRound();

		expect(game.data.roles.workingClass.data.actionHand).toHaveLength(7);
		expect(game.data.roles.middleClass.data.actionHand).toHaveLength(7);
		expect(game.data.roles.capitalist.data.actionHand).toHaveLength(7);
		expect(game.data.roles.state.data.actionHand).toHaveLength(7);
		expect(game.data.roles.state.data.eventCards).toHaveLength(2);
		expect(game.data.roles.state.data.politicalAgendaCard).toBeTruthy();
		expect(game.data.board.foreignMarketCard).toBeTruthy();
		expect(game.data.board.businessDealCards).toHaveLength(1);
		expect(game.data.board.decks.loanDeck.cards).toHaveLength(10);
	});

	test('scores and discards the State political agenda card', () => {
		const game = new Game({
			players: [
				{ name: 'working', role: RoleEnum.workingClass },
				{ name: 'middle', role: RoleEnum.middleClass },
				{ name: 'capitalist', role: RoleEnum.capitalist },
				{ name: 'state', role: RoleEnum.state },
			],
		});
		game.setupBoard();
		const state = game.data.roles.state;
		const agendaId = state.data.politicalAgendaCard!;
		const agenda = state.data.politicalAgendaDeck.getOriginalCard(agendaId);
		for (const policy of agenda.policies) setPolicy(game, policy);

		game.scoreRound();

		expect(state.data.score).toBe(4 + agenda.policies.length);
		expect(state.data.politicalAgendaCard).toBe(null);
		expect(state.data.politicalAgendaDiscard).toContain(agendaId);
	});
});

function setPolicy(game: Game, policy: PolicyString) {
	const [, policyIndex, section] = policy.match(/^([1-7])([ABC])$/)!;
	const policyName = {
		1: PolicyEnum.fiscalPolicy,
		2: PolicyEnum.laborMarket,
		3: PolicyEnum.taxation,
		4: PolicyEnum.healthcare,
		5: PolicyEnum.education,
		6: PolicyEnum.foreignTrade,
		7: PolicyEnum.immigration,
	}[policyIndex as '1' | '2' | '3' | '4' | '5' | '6' | '7'];
	const value = { A: 0, B: 1, C: 2 }[section as 'A' | 'B' | 'C'] as PolicyValue;
	game.data.board.policies[policyName] = value;
}
