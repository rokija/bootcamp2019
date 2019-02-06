import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* 
    TODO: Study 2.

    1. Install react-router-dom, configure Route for home ("/") - displaying App component,
    2. create the Login component, set a route for it ("/login")
*/


/*
    TODO: Task 1.

    1. create Register component (similar to the Login, but it has 3 input fields (username, email, password))
    2. store each value from the input in the state, default state object should have 3 keys - username, email and password.
    3. create a route for the Register component ("/register"), import the component.
*/

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
