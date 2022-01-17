import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import style from './style.module.scss';

export default function Checkboxes({
  label, size, onChange
}) {
  return (
    <div className={style[size]}>
      <FormControlLabel control={<Checkbox onChange={onChange} />} label={label} />
    </div>
  );
}
