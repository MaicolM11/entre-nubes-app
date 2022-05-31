import React from 'react';
import "./PasswordInput.css";

const PasswordInput = ({ placeholder, onChange }) => {
  return (
    <div className='input'>
      <Input
        type="password"
        name="user-password"
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default PasswordInput;