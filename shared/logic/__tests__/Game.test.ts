import { beforeEach, expect, test, describe, vi } from 'vitest';

import { GamePhaseEnum, RoleEnum, type RoleName } from '../types';
import { createGameUtils } from './testUtils';

import type Game from '../Game';

const { tick, nextAndTick, addInput, requestPlayerInput, findAction, initGame, addWorkers, eachWorker } =
	createGameUtils();

let game: Game;

describe('game:start', () => {
	beforeEach(async () => {
		game = await initGame(['capitalist', 'workingClass'], { setupBoard: false });
	});
	test('sorts players by role', async () => {
		await nextAndTick('game:start');
		expect(game.data.players[0].role).toBe(RoleEnum.workingClass);
		expect(game.data.players[1].role).toBe(RoleEnum.capitalist);
		expect(game.data.currentRoleName).toBe(null);
	});

	test('rejects invalid role sets for the player count', async () => {
		game = await initGame([RoleEnum.workingClass, RoleEnum.middleClass], { setupBoard: false });
		await expect(nextAndTick('game:start')).rejects.toThrow(/2-player games/);
	});
});

describe('started game', () => {
	beforeEach(async () => {
		game = await initGame(['capitalist', 'workingClass'], { setupBoard: false });
		await nextAndTick('game:start');
	});

	test('request input', async () => {
		addInput('game:roleTurn', 'workingClass:proposeBill');
		await tick('game:roleTurn');
		expect(requestPlayerInput).toHaveBeenCalledOnce();
		expect(requestPlayerInput).toHaveBeenCalledWith('game:roleTurn');
		expect(findAction('game:roleTurn').data).toEqual('workingClass:proposeBill');
	});

	test('throws if out of turn', async () => {
		addInput('game:roleTurn', 'capitalist:proposeBill');
		await expect(tick('game:roleTurn')).rejects.toThrow(
			'Event(game:roleTurn) player input validation failed: currentTurn',
		);
	});

	test('turn:end', async () => {
		game.data.board.policies.fiscalPolicy = 1;
		game.data.board.policies.healthcare = 1;
		game.data.roles.workingClass.data.resources.healthcare.add(10);
		addInput('game:roleTurn', 'workingClass:proposeBill');
		addInput('workingClass:proposeBill', { value: 2, policy: 'fiscalPolicy' });
		addInput('game:roleTurn', 'workingClass:useHealthcare');
		addInput('game:roleTurn', 'capitalist:proposeBill');
		addInput('capitalist:proposeBill', { value: 0, policy: 'healthcare' });
		addInput('game:roleTurn', 'capitalist:skip');
		await tick('game:turnEnd');
		expect(requestPlayerInput).toHaveBeenCalledTimes(6);
		expect(game.data.roles.workingClass.data.resources.healthcare.value).toBe(7);
		expect(game.data.roles.workingClass.data.score).toBe(3);
		expect(game.data.board.policyProposals.fiscalPolicy).toEqual({
			role: 'workingClass',
			value: 2,
		});
		expect(game.data.board.policyProposals.healthcare).toEqual({
			role: 'capitalist',
			value: 0,
		});
	});
});

