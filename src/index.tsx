import React from "react";
import { render } from "react-dom";
import "./assets/styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./core/redux/store";

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(application, document.getElementById("root"));
