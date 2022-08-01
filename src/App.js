import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFoundMessage } from "./messages/PageMessages";

import "./App.css";
import Login from "./pages/login/Login";
import AdminHomepage from "./pages/admin/admin-homepage/AdminHomepage";
import SalesmanHomepage from "./pages/salesman/salesman-homepage/SalesmanHomepage";
import Status from "./pages/status/Status";
import { AdminProtectedRoute, SalesmanProtectedRoute, LoginProtectedRoute } from "./ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element= {
            <LoginProtectedRoute>
              <Login />
            </LoginProtectedRoute>
          } 
        />
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
        <Route
          path="/*"
          element={
            <Status
              img={PageNotFoundMessage.img}
              title={PageNotFoundMessage.title}
              description={PageNotFoundMessage.description}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
