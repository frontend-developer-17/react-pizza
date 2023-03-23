import logo from './logo.svg';
import './scss/app.scss';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlok from './Components/PizzaBlok';
import pizzazObj from './Assets/pizza.json';
function App() {
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
            {pizzazObj.map((obj) => (
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
