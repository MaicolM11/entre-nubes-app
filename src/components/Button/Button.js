import React from 'react';
import "./Button.css";

const Button = ({ text, color, handleOnClick }) => {
  return (
    <button className="button-test" style={{backgroundColor: color}} onClick={handleOnClick}>
      <label className="text-container">{text}</label>
    </button>
  );
};

export default Button;
