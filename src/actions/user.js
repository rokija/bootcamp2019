import axios from "axios";
import sha256 from "sha256";
import {
  API,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../constants";

/* ------ middleware returning actions ------ */
const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS, // type is required for an action
    isRegistered: true // payload
  };
};

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    isRegistered: false
  };
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    isLogged: true
  };
};

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    isLogged: false
  };
};

/* ------- action creators ------- */
export const register = (email, username, password) => {
  return dispatch => {
    /* dispatch function from redux library */
    return axios
      .post(`${API.BASE}${API.REGISTER}`, {
        email,
        username,
        hashedPassword: sha256(password)
      })
      .then(() => {
        dispatch(registerSuccess()); /* dispatch an action to the reducer */
      })
      .catch(err => {
        console.log("err", err);
        dispatch(registerError());
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    return axios
      .post(`${API.BASE}${API.LOGIN}`, {
        email,
        hashedPassword: sha256(password)
      })
      .then(res => {
        const { token } = res.data.payload;
        localStorage.setItem("jwtToken", token);
        dispatch(loginSuccess());
      })
      .catch(err => {
        console.log("err", err);
        dispatch(loginError());
      });
  };
};
