import React from "react";
import styled from "styled-components";
import OrderProductCard from "../cards/OrderProductCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  padding: 0 3px;
  overflow-x: hidden;
  overflow-y: auto;
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
