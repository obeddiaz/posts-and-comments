import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import * as postTypes from '../constants/posts';
import * as postServices from '../services/posts';

function* requestPosts() {
  try {
    yield put({ type: postTypes.GET_POSTS_LOADING, isLoading: true });
    const data = yield call(postServices.getPosts);
    yield put({ type: postTypes.GET_POSTS_SUCCESS, data });
  } catch (error) {
    yield put({ type: postTypes.GET_POSTS_FAILURE });
  }
}

const watchers = [
  takeEvery(postTypes.GET_POSTS, requestPosts),
];

export default watchers;
