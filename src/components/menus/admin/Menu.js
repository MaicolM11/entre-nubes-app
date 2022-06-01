import React from 'react';
import "./Menu.css";

import Logo from '../../../assets/images/logo-250-140.png';

const Menu = () => {
    return (
        <div className='admin-menu'>
            <div className='admin-menu-container'>
                <div className='logo-menu-container'>
                    <img
                        src={Logo}
                        alt="entre-nubes"
                        className="logo-menu"
                    />
                </div>
                <div className='separator-menu'></div>

                <div className='buttons-menu-container'>

                </div>
            </div>
        </div>
    );
};

export default Menu;