import moment from "moment";
import expensesReducers from "./../../reducers/expenses";
import expenses from "./../fixtures/expenses";

test(" should setup default values", () => {
    const state = expensesReducers(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test(" should remove expenses if id is found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test(" should not remove expenses if id is found ", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 344
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test(" should add an expenses ", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        expense: {
            id: 4,
            description: "What is this",
            note: "testing testing",
            amount: 67467,
            createdAt: 0
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state.length).toBe(3);
});

test(" should edit an expenses ", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[2].id,
        updates:{
            description: "What is this"
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state[2].description).toBe(action.updates.description);
});

test(" should not edit expenses if not found ", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: 1234,
        updates: {
            description: "What is this"
        }
    }
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});