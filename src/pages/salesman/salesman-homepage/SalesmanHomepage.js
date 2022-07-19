import React from "react";
import { Routes, Route } from "react-router-dom";
import { getFullname } from "../../../services/storage";
import { SalesmanMainLink, SalesmanLinks } from "../../../routes/Links";

import "./SalesmanHomepage.css";
import Sidebar from "../../../components/sidebar/Sidebar";

import Welcome from "../../welcome/Welcome";
import Orders from "../orders/Orders";
import Boliranas from "../boliranas/Boliranas";
import Debtors from "../debtors/Debtors";
import MenuStatus from "../../menu-status/MenuStatus";

const SalesmanHomepage = () => {
  return (
    <div className="salesman-homepage-container">
      <Sidebar mainLink={SalesmanMainLink} links={SalesmanLinks} />
      <div className="salesman-pages-container">
        <Routes>
          <Route index element={<Welcome />} />
          <Route
            path="orders"
            element={<Orders salesmanName={getFullname()} />}
          />
          <Route
            path="boliranas"
            element={<Boliranas salesmanName={getFullname()} />}
          />
          <Route
            path="debtors"
            element={<Debtors salesmanName={getFullname()} />}
          />
          <Route path="*" element={<MenuStatus />} />
        </Routes>
      </div>
    </div>
  );
};

export default SalesmanHomepage;
