import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../constants";

const defaultState = {
  isLoggedIn: false,
  isRegistered: false
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: action.isLoggedIn };
    case LOGIN_ERROR:
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};

export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: action.isRegistered };
    case REGISTER_ERROR:
      return { ...state, isRegistered: action.isRegistered };
    default:
      return state;
  }
};
