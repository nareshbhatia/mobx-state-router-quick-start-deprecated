import React from 'react';
import { inject } from 'mobx-react';

const styles = {
    root: {
        padding: 16
    }
};

export const HomePage = inject('rootStore')(
    class extends React.Component {
        render() {
            return (
                <div style={styles.root}>
                    <h1>Home</h1>
                    <button onClick={this.handleClick}>
                        Go to Electronics
                    </button>
                </div>
            );
        }

        handleClick = () => {
            const { rootStore } = this.props;
            rootStore.routerStore.goTo('department', { id: 'electronics' });
        };
    }
);
