import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import "./../selectors/numerals";

const ExpenseListItem = ({ description, createdAt, id, amount }) => (
    <div>
        <Link to={`/EditPage/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00') } 
            - 
            { moment(createdAt).format("MMMM Do, YYYY") }
        </p>
            
    </div>
);


export default ExpenseListItem;
