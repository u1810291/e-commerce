import styled from 'styled-components';

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: ${({ initial }) => !initial && '8px'};
  -webkit-appearance: none;
  outline: none;
  border-radius: 8px;
  background: ${({ white }) => (white ? '#FFFFFF' : '#50B5FF')};
  transition: 0.1s;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background: ${({ white }) => (white ? '#FFFFFF' : '#78c6ff')};
  }
  &:before {
    content: "";
    position: absolute;
    transition: 0.1s;
  }
  &:disabled {
    background-color: ${({ white }) => (white ? '#E9E9E9' : '#f5f5f5')};
  }

  &:checked {
    background: #50b5ff;
    &:hover {
      background: #78c6ff;
    }
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 25%;
    left: 40%;
    width: 40%;
    height: 40%;
    border-top: 0;
    border-left: 0;
    border-right: 4px;
    border-bottom: 4px;
    border-color: white;
    border-style: solid;
    border-radius: 1px;
    width: 20%;
    transform: rotate(45deg);
  }
`;
