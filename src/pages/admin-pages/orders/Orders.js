import React from "react";
import "./Orders.css";

import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";

const Orders = () => {
  return (
    <div className="admin-orders-container">
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por los clientes"
        component={<NotificationButton />}
      />
      <OrdersAdminCardsContainer bills={getBills} />
    </div>
  );
};

export default Orders;