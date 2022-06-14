import React from "react";
import {
  InputContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
} from "../styles/style-components";

const DataInput = ({
  data,
  size,
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
    <InputContainer size={size}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          name={data}
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