describe('full game flow', () => {
	test('resolves proposed bills through elections', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass]);
		game.data.board.policies.taxation = 0;
		game.data.board.policyProposals.taxation = {
			role: RoleEnum.workingClass,
			value: 1,
		};
		game.data.board.votingCubeBag = {
			workingClass: 5,
			middleClass: 0,
			capitalist: 0,
		};

		addInput('game:electionsCarryOut', {
			taxation: {
				preferences: {
					workingClass: true,
					capitalist: false,
				},
				influence: {},
			},
		});
		await nextAndTick('game:electionsCarryOut');

		expect(game.data.board.policies.taxation).toBe(1);
		expect(game.data.board.policyProposals.taxation).toBeUndefined();
		expect(game.data.roles.workingClass.data.score).toBe(3);
	});

	test('draws voting cubes randomly from the weighted bag', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass]);
		game.data.board.policies.taxation = 0;
		game.data.board.policyProposals.taxation = {
			role: RoleEnum.workingClass,
			value: 1,
		};
		game.data.board.votingCubeBag = {
			workingClass: 1,
			middleClass: 0,
			capitalist: 100,
		};
		const random = vi.spyOn(Math, 'random').mockReturnValue(0.999);

		try {
			addInput('game:electionsCarryOut', {
				taxation: {
					preferences: {
						workingClass: true,
						capitalist: true,
					},
					influence: {},
				},
			});
			await nextAndTick('game:electionsCarryOut');
		} finally {
			random.mockRestore();
		}

		expect(game.data.board.votingCubeBag.workingClass).toBe(1);
		expect(game.data.board.votingCubeBag.capitalist).toBe(95);
	});

	test('keeps remaining source workers when an assignment refills the source company', async () => {
		game = await initGame();
		const source = game.data.roles.capitalist.company('c-food');
		const target = game.data.roles.state.company('s2');
		const sourceWorkers = addWorkers(3, { committed: false, company: null });
		game.assignWorkers(sourceWorkers.map(workerId => ({ target: 'company', companyId: source.id, workerId })));
		eachWorker(sourceWorkers, worker => {
			worker.committed = false;
		});
		const [replacement, targetMate] = addWorkers(2, { committed: false, company: null });

		game.assignWorkers([
			{ target: 'company', companyId: target.id, workerId: sourceWorkers[0] },
			{ target: 'company', companyId: target.id, workerId: targetMate },
			{ target: 'company', companyId: source.id, workerId: replacement },
		]);

		expect(source.workers.toSorted()).toEqual([sourceWorkers[1], sourceWorkers[2], replacement].toSorted());
		expect(target.workers.toSorted()).toEqual([sourceWorkers[0], targetMate].toSorted());
		for (const workerId of [sourceWorkers[1], sourceWorkers[2], replacement]) {
			expect(game.data.roles.workingClass.worker(workerId).company).toBe(source.id);
		}
	});

	test('lets struck Middle Class companies produce their base output only', async () => {
		game = await initGame();
		const company = game.data.roles.middleClass.company('m-influence');
		const [middleWorker] = addWorkers(1, { role: RoleEnum.middleClass, type: 'unskilled', committed: false });
		const [workingWorker] = addWorkers(1, { type: 'unskilled', committed: false });
		game.assignWorkers([
			{ target: 'company', companyId: company.id, workerId: middleWorker },
			{ target: 'company', companyId: company.id, workerId: workingWorker },
		]);
		company.wages = 'l1';
		company.strike = true;

		game.produceGoodsAndServices();

		expect(game.data.roles.middleClass.data.resources.influence.value).toBe(5);
		expect(game.data.roles.workingClass.data.resources.influence.value).toBe(1);
		expect(game.data.roles.workingClass.data.resources.money.value).toBe(0);
		expect(company.strike).toBe(false);
	});

	test('buys food from local sellers during Cover Needs before using the foreign market', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass]);
		game.data.board.policies.foreignTrade = 0;
		game.data.roles.workingClass.data.resources.money.add(100);
		game.data.roles.capitalist.data.resources.food.add(3);
		game.data.roles.capitalist.data.priceLevels.food = 0;

		game.coverNeeds();

		expect(game.data.roles.workingClass.data.resources.money.value).toBe(73);
		expect(game.data.roles.capitalist.data.resources.money.value).toBe(27);
		expect(game.data.roles.capitalist.data.resources.food.value).toBe(0);
		expect(game.data.roles.state.data.resources.money.value).toBe(0);
	});

	test('uses the pre-IMF labor market for income taxes when IMF changes it', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass]);
		game.data.roles.capitalist.data.companies = [];
		game.data.roles.workingClass.data.resources.money.add(100);
		game.data.roles.state.data.resources.money.addLoans(2);
		game.data.board.policies.fiscalPolicy = 2;
		game.data.board.policies.laborMarket = 0;
		game.data.board.policies.taxation = 0;

		game.checkImf();
		expect(game.data.board.policies.laborMarket).toBe(1);
		expect(game.data.laborMarketForIncomeTax).toBe(0);

		game.payTaxes();

		expect(game.data.roles.workingClass.data.resources.money.value).toBe(82);
		expect(game.data.roles.state.data.resources.money.value).toBe(18);
		expect(game.data.laborMarketForIncomeTax).toBe(null);
	});

	test('draws one business deal during initial setup even when Foreign Trade starts at 6A', async () => {
		game = await initGame([RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state], {
			setupBoard: false,
			mockDefaultSetup: false,
			companyDecks: 'real',
		});

		game.setupBoard();
		game.setupRound();

		expect(game.data.round).toBe(1);
		expect(game.data.board.policies.foreignTrade).toBe(0);
		expect(game.data.board.businessDealCards).toHaveLength(1);
	});

	test('returns shared winners when all tiebreakers are still tied', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass]);
		game.data.finalScores = {
			workingClass: 10,
			capitalist: 10,
		};
		game.data.board.policies = {
			fiscalPolicy: 1,
			laborMarket: 1,
			taxation: 1,
			healthcare: 1,
			education: 1,
			foreignTrade: 1,
			immigration: 1,
		};
		game.data.board.votingCubeBag = {
			workingClass: 5,
			middleClass: 0,
			capitalist: 5,
		};

		expect((game as any).getWinners()).toEqual([RoleEnum.workingClass, RoleEnum.capitalist]);
	});

	test('plays five complete rounds with basic pass and free skip actions', async () => {
		game = await initGame([RoleEnum.capitalist, RoleEnum.workingClass], {
			setupBoard: false,
			mockDefaultSetup: false,
			companyDecks: 'real',
		});

		const roles: RoleName[] = [RoleEnum.workingClass, RoleEnum.capitalist];
		for (let round = 0; round < 5; ++round) {
			for (let turn = 0; turn < 5; ++turn) {
				for (const role of roles) {
					addInput('game:roleTurn', `${role}:pass`);
					addInput('game:roleTurn', `${role}:skip`);
				}
			}
		}

		game.next('game:start');
		await game.flush({ after: 'game:end' });

		expect(game.data.phase).toBe(GamePhaseEnum.finished);
		expect(game.data.round).toBe(5);
		expect(game.data.winners.length).toBeGreaterThan(0);
		expect(game.data.finalScores.workingClass).toBeTypeOf('number');
		expect(game.data.finalScores.capitalist).toBeTypeOf('number');
		expect(game.data.actionQueue.map(event => event.type)).toContain('game:productionProduceGoods');
		expect(game.data.actionQueue.map(event => event.type)).toContain('game:scoringStart');
	});
});
