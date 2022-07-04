import React from "react";
import styled from "styled-components";
import ProductListCard from "../cards/ProductListCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 25px;
  padding: 0 35px 35px 35px;
`;

const ProductListContainer = ({ productList }) => {
  console.log(productList);
  return (
    <CardsContainer>
      {Object.values(productList).map((orderedProduct) => (
        <ProductListCard key={orderedProduct.product} />
      ))}
    </CardsContainer>
  );
};

export default ProductListContainer;
