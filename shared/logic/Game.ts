import { type z } from 'zod';
import { proxy } from 'valtio/vanilla';

import {
	ElectionsInputSchema,
	GamePhaseEnum,
	PolicyEnum,
	type PolicyString,
	ResourceEnum,
	RoleEnum,
	type Company,
	type CompanyCard,
	type CompanyTradeableResource,
	type CompanyWorker,
	type CompanyWorkerType,
	type GamePhase,
	type Player,
	type RoleName,
	type RoleNameNoWorkingClass,
	type RoleNameWorkingMiddleClass,
	type RunContext,
	type Action,
	type AssignWorkersSchema,
	type RoleNameNoState,
	type PolicyName,
	type PolicyValue,
	type WageId,
	type RoleMap,
	WorkerTypeEnum,
} from './types';
import defaultForeignMarketCards, { type ForeignMarketCard } from './cards/foreignMarketCards';
import Deck from './cards/Deck';
import businessDealCards, { type BusinessDealCard } from './cards/businessDealCards';
import WorkingClassRole from './roles/WorkingClassRole';
import MiddleClassRole from './roles/MiddleClassRole';
import CapitalistRole from './roles/CapitalistRole';
import StateRole from './roles/StateRole';
import { type ActionEventName, actionEventNameSchema, type AnyActionEvent, type PlayerInput } from './types.generated';
import createAction from './utils/createAction';
import immigrationCards, { type ImmigrationCard } from './cards/immigrationCards';

type RunContextNoRole = Omit<RunContext<RoleName>, 'currentRole'>;

const getDefaultDecks = (): GameState['board']['decks'] => ({
	foreignMarketDeck: new Deck('foreign market', defaultForeignMarketCards),
	businessDealDeck: new Deck('business deal', businessDealCards),
	immigrationDeck: new Deck('immigration', immigrationCards),
});

interface GameConfig {
	debug: boolean;
	requestPlayerInput: Game['requestPlayerInput'];
	decks: GameState['board']['decks'];
	players: Player[];
}

export interface GameConfigInput extends Omit<GameConfig, 'decks' | 'debug'> {
	decks?: Partial<GameState['board']['decks']>;
	debug?: boolean;
}

export interface GameState {
	error?: any;
	players: Player[];
	settings: Record<string, never>;
	phase: GamePhase;
	round: number;
	turn: number;
	currentRoleName: null | RoleName;
	winner: null | RoleName;
	winners: RoleName[];
	finalScores: Partial<Record<RoleName, number>>;
	laborMarketForIncomeTax: PolicyValue | null;
	board: {
		votingCubeBag: Record<RoleNameNoState, number>;
		policies: Record<PolicyName, PolicyValue>;
		policyProposals: Partial<Record<PolicyName, { role: RoleName; value: PolicyValue }>>;
		availableInfluence: number;
		foreignMarketCard: ForeignMarketCard['id'];
		businessDealCards: BusinessDealCard['id'][];
		decks: {
			foreignMarketDeck: Deck<ForeignMarketCard[]>;
			businessDealDeck: Deck<BusinessDealCard[]>;
			immigrationDeck: Deck<ImmigrationCard[]>;
		};
	};
	roles: {
		[RoleEnum.workingClass]: WorkingClassRole;
		[RoleEnum.middleClass]: MiddleClassRole;
		[RoleEnum.capitalist]: CapitalistRole;
		[RoleEnum.state]: StateRole;
	};
	nextWorkerId: number;
	nextActionIndex: number;
	currentActionIndex: number;
	actionQueue: AnyActionEvent[];
}

export default class Game {
	public data: GameState;
	public readonly debug: boolean;
	protected readonly config: GameConfig;

	constructor(config: GameConfigInput) {
		this.config = {
			players: config.players ?? [],
			requestPlayerInput: config.requestPlayerInput ?? (async () => undefined),
			debug: config.debug ?? false,
			decks: {
				...getDefaultDecks(),
				...config.decks,
			},
		};
		this.debug = this.config.debug;
		this.data = proxy(this.createEmptyState());
	}

	next = this.createNext({
		queueIndex: null,
		get next() {
			return this.next;
		},
	});

	createEmptyState(): GameState {
		return {
			players: this.config.players,
			settings: {},
			phase: GamePhaseEnum.setup,
			round: 0,
			turn: 0,
			currentRoleName: null,
			winner: null,
			winners: [],
			finalScores: {},
			laborMarketForIncomeTax: null,
			board: {
				foreignMarketCard: null as any,
				businessDealCards: [],
				availableInfluence: 25,
				votingCubeBag: {
					[RoleEnum.workingClass]: 0,
					[RoleEnum.middleClass]: 0,
					[RoleEnum.capitalist]: 0,
				},
				policies: {
					[PolicyEnum.fiscalPolicy]: 2,
					[PolicyEnum.laborMarket]: 1,
					[PolicyEnum.taxation]: 0,
					[PolicyEnum.healthcare]: 1,
					[PolicyEnum.education]: 2,
					[PolicyEnum.foreignTrade]: 1,
					[PolicyEnum.immigration]: 1,
				},
				policyProposals: {},
				decks: this.config.decks,
			},
			roles: {
				[RoleEnum.workingClass]: new WorkingClassRole(this),
				[RoleEnum.middleClass]: new MiddleClassRole(this),
				[RoleEnum.capitalist]: new CapitalistRole(this),
				[RoleEnum.state]: new StateRole(this),
			},
			nextWorkerId: 0,
			currentActionIndex: 0,
			nextActionIndex: 0,
			actionQueue: [],
		} satisfies GameState;
	}

	getPolicy(name: (typeof PolicyEnum)[keyof typeof PolicyEnum]) {
		return this.data.board.policies[name];
	}

	getWageId(): WageId {
		return (['l3', 'l2', 'l1'] as const)[this.getPolicy('laborMarket')];
	}

	ifPolicy(name: PolicyString, op: '==' | '<=' | '>=' = '==') {
		const m = name.match(/^([1-7])([ABC])$/);
		if (!m) throw new Error(`invalid policy name "${name}"`);
		const id = m[1] as unknown as keyof typeof map;
		const v = m[2] as unknown as keyof typeof valueMap;
		const map = {
			1: PolicyEnum.fiscalPolicy,
			2: PolicyEnum.laborMarket,
			3: PolicyEnum.taxation,
			4: PolicyEnum.healthcare,
			5: PolicyEnum.education,
			6: PolicyEnum.foreignTrade,
			7: PolicyEnum.immigration,
		} as const;
		const valueMap = {
			A: 0,
			B: 1,
			C: 2,
		} as const;
		const target = valueMap[v];
		const current = this.data.board.policies[map[id]];
		switch (op) {
			case '==':
				return target === current;
			case '<=':
				return current <= target;
			case '>=':
				return current >= target;
			default:
				throw new Error(`invalid operator "${op}"`);
		}
	}

