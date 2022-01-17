import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import style from './style.module.scss';

export default function Checkboxes({
  label, size, onChange
}) {
  const classes = {
    small: style.v1,
    medium: style.v2,
    large: style.v3
  };

  return (
    <div className={classes[size]}>
      <FormControlLabel control={<Checkbox onChange={onChange} />} label={label} />
    </div>
  );
}
