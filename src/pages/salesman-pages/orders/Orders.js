import React from "react";
import styled from "styled-components";

import "./Orders.css";
import Header from "../../../components/header/Header";
import SalesmanData from "../../../components/header/SalesmanData";
import Button from "../../../components/buttons/Button";
import OrderCardsContainer from "../../../components/cards-container/OrderCardsContainer";

import { ReactComponent as Add } from "../../../assets/icons/add.svg";

const AddOrdersContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 95px;
  align-items: center;
  padding-left: 25px;
`;

const Orders = ({ salesmanName }) => {
  return (
    <div className="salesman-orders-container">
      <Header
        title="Pedidos"
        description="Información de los pedidos realizados por mesa"
        component={<SalesmanData salesmanName={salesmanName} />}
      />
      <AddOrdersContainer>
        <Button
          size="mediumButton"
          theme="ok"
          icon={<Add fill="white" />}
          text="Agregar Pedido"
          // onClick={submitUser}
        />
      </AddOrdersContainer>
      <OrderCardsContainer />
    </div>
  );
};

export default Orders;
