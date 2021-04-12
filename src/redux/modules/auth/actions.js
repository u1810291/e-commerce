import types from '../../../constants/action-types';

export const setToken = (payload) => ({ type: types.AUTH_SET_ACCESS_TOKEN, payload });
export const logout = () => ({ type: types.AUTH_LOGOUT });
export const setError = () => ({ type: types.AUTH_ERROR });

export const verify = (payload) => ({ type: types.AUTH_VERIFY, payload });
export const login = (payload, success) => ({ type: types.AUTH_LOGIN, payload, success });

export const regStudent = (payload, success) => ({
  type: types.AUTH_REGISTER,
  payload,
  success
});
