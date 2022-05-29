import React from 'react';
import "./Button.css";

const Button = ({ text, color,width,height, handleOnClick }) => {
  return (
    <button className="button-test" 
     style={{backgroundColor: color, width: width, height:height}}
     onClick={handleOnClick}>
      <label className="text-container">{text}</label>
    </button>
  );
};

export default Button;
