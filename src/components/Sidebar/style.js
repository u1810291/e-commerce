import styled from 'styled-components';
import { device } from '../../utils/responsive';

export const BodyContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  grid-area: body;
  width: 245px;
  height: 100%;
  left: 67px;
  top: 98.06px;

  &::-webkit-scrollbar {
    position: absolute;
    width: 8px;
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: rgba(47, 47, 81, 0);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(73, 75, 116, 0);
    border-radius: 8px;
  }
  &:hover::-webkit-scrollbar-track {
    background: rgba(47, 47, 81, 0.5);
  }
  &:hover::-webkit-scrollbar-thumb {
    background: rgba(73, 75, 116, 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(73, 75, 116, 1);
  }
  @media ${device.mobile} {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
