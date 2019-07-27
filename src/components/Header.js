import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/CreatePage" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/HelpPage" activeClassName="is-active">Help Expense</NavLink>
        <button onClick={ startLogout }>log out</button>
    </header>
);

const mapDispatchToProps = (dispatch) =>({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined,mapDispatchToProps)(Header);