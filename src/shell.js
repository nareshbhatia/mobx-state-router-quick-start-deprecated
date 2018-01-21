import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import { DepartmentPage } from './features/department/department-page';
import { HomePage } from './features/home/home-page';
import { NotFoundPage } from './features/not-found-page';

const viewMap = {
    department: <DepartmentPage />,
    home: <HomePage />,
    notFound: <NotFoundPage />
};

class ShellBase extends React.Component {
    render() {
        const { rootStore: { routerStore } } = this.props;

        return (
            <div>
                <RouterView routerStore={routerStore} viewMap={viewMap} />
            </div>
        );
    }
}

export const Shell = inject('rootStore')(ShellBase);
