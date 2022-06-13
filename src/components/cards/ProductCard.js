import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as EmptyProduct } from "../../assets/images/empty-product.svg";

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 515px;
  align-items: center;
  justify-content: center;
  background-color: darkgray;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 185px;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px ${colors.border};
  background-color: darkorange;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 85px;
  height: 85px;
`;

const InfoImageContainer = styled.label`
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: var(--roboto);
  text-align: center;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  width: 270px;
  height: 330px;
  background-color: red;
`;

const ProductCard = ({ image, name }) => {
  return (
    <ProductCardContainer>
      <ProductImageContainer>
        {!image ? <EmptyProduct fill={colors.brand} /> : image}
      </ProductImageContainer>
      <ProductInfoContainer>{name}</ProductInfoContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
