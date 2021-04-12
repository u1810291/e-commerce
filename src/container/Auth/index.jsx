import React from 'react';

import { useSelector } from 'react-redux';

import Auth from '../../views/Auth/SignIn';

export default ({ children }) => {
  const token = useSelector(({ authReducer }) => authReducer.token);
  if (!token) {
    return <Auth />;
  }
  return children;
};
