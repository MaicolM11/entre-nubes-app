import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { MessageInfoContainer } from "../styles/style-components";
import Button from "../buttons/Button";
import { ReactComponent as Shopping } from "../../assets/icons/basket-shopping.svg";

const PayOptionsModalContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 35px;
  gap: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;
`;

const PayOptionsModal = ({ openDebtorAssignModal, openPayModeModal }) => {
  return (
    <PayOptionsModalContainer>
      <CenterContainer>
        <InfoContainer>
          <Shopping width={28} height={25} fill={colors.brand} />
          <MessageInfoContainer>Opciones del Pedido</MessageInfoContainer>
        </InfoContainer>
        <ButtonsContainer>
          <Button
            size="mediumModalButton"
            theme="highlighted"
            text="Asignar Deudor"
            onClick={openDebtorAssignModal}
          />
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Pagar Pedido"
            onClick={openPayModeModal}
          />
        </ButtonsContainer>
      </CenterContainer>
    </PayOptionsModalContainer>
  );
};

export default PayOptionsModal;
