import React, { useEffect, useState } from "react";
import { getSocket } from "../../../services/socket";
import { getBillById } from "../../../services/bill";

import "./Orders.css";
import Header from "../../../components/header/Header";
import NotificationButton from "../../../components/header/NotificationButton";
import OrdersAdminCardsContainer from "../../../components/cards-container/OrdersAdminCardsContainer";
import AnimatedModalContainer from "../../../components/modals/animation/AnimatedModalContainer";
import OrderProductListModal from "../../../components/modals/OrderProductListModal";
import {
  PageOptionsContainer,
  PageOptionsCenterContainer,
} from "../../../components/styles/style-components";
import CloseBarButton from "../../../components/buttons/CloseBarButton";

const Orders = () => {
  const [bill, setBill] = useState();
  const [bills, setBills] = useState([]);
  const [productsSale, setProductsSale] = useState([]);
  const [isOpenProductListModal, setIsOpenProductListModal] = useState(false);

  const isOpenProductList = () => {
    setIsOpenProductListModal(false);
  };

  const handleCloseBarModal = () => {
    console.log("Cerrar caja...");
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
    let socket = getSocket();
    socket.on("sales", (data) => setBills(data));
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
          <CloseBarButton
            size="boliranaButton"
            theme="ok"
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
