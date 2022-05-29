import React from 'react';
import "./Input.css";

const Input = ({ type, name, placeholder, icon, onChange }) => {
  return (
    <input 
        className='input'
        type={type}
        name={name}
        placeholder={placeholder} 
        onChange = {onChange}></input>
  );
};

export default Input;
