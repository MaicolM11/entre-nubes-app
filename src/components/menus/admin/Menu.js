import React from 'react';
import "./Menu.css";

import Logo from '../../../assets/images/logo-250-140.png';
import { Link } from 'react-router-dom';

const MenuPages = [
    {
        title: "Pedidos",
        path: "orders",
        icon: "",
    },
    {
        title: "Reportes",
        path: "reports",
        icon: "",
    },
    {
        title: "Productos",
        path: "products",
        icon: "",
    },
    {
        title: "Colaboradores",
        path: "employees",
        icon: "",
    },
    {
        title: "Boliranas",
        path: "boliranas",
        icon: "",
    }
]

const Menu = () => {
    return (
        <div className='admin-menu-container'>
            <div className='admin-menu-components'>
                <div className='logo-menu-container'>
                    <img
                        src={Logo}
                        alt="entre-nubes"
                        className="logo-menu"
                    />
                </div>
                <div className='separator-menu' />
                <div className='buttons-menu-container'>
                    {Object.values(MenuPages).map((button, i) => (
                        <button key={i}>
                            <Link to={button.path}>
                                <span>{button.title}</span>
                            </Link>
                        </button>
                    ))}
                </div>
                <div className='separator-menu' />
            </div>
        </div>
    );
};
export default Menu;