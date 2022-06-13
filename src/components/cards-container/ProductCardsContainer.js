import React from "react";
import styled from "styled-components";
import ProductCard from "../cards/ProductCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 45px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0 0 15px 25px;
  overflow-y: auto;
`;

const ProductCardsContainer = ({ products }) => {
  return (
    <CardsContainer>
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
    </CardsContainer>
  );
};

export default ProductCardsContainer;