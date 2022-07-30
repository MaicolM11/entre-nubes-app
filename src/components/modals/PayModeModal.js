import React, { useEffect, useState } from "react";
import { getPaymentMethods } from "../../services/bill";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  HeaderModal,
  ModalTitle,
  SelectContainer,
} from "../styles/style-components";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as Payment } from "../../assets/icons/payment.svg";
import BackButton from "../buttons/ArrowButton";
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

const PayModeModal = ({ handleSubmitPayment, handleBackOrderOptions }) => {
  const defaultPayMode = "Modo de Pago";
  const [payMode, setPayMode] = useState(defaultPayMode);
  const [paymentMethods, setPaymentMethods] = useState([]);

  const getAllPaymentMethods = () => {
    getPaymentMethods().then(async (res) => {
      setPaymentMethods(await res.json());
    });
  };

  useEffect(() => {
    getAllPaymentMethods();
  }, []);

  return (
    <PayModeModalContainer>
      <PayModeModalDataContainer>
        <HeaderModal>
          <BackButton
            icon={
              <BackArrowIcon
                fill={colors.brand}
                onClick={handleBackOrderOptions}
              />
            }
          />
          <ModalTitle>Modo de Pago</ModalTitle>
        </HeaderModal>
        <SelectContainer>
          <PayModeSelect
            icon={<Payment width={25} height={25} />}
            dropdownTitle="Modo de Pagos"
            options={paymentMethods}
            selectedOption={payMode}
            setSelectedOption={setPayMode}
          />
        </SelectContainer>
        <Button
          size="normalButton"
          theme="ok"
          text="Realizar Pago"
          onClick={() => handleSubmitPayment(payMode)}
        />
      </PayModeModalDataContainer>
    </PayModeModalContainer>
  );
};

export default PayModeModal;
