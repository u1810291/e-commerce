import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 30%;
`;

export const BellContainer = styled.div`
  border-right: solid 1px #dddee3;
  border-left: solid 1px #dddee3;
  margin: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 16px;
`;
export const UserData = styled.span`
  margin: 25px;
`;
export const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  padding: 16px 24px;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 100%;
  box-shadow: 0 6px 12px rgba(73, 75, 116, 0.16);
  border-radius: 8px;
  overflow: hidden;
  z-index: 9;
  background-color: #fff;
  row-gap: 16px;
  margin-top: 5px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`;
export const Text = styled.div``;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;
TextContainer.Name = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #59748a;
`;
TextContainer.Email = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.5px;

  color: #636e95;

  mix-blend-mode: normal;
  opacity: 0.9;
`;
