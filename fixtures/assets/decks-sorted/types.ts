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
		cardId?: number;
		copyIndex?: number;
		physicalIndex?: number;
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
export type ComparisonOperator = '==' | '!=' | '<' | '<=' | '>' | '>=';
export type RequirementMode = 'all' | 'any';

export type CardRequirement =
	| {
			type: 'policy';
			mode: RequirementMode;
			policies: PolicyString[];
	  }
	| {
			type: 'policy-section-count';
			section: PolicyValue;
			count: number;
			operator: ComparisonOperator;
			policies?: PolicyName[];
	  }
	| {
			type: 'proposed-bills';
			count: number;
			operator: ComparisonOperator;
	  }
	| {
			type: 'loans';
			owner: TargetRole | 'all-players';
			count: number;
			operator: ComparisonOperator;
	  }
	| {
			type: 'companies';
			owner?: TargetRole;
			industry?: Industry | 'agriculture-or-luxury';
			operational?: boolean;
			count: number;
			operator: ComparisonOperator;
	  }
	| {
			type: 'round';
			round: number;
			operator: ComparisonOperator;
	  };

export interface LegitimacyChange {
	className: PlayerClass;
	value: number;
}

export type StateEffectAmount =
	| number
	| 'all'
	| 'any'
	| {
			type: 'up-to';
			amount: number | 'population' | 'available';
	  }
	| {
			type: 'per';
			amount: number;
			per:
				| 'population'
				| 'employed-worker'
				| 'unemployed-worker'
				| 'company'
				| 'operational-company'
				| 'trade-union'
				| 'matching-policy'
				| 'loan'
				| 'proposed-bill'
				| 'available';
			target?: TargetRole | 'chosen';
	  }
	| {
			type: 'fraction';
			numerator: number;
			denominator: number;
			of: 'cost' | 'population' | 'revenue';
			round?: 'up' | 'down';
	  };

export type StateEffect =
	| {
			type: 'resource';
			action: 'gain' | 'spend' | 'pay' | 'provide' | 'receive' | 'buy' | 'sell' | 'discard' | 'store';
			resource: Resource | CompanyTradeableResource | 'any';
			amount: StateEffectAmount;
			target?: TargetRole | 'foreign-market' | 'market';
			source?: TargetRole | 'foreign-market' | 'bank' | 'supply';
			condition?: CardRequirement;
	  }
	| {
			type: 'money';
			action: 'gain' | 'spend' | 'pay' | 'provide' | 'receive' | 'take-loan' | 'repay-loan' | 'tax';
			amount: StateEffectAmount;
			target?: TargetRole | 'supply';
			source?: TargetRole | 'bank' | 'supply';
			condition?: CardRequirement;
	  }
	| {
			type: 'victory-points';
			action: 'gain' | 'lose';
			amount: StateEffectAmount;
			target?: TargetRole;
			condition?: CardRequirement;
	  }
	| {
			type: 'policy';
			action: 'change' | 'propose' | 'score';
			policy?: PolicyName;
			value?: PolicyValue | PolicyString;
			placement?: 'normal' | 'any-section';
			immediateVoteAllowed?: boolean;
			condition?: CardRequirement;
	  }
	| {
			type: 'state:legitimacy-increment';
			className: PlayerClass | 'chosen';
			value: StateEffectAmount;
	  }
	| {
			type: 'state:legitimacy-decrement';
			className: PlayerClass | 'chosen';
			value: StateEffectAmount;
	  }
	| {
			type: 'worker';
			action: 'add' | 'remove' | 'upgrade' | 'assign' | 'commit' | 'uncommit' | 'swap';
			workerType?: CompanyWorkerType | 'any';
			target?: TargetRole | 'unemployed-workers' | 'trade-union' | 'company';
			source?: TargetRole | 'supply' | 'unemployed-workers' | 'company';
			amount?: StateEffectAmount;
			condition?: CardRequirement;
	  }
	| {
			type: 'company';
			action:
				| 'build'
				| 'sell'
				| 'transfer'
				| 'operate'
				| 'produce'
				| 'increase-production'
				| 'decrease-production'
				| 'adjust-wages'
				| 'add-automation'
				| 'remove-automation'
				| 'strike';
			industry?: Industry | 'any' | 'agriculture-or-luxury';
			target?: TargetRole | 'company' | 'market';
			source?: TargetRole | 'company' | 'market';
			amount?: StateEffectAmount;
			condition?: CardRequirement;
	  }
	| {
			type: 'card';
			action: 'draw' | 'discard' | 'reveal' | 'search' | 'shuffle' | 'play' | 'remove-from-game';
			deck?: string;
			amount?: StateEffectAmount;
			target?: TargetRole | 'market';
			condition?: CardRequirement;
	  }
	| {
			type: 'vote';
			action:
				| 'add-cubes'
				| 'remove-cubes'
				| 'spend-influence'
				| 'immediate-vote'
				| 'change-result'
				| 'draw-cubes'
				| 'reveal-cubes'
				| 'replace-cubes'
				| 'return-cubes';
			target?: TargetRole | 'bag';
			amount?: StateEffectAmount;
			condition?: CardRequirement;
	  }
	| {
			type: 'prosperity';
			action: 'gain' | 'lose';
			amount: StateEffectAmount;
			target?: TargetRole;
			condition?: CardRequirement;
	  }
	| {
			type: 'capital';
			action: 'move-revenue-to-capital' | 'spend';
			amount: StateEffectAmount;
			target?: Extract<RoleName, 'capitalist'> | 'self';
			condition?: CardRequirement;
	  }
	| {
			type: 'event';
			action: 'perform' | 'place';
			amount?: StateEffectAmount;
			target?: 'event' | 'board';
			condition?: CardRequirement;
	  }
	| {
			type: 'automa';
			action: string;
			target?: TargetRole | 'automa';
			value?: string | number;
			condition?: CardRequirement;
	  }
	| {
			type: 'choice';
			options: string[];
			stateEffects?: StateEffect[];
	  };

