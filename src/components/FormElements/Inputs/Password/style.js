import styled from 'styled-components';
import { getPwd, getBorderRadius, helperText } from '../style';
import { ReactComponent as Eye } from '../../../../assets/icons/eye.svg';

export const Input = styled.input`
  ${getPwd}
  padding-right: 23px;
  border-radius: ${getBorderRadius};
  background: ${({ white }) => (white ? '#ffffff' : '#F5F5F5')};
`;
export const Helper = styled.div`
  ${helperText}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  box-sizing: border-box;
`;
export const EyeIcon = styled(Eye)`
  display: ${({ eye }) => (eye ? 'flex' : 'none')};
  position: absolute;
  width: 15px;
  height: 15px;
  margin-right: 14px;
  margin-left: 5px;
  cursor: pointer;
  & path {
    fill: ${({ seen }) => (seen ? '#50b5ff' : '#aed4ff')};
  }
`;
