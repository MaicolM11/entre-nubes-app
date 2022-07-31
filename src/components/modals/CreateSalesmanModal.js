import React, { useRef } from "react";
import { createUser } from "../../services/user";
import useCreateSalesmanForm from "../../validate-forms/useCreateSalesmanForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalBackground,
  ModalTitle,
  ErrorMessage,
  ErrorMessageContainer,
  ErrorMessageSpace,
} from "../styles/style-components";
import DataInput from "../inputs/DataInput";
import PasswordInput from "../inputs/PasswordInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import { useSpring, animated } from "react-spring";
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

const CreateSalesmanModal = ({
  info,
  isOpen,
  setIsOpen,
  openSuccessfulCreatedSalesmanModal,
  updateSalesmans,
}) => {
  const handleSubmitCreateCurrentSalesman = () => {
    createSalesman();
  };

  const {
    createSalesmanValues,
    handleChangeCreateSalesman,
    handleSubmitCreateSalesman,
    errors,
    clearCreateSalesmanValues,
  } = useCreateSalesmanForm(handleSubmitCreateCurrentSalesman);

  const createSalesman = () => {
    createUser(
      createSalesmanValues.fullname,
      createSalesmanValues.email,
      createSalesmanValues.password,
      createSalesmanValues.cc,
      createSalesmanValues.address,
      createSalesmanValues.phone,
      "SALESMAN"
    ).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateSalesmans();
        openSuccessfulCreatedSalesmanModal();
      } else {
        alert(data.message);
      }
    });
  };

  const handleSetIsOpen = () => {
    clearCreateSalesmanValues();
    setIsOpen((isOpen) => !isOpen);
  };

  const closeModal = (e) => {
    if (ref.current === e.target) {
      clearCreateSalesmanValues();
      setIsOpen(false);
    }
  };

  const ref = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <>
      {isOpen && (
        <ModalBackground ref={ref} onClick={closeModal}>
          <animated.div style={animation}>
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
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
                        onChange={handleChangeCreateSalesman}
                      />
                      {errors.repeatPassWord ? (
                        <ErrorMessage>{errors.repeatPassWord}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <Button
                      size="normalButton"
                      theme="ok"
                      text={info}
                      onClick={handleSubmitCreateSalesman}
                    />
                  </ProductModalFormOptionContainer>
                </ProductModalFormCenterContainer>
              </ProductModalFormContainer>
            </ProductModalContainer>
          </animated.div>
        </ModalBackground>
      )}
    </>
  );
};

export default CreateSalesmanModal;
