import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProduct } from "../../assets/images/empty-product.svg";
import CirclePlusButton from "../buttons/CirclePlusButton";

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  max-height: 412px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const ProductCardCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 25px;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 150px;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px ${colors.border};
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const ProductName = styled.label`
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductCategory = styled.div`
  display: flex;
  max-width: 100px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  color: ${colors.highlighted};
  font-size: 12px;
  font-weight: bold;
  font-family: var(--roboto);
`;

const ProductData = styled.label`
  display: flex;
  width: 100%;
  height: 20px;
  align-items: center;
  gap: 5px;
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const DataSpan = styled.span`
  font-weight: 500;
`;

const ProductOptionButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 45px;
`;

const OrderProductCard = ({
  image,
  brand,
  category,
  salePrice,
  presentation,
  stock,
  onClickAddProductOrder,
}) => {
  return (
    <ProductCardContainer>
      <ProductImageContainer>
        {!image ? <EmptyProduct fill={colors.brand} /> : image}
      </ProductImageContainer>
      <ProductCardCenterContainer>
        <ProductInfoContainer>
          <ProductName>{brand}</ProductName>
          <ProductCategory>{category}</ProductCategory>
          <ProductData>
            Precio de Venta: <DataSpan>${salePrice}</DataSpan>
          </ProductData>
          <ProductData>
            Presentación: <DataSpan>{presentation}</DataSpan>
          </ProductData>
          <ProductData>
            Unidades disponibles: <DataSpan>{stock}</DataSpan>
          </ProductData>
          <ProductOptionButtons>
            {stock > 0 && <CirclePlusButton onClick={onClickAddProductOrder} />}
          </ProductOptionButtons>
        </ProductInfoContainer>
      </ProductCardCenterContainer>
    </ProductCardContainer>
  );
};

export default OrderProductCard;
