import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import Button from "../buttons/Button";
import BorderButton from "../buttons/BorderButton";

const CreateOrderModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 630px;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CreateOrderModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const OrderOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 535px;
  background-color: darkmagenta;
`;

const CreateOrderModal = () => {
  return (
    <CreateOrderModalContainer>
      <CreateOrderModalTitleContainer>
        <ModalTitle>Agregar Pedido</ModalTitle>

        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            //   onClick={handleSetIsOpen}
          />
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Agregar Pedido"
            //   onClick={handleDeleteProduct}
          />
        </ButtonsContainer>
      </CreateOrderModalTitleContainer>
      <OrderOptionsContainer></OrderOptionsContainer>
    </CreateOrderModalContainer>
  );
};

export default CreateOrderModal;
