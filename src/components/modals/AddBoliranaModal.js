import React from "react";
import { createBolirana } from "../../services/bolirana";
import useAddBolirana from "../../validate-forms/useAddBolirana";

import styled from "styled-components";
import { colors } from "../styles/colors";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import {
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
  ModalTitle,
} from "../styles/style-components";
import { ReactComponent as Frog } from "../../assets/icons/frog.svg";

const AddBoliranaModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 35px 0 35px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const AddBoliranaModal = ({
  setIsOpenAddBolirana,
  getBoliranasList,
  openSuccessfulModal,
}) => {
  const handleSubmitAddBolirana = () => {
    handleSubmitBolirana();
  };

  const {
    numberBoliranaValue,
    handleChangeNumberBolirana,
    handleSubmitNumberBolirana,
    errors,
    clearNumberBoliranaValue,
  } = useAddBolirana(handleSubmitAddBolirana);

  const handleSetIsOpen = () => {
    setIsOpenAddBolirana((isOpen) => !isOpen);
    clearNumberBoliranaValue();
  };

  const handleSubmitBolirana = () => {
    createBolirana(`Bolirana ${numberBoliranaValue.numberValue}`).then(
      async (res) => {
        const data = await res.json();
        if (res.ok) {
          getBoliranasList();
          handleSetIsOpen();
          openSuccessfulModal();
        } else {
          alert(data.message);
        }
      }
    );
  };

  return (
    <AddBoliranaModalContainer>
      <HeaderModalContainer>
        <ModalTitle>Agregar Bolirana</ModalTitle>
        <CloseButton onClick={handleSetIsOpen} />
      </HeaderModalContainer>
      <ModalContainer>
        <ModalInfoContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              icon={<Frog />}
              isFill={true}
              type="text"
              name="numberValue"
              placeholder="Número de bolirana"
              onChange={handleChangeNumberBolirana}
            />
            {errors.numberValue ? (
              <ErrorMessage>{errors.numberValue}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme="ok"
            text="Agregar Bolirana"
            onClick={handleSubmitNumberBolirana}
          />
        </ModalInfoContainer>
      </ModalContainer>
    </AddBoliranaModalContainer>
  );
};

export default AddBoliranaModal;
