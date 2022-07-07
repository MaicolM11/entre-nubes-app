import React, { useState } from "react";
import socket from "../../../services/socket";
import { getBillById } from "../../../services/bill";

import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import OrderProductsListModal from "../../../components/modals/OrderProductsListModal";

const data = [
  {
    orderNumber: "Pedido 1",
    place: "En la nevera",
    totalPayment: "000000",
    seller: "EL Pepe",
    gain: "000000",
    status: "Pagado",
  },
];

const Orders = () => {
  const [bills, setBills] = useState(data);
  const [bill, setBill] = useState();
  const [productsSale, setProductsSale] = useState([]);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);

  socket.on("sales", (data) => setBills(data));

  const showBill = (bill) => {
    console.log("click");
    setProductsSale([]);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
    setBill(bill);
    setIsOpenProductListModal((isOpen) => !isOpen);
  };

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  return (
    <div className="admin-orders-container">
      <AnimatedModalContainer
        modal={
          <OrderProductsListModal
            bill={bill}
            productsSale={productsSale}
            handleCloseModal={isOpenProductList}
          />
        }
        isOpen={isOpenProductListModal}
        setIsOpen={setIsOpenProductListModal}
      />
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por los clientes"
        component={<NotificationButton />}
      />
      <OrdersAdminCardsContainer
        bills={bills}
        handleOpenProductList={showBill}
      />
    </div>
  );
};

export default Orders;
