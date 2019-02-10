import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login/Login";
import { login } from "../actions/user";

class LoginContainer extends Component {
  onSubmit = (email, password) => {
    const { login, isLoggedIn } = this.props;

    if (!email || !password) {
      return;
    }

    login(email, password).then(() => {
      isLoggedIn && this.props.history.push("/");
    });
  };

  render() {
    return <Login onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
