import React from "react";
import "./SalesmanHomepage.css";
import { Routes, Route } from "react-router-dom";
import { SalesmanLinks } from "../../../routes/Links";

//Components
import Sidebar from "../../../components/sidebar/Sidebar";

//Pages
import Orders from "../orders/Orders";
import Guarantors from "../guarantors/Guarantors";
import Boliranas from "../boliranas/Boliranas";

const SalesmanHomepage = () => {
  return (
    <div className="salesman-homepage-container">
      <Sidebar links={SalesmanLinks} />
      <div className="salesman-pages-container">
        <Routes>
          <Route
            path="orders"
            element={<Orders salesmanName="Nombre Vendedor" />}
          />
          <Route path="guarantors" element={<Guarantors />} />
          <Route path="boliranas" element={<Boliranas />} />
        </Routes>
      </div>
    </div>
  );
};

export default SalesmanHomepage;
