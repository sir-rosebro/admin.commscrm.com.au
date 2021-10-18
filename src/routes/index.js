import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import {
    Landing,
    SignIn,
    Profile,
    ForgotPassword,
    ResetPassword,
    Test,
    Dashboard,
    Customer
} from '../pages';

import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

function Routes() {
    return(
        <Switch>
            <AuthRoute path="/sign-in">
                <SignIn />
            </AuthRoute>

            <AuthRoute path="/forgot-password">
                <ForgotPassword/>
            </AuthRoute>

            <AuthRoute path="/reset-password">
                <ResetPassword/>
            </AuthRoute>

            <PrivateRoute exact path="/dashboard">
                <Dashboard/>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/customer">
                <Customer/>
            </PrivateRoute>

            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>

            <PrivateRoute path="/test">
                <Test />
            </PrivateRoute>

            <Route path="/">
                <Landing/>
            </Route>
            
        </Switch>
    );
}
export default Routes;