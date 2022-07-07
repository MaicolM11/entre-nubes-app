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
import styled from "styled-components";
import { colors } from "../styles/colors";

const DataInfoContainer = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const OrderAdminCard = ({
  orderNumber,
  place,
  totalPayment,
  salesman,
  gain,
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
        <DataInfoContainer>Vendedor: {salesman}</DataInfoContainer>
        <DataInfoContainer>
          Ganancia: <DataSpan>${gain}</DataSpan>
        </DataInfoContainer>
        <State state="Pendiente" />
        <OrderCardButtonsContainer>
          <Button
            size="mediumSmallButton"
            theme="highlighted"
            text="Productos"
            onClick={handleOpenProductList}
          />
        </OrderCardButtonsContainer>
      </OrderCardDataContainer>
    </OrderCardContainer>
  );
};

export default OrderAdminCard;
