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
const OrderCardsContainer = ({bills}) => {
  return (
    <CardsContainer>
      {Object.values(bills).map((bill,id)=>(
        <OrderCard
        // orderNumber={bill.}
        key={id}
        place={bill.location}
        totalPayment={bill.total  }
      />
      ))
      }
     
    </CardsContainer>
  );
};

export default OrderCardsContainer;