	get foreignMarketCard() {
		return this.data.board.decks.foreignMarketDeck.getOriginalCard(this.data.board.foreignMarketCard);
	}

	get activeRoleNames(): RoleName[] {
		const order = [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state];
		return this.data.players.map(p => p.role).sort((a, b) => order.indexOf(a) - order.indexOf(b));
	}

	validatePlayers() {
		const roles = this.activeRoleNames;
		const expectedByCount: Record<number, RoleName[]> = {
			2: [RoleEnum.workingClass, RoleEnum.capitalist],
			3: [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist],
			4: [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state],
		};
		const expected = expectedByCount[roles.length];
		if (!expected) throw new Error('Hegemony requires 2-4 players');
		if (new Set(roles).size !== roles.length) throw new Error('Each role can only be controlled by one player');
		if (roles.join(',') !== expected.join(',')) {
			throw new Error(`${roles.length}-player games must use roles: ${expected.join(', ')}`);
		}
	}

	getActionKind(type: ActionEventName): 'basic' | 'free' | null {
		const [roleName, key] = type.split(':') as [RoleName, string];
		const role = this.data.roles[roleName];
		if (!role) return null;
		if ((role.basicActions as Record<string, Action<any>>)[key]) return 'basic';
		if ((role.freeActions as Record<string, Action<any>>)[key]) return 'free';
		return null;
	}

	getActionRole(type: ActionEventName): RoleName | null {
		const [targetName] = type.split(':') as [RoleName];
		return this.data.roles[targetName] ? targetName : null;
	}

	getTaxMultiplier() {
		const taxation = this.getPolicy(PolicyEnum.taxation);
		const base = [3, 2, 1][taxation];
		if (taxation === 2) return base;
		const welfareModifier =
			[2, 1, 0][this.getPolicy(PolicyEnum.healthcare)] + [2, 1, 0][this.getPolicy(PolicyEnum.education)];
		return base + welfareModifier * (taxation === 0 ? 2 : 1);
	}

	getIncomeTax(laborMarket: PolicyValue = this.getPolicy(PolicyEnum.laborMarket)) {
		return [
			[7, 6, 5],
			[4, 4, 4],
			[1, 2, 3],
		][laborMarket][this.getPolicy(PolicyEnum.taxation)];
	}

	getMinimumWage(): WageId {
		return this.getWageId();
	}

	isWageAllowed(wage: WageId) {
		return Number(wage.slice(1)) >= Number(this.getMinimumWage().slice(1));
	}

	isCompanyOperational(companyId: Company['id']) {
		const { company } = this.getCompanyById(companyId);
		return this.isCompanyOperationalFor(company);
	}

	isCompanyOperationalFor(company: Company) {
		const def = this.getCompanyDefinition(company.id);
		if (def.fullyAutomated) return true;
		if (company.workers.length === 0) return false;
		return this.canWorkersFillCompany(company.workers, company.id);
	}

	countOperationalCompanies(roleName: RoleNameNoWorkingClass) {
		return this.data.roles[roleName].data.companies.filter(company => this.isCompanyOperationalFor(company)).length;
	}

	canWorkersFillCompany(workerIds: CompanyWorker['id'][], companyId: Company['id']) {
		const def = this.getCompanyDefinition(companyId);
		const slots = def.workers;
		const requiredSlots = slots.filter(slot => !slot.optional);
		if (workerIds.length < requiredSlots.length || workerIds.length > slots.length) return false;

		const workers = workerIds.map(id => this.getWorkerById(id).worker);
		const used = new Set<number>();
		const matchSlot = (worker: CompanyWorker, slot: CompanyCard['workers'][number]) => {
			if (!slot.roles.includes(worker.role)) return false;
			return slot.type === WorkerTypeEnum.unskilled || slot.type === worker.type;
		};
		const search = (slotIndex: number): boolean => {
			if (slotIndex >= slots.length) return used.size === workers.length && used.size >= requiredSlots.length;
			const slot = slots[slotIndex];
			if (slot.optional && search(slotIndex + 1)) return true;
			for (let i = 0; i < workers.length; ++i) {
				if (used.has(i) || !matchSlot(workers[i], slot)) continue;
				used.add(i);
				if (search(slotIndex + 1)) return true;
				used.delete(i);
			}
			return false;
		};
		return search(0);
	}

	validateAssignWorkers(toAssign: z.infer<typeof AssignWorkersSchema>, roleName?: RoleNameWorkingMiddleClass) {
		const errors: Array<[string, boolean]> = [];
		errors.push(['maxThreeWorkers', toAssign.length <= 3]);
		errors.push(['uniqueWorkers', new Set(toAssign.map(x => x.workerId)).size === toAssign.length]);

		const targetCompanyIds = new Set<Company['id']>();
		const workersByCompany = new Map<Company['id'], CompanyWorker['id'][]>();

		for (const assignment of toAssign) {
			const { worker } = this.getWorkerById(assignment.workerId);
			errors.push(['ownedWorker', !roleName || worker.role === roleName]);
			errors.push(['notCommitted', !worker.committed && !worker.union]);

			if (assignment.target === 'union') {
				errors.push(['workingClassUnion', worker.role === RoleEnum.workingClass]);
				errors.push(['skilledUnionWorker', worker.type !== WorkerTypeEnum.unskilled]);
				errors.push(['unionIndustryWorkers', this.countWorkingClassIndustryWorkers(worker.type) >= 4]);
				continue;
			}

			this.getCompanyById(assignment.companyId);
			targetCompanyIds.add(assignment.companyId);
			workersByCompany.set(assignment.companyId, [
				...(workersByCompany.get(assignment.companyId) ?? []),
				assignment.workerId,
			]);
		}

		for (const companyId of targetCompanyIds) {
			const { company } = this.getCompanyById(companyId);
			const existingWorkers = company.workers.filter(id => !toAssign.some(a => a.workerId === id));
			const nextWorkers = [...existingWorkers, ...(workersByCompany.get(companyId) ?? [])];
			errors.push([`companyFilled:${companyId}`, this.canWorkersFillCompany(nextWorkers, companyId)]);
		}

		return errors;
	}

	countWorkingClassIndustryWorkers(type: CompanyWorkerType) {
		if (type === WorkerTypeEnum.unskilled) return 0;
		return this.data.roles.workingClass.data.workers.filter(worker => {
			if (worker.type !== type || !worker.company) return false;
			const { company } = this.getCompanyById(worker.company);
			return this.isCompanyOperationalFor(company);
		}).length;
	}

