import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            password: null,
            username: null,
        }
    }

    onInputChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="Login">
                <form className="Login__form">
                    <h2 className="mb-5">Register</h2>
                    <div className="form-group">
                        <label>username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>password</label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div className="mt-5">
                        <button className="btn btn-primary">
                            register
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;
