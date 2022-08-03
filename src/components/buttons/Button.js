import React from "react";
import { ButtonContainer, IconContainer } from "../styles/style-components";

const Button = ({ size, theme, icon, text, onClick, isDisable }) => {
  return (
    <ButtonContainer
      size={size}
      theme={theme}
      onClick={onClick}
      isDisable={isDisable}
    >
      {icon ? <IconContainer>{icon}</IconContainer> : null}
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default Button;
