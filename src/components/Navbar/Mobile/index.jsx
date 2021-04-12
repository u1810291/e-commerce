import React, { useState, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Container, DropdownContainer } from './style';
import {
  Image, Title, ChatButton, MenuButton, NotificationButton, Content
} from '../style';
import Bell from '../../Bell';
import { expand } from '../../../redux/modules/sidebar/actions';
import { ClickOutside } from '../../../hooks';
import { logout } from '../../../redux/modules/auth/actions';

import { UserInfoContainer, Item, Text } from '../TabletDesktop/style';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const refClick = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (type) => {
    switch (type) {
    case 'profile':
      setIsOpen(false);
      history.push('/users/all-users/1/users-basic-info');
      break;
    case 'logout':
      setIsOpen(false);
      dispatch(logout());
      break;
    default:
      break;
    }
  };
  return (
    <Container>
      <Content>
        <UserInfoContainer>
          <Image
            ref={refClick}
            // eslint-disable-next-line global-require
            src={require('../../../assets/images/avatar-2.jpg')}
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
          <Title>
            Hi,
            {' '}
            <Title primary>Mirsaid</Title>
          </Title>
        </UserInfoContainer>

        <ClickOutside
          outClickRef={refClick}
          outsideClicked={() => {
            setIsOpen(false);
          }}
        >
          <DropdownContainer isOpen={isOpen}>
            <Item onClick={() => handleOnClick('profile')}>
              <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Profile</Text>
            </Item>
            <Item onClick={() => handleOnClick('logout')}>
              <Text className={classNames('caption', 'weight-semibold', 'text-black-800')}>Log out</Text>
            </Item>
          </DropdownContainer>
        </ClickOutside>
      </Content>

      <Content>
        <ChatButton />
        <Bell Component={<NotificationButton />} margin="0 20px" value="4" />
        <MenuButton onClick={() => dispatch(expand())} />
      </Content>
    </Container>
  );
};
