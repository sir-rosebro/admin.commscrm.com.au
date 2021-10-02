import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import {
    Landing,
    SignIn,
    Dashboard,
    ForgotPassword,
    ResetPassword
} from '../pages';

function Routes() {
    return(
        <Switch>
            <Route path="/sign-in">
                <SignIn />
            </Route>

            <Route path="/forgot-password">
                <ForgotPassword />
            </Route>

            <Route path="/reset-password">
                <ResetPassword />
            </Route>
            
            <Route path="/dashboard">
                <Dashboard/>
            </Route>

            <Route path="/">
                <Landing />
            </Route>
            
        </Switch>
    );
}
export default Routes;