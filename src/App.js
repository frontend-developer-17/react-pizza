import React from 'react';
import './scss/app.scss';
import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Basket from './Pages/Basket';
function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/react-pizza/" element={<Home />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/basket/" element={<Basket />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
