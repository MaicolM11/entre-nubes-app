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
  totalPayment,
  handleOpenProductList,
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
        <State state={status=="PENDIENTE"?"Pendiente":"Pagado"} />
        <OrderCardButtonsContainer>
          <Button
            size="mediumSmallButton"
            theme="highlighted"
            text="Productos"
            onClick={handleOpenProductList}
          />
          <Button
            size="mediumSmallButton"
            theme="edit"
            text="Pagar"
            // onClick={submitUser}
          />
        </OrderCardButtonsContainer>
      </OrderCardDataContainer>
    </OrderCardContainer>
  );
};

export default OrderSalesmanCard;
