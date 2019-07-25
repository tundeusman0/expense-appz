import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from "./../reducers/expenses";
import filterReducer from "./../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
export default () => {
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter: filterReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}
