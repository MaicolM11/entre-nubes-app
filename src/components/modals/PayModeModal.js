import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectContainer } from "../styles/style-components";
import { ReactComponent as Payment } from "../../assets/icons/payment.svg";
import CloseButton from "../buttons/CloseButton";
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

const payModes = [
  { mode: "Efectivo" },
  { mode: "Daviplata" },
  { mode: "Nequi" },
];

const PayModeModal = ({
  handleSubmitPayment,
  setIsOpen,
  handleBackPayOrder,
}) => {
  const defaultPayMode = "Modo de Pago";
  const [payMode, setPayMode] = useState(defaultPayMode);

  return (
    <PayModeModalContainer>
      <PayModeModalDataContainer>
        <HeaderModal>
          <ModalTitle>Modo de Pago</ModalTitle>
          <CloseButton onClick={handleBackPayOrder} />
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
