import React, { Component } from "react";
import "./Register.css";

/*
    TODO: Study 1.

    using Link element from react-router-dom library add button to redirect to the Login page.
*/

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: null,
      password: null,
      username: null
    };
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = e => {
    e.preventDefault();

    const { email, username, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit(email, username, password);
  };

  render() {
    return (
      <div className="Register">
        <form className="Register__form">
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
            <button onClick={this.onClick} className="btn btn-dark">
              register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
