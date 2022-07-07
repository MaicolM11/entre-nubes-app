import React from "react";
import { deleteUser } from "../../services/user";
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

const DeleteModal = ({
  isProduct,
  message,
  buttonMessage,
  data,
  update,
  handleCloseModal,
}) => {
  const handleDeleteProduct = () => {
    if (isProduct) {
      deleteProduct(data._id).then(async () => {
        handleCloseModal();
        update();
      });
    } else {
      deleteUser(data._id).then(async () => {
        handleCloseModal();
        update();
      });
    }
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
          onClick={handleCloseModal}
        />
        <Button
          size="mediumModalButton"
          theme="delete"
          text={buttonMessage}
          onClick={handleDeleteProduct}
        />
      </ModalDeleteButtonsContainer>
    </ModalDeleteContainer>
  );
};

export default DeleteModal;
