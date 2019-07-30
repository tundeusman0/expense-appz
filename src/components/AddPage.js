import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux"
import { startAddExpense } from "./../actions/expenses";


const AddPage = ({dispatch, history}) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm onFormSubmit={({description,amount,note,createdAt})=>{
                dispatch(startAddExpense({
                    description, amount, note, createdAt
                }) )
                history.push("/")
            }} />
        </div>
    </div>
);

export default connect()(AddPage);