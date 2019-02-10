import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import dotenv from "dotenv";
import ProtectedRoute from "react-router-protected-route";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
/* docs: https://redux.js.org/api/createstore */

dotenv.config();

// TODO: Fix this
const validateToken = () => {
  const token = localStorage.getItem("Token");

  if (!token) {
    return false;
  }

  return true;
};

const isTokenValid = validateToken();

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <ProtectedRoute
          isAccessible={isTokenValid}
          redirectToPath="/login"
          exact
          path="/"
          component={AppContainer}
        />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
