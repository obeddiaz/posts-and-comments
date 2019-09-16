import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import postReducer from './postReducer';
import commentReducer from './commentsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  postReducer,
  commentReducer,
  usersReducer,
  form,
});
