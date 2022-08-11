import React from "react";
import styled from "styled-components";
import ProductListCard from "../cards/ProductListCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1025px;
  height: 475px;
  gap: 25px;
  padding: 25px;
  background-color: ${colors.cardsBackground};
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 450px) {
    width: 400px;
    align-items: center;
  }
`;

const ProductListContainer = ({ productList }) => {
  return (
    <CardsContainer>
      {Object.values(productList).map((product, i) => (
        <ProductListCard key={i} productOnList={product} />
      ))}
    </CardsContainer>
  );
};

export default ProductListContainer;
