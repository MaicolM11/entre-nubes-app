import React from 'react';
import "./CloseButton.css"

import Close from '../../../assets/icons/close.svg';

function CloseButton({ handleOnClick }) {
    return (
        <button className='close-button' onClick={handleOnClick}>
            <img src={Close} alt="icon" className='close-image' />
        </button>
    );
};

export default CloseButton;