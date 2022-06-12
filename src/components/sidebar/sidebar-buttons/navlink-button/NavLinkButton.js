import React from "react";
import "./NavLinkButton.scss";
import { NavLink } from "react-router-dom";
import {
  SidebarButtonContainer,
  SidebarButtonIconContainer,
} from "../../../styles/style-components";

const NavLinkButton = ({ path, icon, text }) => {
  return (
    <NavLink to={path} className="default-navlink">
      <SidebarButtonContainer>
        <SidebarButtonIconContainer>{icon}</SidebarButtonIconContainer>
        <div>{text}</div>
      </SidebarButtonContainer>
    </NavLink>
  );
};

export default NavLinkButton;
