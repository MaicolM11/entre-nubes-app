import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProductList } from "../../assets/images/empty-product-list.svg";
import { DataSpan } from "../styles/style-components";

const ProductListCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 25px;
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const ProductDataContainer = styled.div`
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductListCard = ({ product }) => {
  console.log(product);
  return (
    <ProductListCardContainer>
      <EmptyProductList width={50} height={50} />
      <ProductDataContainer>Nombre del Producto</ProductDataContainer>
      <ProductDataContainer>
        Precio de Venta: <DataSpan>$000.000</DataSpan>
      </ProductDataContainer>
      <ProductDataContainer>
        Unidades: <DataSpan>0</DataSpan>
      </ProductDataContainer>
      <ProductDataContainer>
        Precio por Cantidad: <DataSpan>$000.000</DataSpan>
      </ProductDataContainer>
    </ProductListCardContainer>
  );
};

export default ProductListCard;
