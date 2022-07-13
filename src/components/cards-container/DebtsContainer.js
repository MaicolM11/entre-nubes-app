import React from "react";
import styled from "styled-components";
import DebtCard from "../cards/DebtCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DebtsContainer = ({ debts }) => {
  return (
    <CardsContainer>
      {Object.values(debts).map((debt) => (
        <DebtCard key={debt._id} debt={debt} />
      ))}
    </CardsContainer>
  );
};

export default DebtsContainer;
