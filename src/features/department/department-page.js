import React from 'react';
import { inject } from 'mobx-react';

const styles = {
    root: {
        padding: 16
    }
};

export const DepartmentPage = inject('rootStore')(
    class extends React.Component {
        render() {
            const { rootStore } = this.props;
            const { params } = rootStore.routerStore.routerState;

            return (
                <div style={styles.root}>
                    <h1>Welcome to {params.id}</h1>
                    <button onClick={this.handleClick}>Go Home!</button>
                </div>
            );
        }

        handleClick = () => {
            const { rootStore } = this.props;
            rootStore.routerStore.goTo('home');
        };
    }
);
