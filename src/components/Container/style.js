import styled, { css } from 'styled-components';

const common = css`
  width: 100%;
  height: 100vh;
  display: grid;
  word-break: break-all;
`;

const tabletDesktop = css`
  ${common};
  grid-template-areas: "sidebar content";
  grid-template-columns: auto 1fr;
`;

export const DesktopContainer = styled.div`
  ${tabletDesktop};
`;

export const TabletContainer = styled.div`
  ${tabletDesktop};
  `;

export const NotebookContainer = styled.div`
  ${tabletDesktop};
`;

export const MobileContainer = styled.div`
  ${common};
  grid-template-areas: "content";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;
