import React from "react";
import "./Reports.css";
import Header from "../../components/header/Header";
import NotificationButton from "../../components/header/NotificationButton";

const Reports = () => {
  return (
    <div className="reports-container">
      <Header
        title="Reportes"
        description="Información de los reportes de ventas diarias"
        component={<NotificationButton />}
      />
    </div>
  );
};

export default Reports;
