import React from "react";

const Portfolios = ({match}) => (
    <div>
        <h1>A thing i have done</h1>
        <p>This is with the id {match.params.id}</p>
    </div>
);

export default Portfolios;