import React from "react";
import useDebtorForm from "../../validate-forms/useDebtorForm";
import { createDebtor } from "../../services/debtor";

import styled from "styled-components";
import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import {
  ModalFormOptionContainer,
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
} from "../styles/style-components";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as IdIcon } from "../../assets/icons/id-card.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";

const CreateDebtorModalContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px;
  gap: 35px;
`;

const HeaderModal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CreateDebtorModal = ({
  setIsOpen,
  setIsOpenSuccessfulModal,
  updateDebtors,
}) => {
  const handleSubmitDebtor = () => {
    createCurrentDebtor();
  };

  const {
    createDebtorValues,
    handleChangeCreateDebtor,
    handleSubmitCreateDebtor,
    errors,
    clearCreateDebtorValues,
  } = useDebtorForm(handleSubmitDebtor);

  const handleCloseModal = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
    setIsOpenSuccessfulModal((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    clearCreateDebtorValues();
  };

  const createCurrentDebtor = () => {
    createDebtor(
      createDebtorValues.fullName,
      createDebtorValues.cc,
      createDebtorValues.phone
    ).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateDebtors();
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <CreateDebtorModalContainer>
      <CenterContainer>
        <HeaderModal>
          <ModalTitle>Agregar Deudor</ModalTitle>
          <CloseButton onClick={handleCloseModal} />
        </HeaderModal>
        <ModalFormOptionContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              name="fullName"
              icon={<UserIcon />}
              isStroke={true}
              isFill={false}
              placeholder="Nombre completo"
              type="text"
              onChange={handleChangeCreateDebtor}
            />
            {errors.fullName ? (
              <ErrorMessage>{errors.fullName}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              name="cc"
              icon={<IdIcon />}
              isFill={true}
              placeholder="Documento de identidad"
              type="text"
              onChange={handleChangeCreateDebtor}
            />
            {errors.cc ? (
              <ErrorMessage>{errors.cc}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              name="phone"
              icon={<PhoneIcon />}
              isFill={true}
              placeholder="Teléfono"
              type="text"
              onChange={handleChangeCreateDebtor}
            />
            {errors.phone ? (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme="ok"
            text="Agregar Deudor"
            onClick={handleSubmitCreateDebtor}
          />
        </ModalFormOptionContainer>
      </CenterContainer>
    </CreateDebtorModalContainer>
  );
};

export default CreateDebtorModal;
