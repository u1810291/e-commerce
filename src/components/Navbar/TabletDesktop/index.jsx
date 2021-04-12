import React, { useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Container,
  UserInfoContainer,
  PopupContainer,
  DropdownContainer,
  Item,
  Text,
  Header,
  ButtonContainer,
  BellContainer,
  TextContainer
} from './style';
import { Image, Content } from '../style';
import Bell from '../../Bell';
import { logout } from '../../../redux/modules/auth/actions';
import { ClickOutside } from '../../../hooks/click-outside';
import Icon from '../../Icon';
import Avatar from '../../../assets/images/avatar-2.jpg';
import Dropdown from '../../Forms/Dropdowns';
import { language } from './options';
import SearchableInput from '../../Forms/Inputs/Search';
import PrimaryButton from '../../Buttons/Primary';

export default () => {
  const clickRef = useRef(null);

  const [commonDropdown, setCommonDropdown] = useState(undefined);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = (type) => {
    switch (type) {
    case 'profile':
      setIsOpen(false);
      history.push('/profile');
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
      <Header>
        <SearchableInput placeholder="Search here..." size="small" />
      </Header>
      <Content>
        <ButtonContainer>
          <PrimaryButton
            block="block"
            title="Technical support"
            size="small"
            color="#E8523F"
            icon="support"
          />
        </ButtonContainer>
        <ButtonContainer>
          <PrimaryButton block="block" title="Chat" size="small" color="#333366" icon="chat" />
        </ButtonContainer>
        <BellContainer>
          <Bell Component={<Icon icon="notification_on" />} margin="0 18px" value="1" />
        </BellContainer>
        <PopupContainer>
          <UserInfoContainer>
            <Image
              ref={clickRef}
              src={Avatar}
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
            <ClickOutside
              outClickRef={clickRef}
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
            <TextContainer>
              <TextContainer.Name>Isaac Williams</TextContainer.Name>
              <TextContainer.Email>kinanthayani@mail.com</TextContainer.Email>
            </TextContainer>

            {/* eslint-disable-next-line global-require */}

            <Dropdown
              placeholder="RU"
              options={language}
              value={commonDropdown}
              onChange={setCommonDropdown}
              size="medium"
            />
          </UserInfoContainer>

        </PopupContainer>
      </Content>
    </Container>
  );
};
