import React from 'react';
import "./IconButton.css";

import styled from 'styled-components';

const theme = {
    option: {
        default: "#4674F2",
        hover: "#6F92F2"
    },
    ok: {
        default: "#2CE74A",
        hover: "#4FEF68"
    }
};

const size = {
    normal: {
        width: "405px"
    },
    medium: {
        width: "187px"
    }
};

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => size[props.size].width};
    height: 45px;
    background-color: ${props => theme[props.theme].default};
    font-family: var(--roboto);
    color: white;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    border-radius: 2rem;
    border:none;
    transition: 0.3s;
    &:hover{
        background-color: ${props => theme[props.theme].hover};
    }
`;

const IconButton = ({ icon, text, theme, size, handleOnClick }) => {
    return (
        <Button theme={theme} size={size} onClick={handleOnClick}>
            <div className='icon-button-container'>
                <img src={icon} alt="img-button" className="icon-button-container"></img>
                <span className='icon-button-text'>{text}</span>
            </div>
        </Button>
    );
};

export default IconButton;