import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expenseReducer from "./../reducers/expenses";
import filterReducer from "./../reducers/filters";
import authReducer from "./../reducers/auth"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
export default () => {
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filter: filterReducer,
            auth: authReducer 
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}
