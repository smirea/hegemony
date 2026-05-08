import type {
	CompanyCard,
	CompanyTradeableResource,
	CompanyWorkerType,
	Industry,
	PolicyName,
	PolicyString,
	PolicyValue,
	Resource,
	RoleName,
	TradeableResource,
	WageId,
} from 'shared/logic/types';

export type DeckImagePath = `fixtures/assets/decks-sorted/${string}`;

export interface DeckCardImage {
	id: string;
	frontImage: DeckImagePath;
	backImage: DeckImagePath | null;
	source: {
		deck: string;
		file: string;
		position?: {
			x: number;
			y: number;
		};
	};
	rawText: string;
	parsed?: {
		numbers?: number[];
		money?: number[];
		policies?: PolicyString[];
		resources?: Resource[];
		keywords?: string[];
	};
	notes?: string[];
}

export type PlayerClass = Exclude<RoleName, 'state'>;
export type TargetRole = RoleName | 'self' | 'any' | 'all' | 'other' | 'active-player';

export interface PolicyRequirement {
	policy: PolicyName;
	value: PolicyValue | PolicyString;
	operator?: '==' | '<=' | '>=';
}

export interface LegitimacyChange {
	className: PlayerClass;
	value: number;
}

export type ParsedEffect =
	| {
			type: 'resource';
			action: 'gain' | 'spend' | 'pay' | 'provide' | 'receive' | 'buy' | 'sell' | 'discard' | 'store';
			resource: Resource | CompanyTradeableResource;
			amount: number | 'up-to' | 'any' | 'all';
			target?: TargetRole;
			source?: TargetRole | 'foreign-market' | 'bank' | 'supply';
			condition?: string;
	  }
	| {
			type: 'money';
			action: 'gain' | 'spend' | 'pay' | 'provide' | 'receive' | 'take-loan' | 'repay-loan' | 'tax';
			amount: number | 'up-to' | 'any' | 'all';
			target?: TargetRole;
			source?: TargetRole | 'bank' | 'supply';
			condition?: string;
	  }
	| {
			type: 'victory-points';
			action: 'gain' | 'lose';
			amount: number | 'variable';
			target?: TargetRole;
			condition?: string;
	  }
	| {
			type: 'policy';
			action: 'change' | 'propose' | 'score' | 'require';
			policy?: PolicyName;
			value?: PolicyValue | PolicyString;
			condition?: string;
	  }
	| {
			type: 'state:legitimacy-increment';
			className: PlayerClass;
			value: number;
	  }
	| {
			type: 'state:legitimacy-decrement';
			className: PlayerClass;
			value: number;
	  }
	| {
			type: 'worker';
			action: 'add' | 'remove' | 'upgrade' | 'assign' | 'commit' | 'uncommit' | 'swap';
			workerType?: CompanyWorkerType | 'any';
			target?: TargetRole | 'unemployed-workers' | 'trade-union' | 'company';
			amount?: number | 'any' | 'all';
			condition?: string;
	  }
	| {
			type: 'company';
			action:
				| 'build'
				| 'sell'
				| 'operate'
				| 'produce'
				| 'increase-production'
				| 'decrease-production'
				| 'adjust-wages'
				| 'add-automation'
				| 'remove-automation'
				| 'strike';
			industry?: Industry | 'any';
			target?: TargetRole | 'company' | 'market';
			amount?: number | 'any' | 'all';
			condition?: string;
	  }
	| {
			type: 'card';
			action: 'draw' | 'discard' | 'reveal' | 'search' | 'shuffle' | 'play' | 'remove-from-game';
			deck?: string;
			amount?: number | 'any' | 'all';
			target?: TargetRole;
			condition?: string;
	  }
	| {
			type: 'vote';
			action: 'add-cubes' | 'remove-cubes' | 'spend-influence' | 'immediate-vote' | 'change-result';
			target?: TargetRole | 'bag';
			amount?: number | 'any' | 'all';
			condition?: string;
	  }
	| {
			type: 'automa';
			action: string;
			target?: TargetRole | 'automa';
			value?: string | number;
			condition?: string;
	  }
	| {
			type: 'choice';
			options: string[];
			effects?: ParsedEffect[];
	  }
	| {
			type: 'raw';
			text: string;
	  };

export interface ParsedActionCard extends DeckCardImage {
	kind: 'action';
	role: RoleName;
	category?: 'base' | 'expansion';
	name: string;
	content: string;
	requirements?: PolicyRequirement[];
	effects: ParsedEffect[];
	legitimacy?: LegitimacyChange[];
}

export interface ParsedEventCard extends DeckCardImage {
	kind: 'event' | 'crisis-response' | 'historical-event';
	name: string;
	content: string;
	task?: string;
	choices?: Array<{
		label: string;
		reward?: string;
		penalty?: string;
		effects?: ParsedEffect[];
	}>;
	noAction?: {
		text: string;
		effects?: ParsedEffect[];
	};
	effects: ParsedEffect[];
}

export interface ParsedPoliticalAgendaCard extends DeckCardImage {
	kind: 'political-agenda';
	name: string;
	policies: PolicyString[];
	scoring: string;
	effects?: ParsedEffect[];
}

export interface ParsedImmigrationCard extends DeckCardImage {
	kind: 'immigration';
	name: string;
	workers: {
		workingClass: {
			type: 'unskilled' | 'specialized';
			quantity: number;
			industry?: Industry;
		};
		middleClass: {
			type: 'unskilled' | 'specialized';
			quantity: number;
			industry?: Industry;
		};
	};
}

export interface ParsedBusinessDealCard extends DeckCardImage {
	kind: 'business-deal';
	name: string;
	cost: number;
	goods: Partial<Record<Extract<TradeableResource, 'food' | 'luxury'>, number>>;
	foreignTradePolicy: PolicyString;
	tariffs: Partial<Record<'A' | 'B', number>>;
}

export interface ParsedExportCard extends DeckCardImage {
	kind: 'export';
	name: string;
	transactions: Array<{
		resource: TradeableResource;
		amount: number;
		money: number;
	}>;
}

export interface ParsedLoanCard extends DeckCardImage {
	kind: 'loan';
	name: string;
	value: number;
	repayment?: number;
	range?: [number, number];
}

export interface ParsedCompanyDeckCard extends DeckCardImage, CompanyCard {
	kind: 'company';
	owner: Extract<RoleName, 'middleClass' | 'capitalist' | 'state'> | 'workingClass';
	sourceType?: 'base' | 'public-company' | 'cooperative-farm' | 'expansion' | 'automa';
}

export interface ParsedAutomaCard extends DeckCardImage {
	kind: 'automa';
	deckType:
		| 'agenda'
		| 'event'
		| 'action-priority'
		| 'ai'
		| 'criteria'
		| 'policy-priority'
		| 'desired-policies'
		| 'spending-influence';
	role?: RoleName;
	name?: string;
	content: string;
	values?: Record<string, string | number | boolean | string[] | number[]>;
	effects: ParsedEffect[];
}

export type ParsedDeckCard =
	| ParsedActionCard
	| ParsedAutomaCard
	| ParsedBusinessDealCard
	| ParsedCompanyDeckCard
	| ParsedEventCard
	| ParsedExportCard
	| ParsedImmigrationCard
	| ParsedLoanCard
	| ParsedPoliticalAgendaCard;

export type WageMap = Record<WageId, number>;
