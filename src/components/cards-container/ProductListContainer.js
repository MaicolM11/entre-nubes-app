import React from "react";
import styled from "styled-components";
import ProductListCard from "../cards/ProductListCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0 35px 35px 35px;
  overflow-x: hidden;
  overflow-y: auto;
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
