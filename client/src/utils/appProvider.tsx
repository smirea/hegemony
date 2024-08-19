import { observable, action } from 'mobx';

interface AppProviderState {
    theme: 'dark' | 'light';
}

class AppProvider {
    @observable accessor state: AppProviderState = {
        theme: 'light',
    };

    @action update(diff: Partial<AppProviderState>) {
        Object.assign(this.state, diff);
    }
}

const appProvider = new AppProvider();

export default appProvider;
