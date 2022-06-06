import React from "react";
import "./InputStyle.css";

import { InputStyle } from "./InputStyle";

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div className="input">
      <button>Buscar</button>
      <InputStyle
        size="medium"
        type="text"
        name="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
