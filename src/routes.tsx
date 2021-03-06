import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
        </Switch>
    )
}

export default Routes