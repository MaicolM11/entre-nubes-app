import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  HeaderTitle,
  HeaderSeparator,
  DataSpan,
} from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import ProductListContainer from "../cards-container/ProductListContainer";

const OrderProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderProductListContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  gap: 25px;
  padding: 35px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid ${colors.border};
`;

const TotalPaymentContainer = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const OrderProductListModal = ({ bill, productsSale, handleCloseModal }) => {
  return (
    <OrderProductListContainer>
      <HeaderProductListContainer>
        <HeaderTitle>Productos</HeaderTitle>
        <HeaderSeparator />
        <TotalPaymentContainer>
          Total Pago: <DataSpan>${bill.total}</DataSpan>
        </TotalPaymentContainer>
        <CloseButton onClick={handleCloseModal} />
      </HeaderProductListContainer>
      <ProductListContainer productList={productsSale} />
    </OrderProductListContainer>
  );
};

export default OrderProductListModal;
