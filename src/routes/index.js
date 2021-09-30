import {
    Switch,
    Route
} from 'react-router-dom';

import {
    Landing,
    SignIn,
    Dashboard
} from '../pages';

function Routes() {
    return(
        <Switch>
            <Route path="/sign-in">
                <SignIn />
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