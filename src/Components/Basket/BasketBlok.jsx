import React from 'react';
import style from './BasketBlok.module.scss';
import imageBasket from '../../Assets/img/empty-cart.png';
export default function Basket() {
  return (
    <div className={style.basketBlok}>
      <h2>😕Корзина пустая!</h2>
      <img src={imageBasket} alt="" srcset="" />
    </div>
  );
}
