import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import commentsSaga from './commentsSaga';
import usersSaga from './usersSaga';

export default function* rootSaga() {
  yield all([
    ...postSaga,
    ...commentsSaga,
    ...usersSaga,
  ]);
}
