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
  background-color: ${colors.secondary};
  gap: 25px;
  padding: 25px;
  border-radius: 25px;
  border: 1px solid ${colors.border};
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

const ProductDataContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductNameDataContainer = styled.div`
  min-width: 225px;
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductListCard = ({ productOnList }) => {
  const productName = productOnList.product;
  const PricePerQuantity = productOnList.quantity * productOnList.sale_price;
  return (
    <ProductContainer>
      <ProductListCardContainer>
        <EmptyProductList width={50} height={50} />
        <DataContainer>
          <ProductNameDataContainer>
            Producto: <DataSpan>{productName && productName.brand}</DataSpan>
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

export default ProductListCard;
