import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: null,
      password: null
    };
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit(email, password);
  };

  render() {
    return (
      <div className="Login">
        <form className="Login__form">
          <h2 className="mb-5">Login</h2>
          <div className="form-group">
            <label>email</label>
            <input
              required
              type="email"
              name="email"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>

          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={this.onInputChange}
            />
          </div>

          <div className="mt-5">
            <button className="btn btn-dark" onClick={this.onClick}>
              login
            </button>
          </div>
          <div className="mt-5">
            <Link to="/register">register here</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
