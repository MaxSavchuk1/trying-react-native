import { takeLatest } from 'redux-saga/effects';
import { getUsersSaga } from './usersSaga';
import ACTION_TYPES from '../actions/actionTypes';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga);
}

export default rootSaga;
