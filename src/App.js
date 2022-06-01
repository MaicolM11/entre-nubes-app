import React from 'react';
import "./App.css"

import Login from './pages/login/Login';
import Test from './pages/componentTest/Test';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
