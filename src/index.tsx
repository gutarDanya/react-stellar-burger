import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { rootReducer } from "./services/reducers/indexReducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./services/reducers/indexReducer";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router >
      <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
