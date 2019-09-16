import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import * as types from '../constants/posts';
import * as postServices from '../services/posts';

function* requestPosts() {
  try {
    yield put({ type: types.GET_POSTS_LOADING, isLoading: true });
    const data = yield call(postServices.getPosts);
    yield put({ type: types.GET_POSTS_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.GET_POSTS_FAILURE });
  }
  yield put({ type: types.GET_POSTS_LOADING, isLoading: false });
}

function* requestPostById(action) {
  try {
    const { postId } = action;
    yield put({ type: types.GET_POST_BY_ID_LOADING, isLoading: true });
    const data = yield call(postServices.getPostById, postId);
    yield put({ type: types.GET_POST_BY_ID_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.GET_POST_BY_ID_FAILURE });
  }
  yield put({ type: types.GET_POST_BY_ID_LOADING, isLoading: false });
}

const watchers = [
  takeEvery(types.GET_POSTS, requestPosts),
  takeEvery(types.GET_POST_BY_ID, requestPostById),
];

export default watchers;
