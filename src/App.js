import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/Login";
import AdminHomepage from "./pages/admin/admin-homepage/AdminHomepage";
import SalesmanHomepage from "./pages/salesman/salesman-homepage/SalesmanHomepage";
import Status from "./pages/status/Status";

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
        <Route path="/" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <AdminProtectedRoute>
              <AdminHomepage />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/salesman/*"
          element={
            <SalesmanProtectedRoute>
              <SalesmanHomepage />
            </SalesmanProtectedRoute>
          }
        />
        <Route path="/*" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
