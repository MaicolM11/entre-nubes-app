import React from "react";
import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";

import SelectCategory from "../../../components/select/SelectCategory";

const Orders = () => {
  return (
    <div className="admin-orders-container">
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por los clientes"
        component={<NotificationButton />}
      />
    </div>
  );
};

export default Orders;