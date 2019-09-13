import {
  GET_POST_COMMENTS_LOADING,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILURE,
} from '../../constants';

const INITIAL_STATE = {
  comments: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        comments: action.data,
      };
    default:
      return state;
  }
};
