import React from "react";
import "./Salesmans.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";

const Salesmans = () => {
  return (
    <div className="admin-salesmans-container">
      <Header
        title="Vendedores"
        description="Información de los vendedores contratados"
        component={<NotificationButton />}
      />
    </div>
  );
};

export default Salesmans;