export interface ParsedActionCard extends DeckCardImage {
	kind: 'action';
	role: RoleName;
	category?: 'base' | 'expansion';
	name: string;
	content: string;
	requirements?: CardRequirement[];
	stateEffects: StateEffect[];
	stateEffectsCoverage: 'complete' | 'partial' | 'unparsed';
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
		stateEffects?: StateEffect[];
	}>;
	noAction?: {
		text: string;
		stateEffects?: StateEffect[];
	};
	requirements?: CardRequirement[];
	stateEffects: StateEffect[];
	stateEffectsCoverage?: 'complete' | 'partial' | 'unparsed';
}

export interface ParsedPoliticalAgendaCard extends DeckCardImage {
	kind: 'political-agenda';
	name: string;
	policies: PolicyString[];
	scoring: string;
	stateEffects?: StateEffect[];
}

export interface ParsedImmigrationCard extends DeckCardImage {
	kind: 'immigration';
	name: string;
	workers: {
		workingClass: {
			type: 'unskilled' | 'specialized';
			worker: CompanyWorkerType;
			industry?: Industry;
		};
		middleClass: {
			type: 'unskilled' | 'specialized';
			worker: CompanyWorkerType;
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
	sides?: Array<{
		label: 'front' | 'back';
		image: DeckImagePath;
		value: number;
		repayment?: number;
	}>;
}

export interface ParsedCompanyDeckCard extends DeckCardImage, CompanyCard {
	kind: 'company';
	owner: Extract<RoleName, 'middleClass' | 'capitalist' | 'state'> | 'workingClass';
	sourceType?: 'base' | 'public-company' | 'cooperative-farm' | 'expansion' | 'automa';
	setup?: {
		starting?: boolean;
		playerCounts?: Array<2 | 3 | 4>;
		publicSectorRow?: 1 | 2 | 3;
		setupWage?: WageId;
	};
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
	requirements?: CardRequirement[];
	stateEffects: StateEffect[];
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
