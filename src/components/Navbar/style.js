import styled, { css } from 'styled-components';
import { ReactComponent as NotificationIcon } from '../../assets/icons/navbar-notification.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/navbar-chat.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { device } from '../../utils/responsive';

const fixedNav = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const sharedContainer = css`
  height: var(--navbar-height);
  width: 100%;
  background: white;
  border-bottom: 1px solid #ebebf3;
  display: flex;
  align-items: center;
  z-index: 5;
  @media ${device.mobile} {
    ${fixedNav}
  }
  @media ${device.tablet} {
    ${fixedNav}
  }
`;

export const Container = styled.div`
  ${sharedContainer};
  justify-content: flex-end;
`;

export const MContainer = styled.div`
  ${sharedContainer};
  justify-content: space-between;
`;

export const Content = styled.div`
  margin: 0 0;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 10px;
  margin-right: 10px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${({ primary }) => (primary ? '#7E8299' : '#B5B5C3')};
`;

export const ChatButton = styled(ChatIcon)``;
export const NotificationButton = styled(NotificationIcon)``;
export const MenuButton = styled(MenuIcon)`
  margin-right: 10px;
  cursor: pointer;
`;
