import moment from "moment";


// filter reducer default state
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
// filter Reducer
export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "FILTER_TEXT":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "START_DATE_FILTER":
            return {
                ...state,
                startDate: action.startDate
            };
        case "END_DATE_FILTER":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}