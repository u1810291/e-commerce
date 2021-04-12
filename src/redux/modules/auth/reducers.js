/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  token: sessionStorage.getItem('token')
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    sessionStorage.removeItem('token');
    return {
      ...state, token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({
    ...state,
    error:
    payload
  }),
  [types.AUTH_SET_TOKEN]: (state, { payload }) => {
    sessionStorage.setItem('token', payload);
    return {
      ...state, token: payload
    };
  }
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
