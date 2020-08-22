import React from "react";
import ReactDom from "react-dom";

import {Provider} from "react-redux";
import Reducer from "./reducers/reducer";

import {createStore} from "redux";
import App from "./components/App";
import "./styles.css";

const store = createStore(Reducer);
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);