import { createStore, combineReducers } from "redux";
import expenseReducer from "./../reducers/expenses";
import filterReducer from "./../reducers/filters";

// create store
export default () => {
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
