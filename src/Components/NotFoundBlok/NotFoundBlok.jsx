import React from 'react';
import style from './NotFound.module.css';
export default function NotFoundBlok() {
  return (
    <div className={style.notFoundBlok}>
      <h1> 😕 Ничего не найдено!</h1>
      <br />
      <h3>Данная страница в нашем интернет-магазине не найдена.</h3>
    </div>
  );
}
