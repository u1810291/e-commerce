/* eslint-disable no-undef */
import React from 'react';
import { Checkbox as PureCheckbox } from './style';

// eslint-disable-next-line react/jsx-props-no-spreading
const GenericCheckbox = (props) => <PureCheckbox {...props} type="checkbox" />;

export { PureCheckbox, GenericCheckbox as default };
