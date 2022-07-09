import React from "react";
import useGuarantorForm from "../../validate-forms/useGuarantorForm";
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

const CreateGuarantorModalContainer = styled.div`
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

const CreateGuarantorModal = ({ setIsOpen, updateGuarantors }) => {
  const handleSubmitGuarantor = () => {
    createGuarantor();
  };

  const {
    createGuarantorValues,
    handleChangeCreateGuarantor,
    handleSubmitCreateGuarantor,
    errors,
    clearCreateGuarantorValues,
  } = useGuarantorForm(handleSubmitGuarantor);

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    clearCreateGuarantorValues();
  };

  const createGuarantor = () => {
    createDebtor(
      createGuarantorValues.fullName,
      createGuarantorValues.cc,
      createGuarantorValues.phone
    ).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateGuarantors();
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <CreateGuarantorModalContainer>
      <CenterContainer>
        <HeaderModal>
          <ModalTitle>Agregar Fiador</ModalTitle>
          <CloseButton onClick={handleSetIsOpen} />
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
              onChange={handleChangeCreateGuarantor}
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
              onChange={handleChangeCreateGuarantor}
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
              onChange={handleChangeCreateGuarantor}
            />
            {errors.phone ? (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme="highlighted"
            text="Agregar Fiador"
            onClick={handleSubmitCreateGuarantor}
          />
        </ModalFormOptionContainer>
      </CenterContainer>
    </CreateGuarantorModalContainer>
  );
};

export default CreateGuarantorModal;
