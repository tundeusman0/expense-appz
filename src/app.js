import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'react-dates/initialize';
import AppRouter from "./routers/AppRouters";
import configureStore from "./store/configureStore";
// import AppPortfolio from "./routers/Portfolio"; //for the portfolio test learning
import "normalize.css";
import "./styles/main.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))
