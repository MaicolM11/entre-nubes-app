import React from "react";
import styled from "styled-components";
import ProductCard from "../cards/ProductCard";

const CardContainer = styled.div`
  display: grid;
  grid-gap: 75px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  overflow-y: auto;
`;

const ProductCardsContainer = ({ products }) => {
  return (
    <CardContainer>
      {Object.values(products).map((product) => (
        <ProductCard
          key={product._id}
          name={product.brand}
          category={product.category.name}
          unitPrice={product.buy_price}
          salePrice={product.sale_price}
          presentation={product.presentation}
          stock={product.stock}
        />
      ))}
    </CardContainer>
  );
};

export default ProductCardsContainer;
