import * as types from '../../constants/users';

const INITIAL_STATE = {
  users: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return INITIAL_STATE;
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
      };
    case types.GET_USERS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case types.GET_USERS_FAILURE:
      return {
        ...state,
        message: action.message,
        messageType: 'danger',
      };
    default:
      return state;
  }
};