	spendMoney(roleName: RoleName, amount: number, { canTakeLoans = false, useCapital = false } = {}) {
		if (amount <= 0) return;
		const money = this.data.roles[roleName].data.resources.money;
		if (roleName === RoleEnum.capitalist) {
			money.remove(amount, { canTakeLoans, useCapital });
		} else {
			money.remove(amount, { canTakeLoans });
		}
	}

	transferMoney(
		from: RoleName,
		to: RoleName,
		amount: number,
		options: { canTakeLoans?: boolean; useCapital?: boolean } = {},
	) {
		this.spendMoney(from, amount, options);
		this.data.roles[to].data.resources.money.add(amount);
	}

	private addRoleResource(roleName: RoleNameNoWorkingClass, resource: CompanyTradeableResource, amount: number) {
		if (amount <= 0) return;
		if (roleName === RoleEnum.middleClass) {
			this.data.roles.middleClass.produce(resource, amount);
			return;
		}
		if (roleName === RoleEnum.capitalist) {
			const role = this.data.roles.capitalist;
			if (resource === ResourceEnum.food || resource === ResourceEnum.luxury) {
				const baseCapacity = resource === ResourceEnum.food ? 8 : 12;
				const capacity = baseCapacity + (role.data.storage[resource] ? baseCapacity : 0);
				const availableRegular = Math.max(0, capacity - role.data.resources[resource].value);
				const regularAmount = Math.min(amount, availableRegular);
				role.data.resources[resource].add(regularAmount);
				const overflow = amount - regularAmount;
				if (overflow > 0) role.data.freeTradeZoneResources[resource].add(overflow);
				return;
			}
			role.data.resources[resource].add(amount);
			return;
		}

		const role = this.data.roles.state;
		role.data.resources[resource].add(amount);
	}

	private payCompanyWages(ownerName: RoleNameNoWorkingClass, company: Company) {
		const def = this.getCompanyDefinition(company.id);
		if (def.fullyAutomated || company.workers.length === 0) return;
		const wage = def.wages[company.wages];
		const paidRoles = new Set<RoleNameWorkingMiddleClass>();

		for (const workerId of company.workers) {
			const { roleName } = this.getWorkerById(workerId);
			if (roleName === ownerName) continue;
			paidRoles.add(roleName);
		}

		for (const roleName of paidRoles) {
			this.transferMoney(ownerName, roleName, wage, { canTakeLoans: true });
		}
	}

	private hasWorkingClassWorker(company: Company) {
		return company.workers.some(id => this.getWorkerById(id).roleName === RoleEnum.workingClass);
	}

	private produceCompany(ownerName: RoleNameNoWorkingClass, company: Company) {
		const def = this.getCompanyDefinition(company.id);
		const isStriking = !!company.strike && company.wages !== 'l3';
		const hasWorkingClassWorker = this.hasWorkingClassWorker(company);
		company.strike = false;
		if (!this.isCompanyOperationalFor(company)) return;
		if (isStriking) {
			this.data.roles.workingClass.data.resources.influence.add(1);
			if (ownerName !== RoleEnum.middleClass || !hasWorkingClassWorker) return;
		}

		if (!isStriking) this.payCompanyWages(ownerName, company);

		let production = def.production;
		if (ownerName === RoleEnum.capitalist && (company.automationToken || def.fullyAutomated)) {
			production += def.productionFromAutomation ?? 0;
		}
		if (ownerName === RoleEnum.middleClass) {
			if (hasWorkingClassWorker && !isStriking) production += def.productionFromOptionalWorkers ?? 0;
		}
		this.addRoleResource(ownerName, def.industry, production);

		for (const workerId of company.workers) {
			this.getWorkerById(workerId).worker.committed = false;
		}
	}

	produceGoodsAndServices() {
		this.data.roles.workingClass.data.resources.influence.add(
			this.data.roles.workingClass.data.workers.filter(worker => worker.union).length,
		);
		for (const roleName of [RoleEnum.state, RoleEnum.capitalist, RoleEnum.middleClass] as const) {
			if (roleName === RoleEnum.middleClass && !this.data.roles.middleClass.active) continue;
			for (const company of this.data.roles[roleName].data.companies) {
				this.produceCompany(roleName, company);
			}
		}
		for (const role of [this.data.roles.workingClass, this.data.roles.middleClass]) {
			for (const worker of role.data.workers) worker.committed = false;
		}
	}

	coverNeeds() {
		for (const roleName of [RoleEnum.middleClass, RoleEnum.workingClass] as const) {
			const role = this.data.roles[roleName];
			if (!role.active) continue;
			let remaining = role.getPopulation();
			const goodsFood = Math.min(role.data.resources.food.value, remaining);
			role.data.resources.food.remove(goodsFood);
			remaining -= goodsFood;

			if (roleName === RoleEnum.middleClass) {
				const storageFood = Math.min(this.data.roles.middleClass.data.producedResources.food.value, remaining);
				this.data.roles.middleClass.data.producedResources.food.remove(storageFood);
				remaining -= storageFood;
			}

			if (remaining > 0) {
				this.buyFoodForNeeds(roleName, remaining);
			}
		}
	}

	private buyFoodForNeeds(roleName: RoleNameWorkingMiddleClass, count: number) {
		let remaining = count;
		const localSources = [
			{
				roleName: RoleEnum.middleClass,
				price: this.data.roles.middleClass.getPrice(ResourceEnum.food),
				available: () =>
					this.data.roles.middleClass.active && roleName !== RoleEnum.middleClass
						? this.data.roles.middleClass.data.producedResources.food.value
						: 0,
				remove: (amount: number) => this.data.roles.middleClass.data.producedResources.food.remove(amount),
			},
			{
				roleName: RoleEnum.capitalist,
				price: this.data.roles.capitalist.getPrice(ResourceEnum.food),
				available: () => this.data.roles.capitalist.data.resources.food.value,
				remove: (amount: number) => this.data.roles.capitalist.data.resources.food.remove(amount),
			},
			{
				roleName: RoleEnum.state,
				price: this.data.roles.state.getPrice(ResourceEnum.food),
				available: () => this.data.roles.state.data.resources.food.value,
				remove: (amount: number) => this.data.roles.state.data.resources.food.remove(amount),
			},
		].sort((a, b) => a.price - b.price);

		for (const source of localSources) {
			const amount = Math.min(remaining, source.available());
			if (amount <= 0) continue;
			this.transferMoney(roleName, source.roleName, source.price * amount, { canTakeLoans: true });
			source.remove(amount);
			remaining -= amount;
			if (remaining <= 0) return;
		}

		this.buyFromForeignMarket(roleName, ResourceEnum.food, remaining, { canTakeLoans: true });
		this.data.roles[roleName].data.resources.food.remove(remaining);
	}

