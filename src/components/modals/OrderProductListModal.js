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
  min-width: 1000px;
  min-height: 600px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderProductListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 35px;
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
