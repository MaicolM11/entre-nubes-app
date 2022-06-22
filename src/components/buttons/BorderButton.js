import React from "react";
import { BorderButtonContainer } from "../styles/style-components";

const BorderButton = ({ size, text, onClick }) => {
  return (
    <BorderButtonContainer size={size} onClick={onClick}>
      <span>{text}</span>
    </BorderButtonContainer>
  );
};

export default BorderButton;