	checkImf() {
		const state = this.data.roles.state;
		const allowedLoans = this.getPolicy(PolicyEnum.fiscalPolicy) === 2 ? 1 : 2;
		if (state.data.resources.money.loans <= allowedLoans) return;
		while (state.data.resources.money.loans > allowedLoans && state.data.resources.money.value >= 55) {
			state.data.resources.money.remove(55);
			state.data.resources.money.removeLoans(1);
		}
		if (state.data.resources.money.loans <= allowedLoans) return;

		for (const proposal of Object.values(this.data.board.policyProposals)) {
			if (proposal && proposal.role !== RoleEnum.state) this.data.roles[proposal.role].data.resources.influence.add(1);
		}
		this.data.board.policyProposals = {};

		const laborMarketBeforeImf = this.getPolicy(PolicyEnum.laborMarket);
		const changes: Partial<Record<PolicyName, PolicyValue>> = {};
		if (this.ifPolicy('1A')) changes[PolicyEnum.fiscalPolicy] = 1;
		if (this.ifPolicy('2A')) changes[PolicyEnum.laborMarket] = 1;
		else if (this.ifPolicy('2B')) changes[PolicyEnum.laborMarket] = 2;
		if (this.ifPolicy('3A')) changes[PolicyEnum.taxation] = 1;
		else if (this.ifPolicy('3B')) changes[PolicyEnum.taxation] = 2;
		if (this.ifPolicy('4B')) changes[PolicyEnum.healthcare] = 2;
		if (this.ifPolicy('5B')) changes[PolicyEnum.education] = 2;
		if (this.ifPolicy('6A')) changes[PolicyEnum.foreignTrade] = 1;
		if (this.ifPolicy('7A')) changes[PolicyEnum.immigration] = 1;

		for (const [policy, value] of Object.entries(changes) as Array<[PolicyName, PolicyValue]>) {
			this.applyPolicyChange(policy, value);
		}
		if (changes[PolicyEnum.laborMarket] != null) this.data.laborMarketForIncomeTax = laborMarketBeforeImf;

		while (state.data.resources.money.loans > 0 && state.data.resources.money.value >= 55) {
			state.data.resources.money.remove(55);
			state.data.resources.money.removeLoans(1);
		}
		state.data.resources.money.removeLoans(state.data.resources.money.loans);
		for (const roleName of Object.keys(state.data.legitimacy) as RoleNameNoState[]) {
			state.data.legitimacy[roleName] = Math.ceil(state.data.legitimacy[roleName] / 2);
		}
	}

	payTaxes() {
		const state = this.data.roles.state;
		const incomeTax = this.getIncomeTax(this.data.laborMarketForIncomeTax ?? this.getPolicy(PolicyEnum.laborMarket));
		const taxMultiplier = this.getTaxMultiplier();
		const payTax = (roleName: RoleName, amount: number) => {
			this.spendMoney(roleName, amount, { canTakeLoans: true });
			state.data.resources.money.add(amount);
		};

		if (this.data.roles.workingClass.active) {
			payTax(RoleEnum.workingClass, this.data.roles.workingClass.getPopulation() * incomeTax);
		}

		if (this.data.roles.middleClass.active) {
			const middleWorkersOutsideOwnCompanies = new Set<Company['id']>();
			for (const worker of this.data.roles.middleClass.data.workers) {
				if (!worker.company) continue;
				const { roleName } = this.getCompanyById(worker.company);
				if (roleName !== RoleEnum.middleClass) middleWorkersOutsideOwnCompanies.add(worker.company);
			}
			const employmentTax = this.countOperationalCompanies(RoleEnum.middleClass) * taxMultiplier;
			payTax(RoleEnum.middleClass, middleWorkersOutsideOwnCompanies.size * incomeTax + employmentTax);
		}

		const employmentTax = this.countOperationalCompanies(RoleEnum.capitalist) * taxMultiplier;
		this.spendMoney(RoleEnum.capitalist, employmentTax, { canTakeLoans: true });
		state.data.resources.money.add(employmentTax);

		const revenue = this.data.roles.capitalist.data.resources.money.revenue;
		const corporateTax = this.getCorporateTax(revenue);
		this.spendMoney(RoleEnum.capitalist, corporateTax, { canTakeLoans: true });
		state.data.resources.money.add(corporateTax);
		this.data.laborMarketForIncomeTax = null;
	}

	getCorporateTax(revenue: number) {
		const policy = this.getPolicy(PolicyEnum.taxation);
		const rows = [
			{ min: 5, taxes: [1, 2, 2] },
			{ min: 10, taxes: [5, 5, 4] },
			{ min: 25, taxes: [12, 10, 7] },
			{ min: 50, taxes: [24, 15, 10] },
			{ min: 100, taxes: [40, 30, 20] },
			{ min: 200, taxes: [100, 70, 40] },
			{ min: 300, taxes: [160, 120, 60] },
		];
		return rows.filter(row => revenue >= row.min).at(-1)?.taxes[policy] ?? 0;
	}

	refillVotingBag({ stateInfluence = true }: { stateInfluence?: boolean } = {}) {
		const addCubes = (roleName: RoleNameNoState, amount: number) => {
			const role = this.data.roles[roleName] as any;
			const toAdd = role.data.availableVotingCubes == null ? amount : Math.min(amount, role.data.availableVotingCubes);
			if (role.data.availableVotingCubes != null) role.data.availableVotingCubes -= toAdd;
			this.data.board.votingCubeBag[roleName] += toAdd;
		};

		if (this.data.roles.workingClass.active) {
			addCubes(RoleEnum.workingClass, Math.ceil(this.data.roles.workingClass.getPopulation() / 2));
		}
		if (this.data.roles.middleClass.active) {
			addCubes(
				RoleEnum.middleClass,
				Math.max(
					Math.ceil(this.data.roles.middleClass.getPopulation() / 2),
					Math.ceil(this.countOperationalCompanies(RoleEnum.middleClass) / 2),
				),
			);
		} else if (this.data.players.length === 2) {
			this.data.board.votingCubeBag.middleClass += 5;
		}
		addCubes(RoleEnum.capitalist, Math.ceil(this.countOperationalCompanies(RoleEnum.capitalist) / 2));

		if (stateInfluence && this.data.roles.state.active) {
			const lowest = Math.min(...Object.values(this.data.roles.state.data.legitimacy));
			this.data.roles.state.data.resources.personalInfluence.add(Math.max(1, Math.ceil(lowest / 2)));
		}
	}

