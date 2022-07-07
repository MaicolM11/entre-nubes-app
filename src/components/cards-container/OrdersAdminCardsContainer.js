import React from "react";
import OrderAdminCard from "../cards/OrderAdminCard";
import { CardsContainer } from "../styles/style-components";

const OrdersAdminCardsContainer = ({ bills,handleOpenProductList }) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill, i) => (
        <OrderAdminCard
          key={i}
          orderNumber={i + 1}
          place={bill.location}
          status = {bill.status}
          totalPayment={bill.total}
          salesman = {bill.salesman.fullname}
          gain = {(bill.total - bill.subtotal)}
          handleOpenProductList={() => handleOpenProductList(bill)}
        />
      )
      )}
    </CardsContainer>
  );
};

export default OrdersAdminCardsContainer;
