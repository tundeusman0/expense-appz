import React from "react";
import {Link} from "react-router-dom";

const Portfolio = () => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the following things I've Done</p>
        <Link to="/Portfolio/1">Item 0ne</Link>
        <Link to="/Portfolio/2">Item two</Link>
    </div>
);

export default Portfolio;