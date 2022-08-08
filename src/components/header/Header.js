import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { HeaderSeparator } from "../styles/style-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  border-bottom: solid 1px ${colors.border};
  background-color: ${colors.secondary};
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

const HeaderDescription = styled.span`
  color: ${colors.text};
  font-family: var(--roboto);
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  @media only screen and (max-width: 975px) {
    width: 100%;
    min-width: 100px;
    text-align: center;
    white-space: normal;
  }
`;

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media only screen and (max-width: 975px) {
    width: 10%;
  }
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
