import { put } from 'redux-saga/effects';
import { getUsers } from '../api/randomuser';
import * as ACT from '../actions/actionCreators';

export function * getUsersSaga ({ page }) {
  yield put(ACT.getUsersRequest());
  try {
    const {
      data: { results },
    } = yield getUsers(page);
    yield put(ACT.getUsersSuccess(results));
  } catch (error) {
    yield put(ACT.getUsersError(error));
  }
}
