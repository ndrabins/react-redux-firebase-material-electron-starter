import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import firebase from "firebase";

import reducers from "./reducers";

var config = {
  apiKey: "AIzaSyDBODwiyli_Rn3WcEBWRc8TMXTEAqatgHQ",
  authDomain: "newapp-6c93a.firebaseapp.com",
  databaseURL: "https://newapp-6c93a.firebaseio.com",
  projectId: "newapp-6c93a",
  storageBucket: "newapp-6c93a.appspot.com",
  messagingSenderId: "253006161914"
};

firebase.initializeApp(config);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