	private drawVotingCubes(count: number): RoleNameNoState[] {
		const result: RoleNameNoState[] = [];
		const order = [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist] as const;
		let emptyRefills = 0;
		while (result.length < count) {
			let total = Object.values(this.data.board.votingCubeBag).reduce((sum, value) => sum + value, 0);
			if (total === 0) {
				this.refillVotingBag({ stateInfluence: false });
				this.refillVotingBag({ stateInfluence: false });
				total = Object.values(this.data.board.votingCubeBag).reduce((sum, value) => sum + value, 0);
				if (total === 0 || ++emptyRefills > 10) break;
			}

			let index = Math.floor(Math.random() * total);
			for (const roleName of order) {
				index -= this.data.board.votingCubeBag[roleName];
				if (index >= 0) continue;
				--this.data.board.votingCubeBag[roleName];
				result.push(roleName);
				break;
			}
		}
		return result;
	}

	resolveElections(input: z.infer<typeof ElectionsInputSchema>) {
		const policies = Object.values(PolicyEnum);
		for (const policy of policies) {
			const proposal = this.data.board.policyProposals[policy];
			if (!proposal) continue;

			const choice = input[policy] ?? { preferences: {}, influence: {} };
			const activeRoles = this.activeRoleNames;
			const preferences = Object.fromEntries(
				activeRoles.map(roleName => [roleName, roleName === proposal.role || !!choice.preferences[roleName]]),
			) as Record<RoleName, boolean>;
			const drawn = this.drawVotingCubes(5);
			let favor = 0;
			let against = 0;
			const contribution = new Set<RoleName>();

			for (const cube of drawn) {
				if (this.data.players.length === 2 && cube === RoleEnum.middleClass) continue;
				if (preferences[cube]) {
					++favor;
					contribution.add(cube);
				} else {
					++against;
					contribution.add(cube);
				}
			}

			for (const roleName of activeRoles) {
				const amount = choice.influence[roleName] ?? 0;
				if (amount <= 0) continue;
				if (roleName === RoleEnum.state) {
					this.data.roles.state.data.resources.personalInfluence.remove(amount);
				} else {
					this.data.roles[roleName].data.resources.influence.remove(amount);
				}
				if (preferences[roleName]) favor += amount;
				else against += amount;
				contribution.add(roleName);
			}

			const passed = favor >= against;
			if (passed) {
				this.applyPolicyChange(policy, proposal.value);
				this.data.roles[proposal.role].data.score += 3;
				for (const roleName of activeRoles) {
					if (roleName !== proposal.role && preferences[roleName] && contribution.has(roleName)) {
						this.data.roles[roleName].data.score += 1;
					}
				}
			}

			for (const cube of drawn) {
				if (this.data.players.length === 2 && cube === RoleEnum.middleClass) continue;
				if (preferences[cube] !== passed) ++this.data.board.votingCubeBag[cube];
			}
			delete this.data.board.policyProposals[policy];
		}
	}

	applyPolicyChange(policy: PolicyName, value: PolicyValue) {
		this.data.board.policies[policy] = value;
		if (policy !== PolicyEnum.laborMarket) return;
		const wage = this.getMinimumWage();
		for (const roleName of [RoleEnum.state, RoleEnum.middleClass, RoleEnum.capitalist] as const) {
			for (const company of this.data.roles[roleName].data.companies) {
				if (!this.isWageAllowed(company.wages)) company.wages = wage;
			}
		}
	}

	scoreRound() {
		const workingClassUnions = this.data.roles.workingClass.data.workers.filter(worker => worker.union).length;
		this.data.roles.workingClass.data.score += workingClassUnions * 2;

		if (this.data.roles.middleClass.active) {
			const fullyOperationalCompanies = this.data.roles.middleClass.data.companies.filter(company => {
				const def = this.getCompanyDefinition(company.id);
				return company.workers.length === def.workers.length && this.canWorkersFillCompany(company.workers, company.id);
			}).length;
			if (this.data.roles.middleClass.getProsperityValue() < fullyOperationalCompanies) {
				this.data.roles.middleClass.increaseProsperity();
			}
		}

		const capitalistMoney = this.data.roles.capitalist.data.resources.money;
		capitalistMoney.transferRevenueToCapital();
		const wealthLevel = Math.floor(capitalistMoney.capital / 50);
		this.data.roles.capitalist.data.score += wealthLevel;

		if (this.data.roles.state.active) {
			const legitimacy = Object.values(this.data.roles.state.data.legitimacy).sort((a, b) => a - b);
			this.data.roles.state.data.score += legitimacy[0] + legitimacy[1];
			for (const roleName of Object.keys(this.data.roles.state.data.legitimacy) as RoleNameNoState[]) {
				this.data.roles.state.data.legitimacy[roleName] = Math.ceil(
					this.data.roles.state.data.legitimacy[roleName] / 2,
				);
				this.data.roles.state.data.legitimacy[roleName] += this.data.roles.state.data.legitimacyTokens[roleName];
			}
		}
	}

	cleanupRound() {
		this.data.currentRoleName = null;
		this.data.board.policyProposals = {};
		for (const role of Object.values(this.data.roles)) role.data.usedActions = [];
		this.data.roles.workingClass.data.demonstration = false;
		for (const role of [this.data.roles.state, this.data.roles.capitalist, this.data.roles.middleClass]) {
			for (const company of role.data.companies) company.strike = false;
		}
	}

	finalizeGame() {
		for (const roleName of this.activeRoleNames) {
			this.applyLoanEndgame(roleName);
			this.data.roles[roleName].data.score += this.getEndgameScore(roleName);
			this.data.finalScores[roleName] = this.data.roles[roleName].data.score;
		}
		this.data.winners = this.getWinners();
		this.data.winner = this.data.winners.length === 1 ? this.data.winners[0] : null;
		this.data.phase = GamePhaseEnum.finished;
	}

	private applyLoanEndgame(roleName: RoleName) {
		const role = this.data.roles[roleName];
		if (roleName === RoleEnum.capitalist) {
			role.data.score -= role.data.resources.money.loans * 5;
			return;
		}
		while (role.data.resources.money.loans > 0) {
			const amountPaid = Math.min(55, Math.floor(role.data.resources.money.value / 5) * 5);
			if (amountPaid > 0) role.data.resources.money.remove(amountPaid);
			role.data.score -= (55 - amountPaid) / 5;
			role.data.resources.money.removeLoans(1);
		}
	}

