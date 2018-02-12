import React from 'react';
import { inject } from 'mobx-react';

const styles = {
    root: {
        padding: 16
    }
};

class DepartmentPageBase extends React.Component {
    render() {
        const { rootStore: { routerStore } } = this.props;
        const { routerState: { params } } = routerStore;

        return (
            <div style={styles.root}>
                <h1>Welcome to {params.id}</h1>
                <button onClick={this.handleClick}>
                    Go Home!
                </button>
            </div>
        );
    }

    handleClick = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo('home');
    }
}

export const DepartmentPage = inject('rootStore')(DepartmentPageBase);
