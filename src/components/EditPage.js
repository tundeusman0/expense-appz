import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "./../actions/expenses";

const EditPage = ({match,dispatch,expenses,history}) =>(
    <div>
        {!expenses ? history.push("/") :
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                        <Link className="button button--secondary" to="/">Back to DashBoard</Link>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={expenses}
                        onFormSubmit={(expenses) => {
                            dispatch(startEditExpense(match.params.id, expenses))
                            history.push("/")
                        }} />
                    <button
                        className="button button--secondary"
                        onClick={() => {
                        dispatch(startRemoveExpense(match.params.id));
                        history.push("/")
                    }}>Remove</button>
                </div>
            </div>
        }
    </div>
);

const mapStateToProps = (state,props) => (
    {
        expenses: state.expense.find(expense=>expense.id === props.match.params.id)
    }
)
export default connect(mapStateToProps)(EditPage)