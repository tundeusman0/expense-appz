import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch} from 'react-router-dom';
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import NotFound from "../components/Notfound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/Dashboard" component={Dashboard} />
                <PrivateRoute path="/Create" component={AddPage} />
                <PrivateRoute path="/Edit/:id" component={EditPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter
