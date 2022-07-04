import React from "react";
import {
  OrderCardContainer,
  OrderCardDataContainer,
  OrderTitle,
  OrderPlaceTitle,
  OrderPlaceDescription,
  OrderTotalPayment,
  DataSpan,
  OrderCardButtonsContainer,
} from "../styles/style-components";
import State from "../states/State";
import Button from "../buttons/Button";

const OrderAdminCard = ({
  orderNumber,
  place,
  totalPayment,
  handleShowProducts,
}) => {
  return (
    <OrderCardContainer>
      <OrderCardDataContainer>
        <OrderTitle>Pedido {orderNumber}</OrderTitle>
        <OrderPlaceTitle>Lugar</OrderPlaceTitle>
        <OrderPlaceDescription>{place}</OrderPlaceDescription>
        <OrderTotalPayment>
          Total: <DataSpan>${totalPayment}</DataSpan>
        </OrderTotalPayment>
        <State state="Pendiente" />
        <OrderCardButtonsContainer>
          <Button
            size="mediumSmallButton"
            theme="highlighted"
            text="Productos"
            onClick={handleShowProducts}
          />
        </OrderCardButtonsContainer>
      </OrderCardDataContainer>
    </OrderCardContainer>
  );
};

export default OrderAdminCard;