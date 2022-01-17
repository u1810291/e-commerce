import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import style from './style.module.scss';

export default function BasicTextFields({
  size, label, type, placeholder
}) {
  const classes = {
    small: style.small,
    medium: style.medium,
    large: style.large
  };
  return (
    <div>

      <span className={style.label}>{label}</span>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField className={classes[size]} id="outlined-basic" type={type} placeholder={placeholder} />
      </Box>
    </div>
  );
}
