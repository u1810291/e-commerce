import React from 'react';
import style from './style.module.scss';

export default function Children({ type, price, txt }) {
  return (
    <div className={style.child}>
      <span className={style[type]}>{price}</span>
      <span className={style.priceLabel}>{txt}</span>
    </div>
  );
}
