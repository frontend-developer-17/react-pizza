import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  addItems } from '../../Redux/Slise/BasketSlise';
import { Link } from 'react-router-dom';
import { RootState } from '../../Redux/store';
import { ItemsPizza } from '../../@types/types';

type PizzaBlokProps = {
  id:string, prise:string, imageUrl:string, title:string, sizes:number[], types:number[]
}
const PizzaBlok:React.FC<PizzaBlokProps> =({ id, prise, imageUrl, title, sizes, types }) => {
  const [currentNumber, setcurrentNumber] = React.useState(0);
  const NamePizza = ['тонкое', 'традиционное'];

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setactiveSize] = React.useState(0);
  const dispatch = useDispatch();
const count = useSelector((state:RootState) => state.basketSlise.items.find((obj) => obj.id === id));
 
  const addedCount = count ? count.count : 0;
  const addItemsOnBasket = () => {
    const items:ItemsPizza = {
      imageUrl,
      title,
      prise:Number(prise),
      size: sizes[activeSize],
      type: NamePizza[activeType],
      id,
      count:0,
      itemPrise:0
    };
   
    dispatch(addItems(items));

  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/home/` + id}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typesId) => (
              <li
                key={typesId}
                onClick={() => setActiveType(typesId)}
                className={activeType === typesId ? 'active' : ''}>
                {NamePizza[typesId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((sizePizza, i) => (
              <li
                key={i}
                onClick={() => setactiveSize(i)}
                className={activeSize === i ? 'active' : ''}>
                {' '}
                {sizePizza}см
              </li>
            ))}
          </ul>
        </div>
        <div onClick={addItemsOnBasket} className="pizza-block__bottom">
          <div className="pizza-block__price">
            <span>от {prise} ₽ </span>
          </div>
          <button
            onClick={() => setcurrentNumber(currentNumber + 1)}
            className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount ? <i>{addedCount}</i> : ''}
          </button>
        </div>
      </div>
    </div>
  );
}
export default PizzaBlok