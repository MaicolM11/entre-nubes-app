import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, TitleInfo } from "../styles/style-components";
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
  height: 565px;

  @media (max-width: 985px) {
    padding: 25px;
    flex-direction: column-reverse;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const RightModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  gap: 25px;

  @media (max-width: 985px) {
    padding: 0;
  }
`;

const RightTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 25px;

  @media (max-width: 985px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;

const LeftModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-right: solid 1px ${colors.border};

  @media (max-width: 985px) {
    border-right: none;
  }
`;

const HeaderDebtorsContainer = styled.div`
  display: flex;
  height: 75px;
  border-bottom: solid 1px ${colors.border};
`;

const HeaderDebtorsCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 25px;

  @media (max-width: 985px) {
    padding: 0;
  }
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
          <HeaderDebtorsContainer>
            <HeaderDebtorsCenterContainer>
              <TitleInfo>Deudores</TitleInfo>
            </HeaderDebtorsCenterContainer>
          </HeaderDebtorsContainer>
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
          <TitleInfo>Productos</TitleInfo>
          <DebtorProductsContainer productList={productsSale} />
        </RightModalContainer>
      </CenterModalContainer>
    </DebtorAssignModalContainer>
  );
};

export default DebtorAssignModal;
