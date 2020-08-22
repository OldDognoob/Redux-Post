import React from "react";
import ReactDom from "react-dom";

import {Provider} from "react-redux";
import Reducer from "./reducers/reducer";

import {createStore} from "redux";
import App from "./components/App";
import "./styles.css";

//STEP 5 Use createStore from REDUX to create a state store
const store = createStore(Reducer);
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDom.render(
  //STEP 6 wrap the application with a Provider from React-Redux
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);