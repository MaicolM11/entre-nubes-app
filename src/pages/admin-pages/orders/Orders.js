import React, { useEffect } from "react";
import { getAllSalesToDay } from "../../../services/bill";

import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";

const Orders = () => {
  const updateBills = () => {
    getAllSalesToDay().then(async (res) => {
      const bills = await res.json();
      console.log(bills);
    });
  };

  useEffect(() => {
    updateBills();
  });

  return (
    <div className="admin-orders-container">
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por los clientes"
        component={<NotificationButton />}
      />
      {/* <OrdersAdminCardsContainer bills={getBills} /> */}
    </div>
  );
};

export default Orders;
