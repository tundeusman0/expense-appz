import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from "../components/Dashboard";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/Notfound";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/CreatePage" component={AddPage} />
                <Route path="/EditPage/:id" component={EditPage} />
                <Route path="/HelpPage" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter
