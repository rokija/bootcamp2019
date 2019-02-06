import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            password: null,
        }
    }

    /* 
        TODO: Study 3. 

        create method for updating the state when email and password input changes.
    */

    render() {
        return (
            <div className="Login">
                <form className="Login__form">
                    <h2 className="mb-5">Login</h2>
                    <div className="form-group">
                        <label>email</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>password</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="mt-5">
                        <button className="btn btn-primary">
                            login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
