import React from "react";
import styled from "styled-components";
import DebtCard from "../cards/DebtCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cardsBackground};
  gap: 25px;
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DebtsContainer = ({ debts, openProductsModal, openPayModeModal }) => {
  return (
    <CardsContainer>
      {Object.values(debts).map((debt, i) => (
        <DebtCard
          key={i}
          debtNumber={i + 1}
          debt={debt}
          openProductsModal={() => openProductsModal(debt)}
          openPayModeModal={() => openPayModeModal(debt)}
        />
      ))}
    </CardsContainer>
  );
};

export default DebtsContainer;
