// set text filter
export const setTextFilter = (text = "") => ({
    type: "FILTER_TEXT",
    text
});

// sort By Date
export const sortByDate = (sortBy) => ({
    type: "SORT_BY_DATE",
    sortBy
});

// sort By Amount
export const sortByAmount = (sortBy) => ({
    type: "SORT_BY_AMOUNT",
    sortBy
});

// filter by start date
export const filterByStartDate = (startDate) => ({
    type: "START_DATE_FILTER",
    startDate
});

// filter by end date
export const filterByEndDate = (endDate) => ({
    type: "END_DATE_FILTER",
    endDate
});