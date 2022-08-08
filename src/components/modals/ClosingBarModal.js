import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as CashRegister } from "../../assets/icons/cash-register.svg";
import { MessageInfoContainer } from "../styles/style-components";

const SuccessfulModalContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border-radius: 16px;
  user-select: none;
`;
const CenterModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 85px;
  gap: 20px;
`;

const DataModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ClosingBarModal = () => {
  return (
    <SuccessfulModalContainer>
      <CenterModalContainer>
        <DataModalContainer>
          <CashRegister width={25} height={25} fill={colors.ok} />
          <MessageInfoContainer>
            Cerrando caja, espera un momento...
          </MessageInfoContainer>
        </DataModalContainer>
      </CenterModalContainer>
    </SuccessfulModalContainer>
  );
};

export default ClosingBarModal;
