import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import * as commentTypes from '../constants/comments';
import * as commentsServices from '../services/comments';

function* requestComments(action) {
  try {
    const { id } = action;
    yield put({ type: commentTypes.GET_POST_COMMENTS_LOADING, isLoading: true });
    const data = yield call(commentsServices.getPostComments, id);
    yield put({ type: commentTypes.GET_POST_COMMENTS_SUCCESS, data });
  } catch (error) {
    yield put({ type: commentTypes.GET_POST_COMMENTS_FAILURE });
  }
}

const watchers = [
  takeEvery(commentTypes.GET_POST_COMMENTS, requestComments),
];

export default watchers;
