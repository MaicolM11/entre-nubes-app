import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import EntreNubesLogo from "../../assets/images/entre-nubes-logo-250w-140h.png";
import NavLinkButton from "./sidebar-buttons/navlink-button/NavLinkButton";
import ExitLinkButton from "./sidebar-buttons/exit-link-button/ExitLinkButton";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";

const SideBarContainer = styled.div`
  display: flex;
  width: 300px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border-right: solid 1px ${colors.border};
  background-color: ${colors.secondary};
`;

const SideBarCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px;
  gap: 25px;
`;

const SideBarLogoContainer = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: center;
`;

const SideBarSeparator = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${colors.border};
`;

const SideBarButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const SideBarOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  align-items: center;
  gap: 25px;
`;

const SideBarExitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = ({ links }) => {
  return (
    <SideBarContainer>
      <SideBarCenterContainer>
        <SideBarLogoContainer>
          <img src={EntreNubesLogo} alt="entre-nubes-logo" />
        </SideBarLogoContainer>
        <SideBarSeparator />
        <SideBarButtonsContainer>
          <SideBarOptionsContainer>
            {Object.values(links).map(({ path, icon, text }, i) => (
              <NavLinkButton key={i} path={path} icon={icon} text={text} />
            ))}
          </SideBarOptionsContainer>
          <SideBarSeparator />
          <SideBarExitContainer>
            <ExitLinkButton path="/" icon={<Exit />} text="Salir" />
          </SideBarExitContainer>
        </SideBarButtonsContainer>
      </SideBarCenterContainer>
    </SideBarContainer>
  );
};

export default Sidebar;
