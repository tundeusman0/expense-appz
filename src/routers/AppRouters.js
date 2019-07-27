import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch} from 'react-router-dom';
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/Notfound";
import Header from "../components/Header";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={ history }>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/Dashboard" component={Dashboard} />
                <PrivateRoute path="/CreatePage" component={AddPage} />
                <PrivateRoute path="/EditPage/:id" component={EditPage} />
                <Route path="/HelpPage" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter
