/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Container, Input, EyeIcon, Wrapper, Helper
} from './style';

const NoramlInput = ({
  placeholder,
  disabled,
  typePwd,
  size,
  helperText,
  type,
  eye,
  position,
  white,
  ...others
}) => {
  const [see, setSee] = useState(false);
  return (
    <Wrapper type={type}>
      <Container>
        <Input
          className={classNames('body-medium', 'weight-light')}
          white={white}
          autoComplete="off"
          typePwd={typePwd}
          position={position}
          disabled={disabled}
          type={see ? 'text' : 'password'}
          size={size}
          {...others}
          placeholder={placeholder}
        />
        <EyeIcon
          seen={see ? 1 : 0}
          eye={eye ? 1 : 0}
          onClick={() => setSee(!see)}
        />
      </Container>
      <Helper type={type} size={size}>
        {helperText}
      </Helper>
    </Wrapper>
  );
};

NoramlInput.propTypes = {
  size: PropTypes.string,
  eye: PropTypes.bool,
  seen: PropTypes.bool
};

NoramlInput.defaultProps = {
  size: 'small',
  eye: false,
  seen: false
};

export default NoramlInput;
