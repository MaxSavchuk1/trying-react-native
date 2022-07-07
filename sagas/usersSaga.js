import { put } from 'redux-saga/effects';
import { getUsers } from '../api/randomuser';
import * as ACT from '../actions/actionCreators';

export function * getUsersSaga ({ page }) {
  yield put(ACT.getUsersRequest());
  try {
    const { data } = yield getUsers(page);
    yield put(ACT.getUsersSuccess(data));
  } catch (error) {
    yield put(ACT.getUsersError(error));
  }
}
