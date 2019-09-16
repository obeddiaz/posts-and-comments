import * as types from '../../constants/comments';

const INITIAL_STATE = {
  comments: [],
  isLoading: false,
  showAlert: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_POST_COMMENTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        comments: action.data,
      };
    case types.SAVE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.comment],
        message: action.message,
        messageType: 'success',
      };
    case types.SAVE_POST_COMMENT_LOADING:
    case types.GET_POST_COMMENTS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.SAVE_POST_COMMENT_FAILURE:
    case types.GET_POST_COMMENTS_FAILURE:
      return {
        ...state,
        message: action.message,
        messageType: 'danger',
      };
    default:
      return state;
  }
};
