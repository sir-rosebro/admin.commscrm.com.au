import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useToken } from '../hooks/useToken';

const AuthRoute = (props) => {
    const [token] = useToken();
    if (token) {
        return <Redirect to="/dashboard" />;
    }
    return <Route {...props} />;
};
export default AuthRoute;
