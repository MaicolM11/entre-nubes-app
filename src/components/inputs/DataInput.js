import React from "react";
import {
  InputContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
} from "../styles/style-components";

const DataInput = ({ size, icon, name, placeholder, type, onChange }) => {
  return (
    <InputContainer size={size}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </InputCenterContainer>
    </InputContainer>
  );
};

export default DataInput;
