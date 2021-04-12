import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border-bottom: 1px solid #ebebf3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  padding: 16px 24px;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 60px;
  box-shadow: 0 6px 12px rgba(73, 75, 116, 0.16);
  border-radius: 8px;
  overflow: hidden;
  z-index: 9;
  background-color: #fff;
  row-gap: 16px;
  margin-top: 5px;
`;
