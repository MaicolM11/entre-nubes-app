import React from "react";
import styled from "styled-components";
import DebtorCard from "../cards/DebtorCard";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(283px, 1fr));
  padding: 25px;
  gap: 25px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
    padding: 25px 200px;
  }

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
