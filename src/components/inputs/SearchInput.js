import React from 'react';
import "./InputStyle.css";

import { Input } from './InputStyle';

import Lock from '../../assets/icons/lock.svg';

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div className='input'>
      <button>()-</button>
      <Input
        size= 'medium'
        type="text"
        name="search"
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  );
};

export default SearchInput;