import React, { useEffect, useState } from "react";
import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";
import { getAllSalesToDay } from "../../../services/bill";

const Orders = () => {
  const [getBills, setBills] = useState([]);

  const updateBills = () => {
    getAllSalesToDay().then(async (res) => {
      setBills(await res.json());
    });
  };

  useEffect(() => {
    updateBills();
  }, []);

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
