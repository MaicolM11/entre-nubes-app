import React from "react";
import {
  InputContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
} from "../styles/style-components";

const DataInput = ({
  size,
  icon,
  isStroke,
  isFill,
  type,
  name,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <InputContainer size={size} isStroke={isStroke} isFill={isFill}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          size={size}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </InputCenterContainer>
    </InputContainer>
  );
};

export default DataInput;
