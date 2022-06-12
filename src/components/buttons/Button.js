import React from "react";
import { ButtonContainer, IconContainer } from "../styles/style-components";

const Button = ({ width, theme, icon, text, onClick }) => {
  return (
    <ButtonContainer widthSize={width} theme={theme} onClick={onClick}>
      {icon ? <IconContainer>{icon}</IconContainer> : null}
      <span>{text}</span>
    </ButtonContainer>
  );
};

export default Button;
