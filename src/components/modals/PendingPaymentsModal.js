import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DebtsContainer from "../cards-container/DebtsContainer";
import EmptyMessage from "../empty-message/EmptyMessage";
import { ReactComponent as EmptyDeptors } from "../../assets/images/empty-money.svg";

const PendingPaymentsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 857px;
  height: 573px;
  background-color: ${colors.cardsBackground};
  border-radius: 16px;

  @media only screen and (max-width: 450px) {
    width: 450px;
    height: 100vh;
  }
`;

const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  padding: 35px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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
      {debts.length > 0 ? (
        <DebtsContainer
          debts={debts}
          openProductsModal={openProductsModal}
          openPayModeModal={openPayModeModal}
        />
      ) : (
        <EmptyMessage
          img={<EmptyDeptors width={250} height={250}/>}
          title="Sin Deudas"
          description="El cliente a realizado todos sus pagos exitosamente."
        />
      )}
    </PendingPaymentsModalContainer>
  );
};

export default PendingPaymentsModal;
