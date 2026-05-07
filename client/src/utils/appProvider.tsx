import { action, makeObservable, observable } from 'mobx';

interface AppProviderState {
	theme: 'dark' | 'light';
}

class AppProvider {
	state: AppProviderState = {
		theme: 'light',
	};

	constructor() {
		makeObservable(this, {
			state: observable,
			update: action,
		});
	}

	update(diff: Partial<AppProviderState>) {
		Object.assign(this.state, diff);
	}
}

const appProvider = new AppProvider();

export default appProvider;
