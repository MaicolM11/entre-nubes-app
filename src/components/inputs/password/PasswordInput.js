import React from 'react';
import "./PasswordInput.css";

import Lock from '../../../assets/icons/lock.svg';

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