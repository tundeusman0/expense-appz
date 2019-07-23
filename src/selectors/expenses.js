import moment from "moment";
// filter search function
export default (expense, { text, sortBy, startDate, endDate }) => {
    return expense.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const filteredExpenseStartDate =
            startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const filteredExpenseEndDate =
            endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const filteredExpenseText =
            expense.description.toLowerCase().includes(text.toLowerCase());
        return filteredExpenseStartDate && filteredExpenseEndDate && filteredExpenseText;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt > b.createdAt ? -1 : 1
        } else if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1
        }
    })
}