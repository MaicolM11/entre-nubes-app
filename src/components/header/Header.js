import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom: solid 1px ${colors.border};
`;

const HeaderCenterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 26px 45px;
  gap: 25px;
`;

const HeaderTitle = styled.span`
  color: ${colors.text};
  font-family: var(--roboto);
  font-size: 28px;
  font-weight: bold;
`;

const HeaderSeparator = styled.div`
  width: 1px;
  height: 25px;
  background-color: ${colors.border};
`;

const HeaderDescription = styled.span`
  color: ${colors.text};
  font-family: var(--roboto);
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Header = ({ title, description, component }) => {
  return (
    <HeaderContainer>
      <HeaderCenterContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSeparator />
        <HeaderDescription>{description}</HeaderDescription>
        <HeaderComponent>{component}</HeaderComponent>
      </HeaderCenterContainer>
    </HeaderContainer>
  );
};

export default Header;
