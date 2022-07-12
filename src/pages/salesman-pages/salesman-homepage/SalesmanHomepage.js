import React from "react";
import { Routes, Route } from "react-router-dom";
import { SalesmanLinks } from "../../../routes/Links";
import { getFullname } from "../../../services/storage";

import "./SalesmanHomepage.css";
import Sidebar from "../../../components/sidebar/Sidebar";

import Orders from "../orders/Orders";
import Debtors from "../debtors/Debtors";
import Boliranas from "../boliranas/Boliranas";

const SalesmanHomepage = () => {
  return (
    <div className="salesman-homepage-container">
      <Sidebar links={SalesmanLinks} />
      <div className="salesman-pages-container">
        <Routes>
          <Route index element={<Orders salesmanName={getFullname()} />} />
          <Route
            path="orders"
            element={<Orders salesmanName={getFullname()} />}
          />
          <Route
            path="debtors"
            element={<Debtors salesmanName={getFullname()} />}
          />
          <Route
            path="boliranas"
            element={<Boliranas salesmanName={getFullname()} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default SalesmanHomepage;
