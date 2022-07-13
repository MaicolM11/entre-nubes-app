import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import { colors } from "../styles/colors";
import { DataSpan, ModalSubtitle } from "../styles/style-components";

const DebtCardContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const DebtCardCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 25px;
  gap: 25px;
`;

const DataContainer = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ButtonOptionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DebtCard = ({
  debtNumber,
  debt,
  openProductsModal,
  openPayModeModal,
}) => {
  return (
    <DebtCardContainer>
      <DebtCardCenterContainer>
        <ModalSubtitle>
          Deuda <DataSpan>{debtNumber}</DataSpan>
        </ModalSubtitle>
        <DataContainer>
          Lugar: {debt && <DataSpan>{debt.location}</DataSpan>}
        </DataContainer>
        <DataContainer>
          Total a Pagar: {debt && <DataSpan>${debt.total}</DataSpan>}
        </DataContainer>
        <ButtonOptionsContainer>
          <Button
            size="mediumCardButton"
            theme="highlighted"
            text="Productos"
            onClick={openProductsModal}
          />
          <Button
            size="mediumCardButton"
            theme="edit"
            text="Pagar"
            onClick={openPayModeModal}
          />
        </ButtonOptionsContainer>
      </DebtCardCenterContainer>
    </DebtCardContainer>
  );
};

export default DebtCard;
