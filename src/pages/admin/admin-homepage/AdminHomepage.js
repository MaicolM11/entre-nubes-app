import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminMainLink, AdminLinks } from "../../../routes/Links";
import {
  WelcomeAdminPageMessage,
  PageNotFoundMessage,
} from "../../../messages/PageMessages";

import "./AdminHomepage.css";
import Sidebar from "../../../components/sidebar/Sidebar";

import Welcome from "../../welcome/Welcome";
import Orders from "../orders/Orders";
import Products from "../products/Products";
import Boliranas from "../boliranas/Boliranas";
import Reports from "../reports/Reports";
import Salesmans from "../salesmans/Salesmans";
import MenuStatus from "../../menu-status/MenuStatus";

const AdminHomepage = () => {
  return (
    <div className="admin-homepage-container">
      <Sidebar mainLink={AdminMainLink} links={AdminLinks} />
      <div className="admin-pages-container">
        <Routes>
          <Route
            index
            element={
              <Welcome
                img={WelcomeAdminPageMessage.img}
                title={WelcomeAdminPageMessage.title}
                subTitle={WelcomeAdminPageMessage.subTitle}
                description={WelcomeAdminPageMessage.description}
              />
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="boliranas" element={<Boliranas />} />
          <Route path="reports" element={<Reports />} />
          <Route path="salesmans" element={<Salesmans />} />
          <Route
            path="*"
            element={
              <MenuStatus
                img={PageNotFoundMessage.img}
                title={PageNotFoundMessage.title}
                description={PageNotFoundMessage.description}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminHomepage;
