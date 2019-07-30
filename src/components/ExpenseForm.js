import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component{
    state= {
        description: this.props.expense?this.props.expense.description:"",
        note: this.props.expense?this.props.expense.note:"",
        amount: this.props.expense?(this.props.expense.amount / 100).toString():"",
        focused: false,
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        error:undefined
    }
    onDescriptionChange = e =>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    }
    onNoteChange = e =>{
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = e =>{
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = createdAt =>{
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({ focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        const description = this.state.description;
        const amount = this.state.amount;
        const note = this.state.note;
        if ( !description || !amount){
            this.setState(() => ({ error: "Please provide Description and amount" }))
        } else {
            this.setState(() => ({ error: "" }))
            this.props.onFormSubmit({
                description,
                amount: parseFloat(amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note
            })
        }
        
    }
    render(){
        return(
            <div>
                {this.state.error && <p className="form__error">{this.state.error}</p>  }
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        autoFocus
                        placeholder="Description"
                        className="text-input"
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        value={this.state.amount}
                        onChange={this.onAmountChange} 
                        placeholder="Amount"
                        className="text-input"
                        type="number"
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea
                        value={this.state.note}
                        className="textarea" 
                        onChange={this.onNoteChange} 
                        placeholder="Add a note for your Expense"
                    ></textarea>
                    <button className="button">Add Expense</button>
                </form>
            </div>
        );
    }
};

export default ExpenseForm