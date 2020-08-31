import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
//redux is used as central store
// however as contex Api is also used just to keep counts of Like for a post
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
