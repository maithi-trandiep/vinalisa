import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import cartReducer from './reducers/cartReducer';
import history from './history';

const store = createStore(cartReducer);

ReactDOM.render((
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
