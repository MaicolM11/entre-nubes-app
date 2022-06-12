import React from "react";
import {
  InputContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
} from "../styles/style-components";

const DataInput = ({
  width,
  icon,
  placeholder,
  type,
  iconColor,
  setIconColor,
  onChange,
}) => {
  const handleChangeIconColor = () => {
    setIconColor(!iconColor);
  };

  return (
    <InputContainer widthSize={width}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          placeholder={placeholder}
          type={type}
          onFocus={() => handleChangeIconColor()}
          onBlur={() => handleChangeIconColor()}
          onChange={onChange}
        />
      </InputCenterContainer>
    </InputContainer>
  );
};

export default DataInput;