	private getEndgameScore(roleName: RoleName) {
		switch (roleName) {
			case RoleEnum.workingClass:
				return (
					this.scorePolicySections(0, [0, 1, 4, 8, 12, 18]) +
					Math.min(15, Math.floor(this.data.roles.workingClass.data.resources.money.value / 10))
				);
			case RoleEnum.middleClass:
				return (
					this.scorePolicySections(1, [0, 1, 3, 6, 10, 15]) +
					this.scoreStoredGoods(this.data.roles.middleClass.data.producedResources) +
					Math.floor(this.data.roles.middleClass.data.resources.money.value / 15)
				);
			case RoleEnum.capitalist:
				return (
					this.scorePolicySections(2, [0, 1, 4, 8, 12, 18]) +
					this.scoreStoredGoods(this.data.roles.capitalist.data.resources) +
					Math.floor(this.data.roles.capitalist.data.freeTradeZoneResources.food.value / 2) +
					Math.floor(this.data.roles.capitalist.data.freeTradeZoneResources.luxury.value / 3)
				);
			case RoleEnum.state:
				return (
					this.scoreStoredGoods(this.data.roles.state.data.resources) +
					Math.floor(this.data.roles.state.data.resources.influence.value / 3) +
					Math.floor(this.data.roles.state.data.resources.money.value / 30)
				);
		}
	}

	private scorePolicySections(value: PolicyValue, points: number[]) {
		const count = [
			PolicyEnum.fiscalPolicy,
			PolicyEnum.laborMarket,
			PolicyEnum.taxation,
			PolicyEnum.healthcare,
			PolicyEnum.education,
		].filter(policy => this.getPolicy(policy) === value).length;
		return points[count];
	}

	private scoreStoredGoods(resources: Record<string, { value: number }>) {
		return (
			Math.floor((resources[ResourceEnum.food]?.value ?? 0) / 2) +
			Math.floor((resources[ResourceEnum.luxury]?.value ?? 0) / 3) +
			Math.floor((resources[ResourceEnum.healthcare]?.value ?? 0) / 3) +
			Math.floor((resources[ResourceEnum.education]?.value ?? 0) / 3)
		);
	}

	private getWinners() {
		const scores = this.data.finalScores;
		const best = Math.max(...Object.values(scores));
		const tied = this.activeRoleNames.filter(roleName => scores[roleName] === best);
		if (tied.length === 1) return tied;
		const policyPreference: Partial<Record<RoleName, PolicyValue>> = {
			[RoleEnum.workingClass]: 0,
			[RoleEnum.middleClass]: 1,
			[RoleEnum.capitalist]: 2,
		};
		const bestPolicyCount = Math.max(
			...tied.map(roleName => this.scorePolicySections(policyPreference[roleName] ?? 1, [0, 1, 2, 3, 4, 5])),
		);
		const policyTied = tied.filter(
			roleName => this.scorePolicySections(policyPreference[roleName] ?? 1, [0, 1, 2, 3, 4, 5]) === bestPolicyCount,
		);
		if (policyTied.length === 1) return policyTied;
		if (policyTied.includes(RoleEnum.state)) return [RoleEnum.state];
		const cubeCount = (roleName: RoleName) =>
			roleName === RoleEnum.state ? 0 : this.data.board.votingCubeBag[roleName];
		const bestCubeCount = Math.max(...policyTied.map(cubeCount));
		return policyTied.filter(roleName => cubeCount(roleName) === bestCubeCount);
	}

	createNext(context: RunContextNoRole) {
		return <T extends ActionEventName>(
			event: T,
			{ debugPlayerInput }: { debugPlayerInput?: T extends keyof PlayerInput ? PlayerInput[T] : never } = {},
		) => {
			let formattedEvent: AnyActionEvent = event as any;
			if (typeof event === 'string') {
				formattedEvent = { type: event } as any;
			}
			if (debugPlayerInput) {
				formattedEvent = { ...formattedEvent, debugPlayerInput } as any;
			}
			if (context.queueIndex == null) {
				this.data.actionQueue.push(formattedEvent);
			} else {
				this.data.actionQueue.splice(context.queueIndex, 0, formattedEvent);
				++context.queueIndex;
			}
		};
	}

	async requestPlayerInput<T extends ActionEventName>(type: T): Promise<any> {
		if (this.debug) console.log('    user:', type.padEnd(20));
		const result = await this.config.requestPlayerInput(type);
		if (this.debug) console.log('    user:', 'result'.padEnd(20), result);
		return result;
	}

	async tick() {
		try {
			await this.unsafeTick();
			return true;
		} catch (e) {
			this.data.error = e;
			return false;
		}
	}

	private async unsafeTick() {
		if (this.data.currentActionIndex >= this.data.actionQueue.length) return;

		const event = this.data.actionQueue[this.data.currentActionIndex];
		const [targetName, key, ...rest] = event.type.split(':');

		if (!targetName || !key || rest.length) {
			throw new Error(`malformed action event name "${event.type}"`);
		}

		const target: any = targetName === 'game' ? this : this.data.roles[targetName as RoleName];
		if (!target) throw new Error(`unknown action event target "${targetName}"`);

		const action: Action<any> = target.actions?.[key] || target.freeActions?.[key] || target.basicActions?.[key];
		if (!action) throw new Error(`unknown action event key "${targetName}": "${key}"`);

		const actionContext: RunContext<RoleName> = {
			next: null as any, // added below
			queueIndex: this.data.currentActionIndex + 1,
			currentRole: this.data.currentRoleName ? this.data.roles[this.data.currentRoleName] : (null as any),
		};
		actionContext.next = this.createNext(actionContext);

		if (action.condition) {
			const errors = action
				// @ts-ignore
				.condition(actionContext, event.data)
				.filter((c: any) => !c[1])
				.map((c: any) => c[0]);
			if (errors.length > 0) {
				throw new Error(`Event(${event.type}) condition not met: ${errors.join(', ')}`);
			}
		}

		if (action.playerInputSchema) {
			if ((event as any).debugPlayerInput) {
				event.data = (event as any).debugPlayerInput;
			} else {
				event.data = await this.requestPlayerInput(event.type);
			}
			try {
				event.data = action.playerInputSchema.parse(event.data);
			} catch (e) {
				if (this.config.debug) console.log(e);
				throw new Error(`Event(${event.type}) player input validation failed, does not match schema`);
			}
			if (action.validateInput) {
				const errors = action
					.validateInput(event.data)
					.filter(x => !x[1])
					.map(x => x[0]);
				if (errors.length > 0) {
					throw new Error(`Event(${event.type}) player input validation failed: ${errors.join(', ')}`);
				}
			}
		}

		if (this.config.debug) {
			console.log(`${String(this.data.currentActionIndex).padStart(3)} tick:`, event.type.padEnd(40), event.data);
		}

		try {
			action.run.bind(target)(event.data);
		} catch (e) {
			if (this.config.debug) {
				console.error(`Event(${event.type}) action failed: ${e}`);
				console.error(
					this.data.actionQueue
						.slice()
						.reverse()
						.map(e => '  → ' + e.type)
						.join('\n'),
				);
			}
			throw e;
		}

		++this.data.currentActionIndex;
	}

