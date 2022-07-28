import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProductList } from "../../assets/images/empty-product-list.svg";
import { DataSpan } from "../styles/style-components";

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ProductListCardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: ${colors.secondary};
  border-radius: 8px;
  border: 1px solid ${colors.border};
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
`;

const ProductDataContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.text};
  font-size: 12px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductNameDataContainer = styled.div`
  min-width: 125px;
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const DebtorProductCard = ({ productOnList }) => {
  const productName = productOnList.product;
  const PricePerQuantity = productOnList.quantity * productOnList.sale_price;

  return (
    <ProductContainer>
      <ProductListCardContainer>
        <EmptyProductList width={25} height={25} />
        <DataContainer>
          <ProductNameDataContainer>
            {productName && productName.brand}
          </ProductNameDataContainer>
          <ProductDataContainer>
            Precio de Venta: <DataSpan>${productOnList.sale_price}</DataSpan>
          </ProductDataContainer>
          <ProductDataContainer>
            Unidades: <DataSpan>{productOnList.quantity}</DataSpan>
          </ProductDataContainer>
          <ProductDataContainer>
            Precio por Cantidad: <DataSpan>${PricePerQuantity}</DataSpan>
          </ProductDataContainer>
        </DataContainer>
      </ProductListCardContainer>
    </ProductContainer>
  );
};

export default DebtorProductCard;
