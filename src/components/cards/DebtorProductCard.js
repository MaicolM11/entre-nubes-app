import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProductList } from "../../assets/images/empty-product-list.svg";
import { DataSpan } from "../styles/style-components";

const ProductListCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${colors.border};
`;

const ProductDataContainer = styled.div`
  color: ${colors.text};
  font-size: 12px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const DebtorProductCard = ({ productOnList }) => {
  const productName = productOnList.product;
  const PricePerQuantity = productOnList.quantity * productOnList.sale_price;

  return (
    <ProductListCardContainer>
      <EmptyProductList width={24} height={24} />
      <ProductDataContainer>
        {productName && productName.brand}
      </ProductDataContainer>
      <ProductDataContainer>
        Precio de Venta: <DataSpan>${productOnList.sale_price}</DataSpan>
      </ProductDataContainer>
      <ProductDataContainer>
        Unidades: <DataSpan>{productOnList.quantity}</DataSpan>
      </ProductDataContainer>
      <ProductDataContainer>
        Precio por Cantidad: <DataSpan>${PricePerQuantity}</DataSpan>
      </ProductDataContainer>
    </ProductListCardContainer>
  );
};

export default DebtorProductCard;
