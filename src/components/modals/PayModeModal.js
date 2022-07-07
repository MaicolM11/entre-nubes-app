import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle, SelectContainer } from "../styles/style-components";
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

const PayModeModal = (handleSubmitPayment) => {
  const defaultPayMode = "Modo de Pago";
  const [payMode, setPayMode] = useState(defaultPayMode);

  return (
    <PayModeModalContainer>
      <PayModeModalDataContainer>
        <HeaderModal>
          <ModalTitle>Modo de Pago</ModalTitle>
          <CloseButton />
        </HeaderModal>
        <SelectContainer>
          <PayModeSelect
            titleOptions="Modo de Pagos"
            payModes={payModes}
            payMode={payMode}
            setPayMode={setPayMode}
          />
        </SelectContainer>
        <Button
          size="normalButton"
          theme="highlighted"
          text="Realizar Pago"
          // onClick={handleSubmitPayment}
        />
      </PayModeModalDataContainer>
    </PayModeModalContainer>
  );
};

export default PayModeModal;
