import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { DataSpan, DebtorBoldData } from "../styles/style-components";

const TotalDebtCardContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.edit};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const CenterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 92.5px;
  gap: 10px;
`;

const TotalDebtCard = ({ totalDebt }) => {
  return (
    <TotalDebtCardContainer>
      <CenterCardContainer>
        <DebtorBoldData>Total Deuda</DebtorBoldData>
        <DebtorBoldData>
          <DataSpan>${totalDebt}</DataSpan>
        </DebtorBoldData>
      </CenterCardContainer>
    </TotalDebtCardContainer>
  );
};

export default TotalDebtCard;
