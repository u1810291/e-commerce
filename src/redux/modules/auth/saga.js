/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';
import { studentSelector } from './selectors';

import {
  setToken, setError
} from './actions';

function* login({ payload, success }) {
  try {
    const { data } = yield service.getToken(payload);
    success(data.access_token, data.refresh_token);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* validate({ payload }) {
  try {
    // Handle token verify logic here
    yield put(setToken(payload.token));
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}

function* register({ payload, success }) {
  try {
    const { data } = studentSelector(payload);
    const res = yield service.registerStudent(data);
    success(res.data);
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error.response ? error.response.data.error_message : error);
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, validate);
  yield takeLatest(types.AUTH_REGISTER, register);
}
