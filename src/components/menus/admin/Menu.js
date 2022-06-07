import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

import MenuButton from "../../buttons/menu-button/MenuButton";

import EntreNubesLogo from "../../../assets/images/logo-250-140.png";
import { ReactComponent as BasketShopping } from "../../../assets/icons/basket-shopping.svg";

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
  },
];

const Menu = () => {
  return (
    <div className="admin-menu-container">
      <div className="admin-menu-components">
        <div className="logo-menu-container">
          <img
            src={EntreNubesLogo}
            alt="entre-nubes-logo"
            className="logo-menu"
          />
        </div>
        <div className="separator-menu" />
        <div className="buttons-menu-container">
          {Object.values(MenuPages).map((button, i) => (
            <Link key={i} to={button.path}>
              <MenuButton
                icon={<BasketShopping fill="red" />}
                text={button.title}
              />
            </Link>
          ))}
        </div>
        <div className="separator-menu" />
      </div>
    </div>
  );
};
export default Menu;
