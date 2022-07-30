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

const OrderSalesmanCard = ({
  orderNumber,
  place,
  status,
  totalPayment,
  handleOpenProductList,
  handlePayOptions,
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
        <State state={status} />
        <OrderCardButtonsContainer>
          <Button
            size="mediumSmallButton"
            theme="highlighted"
            text="Productos"
            onClick={handleOpenProductList}
          />
          {status !== "PAGO" && status !== "A CREDITO" && (
            <Button
              size="mediumSmallButton"
              theme="edit"
              text="Pagar"
              onClick={handlePayOptions}
            />
          )}
        </OrderCardButtonsContainer>
      </OrderCardDataContainer>
    </OrderCardContainer>
  );
};

export default OrderSalesmanCard;
