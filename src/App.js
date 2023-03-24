import React from 'react';
import './scss/app.scss';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlok from './Components/PizzaBlok';
function App() {
  const [pizza, setPizaa] = React.useState([]);
  React.useEffect(() => {
    fetch('https://641dca320596099ce154a309.mockapi.io/react-pizza')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        console.log(arr);
        setPizaa(arr);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
