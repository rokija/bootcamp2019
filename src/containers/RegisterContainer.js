import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Register from "../components/Register/Register";
import { register } from "../actions/user";

class RegisterContainer extends Component {
  onSubmit = (email, username, password) => {
    const { register } = this.props;

    if (!email || !password || !username) {
      return;
    }

    register(email, username, password);
  };

  render() {
    const { isRegistered } = this.props;
    return isRegistered ? (
      <Redirect to="/login" />
    ) : (
      <Register onSubmit={this.onSubmit} />
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registerReducer.isRegistered
  };
};

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
