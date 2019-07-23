import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/CreatePage" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/HelpPage" activeClassName="is-active">Help Expense</NavLink>
    </header>
)

export default Header;