import React from 'react';
import "./MenuButton.css";

const MenuButton = ({ icon, text }) => {
    return (
        <button className='menu-button-container'>
            <div className='menu-button-icon-container'>
                <img src={icon} alt="icon" className="menu-button-icon"></img>
            </div>
            <span className='menu-button-text'>{text}</span>
        </button>
    );
};

export default MenuButton;