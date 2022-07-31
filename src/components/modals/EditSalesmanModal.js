import React from "react";
import { editUser } from "../../services/user";
import useEditSalesmanForm from "../../validate-forms/useEditSalesmanForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalTitle,
  ErrorMessage,
  ErrorMessageContainer,
  ErrorMessageSpace,
} from "../styles/style-components";
import DataInput from "../inputs/DataInput";
import PasswordInput from "../inputs/PasswordInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as IdCardIcon } from "../../assets/icons/id-card.svg";

const ProductModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ModalTitleCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 35px;
`;

const ProductModalFormContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductModalFormCenterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 35px 35px 35px;
  gap: 35px;
`;

const ProductModalFormOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SalesmanModal = ({
  info,
  salesman,
  updateSalesmans,
  setIsOpen,
  openSuccessfulEditedSalesmanModal,
}) => {
  const handleSubmitEditCurrentSalesman = () => {
    editSalesman();
  };

  const {
    editSalesmanValues,
    handleChangeEditSalesman,
    handleSubmitEditSalesman,
    errors,
    clearEditSalesmanValues,
  } = useEditSalesmanForm(salesman, handleSubmitEditCurrentSalesman);

  const editSalesman = () => {
    editUser(
      salesman._id,
      editSalesmanValues.fullname,
      editSalesmanValues.email,
      editSalesmanValues.password,
      editSalesmanValues.cc,
      editSalesmanValues.address,
      editSalesmanValues.phone,
      "SALESMAN"
    ).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateSalesmans();
        openSuccessfulEditedSalesmanModal();
      } else {
        alert(data.message);
      }
    });
  };

  const handleSetIsOpen = () => {
    clearEditSalesmanValues();
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <ProductModalContainer>
      <ModalTitleContainer>
        <ModalTitleCenterContainer>
          <ModalTitle>{info}</ModalTitle>
          <CloseButton onClick={handleSetIsOpen} />
        </ModalTitleCenterContainer>
      </ModalTitleContainer>
      <ProductModalFormContainer>
        <ProductModalFormCenterContainer>
          <ProductModalFormOptionContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<UserIcon />}
                isStroke={true}
                type="text"
                name="fullname"
                placeholder="Usuario"
                defaultValue={salesman ? salesman.fullname : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.fullname ? (
                <ErrorMessage>{errors.fullname}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<IdCardIcon />}
                isFill={true}
                type="text"
                name="cc"
                placeholder="Documento de identidad"
                defaultValue={salesman ? salesman.cc : ""}
                onChange={handleChangeEditSalesman}
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
                icon={<PhoneIcon />}
                isFill={true}
                type="text"
                name="phone"
                placeholder="Teléfono"
                defaultValue={salesman ? salesman.phone : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.phone ? (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<EmailIcon />}
                isFill={true}
                type="text"
                name="email"
                placeholder="Correo electrónico"
                defaultValue={salesman ? salesman.email : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<LocationIcon />}
                isFill={true}
                type="text"
                name="address"
                placeholder="Dirección"
                defaultValue={salesman ? salesman.address : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.address ? (
                <ErrorMessage>{errors.address}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <PasswordInput
                name="password"
                size="normalInput"
                icon={<LockIcon stroke={colors.brand} />}
                placeholder="Contraseña"
                defaultValue={salesman ? salesman.password : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <PasswordInput
                name="repeatPassWord"
                size="normalInput"
                icon={<LockIcon stroke={colors.brand} />}
                placeholder="Confirmar contraseña"
                defaultValue={salesman ? salesman.password : ""}
                onChange={handleChangeEditSalesman}
              />
              {errors.repeatPassWord ? (
                <ErrorMessage>{errors.repeatPassWord}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <Button
              size="normalButton"
              theme="highlighted"
              text={info}
              onClick={handleSubmitEditSalesman}
            />
          </ProductModalFormOptionContainer>
        </ProductModalFormCenterContainer>
      </ProductModalFormContainer>
    </ProductModalContainer>
  );
};

export default SalesmanModal;
