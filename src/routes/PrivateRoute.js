import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const PrivateRoute = (props) => {
    const user = useUser();

    if (!user) {
        return <Redirect to="/sign-in" />;
    }
    return <Route {...props} />;
};
export default PrivateRoute;
