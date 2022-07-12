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

const GuarantorAssingModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: solid 1px ${colors.border};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const CenterModalContainer = styled.div`
  display: flex;
`;

const RightModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  gap: 25px;
  border-left: solid 1px ${colors.border};
`;

const RightTopContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const LeftModalContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 535px;
  height: 535px;
`;

const GuarantorAssingModal = ({
  bill,
  productsSale,
  debtors,
  handleBackOrderOptions,
  handleSubmitGuarantorAssing,
}) => {
  const [currentDebtor, setCurrentDebtor] = useState({
    fullname: "En espera...",
    cc: "En espera...",
  });

  const handleSubmitAssignDebt = (debtor) => {
    setCurrentDebtor(debtor);
  };

  return (
    <GuarantorAssingModalContainer>
      <ModalTitleContainer>
        <ModalTitle>Asignar Fiador</ModalTitle>
        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            onClick={handleBackOrderOptions}
          />
          <Button
            size="mediumModalButton"
            theme="highlighted"
            text="Asignar Fiador"
            onClick={handleSubmitGuarantorAssing}
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
          <ProductsContainer>
            <DebtorBoldData>Productos</DebtorBoldData>
            <DebtorProductsContainer productList={productsSale}/>
          </ProductsContainer>
        </RightModalContainer>
      </CenterModalContainer>
    </GuarantorAssingModalContainer>
  );
};

export default GuarantorAssingModal;