	/** primarily used in testing */
	async flush({ to, after }: { to?: ActionEventName; after?: ActionEventName } = {}): Promise<void> {
		if (to && after) throw new Error('flush: to and after are mutually exclusive');
		let count = 0;
		while (this.data.currentActionIndex < this.data.actionQueue.length) {
			await this.tick();
			if (this.data.error) throw this.data.error;
			if (++count > 2000) throw new Error('Infinite loop breaker');
			if (to && this.data.actionQueue[this.data.currentActionIndex]?.type === to) break;
			if (after && this.data.actionQueue[this.data.currentActionIndex - 1].type === after) break;
		}
	}

	getCompanyDefinition(id: CompanyCard['id']): CompanyCard {
		const result =
			this.data.roles.capitalist.data.companyDeck.getOriginalCard(id, { safe: true }) ||
			this.data.roles.middleClass.data.companyDeck.getOriginalCard(id, { safe: true }) ||
			this.data.roles.state.data.companyDeck.getOriginalCard(id, { safe: true });
		if (!result) throw new Error(`companyId="${id}" not found`);
		return result;
	}

	/** @note prefer using WorkingClassRole.worker() or MiddleClassRole.worker() */
	getWorkerById(id: CompanyWorker['id']): {
		worker: CompanyWorker;
		roleName: RoleNameWorkingMiddleClass;
	} {
		const roleName = this.data.roles.workingClass.worker(id, { safe: true })
			? RoleEnum.workingClass
			: this.data.roles.middleClass.worker(id, { safe: true })
				? RoleEnum.middleClass
				: null;

		if (!roleName) throw new Error(`workerId="${id}" not found`);

		return { roleName, worker: this.data.roles[roleName].worker(id) };
	}

	getCompanyById(id: Company['id']): { company: Company; roleName: RoleNameNoWorkingClass } {
		const roleName = this.data.roles.middleClass.company(id, { safe: true })
			? RoleEnum.middleClass
			: this.data.roles.capitalist.company(id, { safe: true })
				? RoleEnum.capitalist
				: RoleEnum.state;

		const company = this.data.roles[roleName].company(id);
		return { roleName, company };
	}

	drawImmigrationCard(role: RoleMap['workingClass']['id'] | RoleMap['middleClass']['id']) {
		if (!this.data.board.decks.immigrationDeck.size) {
			this.data.board.decks.immigrationDeck = this.data.board.decks.immigrationDeck.clone();
			this.data.board.decks.immigrationDeck.shuffle();
		}
		const card = this.data.board.decks.immigrationDeck.draw();
		this.data.roles[role].newWorker(card[role]);
	}

	buyFromForeignMarket(
		roleName: RoleNameWorkingMiddleClass,
		resource: typeof ResourceEnum.food | typeof ResourceEnum.luxury,
		count: number,
		{ payTarriff, canTakeLoans = false }: { payTarriff?: boolean; canTakeLoans?: boolean } = {},
	): void {
		const tarriff =
			payTarriff === false
				? 0
				: (
						[
							{ [ResourceEnum.food]: 10, [ResourceEnum.luxury]: 6 },
							{ [ResourceEnum.food]: 5, [ResourceEnum.luxury]: 3 },
							{ [ResourceEnum.food]: 0, [ResourceEnum.luxury]: 0 },
						] as const
					)[this.getPolicy('foreignTrade')][resource];
		const base = resource === ResourceEnum.food ? 10 : 6;
		const total = (base + tarriff) * count;
		this.data.roles[roleName].data.resources[resource].add(count);
		this.data.roles[roleName].data.resources.money.remove(total, { canTakeLoans });
		this.data.roles[RoleEnum.state].data.resources.money.add(tarriff * count);
	}

	assignWorkers(toAssign: z.infer<typeof AssignWorkersSchema>) {
		const errors = this.validateAssignWorkers(toAssign)
			.filter(([, valid]) => !valid)
			.map(([message]) => message);
		if (errors.length) throw new Error(`assignWorkers failed: ${errors.join(', ')}`);

		const companiesToEmpty = new Set<Company['id']>();
		const handledWorkers = new Set<CompanyWorker['id']>();

		for (const { workerId, ...payload } of toAssign) {
			const { worker } = this.getWorkerById(workerId);
			handledWorkers.add(workerId);

			// moving unemployed workers is fine
			// moving WC workers out of a MC company is also fine
			// all other instances, we need to empty all other workers from a company
			if (worker.company) {
				const { company, roleName } = this.getCompanyById(worker.company);
				if (roleName !== RoleEnum.middleClass || worker.role !== RoleEnum.workingClass) {
					companiesToEmpty.add(worker.company);
				}
				company.workers = company.workers.filter(w => w !== worker.id);
				worker.company = null;
				worker.union = false;
			}

			if (payload.target == 'union') {
				worker.company = null;
				worker.committed = true;
				worker.union = true;
			} else {
				const { companyId } = payload;
				const { company } = this.getCompanyById(companyId);
				company.workers.push(workerId);
				worker.company = companyId;
				worker.committed = true;
				worker.union = false;
			}
		}

		for (const companyId of companiesToEmpty) {
			const { company } = this.getCompanyById(companyId);
			if (!this.isCompanyOperationalFor(company)) {
				for (const workerId of company.workers) {
					const { worker } = this.getWorkerById(workerId);
					worker.company = null;
					worker.committed = false;
					worker.union = false;
				}
				company.workers = [];
			}
		}
	}

	setupBoard() {
		this.validatePlayers();
		const order = [RoleEnum.workingClass, RoleEnum.middleClass, RoleEnum.capitalist, RoleEnum.state];
		this.data.players.sort((a, b) => order.indexOf(a.role) - order.indexOf(b.role));
		this.data.round = 0;
		this.data.turn = 0;
		this.data.phase = GamePhaseEnum.setup;
		this.data.currentRoleName = null;
		this.data.winner = null;
		this.data.winners = [];
		this.data.finalScores = {};
		this.data.laborMarketForIncomeTax = null;
		this.data.board.policyProposals = {};
		this.data.board.votingCubeBag = {
			[RoleEnum.workingClass]: 8,
			[RoleEnum.middleClass]: 8,
			[RoleEnum.capitalist]: 8,
		};
		this.data.board.policies = {
			[PolicyEnum.fiscalPolicy]: 2,
			[PolicyEnum.laborMarket]: 1,
			[PolicyEnum.taxation]: 0,
			[PolicyEnum.healthcare]: 1,
			[PolicyEnum.education]: 2,
			[PolicyEnum.foreignTrade]: this.data.players.length === 4 ? 0 : 1,
			[PolicyEnum.immigration]: this.data.players.length === 4 ? 1 : 0,
		};
		for (const role of Object.values(this.data.roles)) {
			role.active = this.data.players.some(player => player.role === role.id);
		}
		this.data.roles.workingClass.data.availableVotingCubes = 17;
		this.data.roles.middleClass.data.availableVotingCubes = 17;
		this.data.roles.capitalist.data.availableVotingCubes = 17;

		for (const deck of Object.values(this.data.board.decks)) {
			deck.shuffle();
		}

		// order matters: companies need to be setup before workers come out
		this.data.roles.state.setupBoard();
		this.data.roles.capitalist.setupBoard();
		if (this.data.roles.middleClass.active) this.data.roles.middleClass.setupBoard();
		this.data.roles.workingClass.setupBoard();
	}

