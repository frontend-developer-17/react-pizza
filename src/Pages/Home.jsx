import React from 'react';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlok from '../Components/PizzaBlok/PizzaBlok';
import Skeleton from '../Components/PizzaBlok/Skeleton';
export default function Home() {
  const [pizza, setPizaa] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://641dca320596099ce154a309.mockapi.io/react-pizza')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setPizaa(arr);

        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          [...new Array(8)].map((index) => <Skeleton />)
        ) : (
          <>
            {pizza.map((obj) => (
              <div key={obj.id}>
                <PizzaBlok
                  prise={obj.price}
                  imageUrl={obj.imageUrl}
                  title={obj.title}
                  sizes={obj.sizes}
                  types={obj.types}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
