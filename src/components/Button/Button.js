import React from 'react';
import "./Button.css";

const Button = ({ icon, text, color, handleOnClick }) => {
  return (
    <button className="button" style={{backgroundColor: color}} onClick={handleOnClick}>
      <img src={icon} alt="img-button" className="icon-container"></img>
      <label className="text-container">{text}</label>
      
    </button>
  );
};

export default Button;
