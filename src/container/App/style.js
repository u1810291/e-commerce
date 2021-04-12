import styled, { css } from 'styled-components';

const filter = css`
  filter: ${({ show }) => show && 'blur(0)'};
`;

export const Container = styled.div`
  ${filter};
`;
