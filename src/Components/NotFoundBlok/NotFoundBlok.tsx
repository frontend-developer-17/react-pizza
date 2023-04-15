import React from 'react';
import style from './NotFound.module.css';
export default function NotFoundBlok() {
  return (
    <div className="container">
      <div className={style.notFoundBlok}>
        <h1> 😕 Ничего не найдено!</h1>
        <h3 className='text'>Данная страница в нашем интернет-магазине не найдена.</h3>
      </div>
    </div>
  );
}
