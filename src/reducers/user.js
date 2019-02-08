import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from "../constants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.isRegistered };
    case LOGIN_ERROR:
      return { ...state, ...action.isRegistered };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, ...action.isLogged };
    case REGISTER_ERROR:
      return { ...state, ...action.isLogged };
    default:
      return state;
  }
};
