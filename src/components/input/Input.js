import React from 'react';
import "./Input.css";

import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 0 12px 0;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: normal;
  color: var(--text-color);
  font-family: var(--roboto);
  &::placeholder{color: var(--text-placeholder-color)};
`;

const TextInput = ({ type, name, icon, placeholder, onChange }) => {
  return (
    <div className='input'>
      <img
        src={icon}
        alt="icon"
        className="img"
      />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default TextInput;