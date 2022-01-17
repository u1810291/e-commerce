import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';
import Children from './Children';
import style from './style.module.scss';

export default function RadioButtonsGroup({
  label, src, width = '54', height = '16', size = 'large', childText
}) {
  return (
    <div className={`${style.cont} ${style[size]}`}>

      <FormControlLabel control={<Radio />} label={label} />

      { size !== 'small' && <Children type={childText.type} price={childText.price} txt={childText.txt} />}

      <Image src={src} width={width} height={height} />
    </div>
  );
}
