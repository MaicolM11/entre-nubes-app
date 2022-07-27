import React from "react";
import { ButtonContainer } from "../styles/style-components";
import { ReactComponent as CashRegister } from "../../assets/icons/cash-register.svg";

const CloseBarButton = ({ size, theme, text, onClick }) => {
  return (
    <ButtonContainer size={size} theme={theme} onClick={onClick}>
      <CashRegister width={25} height={25} fill="white" />
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default CloseBarButton;
