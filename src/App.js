import React from 'react';
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Homepage from "./pages/homepage/Homepage";
import Test from './pages/tests/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/homepage/*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;