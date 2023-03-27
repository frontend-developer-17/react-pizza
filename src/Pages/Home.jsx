import React from 'react';
import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import PizzaBlok from '../Components/PizzaBlok/PizzaBlok';
import Skeleton from '../Components/PizzaBlok/Skeleton';
export default function Home() {
  const [pizza, setPizaa] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategor, setActiveCategor] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'По популярности',
    sort: 'rating',
  });
  console.log(activeSort);
  React.useEffect(() => {
    setIsLoading(true);
    const order = activeSort.sort.includes('-') ? 'asc' : 'desc';
    const sort = activeSort.sort.replace('-', '');
    const categori = activeCategor > 0 ? activeCategor : '';
    fetch(
      `https://641dca320596099ce154a309.mockapi.io/react-pizza?category=${categori}&sortBy=${sort}&order=${order}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setPizaa(arr);
        setIsLoading(false);
      });
  }, [activeCategor, activeSort]);
  return (
    <div>
      <div className="content__top">
        <Categories activeCategor={activeCategor} setActiveCategor={(id) => setActiveCategor(id)} />
        <Sort activeSort={activeSort} setActiveSort={(obj) => setActiveSort(obj)} />
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
