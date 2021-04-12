/* eslint-disable camelcase */
import axios, { execute, service } from '.';

export default {
  // TODO Login
  getToken: ({ username, password }) => service.post('/api/v1/login', { username, password }),
  //  TODO Register
  register: (data) => service.post('/api/v1/register/student', data),
  // TODO Confirm
  confirmSMS: ({ code, user }) => service.post(`/api/v1/register/sms/confirm?code=${code}&user=${user}`),
  repeatSMS: ({ user, phone }) => service.post(`/api/v1/register/sms/repeat?user=${user}&phone=${phone}`),
  repeatEmail: ({ user, email }) => service.post(`/api/v1/register/email/repeat?user=${user}&email=${email}`),
  // TODO Deprecated
  sendRestLink: (data) => execute(axios.post('/auth/reset', { data })),
  authVerify: (params) => execute(axios.post('/front-end/auth/verify', { params })),
  changePassword: (data) => execute(axios.post('/auth/changePassword'), { data })
};
