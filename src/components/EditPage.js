import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "./../actions/expenses";

const EditPage = ({match,dispatch,expenses,history}) =>(
    <div>
        {!expenses ? history.push("/") :
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={expenses}
                    onFormSubmit={(expenses) => {
                        dispatch(editExpense(match.params.id, expenses))
                        history.push("/")
                    }} />
                <button onClick={() => {
                    dispatch(removeExpense(match.params.id));
                    history.push("/")
                }}>Remove</button>
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