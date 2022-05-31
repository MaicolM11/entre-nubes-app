import React from 'react';
import "./InputStyle.css";

import { Input } from './InputStyle';

import Lock from '../../assets/icons/lock.svg';

const PasswordInput = ({ placeholder, onChange }) => {
  return (
    <div className='input'>
      <img
        src={Lock}
        alt="icon"
        className="img"
      />
      <Input
        type="password"
        name="password"
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default PasswordInput;