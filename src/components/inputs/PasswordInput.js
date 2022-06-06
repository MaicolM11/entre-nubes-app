import React from "react";
import "./InputStyle.css";

import { InputStyle } from "./InputStyle";

import Lock from "../../assets/icons/lock.svg";

const PasswordInput = ({ placeholder, onChange }) => {
  return (
    <div className="input">
      <img src={Lock} alt="icon" className="input-icon" />
      <InputStyle
        size="normal"
        type="password"
        name="password"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordInput;
