import React from "react";
import { Link } from "react-router-dom"

const ExpenseListItem = ({ description, createdAt, id, amount }) => (
    <div>
        <Link to={`/EditPage/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{ amount } - { createdAt }</p>
            
    </div>
);


export default ExpenseListItem;
