import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Header,
  TitleContainer,
  CollapseButton,
  ExpandButton
} from './style';
import { useWindowSize } from '../../../hooks/use-window-size';
import * as devices from '../../../constants/devices';
import { ReactComponent as Logo } from '../../../assets/icons/logo3.svg';

const SidebarHeader = ({ collapsed, handleExpand, handleCollapse }) => {
  const history = useHistory();
  const { device } = useWindowSize();
  const mobile = (
    <Header>
      <TitleContainer>
        <Logo className="pointer" onClick={() => { history.push('/profile'); }} />
        <ExpandButton onClick={handleCollapse} />
      </TitleContainer>
    </Header>
  );
  const tabletDesktop = (
    <Header collapsed={collapsed}>
      <TitleContainer collapsed={collapsed}>
        { !collapsed && <Logo className="pointer" onClick={() => { history.push('/profile'); }} />}
        { collapsed
          ? <ExpandButton onClick={handleExpand} />
          : <CollapseButton onClick={handleCollapse} />}
      </TitleContainer>
    </Header>
  );
  if (device === devices.MOBILE) return mobile;
  if (device === devices.TABLET) return tabletDesktop;
  if (device === devices.NOTEBOOK) return tabletDesktop;
  if (device === devices.DESKTOP) return tabletDesktop;
  return <></>;
};

SidebarHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  handleExpand: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired
};

export default SidebarHeader;
