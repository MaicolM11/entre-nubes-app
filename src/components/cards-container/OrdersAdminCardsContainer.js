import React from "react";
import OrderAdminCard from "../cards/OrderAdminCard";
import { CardsContainer } from "../styles/style-components";

const OrdersAdminCardsContainer = ({ bills }) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill, i) => (
        <OrderAdminCard
          key={i}
          orderNumber={i + 1}
          place={bill.location}
          totalPayment={bill.total}
        />
      ))}
    </CardsContainer>
  );
};

export default OrdersAdminCardsContainer;
