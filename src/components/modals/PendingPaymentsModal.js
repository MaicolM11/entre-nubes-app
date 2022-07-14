import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DebtsContainer from "../cards-container/DebtsContainer";

const PendingPaymentsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 857px;
  min-height: 573px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 35px;
  border-bottom: 1px solid ${colors.border};
`;

const PendingPaymentsModal = ({
  handleCloseModal,
  debts,
  openProductsModal,
  openPayModeModal,
}) => {
  return (
    <PendingPaymentsModalContainer>
      <HeaderModalContainer>
        <ModalTitle>Pagos Pendientes</ModalTitle>
        <CloseButton onClick={handleCloseModal} />
      </HeaderModalContainer>
      <DebtsContainer
        debts={debts}
        openProductsModal={openProductsModal}
        openPayModeModal={openPayModeModal}
      />
    </PendingPaymentsModalContainer>
  );
};

export default PendingPaymentsModal;
