import React, { useEffect, useState } from "react";
import { getSocket } from "../../../services/socket";
import { getBillById } from "../../../services/bill";
import { closeDesk } from "../../../services/desk";

import "./Orders.css";
import {
  PageOptionsContainer,
  PageOptionsCenterContainer,
} from "../../../components/styles/style-components";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import OrderProductListModal from "../../../components/modals/OrderProductListModal";
import Button from "../../../components/buttons/Button";
import { ReactComponent as CashRegister } from "../../../assets/icons/cash-register.svg";

const Orders = () => {
  const [bill, setBill] = useState();
  const [bills, setBills] = useState([]);
  const [productsSale, setProductsSale] = useState([]);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  
  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const handleCloseBarModal = () => {
    closeDesk()
  };

  const showBill = (bill) => {
    setProductsSale([]);
    getBillById(bill._id).then(async (res) => {
      setProductsSale(await res.json());
    });
    setBill(bill);
    setIsOpenProductListModal((isOpen) => !isOpen);
  };
  
  useEffect(() => {
    const socket = getSocket();
    socket.on("sales", setBills);
    return () => socket.disconnect();
  }, []);

  return (
    <div className="admin-orders-container">
      <AnimatedModalContainer
        modal={
          <OrderProductListModal
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
      <PageOptionsContainer>
        <PageOptionsCenterContainer>
          <Button
            size="optionButton"
            theme="ok"
            icon={<CashRegister fill="white" />}
            text="Cerrar Caja"
            onClick={handleCloseBarModal}
          />
        </PageOptionsCenterContainer>
      </PageOptionsContainer>
      <OrdersAdminCardsContainer
        bills={bills}
        handleOpenProductList={showBill}
      />
    </div>
  );
};

export default Orders;
