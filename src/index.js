import React from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import App from "./components/App";
import { getPhoto } from "./actions/Action_Unsplash";
getPhoto()
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
