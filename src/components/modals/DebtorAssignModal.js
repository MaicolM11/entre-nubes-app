import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { DebtorBoldData, ModalTitle } from "../styles/style-components";
import ExistingDebtorsContainer from "../cards-container/ExistingDebtorsContainer";
import BorderButton from "../buttons/BorderButton";
import Button from "../buttons/Button";
import DebtorInfoCard from "../cards/DebtorInfoCard";
import TotalDebtCard from "../cards/TotalDebtCard";
import DebtorProductsContainer from "../cards-container/DebtorProductsContainer";

const DebtorAssignModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cardsBackground};
  border-radius: 16px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  align-items: center;
  padding: 25px;
  gap: 25px;
  border-bottom: solid 1px ${colors.border};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const CenterModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 560px;
`;

const RightModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  gap: 25px;
`;

const RightTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 25px;
`;

const LeftModalContainer = styled.div`
  display: flex;
  width: 100%;
  border-right: solid 1px ${colors.border};
`;

const DebtorAssignModal = ({
  bill,
  productsSale,
  debtors,
  handleBackOrderOptions,
  handleSubmitDebtorAssign,
}) => {
  const [currentDebtor, setCurrentDebtor] = useState({
    fullname: "Sin Asignar",
    cc: "Sin Asignar",
  });

  const handleSubmitAssignDebt = (debtor) => {
    setCurrentDebtor(debtor);
  };

  return (
    <DebtorAssignModalContainer>
      <ModalTitleContainer>
        <ModalTitle>Asignar Deudor</ModalTitle>
        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            onClick={handleBackOrderOptions}
          />
          <Button
            size="mediumModalButton"
            theme="highlighted"
            text="Asignar Deudor"
            onClick={() => handleSubmitDebtorAssign(currentDebtor, bill)}
          />
        </ButtonsContainer>
      </ModalTitleContainer>
      <CenterModalContainer>
        <LeftModalContainer>
          <ExistingDebtorsContainer
            debtors={debtors}
            handleSubmitAssignDebt={handleSubmitAssignDebt}
          />
        </LeftModalContainer>
        <RightModalContainer>
          <RightTopContainer>
            <DebtorInfoCard debtor={currentDebtor} />
            <TotalDebtCard totalDebt={bill.total} />
          </RightTopContainer>
          <DebtorBoldData>Productos</DebtorBoldData>
          <DebtorProductsContainer productList={productsSale} />
        </RightModalContainer>
      </CenterModalContainer>
    </DebtorAssignModalContainer>
  );
};

export default DebtorAssignModal;
