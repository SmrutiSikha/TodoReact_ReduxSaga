import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import {store} from "./redux/store";

import TodoApp from "./app";

const App = () => {
    return(
    <Provider store = {store}>
        <TodoApp></TodoApp>
    </Provider>
    );
}

ReactDom.render(<App /> , document.getElementById('root'));