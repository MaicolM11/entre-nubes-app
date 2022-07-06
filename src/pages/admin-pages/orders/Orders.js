import React, { useState } from "react";
import { getAllSalesToDay } from "../../../services/bill";

import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";

import socket from "../../../services/socket";

const Orders = () => {

  const [bills, setBills] = useState([]);

  socket.on('sales', data => setBills(data));

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
