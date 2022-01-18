import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import style from './style.module.scss';

export default function EmptyTextarea({ label, placeholder }) {
  return (
    <div className={style.cont}>
      <span className={style.label}>{label}</span>
      <TextareaAutosize placeholder={placeholder} className={style.textArea} minRows={6} />
    </div>
  );
}
