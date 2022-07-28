import React from "react";
import styled from "styled-components";
import DebtorProductCard from "../../components/cards/DebtorProductCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cardsBackground};
  gap: 10px;
  padding-right: 3px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DebtorProductsContainer = ({ productList }) => {
  return (
    <CardsContainer>
      {Object.values(productList).map((product, i) => (
        <DebtorProductCard key={i} productOnList={product} />
      ))}
    </CardsContainer>
  );
};

export default DebtorProductsContainer;
