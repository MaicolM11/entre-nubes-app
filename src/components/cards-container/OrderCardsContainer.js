import React from "react";
import styled from "styled-components";
import OrderCard from "../cards/OrderCard";

const CardsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkgray;
`;
const OrderCardsContainer = () => {
  return (
    <CardsContainer>
      <OrderCard />
    </CardsContainer>
  );
};

export default OrderCardsContainer;
