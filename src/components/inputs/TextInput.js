import React from 'react';
import "./InputStyle.css";

import { Input } from './InputStyle';

const TextInput = ({ type, name, icon, placeholder, onChange }) => {
  return (
    <div className='input'>
      <img
        src={icon}
        alt="icon"
        className="img"
      />
      <Input
        size='normal'
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default TextInput;