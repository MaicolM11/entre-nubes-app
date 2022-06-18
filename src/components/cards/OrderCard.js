import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import State from "../states/State";
import Button from "../buttons/Button";

const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 194px;
  gap: 25px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const OrderCardDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 21px;
  gap: 25px;
`;

const OrderTitle = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const OrderPlaceTitle = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const OrderPlaceDescription = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

const OrderTotalPayment = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 18px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const DataSpan = styled.span`
  font-weight: 500;
`;

const OrderCardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const OrderCard = ({ orderNumber, place, totalPayment }) => {
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
            // onClick={submitUser}
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

export default OrderCard;
