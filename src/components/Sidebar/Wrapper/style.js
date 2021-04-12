import styled, { css } from 'styled-components';

const tabletDesktop = css`
  width: ${({ collapsed }) => (collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)')};
  transition: 0.2s width;
  grid-area: sidebar;
  position: relative;
  display: grid;
  z-index: 11;
  grid-template-areas: "header"
                        "body";
  grid-template-rows: 76px calc(100vh - 76px);
  grid-template-columns: 1fr;
  overflow: hidden;
`;

export const DesktopSidebar = styled.div`
  ${tabletDesktop}
`;

export const TabletSidebar = styled.div`
  ${tabletDesktop}
`;

export const MobileSidebar = styled.div`
  width: var(--sidebar-width);
  height: 100vh;
  background: var(--sidebar-background);
  position: fixed;
  top: 0;
  right: ${({ collapsed }) => (collapsed ? 'calc(-1*var(--sidebar-width))' : '0')};
  transition: 0.2s;
  z-index: 11;
  display: grid;
  grid-template-areas: "header" "body";
  grid-template-rows: 76px 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
`;
