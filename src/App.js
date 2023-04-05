import React from 'react';
import './scss/app.scss';
import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Basket from './Pages/Basket';
export const SearchContext = React.createContext();
function App() {
  const [search, setSearch] = React.useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-pizza/" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/basket/" element={<Basket />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
