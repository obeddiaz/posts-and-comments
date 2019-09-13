import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import postReducer from './postReducer';
import commentReducer from './commentsReducer';

export default combineReducers({
  postReducer,
  commentReducer,
  form,
});
