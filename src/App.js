import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from './shared/stores/root.store';
import { history } from './shared/utils/history';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
    render() {
        return (
            <Provider rootStore={rootStore}>
                <Shell />
            </Provider>
        );
    }
}

export default App;
