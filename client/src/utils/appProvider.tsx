import { proxy } from 'valtio/vanilla';

interface AppProviderState {
	theme: 'dark' | 'light';
}

class AppProvider {
	state = proxy<AppProviderState>({
		theme: 'light',
	});

	update(diff: Partial<AppProviderState>) {
		Object.assign(this.state, diff);
	}
}

const appProvider = new AppProvider();

export default appProvider;
