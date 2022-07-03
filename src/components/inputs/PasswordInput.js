import React, { useRef, useState } from "react";
import { ReactComponent as Eye } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "../../assets/icons/eye-off.svg";
import {
  InputPasswordContainer,
  InputCenterContainer,
  IconContainer,
  InputValueContainer,
  ShowPasswordButton,
} from "../styles/style-components";

const PasswordInput = ({ size, icon, name, placeholder, onChange }) => {
  const ref = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    ref.current.focus();
    setShowPassword(!showPassword);
  };

  return (
    <InputPasswordContainer size={size}>
      <InputCenterContainer>
        <IconContainer>{icon}</IconContainer>
        <InputValueContainer
          name={name}
          ref={ref}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
        />
        <ShowPasswordButton onClick={handleShowPassword}>
          {showPassword ? <EyeOff /> : <Eye />}
        </ShowPasswordButton>
      </InputCenterContainer>
    </InputPasswordContainer>
  );
};

export default PasswordInput;
