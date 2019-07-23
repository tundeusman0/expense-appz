import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux"
import { addExpense } from "./../actions/expenses";


const AddPage = ({dispatch, history}) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onFormSubmit={({description,amount,note,createdAt})=>{
            dispatch( addExpense({
                description, amount, note, createdAt
            }) )
            history.push("/")
        }} />
    </div>
);

export default connect()(AddPage);