import React from "react";
import "./InputStyle.css";

import { InputStyle } from "./InputStyle";

const TextInput = ({ type, name, icon, placeholder, onChange }) => {
  return (
    <div className="input">
      <img src={icon} alt="icon" className="input-icon" />
      <InputStyle
        size="normal"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
