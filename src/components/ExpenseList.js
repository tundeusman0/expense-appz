import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "./../selectors/expenses"

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(expense=>(<ExpenseListItem key={expense.description} {...expense} />))}
    </div>
);

const mapStateToProps = (state) =>(
    {
        expenses: selectedExpenses(state.expense,state.filter)  
    }
);
export default connect(mapStateToProps)(ExpenseList)