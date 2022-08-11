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

  @media (max-width: 985px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    gap: 25px;
    padding-right: 0;
  }

  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
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
