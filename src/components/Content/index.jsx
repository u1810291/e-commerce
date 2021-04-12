/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content } from './style';
import studentChildRoutes from '../../routes/sidebar-routes';
import adminChildRoutes from '../../routes/admin-routes';
import teacherChildRoutes from '../../routes/teacher-routes';
import { FIVEPLUSADMIN, STUDENT, TEACHER } from '../../constants/roles';
import Navbar from '../Navbar';

export default () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const childRoutes = userInfo.role === FIVEPLUSADMIN
    ? adminChildRoutes : userInfo.role === STUDENT
      ? studentChildRoutes : userInfo.role === TEACHER
        ? teacherChildRoutes : null;
  return (
    <Container>
      <Navbar />
      <Content>
        {childRoutes
          ? childRoutes.map(({
            path, component, children, props
          }, index) => (children.length ? (
            <div key={`${index + 1}`}>
              {children.map((child, childIndex) => (
                <Route
                  key={`${childIndex + 1}`}
                  exact={child.exact}
                  path={`${path}${child.path}${child.params || ''}`}
                  component={child.component}
                  props={props}
                />
              ))}
              {children.filter(({ hidden }) => !hidden).length ? (
                <Route exact path={path}>
                  <Redirect to={`${path}${children[0].path}`} />
                </Route>
              ) : (
                <Route exact key={`${index + 1}`} path={path} component={component} />
              )}
            </div>
          ) : (
            <Route key={`${index + 1}`} path={path} component={component} />
          ))) : ''}
        <Redirect from="*" to="/profile" />
      </Content>
    </Container>
  );
};
