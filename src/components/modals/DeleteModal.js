import React from "react";
import { deleteProduct } from "../../services/product";
import { colors } from "../styles/colors";
import {
  ModalDeleteContainer,
  MessageDeleteContainer,
  MessageDeleteInfoContainer,
  ModalDeleteButtonsContainer,
} from "../styles/style-components";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import BorderButton from "../buttons/BorderButton";
import Button from "../buttons/Button";

const DeleteModal = ({ message, product, updateProducts, handleSetIsOpen }) => {
  const handleDeleteProduct = () => {
    deleteProduct(product._id).then(async () => {
      handleSetIsOpen();
      updateProducts();
    });
  };

  return (
    <ModalDeleteContainer>
      <MessageDeleteContainer>
        <Alert width="24" height="24" stroke={colors.delete} />
        <MessageDeleteInfoContainer>{message}</MessageDeleteInfoContainer>
      </MessageDeleteContainer>
      <ModalDeleteButtonsContainer>
        <BorderButton
          size="mediumBorderButton"
          text="Cancelar"
          onClick={handleSetIsOpen}
        />
        <Button
          size="mediumModalButton"
          theme="delete"
          text="Eliminar Producto"
          onClick={handleDeleteProduct}
        />
      </ModalDeleteButtonsContainer>
    </ModalDeleteContainer>
  );
};

export default DeleteModal;
