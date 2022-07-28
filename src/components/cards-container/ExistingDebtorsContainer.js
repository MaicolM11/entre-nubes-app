import React from "react";
import styled from "styled-components";
import DebtorCard from "../cards/DebtorCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  background-color: ${colors.cardsBackground};
  padding: 25px;
  border-bottom-left-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const ExistingDebtorsContainer = ({ debtors, handleSubmitAssignDebt }) => {
  return (
    <CardsContainer>
      {Object.values(debtors).map((debtor) => (
        <DebtorCard
          key={debtor._id}
          isTheme={false}
          debtor={debtor}
          handleSubmitAssignDebt={() => handleSubmitAssignDebt(debtor)}
        />
      ))}
    </CardsContainer>
  );
};

export default ExistingDebtorsContainer;
