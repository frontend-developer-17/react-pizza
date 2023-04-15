import React, { Suspense } from 'react';
import './scss/app.scss';

import InfoPizza from './PizzaData/Pizza';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
//import Basket from './Pages/Basket';
import MainLayout from './Iayoats/MainLayout';

const Basket = React.lazy(() => import('./Pages/Basket'));
export interface SearchContext{
  search:string
  setSearch:(value:string)=>void
}
export const SearchContext = React.createContext<SearchContext |null>(null);
const  App:React.FC = () =>{
  const [search, setSearch] = React.useState('');


  return (
    <SearchContext.Provider value={{ search, setSearch }}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="react-pizza/" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="home/:id" element={<InfoPizza />} />

          <Route path="basket/" element={<Basket />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Suspense>
    </SearchContext.Provider>
  );
}

export default App;
