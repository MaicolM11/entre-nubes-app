import React from 'react';
import "./App.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import AdminHomepage from "./pages/admin-homepage/AdminHomepage";
import SalesmanHomepage from './pages/salesman-homepage/SalesmanHomepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin-homepage/*" element={<AdminHomepage />} />
        <Route path="/salesman-homepage" element={<SalesmanHomepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;