import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectContainer } from "../styles/style-components";
import { ReactComponent as Payment } from "../../assets/icons/payment.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/arrow-back.svg";
import CloseButton from "../buttons/CloseButton";
import ArrowButton from "../buttons/ArrowButton";
import Button from "../buttons/Button";
import PayModeSelect from "../select/PayModeSelect";

const PayModeModalContainer = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: ${colors.secondary};
`;

const PayModeModalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
  padding: 35px;
`;

const HeaderModal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-right: 15px;
`;

const payModes = [
  { mode: "Efectivo" },
  { mode: "Daviplata" },
  { mode: "Nequi" },
];

const PayModeModal = ({
  handleSubmitPayment,
  setIsOpen,
  isBack,
  handleBackPayOrder,
}) => {
  const defaultPayMode = "Modo de Pago";
  const [payMode, setPayMode] = useState(defaultPayMode);

  const handleSetIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <PayModeModalContainer>
      <PayModeModalDataContainer>
        <HeaderModal>
          {isBack && (
            <ButtonContainer>
              <ArrowButton
                icon={
                  <BackArrow fill={colors.brand} onClick={handleBackPayOrder} />
                }
              />
            </ButtonContainer>
          )}
          <ModalTitle>Modo de Pago</ModalTitle>
          <CloseButton onClick={handleSetIsOpen} />
        </HeaderModal>
        <SelectContainer>
          <PayModeSelect
            icon={<Payment width={25} height={25} />}
            dropdownTitle="Modo de Pagos"
            options={payModes}
            selectedOption={payMode}
            setSelectedOption={setPayMode}
          />
        </SelectContainer>
        <Button
          size="normalButton"
          theme="highlighted"
          text="Realizar Pago"
          onClick={() => handleSubmitPayment(payMode)}
        />
      </PayModeModalDataContainer>
    </PayModeModalContainer>
  );
};

export default PayModeModal;
