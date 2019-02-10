import BootcampAPI from "../helpers/API";
import {
  API,
  SUBMIT_POST_ERROR,
  SUBMIT_POST_SUCCESS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from "../constants";

const submitSuccess = () => {
  return {
    type: SUBMIT_POST_SUCCESS,
    isSubmitted: true
  };
};

const submitError = () => {
  return {
    type: SUBMIT_POST_ERROR,
    isSubmitted: false
  };
};

const loadPostsSuccess = data => {
  return {
    type: LOAD_POSTS_SUCCESS,
    data
  };
};

const loadPostsError = () => {
  return {
    type: LOAD_POSTS_ERROR
  };
};

export const submitPost = (formData, caption) => {
  return dispatch => {
    return BootcampAPI.post(API.POST_IMAGE, formData)
      .then(res => {
        return BootcampAPI.post(API.POST_CAPTION, {
          contentId: res.data.payload.contentId,
          caption
        }).then(() => dispatch(submitSuccess()));
      })
      .catch(err => {
        dispatch(submitError());
        throw err;
      });
  };
};

export const getPosts = () => {
  return dispatch => {
    return BootcampAPI.get(API.GET_POSTS)
      .then(res =>
        dispatch(loadPostsSuccess({ list: res.data.payload.reverse() }))
      )
      .catch(err => {
        dispatch(loadPostsError());
        throw err;
      });
  };
};
