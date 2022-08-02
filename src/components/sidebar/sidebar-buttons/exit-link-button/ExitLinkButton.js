import React from "react";
import "./ExitLinkButton.scss";
import { Link } from "react-router-dom";
import {
  SidebarButtonContainer,
  SidebarButtonIconContainer,
} from "../../../styles/style-components";

const ExitLinkButton = ({ path, icon, text, handleClearLocalStorage }) => {
  return (
    <Link
      to={path}
      className="default-exit-link"
      onClick={handleClearLocalStorage}
    >
      <SidebarButtonContainer>
        <SidebarButtonIconContainer>{icon}</SidebarButtonIconContainer>
        <div>{text}</div>
      </SidebarButtonContainer>
    </Link>
  );
};

export default ExitLinkButton;
