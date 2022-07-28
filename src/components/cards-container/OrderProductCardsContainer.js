import React from "react";
import styled from "styled-components";
import OrderProductCard from "../cards/OrderProductCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 112px;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  background-color: ${colors.cardsBackground};
  padding: 25px;
  border-bottom-left-radius: 16px;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1280px) {
    grid-column-gap: 68px;
  }

  @media (max-width: 1240px) {
    grid-column-gap: 65px;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const OrderProductCardsContainer = ({ products, addProductOrder }) => {
  return (
    <CardsContainer>
      {Object.values(products).map((product) => (
        <OrderProductCard
          key={product._id}
          brand={product.brand}
          category={product.category.name}
          unitPrice={product.buy_price}
          salePrice={product.sale_price}
          presentation={product.presentation}
          stock={product.stock}
          onClickAddProductOrder={() => addProductOrder(product)}
        />
      ))}
    </CardsContainer>
  );
};

export default OrderProductCardsContainer;
