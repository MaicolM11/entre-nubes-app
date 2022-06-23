import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";
import OrderProductCardsContainer from "../cards-container/OrderProductCardsContainer";

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1205px;
  height: 675px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CreateOrderModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: solid 1px ${colors.border};
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const OrderOptionsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductsContainer = styled.div`
  display: flex;
`;

const ProductsCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: darkorchid;
  margin: 25px;
  gap: 25px;
`;

const ProductsFilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  min-height: 60px;
  background-color: magenta;
`;

const ProductsCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  background-color: red;
`;

const OrdersContainer = styled.div`
  display: flex;
  width: 630px;
`;

const OrdersCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: darkorchid;
  margin: 25px;
  gap: 25px;
`;

const OrderPlaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  min-height: 60px;
  background-color: magenta;
`;

const OrderTableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  background-color: darkslateblue;
`;

const CreateOrderModal = ({ products, handleCloseModal }) => {
  return (
    <CreateOrderModalContainer>
      <CreateOrderModalTitleContainer>
        <ModalTitle>Agregar Pedido</ModalTitle>
        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            onClick={handleCloseModal}
          />
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Agregar Pedido"
            //   onClick={handleDeleteProduct}
          />
        </ButtonsContainer>
      </CreateOrderModalTitleContainer>
      <OrderOptionsContainer>
        <ProductsContainer>
          <ProductsCenterContainer>
            <ProductsFilterContainer></ProductsFilterContainer>
            <ProductsCardContainer>
              <OrderProductCardsContainer products={products} />
            </ProductsCardContainer>
          </ProductsCenterContainer>
        </ProductsContainer>
        <OrdersContainer>
          <OrdersCenterContainer>
            <OrderPlaceContainer></OrderPlaceContainer>
            <OrderTableContainer></OrderTableContainer>
          </OrdersCenterContainer>
        </OrdersContainer>
      </OrderOptionsContainer>
    </CreateOrderModalContainer>
  );
};

export default CreateOrderModal;
