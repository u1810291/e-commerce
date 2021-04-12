import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Input, Helper, InnerContainer
} from './style';

const NormalInput = ({
  placeholder,
  disabled,
  size,
  helperText,
  type,
  ...others
}) => (
  <Container>
    <InnerContainer>
      <Input
        type={type}
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      />
    </InnerContainer>
    <Helper type={type} size={size}>
      {helperText}
    </Helper>
  </Container>
);
NormalInput.propTypes = {
  size: PropTypes.string
};

NormalInput.defaultProps = {
  size: 'medium'
};

export default NormalInput;
