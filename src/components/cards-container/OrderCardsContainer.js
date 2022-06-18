import React from "react";
import styled from "styled-components";
import OrderCard from "../cards/OrderCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(194px, 1fr));
  padding: 0 0 25px 25px;
  overflow-y: auto;
`;
const OrderCardsContainer = () => {
  return (
    <CardsContainer>
      <OrderCard
        orderNumber="#"
        place="Algún lugar del local"
        totalPayment="000.000"
      />
    </CardsContainer>
  );
};

export default OrderCardsContainer;
