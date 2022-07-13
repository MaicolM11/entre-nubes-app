import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DebtsContainer from "../cards-container/DebtsContainer";

const PendingPaymentsModalContainer = styled.div`
  display: flex;
  width: 850px;
  height: 573px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderModalContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 35px;
  border-bottom: 1px solid ${colors.border};
`;

const PendingPaymentsModal = ({ handleCloseModal, debts }) => {
  return (
    <PendingPaymentsModalContainer>
      <HeaderModalContainer>
        <ModalTitle>Pagos Pendientes</ModalTitle>
        <CloseButton onClick={handleCloseModal} />
      </HeaderModalContainer>
      <DebtsContainer debts={debts} />
    </PendingPaymentsModalContainer>
  );
};

export default PendingPaymentsModal;
