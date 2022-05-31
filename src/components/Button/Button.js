import React from 'react';
import "./Button.css";

const Button = ({ text, color, textColor, width,height, handleOnClick }) => {
  return (
    <button className="button-test" 
     style={{backgroundColor: color,color:textColor, width: width, height:height}}
     onClick={handleOnClick}>
      <label className="text-container">{text}</label>
    </button>
  );
};

export default Button;
