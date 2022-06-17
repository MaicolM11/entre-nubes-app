import React from "react";
import "./AdminHomepage.css";
import { Routes, Route } from "react-router-dom";
import { AdminLinks } from "../../../routes/Links";

//Components
import Sidebar from "../../../components/sidebar/Sidebar";

//Pages
import Orders from "../orders/Orders";
import Reports from "../reports/Reports";
import Products from "../products/Products";
import Salesmans from "../salesmans/Salesmans";
import Boliranas from "../boliranas/Boliranas";

const AdminHomepage = () => {
  return (
    <div className="admin-homepage-container">
      <Sidebar links={AdminLinks} />
      <div className="admin-pages-container">
        <Routes>
          <Route path="orders" element={<Orders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="products" element={<Products />} />
          <Route path="salesmans" element={<Salesmans />} />
          <Route path="boliranas" element={<Boliranas />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminHomepage;
