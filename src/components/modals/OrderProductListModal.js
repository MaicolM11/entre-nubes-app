import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  HeaderTitle,
  HeaderSeparator,
  DataSpan,
  HeaderModal,
} from "../styles/style-components";
import BackButton from "../buttons/ArrowButton";
import CloseButton from "../buttons/CloseButton";
import ProductListContainer from "../cards-container/ProductListContainer";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/arrow-back.svg";

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

const OrderProductListModal = ({
  isDebtor,
  bill,
  productsSale,
  handleCloseModal,
}) => {
  return (
    <OrderProductListContainer>
      <HeaderProductListContainer>
        <HeaderModal>
          {isDebtor && (
            <BackButton
              icon={
                <BackArrowIcon fill={colors.brand} onClick={handleCloseModal} />
              }
            />
          )}
          <HeaderTitle>Productos</HeaderTitle>
        </HeaderModal>
        <HeaderSeparator />
        <TotalPaymentContainer>
          Total Pago: <DataSpan>${bill.total}</DataSpan>
        </TotalPaymentContainer>
        {!isDebtor && <CloseButton onClick={handleCloseModal} />}
      </HeaderProductListContainer>
      <ProductListContainer productList={productsSale} />
    </OrderProductListContainer>
  );
};

export default OrderProductListModal;
