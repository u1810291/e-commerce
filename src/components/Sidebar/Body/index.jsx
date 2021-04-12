/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Container, Space, Text
} from './style';
import Item from '../Item';
import studentChildRoutes from '../../../routes/sidebar-routes';
import adminChildRoutes from '../../../routes/admin-routes';
import teacherChildRoutes from '../../../routes/teacher-routes';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../../constants/roles';

const SidebarBody = ({ collapsed, childRoutes }) => (
  <Container>
    <Space>
      <Text>Menu</Text>
    </Space>
    {childRoutes
      ? childRoutes.map(
        ({
          title, icon, path, children, except
        }, index) => ((!except) ? (
          <Item
            key={`${index + 1}`}
            title={title}
            icon={icon}
            path={path}
            collapsed={collapsed}
            elements={children}
          />
        ) : null)
      ) : ''}
  </Container>
);
SidebarBody.propTypes = {
  collapsed: PropTypes.bool
};

SidebarBody.defaultProps = {
  collapsed: false
};
export default ({ collapsed }) => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const childRoutes = userInfo.role === FIVEPLUSADMIN
    ? adminChildRoutes : userInfo.role === STUDENT
      ? studentChildRoutes : userInfo.role === TEACHER
        ? teacherChildRoutes : null;
  return <SidebarBody collapsed={collapsed} childRoutes={childRoutes} />;
};
