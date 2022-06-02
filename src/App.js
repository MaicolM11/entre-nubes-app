import React from 'react';
import "./App.css"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/Login';
import AdminHomepage from "./pages/admin-homepage/AdminHomepage";
import SalesmanHomepage from './pages/salesman-homepage/SalesmanHomepage';

import { getMyInfo } from './services/user';

const SalesmanProtectedRoute = ({ children }) => {
  let user = true;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AdminProtectedRoute = ({ children }) => {
  let user = true;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin/*" element = {
            <AdminProtectedRoute>
              <AdminHomepage />
            </AdminProtectedRoute>
          } 
        />
        <Route path="/salesman/*" element= { 
            <SalesmanProtectedRoute>
              <SalesmanHomepage />
            </SalesmanProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;