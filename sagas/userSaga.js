import { put, takeEvery } from 'redux-saga/effects';
import getUser from '../api';

function* fetchUser (action) {
  try {
    const user = yield getUser();

    yield put({ type: 'FETCHING_USER_SUCCESS', user });
  } catch (error) {
    yield put({ type: 'FETCHING_USER_FAILURE', errorMessage: error.message });
  }
};

function* userSaga () {
  yield takeEvery('FETCHING_USER', fetchUser);
};

export default userSaga;