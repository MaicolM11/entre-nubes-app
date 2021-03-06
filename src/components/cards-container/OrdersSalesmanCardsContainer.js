import React from "react";
import OrderSalesmanCard from "../cards/OrderSalesmanCard";
import { CardsContainer } from "../styles/style-components";

const OrdersSalesmanCardsContainer = ({
  bills,
  handleOpenProductList,
  handlePayOptions,
}) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill, i) => (
        <OrderSalesmanCard
          key={bill._id}
          orderNumber={i + 1}
          place={bill.location}
          status={bill.status}
          totalPayment={bill.total}
          handleOpenProductList={() => handleOpenProductList(bill)}
          handlePayOptions={() => handlePayOptions(bill)}
        />
      ))}
    </CardsContainer>
  );
};

export default OrdersSalesmanCardsContainer;
