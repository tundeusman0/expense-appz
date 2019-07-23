import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./../portfolio/Header";
import Home from "./../portfolio/Home";
import Portfolio from "./../portfolio/Portfolio";
import Portfolios from "./../portfolio/Portfolios";
import Contact from "./../portfolio/Contact";
import NotFound from "./../components/Notfound"

const AppPortfolio = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/portfolio" exact={true} component={Portfolio} />
            <Route path="/portfolio/:id" exact={true} component={Portfolios} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default AppPortfolio