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
  type,
  name,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <InputContainer size={size}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
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
