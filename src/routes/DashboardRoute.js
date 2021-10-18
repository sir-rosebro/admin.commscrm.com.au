import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PrivateRoute from './PrivateRoute';
import PageLoader from "../components/pageLoader";

const Customer = lazy( () => 
    import("../pages/dashboard/customer")
);

const Profile = lazy( () => 
    import("../pages/profile")
);

const NotFound = lazy( () => 
    import("../pages/notFound")
);

const DashboardRoute = () => {
    const location = useLocation();
    return (
        <Suspense fallback={<PageLoader/>}>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>

                    <PrivateRoute path="/dashboard" exact >
                        <Customer/>
                    </PrivateRoute>
                    
                    <PrivateRoute path="/dashboard/profile" exact>
                        <Profile/>
                    </PrivateRoute>
                    <Route
                        path="*"
                        component={NotFound}
                        render={() => <Redirect to="/notfound" />}
                    />  
                </Switch>   
            </AnimatePresence>
        </Suspense>
    );
}
export default DashboardRoute;