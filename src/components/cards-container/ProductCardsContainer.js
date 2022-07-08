import React from "react";
import styled from "styled-components";
import ProductCard from "../cards/ProductCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0 0 15px 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ProductCardsContainer = ({
  products,
  openAddStock,
  openEditProductModal,
  openDeleteProductModal,
}) => {
  return (
    <CardsContainer>
      {Object.values(products).map((product, i) => (
        <ProductCard
          key={i}
          brand={product.brand}
          category={product.category.name}
          unitPrice={product.buy_price}
          salePrice={product.sale_price}
          presentation={product.presentation}
          stock={product.stock}
          onClickStock={() => openAddStock(product)}
          onClickEdit={() => openEditProductModal(product)}
          onClickDelete={() => openDeleteProductModal(product)}
        />
      ))}
    </CardsContainer>
  );
};

export default ProductCardsContainer;
