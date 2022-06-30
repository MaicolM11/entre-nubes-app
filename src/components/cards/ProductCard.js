import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProduct } from "../../assets/images/empty-product.svg";
import { DataSpan } from "../styles/style-components";

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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
  margin: 25px 15px;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductCategory = styled.div`
  display: flex;
  max-width: 125px;
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

const ProductOptionButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

const ProductCard = ({
  image,
  brand,
  category,
  unitPrice,
  salePrice,
  presentation,
  stock,
  onClickStock,
  onClickEdit,
  onClickDelete,
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
            Precio por Unidad: <DataSpan>${unitPrice}</DataSpan>
          </ProductData>
          <ProductData>
            Precio de Venta: <DataSpan>${salePrice}</DataSpan>
          </ProductData>
          <ProductData>
            Presentación: <DataSpan>{presentation}</DataSpan>
          </ProductData>
          <ProductData>
            Unidades de Venta: <DataSpan>{stock}</DataSpan>
          </ProductData>
          <ProductOptionButtons>
            <Button
              size="smallButton"
              theme="highlighted"
              text="Unidades"
              onClick={onClickStock}
            />
            <Button
              size="smallButton"
              theme="edit"
              text="Editar"
              onClick={onClickEdit}
            />
            <Button
              size="smallButton"
              theme="delete"
              text="Eliminar"
              onClick={onClickDelete}
            />
          </ProductOptionButtons>
        </ProductInfoContainer>
      </ProductCardCenterContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
