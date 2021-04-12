import styled from 'styled-components';

export const Container = styled.div`

  background: white;
  padding: 30px;
  margin: 20px;
  margin-right: 200px;
  border-radius: 42px;
  height: 96%;
  width: 97%;
  overflow-y: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: var(--navbar-height) 1fr;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  padding: 0 10px;
  margin-right: 20px;
  word-break: break-all;  
  background: #f4f7fc;
  overflow-y: auto;
  overflow-x: auto;

`;
