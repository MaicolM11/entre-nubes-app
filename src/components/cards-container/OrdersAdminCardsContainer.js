import React from "react";
import OrderAdminCard from "../cards/OrderAdminCard";
import styled from "styled-components";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.cardsBackground};
`;

const OrdersAdminCardsContainer = ({ bills, handleOpenProductList }) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill, i) => (
        <OrderAdminCard
          key={i}
          orderNumber={i + 1}
          place={bill.location}
          status={bill.status}
          totalPayment={bill.total}
          salesman={bill.salesman && bill.salesman.fullname}
          gain={bill.total - bill.subtotal}
          handleOpenProductList={() => handleOpenProductList(bill)}
        />
      ))}
    </CardsContainer>
  );
};

export default OrdersAdminCardsContainer;
