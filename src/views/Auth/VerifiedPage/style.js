import styled from 'styled-components';

export const VerifiedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: white;
`;

VerifiedContainer.Inner = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 235px;
    height: auto;
    margin-bottom: 32px;
  }
`;

VerifiedContainer.Heading = styled.div`
  font-size: 24px;
  font-weight: normal;
  line-height: 24px;
  color: #262626;
  margin-bottom: 12px;
`;

VerifiedContainer.Text = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #c4c4c4;
  font-weight: normal;
  margin-bottom: 32px;
`;
