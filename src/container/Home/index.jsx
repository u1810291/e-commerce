/* eslint-disable camelcase */
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import Notification from '../../components/Notification';
import notifications from '../../data/notifications';
import { notifyMultiple } from '../../redux/modules/notifications/actions';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notifyMultiple(notifications));
  }, [dispatch]);

  return (
    <Container>
      <Sidebar />
      <Content />
      <Notification />
    </Container>
  );
};
