import React from "react";
import { Routes, Route } from "react-router-dom";
import { SalesmanLinks } from "../../../routes/Links";
import { getFullname } from "../../../services/storage";

import "./SalesmanHomepage.css";
import Sidebar from "../../../components/sidebar/Sidebar";

//Pages
import SalesmanOrders from "../salesman-orders/SalesmanOrders";
import Guarantors from "../guarantors/Guarantors";
import Boliranas from "../boliranas/Boliranas";

const SalesmanHomepage = () => {
  return (
    <div className="salesman-homepage-container">
      <Sidebar links={SalesmanLinks} />
      <div className="salesman-pages-container">
        <Routes>
          <Route
            index
            element={<SalesmanOrders salesmanName={getFullname()} />}
          />
          <Route
            path="orders"
            element={<SalesmanOrders salesmanName={getFullname()} />}
          />
          <Route
            path="guarantors"
            element={<Guarantors salesmanName={getFullname()} />}
          />
          <Route path="boliranas" element={<Boliranas />} />
        </Routes>
      </div>
    </div>
  );
};

export default SalesmanHomepage;
