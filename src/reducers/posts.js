import {
  SUBMIT_POST_ERROR,
  SUBMIT_POST_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from "../constants";

const initialState = {
  isSubmitted: false,
  posts: []
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_POST_SUCCESS:
      return { ...state, isSubmitted: action.isSubmitted };
    case SUBMIT_POST_ERROR:
      return { ...state, isSubmitted: false };
    case LOAD_POSTS_SUCCESS:
      return { ...state, posts: action.data };
    case LOAD_POSTS_ERROR:
      return { ...state, posts: [] };
    default:
      return state;
  }
};
