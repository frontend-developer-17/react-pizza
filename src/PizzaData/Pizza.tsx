import React from 'react';
import style from './InfoPizza.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPizzaIdQuery } from '../Redux/FetchPizza/GetPizzaIdQuery';

const InfoPizza:React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
 
const { data, error, isLoading } = useGetPizzaIdQuery(Number(id))  ;
if (error) {
  navigate('/')
}
  return (
    <div className="container">
     
       <div>
          {isLoading ? (
            <h2>Загрузка...</h2>
          ) : (
            <div>
              <img src={data?.imageUrl} className={style.imageBlok} alt="" />
              <h2>{data?.title}</h2>
              <h3>Состав: {data?.description}</h3>
              <h3>Цена: {data?.price} ₽ </h3>

              <div onClick={() => navigate(-1)} className="cart__bottom-buttons">
                <div className="button button--outline button--add go-back-btn">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Вернуться назад</span>
                </div>
              </div>
            </div>
          )}
       </div>
      
    </div>
  );
};
export default InfoPizza;
