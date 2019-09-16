import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import * as types from '../constants/users';
import * as userervices from '../services/users';
import { arrayToObject } from '../utils/utilFunctions';

function* requestUsers() {
  try {
    yield put({ type: types.GET_USERS_LOADING, isLoading: true });
    const data = yield call(userervices.getUsers);
    yield put({ type: types.GET_USERS_SUCCESS, data: arrayToObject(data) });
  } catch (error) {
    yield put({ type: types.GET_USERS_FAILURE });
  }
}

const watchers = [
  takeEvery(types.GET_USERS, requestUsers),
];

export default watchers;
