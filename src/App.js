import logo from './logo.svg';
import './scss/app.scss';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlok from './Components/PizzaBlok';
function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlok prise="300" />
            <PizzaBlok prise="500" />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
            <PizzaBlok />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
