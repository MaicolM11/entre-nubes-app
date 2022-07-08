import React, { useEffect, useState } from "react";
import { getBillById } from "../../../services/bill"; 

import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import OrderProductsListModal from "../../../components/modals/OrderProductsListModal";
import {getSocket } from "../../../services/socket";

const Orders = () => {

  const [bills, setBills] = useState([]);
  const [bill, setBill] = useState();
  const [productsSale, setProductsSale] = useState([]);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);

  useEffect(() => {
    let socket = getSocket()    
    socket.on('sales', data => setBills(data));
    return () => socket.disconnect();
  }, [])

  const showBill = (bill) => {
    console.log("click")
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
       <OrdersAdminCardsContainer bills={bills}
        handleOpenProductList={showBill} /> 
    </div>
  );
};

export default Orders;
