import React from "react";
import { colors } from "../styles/colors";
import {
  ModalDeleteContainer,
  MessageDeleteContainer,
  MessageInfoContainer,
  ModalDeleteButtonsContainer,
} from "../styles/style-components";
import { ReactComponent as Alert } from "../../assets/icons/alert.svg";
import BorderButton from "../buttons/BorderButton";
import Button from "../buttons/Button";

const DeleteModal = ({
  message,
  buttonMessage,
  handleCloseModal,
  handleSubmitDelete,
}) => {
  return (
    <ModalDeleteContainer>
      <MessageDeleteContainer>
        <Alert width="24" height="24" stroke={colors.delete} />
        <MessageInfoContainer>{message}</MessageInfoContainer>
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
          onClick={handleSubmitDelete}
        />
      </ModalDeleteButtonsContainer>
    </ModalDeleteContainer>
  );
};

export default DeleteModal;
