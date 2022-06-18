import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import State from "../states/State";
import Button from "../buttons/Button";

const OrderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 194px;
  height: 444px;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: darkred;
`;

const OrderData = styled.label`
  /* display: flex;
  width: 100%;
  height: 18px;
  align-items: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap; */
`;

const OrderCardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const OrderCard = () => {
  return (
    <OrderCardContainer>
      <label>Pedido #</label>
      <label>Lugar</label>
      <label>Algún lugar del local</label>
      <label>Total: $ 000.000</label>
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
    </OrderCardContainer>
  );
};

export default OrderCard;
