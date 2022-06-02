import React from 'react';
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Homepage from "./pages/homepage/Homepage";
<<<<<<< HEAD
=======
import SalesmanHomePage from './pages/salesman/homepage/Homepage';
import Test from './pages/tests/Test';
>>>>>>> da3eb4d963b810c6af57df3cabd26a41e30316f5

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/homepage/*" element={<Homepage />} />
        <Route path="/salesman" element={<SalesmanHomePage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;