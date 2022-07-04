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
  height: 598px;
  border-radius: 16px;
  background-color: ${colors.secondary};
`;
const HeaderProductListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 35px;
`;

const TotalPaymentContainer = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const OrderProductsListModal = ({ bill, handleCloseModal }) => {
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
      <ProductListContainer productList={bill.sales} />
    </OrderProductListContainer>
  );
};

export default OrderProductsListModal;
