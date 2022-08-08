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
import ClosingBarModal from "../../../components/modals/ClosingBarModal";
import AnimatedBlockOutsideModalContainer from "../../../components/modals/animation/AnimatedBlockOutsideModalContainer";
import EmptyMessage from "../../../components/empty-message/EmptyMessage";
import { ReactComponent as CashRegister } from "../../../assets/icons/cash-register.svg";
import { ReactComponent as EmptyOrders } from "../../../assets/images/empty-delivery.svg";

const Orders = () => {
  const [bill, setBill] = useState();
  const [bills, setBills] = useState([]);
  const [productsSale, setProductsSale] = useState([]);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);
  const [isClosingBarModal, setIsClosingBarModal] = useState(false);

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const handleCloseBarModal = () => {
    setIsClosingBarModal(true);
    closeDesk();
    setBills([])
    let closingBar = setInterval(() => {
      setIsClosingBarModal(false);
      clearInterval(closingBar);
    }, 5000);
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
      <AnimatedBlockOutsideModalContainer
        modal={<ClosingBarModal />}
        isOpen={isClosingBarModal}
        setIsOpen={setIsClosingBarModal}
      />
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
      {bills.length > 0 ? (
        <OrdersAdminCardsContainer
          bills={bills}
          handleOpenProductList={showBill}
        />
      ) : (
        <EmptyMessage
          img={<EmptyOrders />}
          title="Sin Pedidos"
          description="Aún los colaboradores no tiene pedidos por realizar."
        />
      )}
    </div>
  );
};

export default Orders;
