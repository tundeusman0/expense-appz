import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, filterByStartDate, filterByEndDate } from "./../actions/filters";

class ExpenseListFilters extends React.Component{
    state = {
        focusedInput: undefined
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(filterByStartDate(startDate))
        this.props.dispatch(filterByEndDate(endDate))
    }
    onFocusChange = focusedInput => this.setState({ focusedInput });
    startDateId = () => uuid()
    endDateId = () => uuid()

    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }} />
                <select onChange={(e) => {
                    if (e.target.value === "amount") {
                        this.props.dispatch(sortByAmount(e.target.value))
                    } else if (e.target.value === "date") {
                        this.props.dispatch(sortByDate(e.target.value))
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId={this.startDateId()} // PropTypes.string.isRequired,
                    endDateId={this.endDateId()} // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        filters: state.filter
    }
);

export default connect(mapStateToProps)(ExpenseListFilters);