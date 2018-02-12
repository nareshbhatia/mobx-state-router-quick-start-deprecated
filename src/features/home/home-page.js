import React from 'react';
import { inject } from 'mobx-react';

const styles = {
    root: {
        padding: 16
    }
};

class HomePageBase extends React.Component {
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
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo('department', {id: 'electronics'});
    }
}

export const HomePage = inject('rootStore')(HomePageBase);
