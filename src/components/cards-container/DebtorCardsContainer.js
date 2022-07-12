import React from "react";
import styled from "styled-components";
import DebtorCard from "../cards/DebtorCard";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
  padding: 0 25px 25px 25px;
  gap: 25px 70px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: 1800px) {
    padding: 25px 200px;
  }

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DebtorCardsContainer = ({ debtors, handleSubmitPendingPayments }) => {
  return (
    <CardsContainer>
      {Object.values(debtors).map((debtor) => (
        <DebtorCard
          key={debtor._id}
          isTheme={true}
          debtor={debtor}
          handleSubmitPendingPayments={handleSubmitPendingPayments}
        />
      ))}
    </CardsContainer>
  );
};

export default DebtorCardsContainer;
