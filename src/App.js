import React from 'react';
import './scss/app.scss';
import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Basket from './Pages/Basket';
function App() {
  const [search, setSearch] = React.useState('');
  return (
    <div className="wrapper">
      <Header search={search} setSearch={setSearch} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={search} />} />
          <Route path="/react-pizza/" element={<Home searchValue={search} />} />
          <Route path="/home/" element={<Home searchValue={search} />} />
          <Route path="/basket/" element={<Basket />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
