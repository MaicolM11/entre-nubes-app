import React from "react";
import { createBolirana } from "../../services/bolirana";
import useAddBolirana from "../../validate-forms/useAddBolirana";

import styled from "styled-components";
import { colors } from "../styles/colors";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import { ModalTitle } from "../styles/style-components";
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

const CreateBoliranaModal = ({ setIsOpenAddBolirana }) => {
  const handleSetIsOpen = () => {
    setIsOpenAddBolirana((isOpen) => !isOpen);
    clearIncreaseNumberBoliranaValue();
  };

  const handleSubmitBolirana = () => {
    createBolirana(`Bolirana ${numberValue.number}`).then(async () => {
      handleSetIsOpen();
    });
  };

  const {
    numberValue,
    handleChangeNumberBolirana,
    handleSubmitNumberBolirana,
    errors,
    clearIncreaseNumberBoliranaValue,
  } = useAddBolirana(handleSubmitBolirana);

  return (
    <AddBoliranaModalContainer>
      <HeaderModalContainer>
        <ModalTitle>Crear Bolirana</ModalTitle>
        <CloseButton onClick={handleSetIsOpen} />
      </HeaderModalContainer>
      <ModalContainer>
        <ModalInfoContainer>
          <DataInput
            size="normalInput"
            icon={<Frog />}
            isFill={true}
            type="text"
            name="number"
            placeholder="Número de la bolirana"
            onChange={handleChangeNumberBolirana}
          />
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

export default CreateBoliranaModal;
