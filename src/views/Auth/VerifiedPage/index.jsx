import React from 'react';
import { useDispatch } from 'react-redux';
import { VerifiedContainer } from './style';
import { PrimaryButton } from '../../../components/Buttons';
import { verify } from '../../../redux/modules/auth/actions';

import { useQuery } from '../../../hooks';

export default () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const handleClick = () => {
    const params = {
      access_token: query.get('access_token'),
      refresh_token: query.get('refresh_token')
    };

    dispatch(verify(params));
  };
  return (
    <VerifiedContainer>
      <VerifiedContainer.Inner>
        <VerifiedContainer.Heading>Good job!</VerifiedContainer.Heading>
        (c) Sarvar A.
        <VerifiedContainer.Text>Your email has been confirmed successfully.</VerifiedContainer.Text>
        <PrimaryButton title="LET'S START" size="large" onClick={handleClick} />
      </VerifiedContainer.Inner>
    </VerifiedContainer>
  );
};
