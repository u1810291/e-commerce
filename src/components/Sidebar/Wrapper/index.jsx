import React from 'react';
import { DesktopSidebar, TabletSidebar, MobileSidebar } from './style';
import { useWindowSize } from '../../../hooks/use-window-size';
import * as devices from '../../../constants/devices';

export default ({ collapsed, children }) => {
  const { device } = useWindowSize();
  if (device === devices.MOBILE) {
    return <MobileSidebar collapsed={collapsed}>{children}</MobileSidebar>;
  }
  if (device === devices.TABLET) {
    return <TabletSidebar collapsed={collapsed}>{children}</TabletSidebar>;
  }
  if (device === devices.NOTEBOOK) {
    return <DesktopSidebar collapsed={collapsed}>{children}</DesktopSidebar>;
  }
  if (device === devices.DESKTOP) {
    return <DesktopSidebar collapsed={collapsed}>{children}</DesktopSidebar>;
  }
  return <></>;
};
