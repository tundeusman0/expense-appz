import moment from "moment";
import filterReducers from "./../../reducers/filters";

 test(" should setup default values", ()=>{
     const state = filterReducers(undefined,{type: "@@INIT"});
     expect(state).toEqual({
         text: "",
         sortBy: "date",
         startDate: moment().startOf('month'),
         endDate: moment().endOf('month')
     });
 });

test(" should set sortBy by date ", () => {
    const sortBy = "date"
    const action = {
        type: "SORT_BY_AMOUNT",
        sortBy
    }
    
    const state = filterReducers(undefined, action);
    expect(state.sortBy).toBe("date")
});


test(" should set sortBy by amount ", () => {
    const sortBy = "amount"
    const action = {
        type: "SORT_BY_AMOUNT",
        sortBy
    }
    const state = filterReducers(undefined, action);
    expect(state.sortBy).toBe(sortBy)
});

test(" should set text filter ", () => {
    const text = "filter"
    const action = {
        type: "FILTER_TEXT",
        text
    }
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text)
});

test(" should set startDate filter ", () => {
    const startDate = moment().startOf('month')
    const action = {
        type: "START_DATE_FILTER",
        startDate
    }
    const state = filterReducers(undefined, action);
    expect(state.startDate).toBe(startDate)
});

test(" should set endDate filter ", () => {
    const endDate = moment().endOf('month')
    const action = {
        type: "END_DATE_FILTER",
        endDate
    }
    const state = filterReducers(undefined, action);
    expect(state.endDate).toBe(endDate)
});