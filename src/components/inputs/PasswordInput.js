import React, { useRef, useState } from "react";
import { colors } from "../styles/colors";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "../../assets/icons/eye-off.svg";
import {
  InputContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
  ShowPasswordButton,
} from "../styles/style-components";

const PasswordInput = ({
  data,
  size,
  icon,
  placeholder,
  iconColor,
  setIconColor,
  onChange,
}) => {
  const ref = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const color = iconColor ? colors.highlighted : colors.placeholder;

  const handleShowPassword = () => {
    ref.current.focus();
    setShowPassword(!showPassword);
  };

  const handleChangeIconColor = () => {
    setIconColor(!iconColor);
  };

  return (
    <InputContainer size={size}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          name={data}
          ref={ref}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          onFocus={() => handleChangeIconColor()}
          onBlur={() => handleChangeIconColor()}
          onChange={onChange}
        />
        <ShowPasswordButton onClick={handleShowPassword}>
          {showPassword ? (
            <EyeOff fill={color} stroke={color} />
          ) : (
            <Eye stroke={color} />
          )}
        </ShowPasswordButton>
      </InputCenterContainer>
    </InputContainer>
  );
};

export default PasswordInput;
