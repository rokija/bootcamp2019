import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import dotenv from "dotenv";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
/* docs: https://redux.js.org/api/createstore */

dotenv.config();

/* TODO: Study 1.
  1. install package for Protected Route:
  https://www.npmjs.com/package/react-router-protected-route

  2. a) wrap home route in Protected Route component and display only if token exists in the localStorage
    b) to do that create validateToken function in helpers/index.js file
*/

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
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