	setupRound() {
		this.data.currentRoleName = null;
		++this.data.round;
		this.data.phase = this.data.round === 1 ? GamePhaseEnum.action : GamePhaseEnum.preparation;
		if (this.debug) console.log('round:', this.data.round);
		this.data.turn = 0;
		if (!this.data.board.decks.foreignMarketDeck.size) {
			this.data.board.decks.foreignMarketDeck = this.data.board.decks.foreignMarketDeck.clone();
			this.data.board.decks.foreignMarketDeck.shuffle();
		}
		this.data.board.foreignMarketCard = this.data.board.decks.foreignMarketDeck.draw().id;
		const drawBusinessDeal = () => {
			if (!this.data.board.decks.businessDealDeck.size) {
				this.data.board.decks.businessDealDeck = this.data.board.decks.businessDealDeck.clone();
				this.data.board.decks.businessDealDeck.shuffle();
			}
			return this.data.board.decks.businessDealDeck.draw().id;
		};
		const businessDealCount = this.data.round === 1 ? 1 : this.ifPolicy('6A') ? 0 : this.ifPolicy('6B') ? 1 : 2;
		this.data.board.businessDealCards = Array.from({ length: businessDealCount }, drawBusinessDeal);
		if (this.data.round > 1) {
			for (const role of Object.values(this.data.roles)) {
				if (!role.active && role.id !== RoleEnum.state) continue;
				role.setupRound();
			}
		}
	}

	readonly actions = {
		start: createAction({
			run: () => {
				this.setupBoard();
				this.next('game:roundStart');
			},
		}),
		roundStart: createAction({
			run: () => {
				this.setupRound();
				this.next('game:turnStart');
			},
		}),
		turnStart: createAction({
			run: () => {
				++this.data.turn;
				this.data.phase = GamePhaseEnum.action;
				this.data.currentRoleName = null;
				if (this.debug) console.log('turn:', this.data.turn);
				for (const role of Object.values(this.data.roles)) {
					role.data.usedActions = [];
				}
				this.next('game:roleNext');
			},
		}),
		roleNext: createAction({
			run: () => {
				const players = this.data.players;
				// can't advance the role, turn is over
				if (this.data.currentRoleName == players[players.length - 1].role) {
					return this.next('game:turnEnd');
				}
				// start of a turn
				if (this.data.currentRoleName == null) {
					this.data.currentRoleName = players[0].role;
				} else {
					this.data.currentRoleName = players[players.findIndex(p => p.role === this.data.currentRoleName) + 1].role;
				}
				if (this.debug) console.log('role:', this.data.currentRoleName);
				this.next('game:roleTurn');
			},
		}),
		roleTurn: createAction({
			playerInputSchema: actionEventNameSchema,
			condition: () => [['isRoleTurn', !!this.data.currentRoleName]],
			validateInput: type => {
				const kind = this.getActionKind(type);
				const roleName = this.getActionRole(type);
				const usedActions = this.data.roles[this.data.currentRoleName!].data.usedActions;
				return [
					['currentTurn', roleName === this.data.currentRoleName],
					['roleAction', !!kind],
					['basicAvailable', kind !== 'basic' || !usedActions.includes('basic')],
					['freeAvailable', kind !== 'free' || !usedActions.includes('free')],
				];
			},
			run: type => {
				this.data.roles[this.data.currentRoleName!].data.usedActions.push(this.getActionKind(type)!);
				this.next(type);
				this.next('game:roleCurrent');
			},
		}),
		roleCurrent: createAction({
			run: () => {
				const used = this.data.roles[this.data.currentRoleName!].data.usedActions;
				if (used.includes('basic') && used.includes('free')) return this.next('game:roleNext');
				return this.next('game:roleTurn');
			},
		}),
		turnEnd: createAction({
			run: () => {
				if (this.data.turn >= 5) return this.next('game:productionStart');
				this.next('game:turnStart');
			},
		}),
		productionStart: createAction({
			run: () => {
				this.data.phase = GamePhaseEnum.production;
				this.data.currentRoleName = null;
				this.next('game:productionProduceGoods');
			},
		}),
		productionProduceGoods: createAction({
			run: () => {
				this.produceGoodsAndServices();
				this.next('game:productionCoverNeeds');
			},
		}),
		productionCoverNeeds: createAction({
			run: () => {
				this.coverNeeds();
				this.next('game:productionCheckImf');
			},
		}),
		productionCheckImf: createAction({
			run: () => {
				this.checkImf();
				this.next('game:productionPayTaxes');
			},
		}),
		productionPayTaxes: createAction({
			run: () => {
				this.payTaxes();
				this.next('game:electionsStart');
			},
		}),
		electionsStart: createAction({
			run: () => {
				this.data.phase = GamePhaseEnum.elections;
				if (Object.keys(this.data.board.policyProposals).length === 0) return this.next('game:scoringStart');
				this.next('game:electionsRefillBag');
			},
		}),
		electionsRefillBag: createAction({
			run: () => {
				this.refillVotingBag();
				this.next('game:electionsCarryOut');
			},
		}),
		electionsCarryOut: createAction({
			playerInputSchema: ElectionsInputSchema,
			run: input => {
				this.resolveElections(input);
				this.next('game:scoringStart');
			},
		}),
		scoringStart: createAction({
			run: () => {
				this.data.phase = GamePhaseEnum.scoring;
				this.scoreRound();
				this.next('game:roundEnd');
			},
		}),
		roundEnd: createAction({
			run: () => {
				this.cleanupRound();
				if (this.data.round >= 5) return this.next('game:end');
				this.next('game:roundStart');
			},
		}),
		end: createAction({
			run: () => {
				this.finalizeGame();
			},
		}),
	} satisfies Record<string, Action<any>>;
}
