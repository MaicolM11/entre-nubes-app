import React from "react";
import OrderSalesmanCard from "../cards/OrderSalesmanCard";
import { CardsContainer } from "../styles/style-components";

const OrdersSalesmanCardsContainer = ({ bills }) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill, i) => (
        <OrderSalesmanCard
          key={i}
          orderNumber={i + 1}
          place={bill.location}
          totalPayment={bill.total}
        />
      ))}
    </CardsContainer>
  );
};

export default OrdersSalesmanCardsContainer;
