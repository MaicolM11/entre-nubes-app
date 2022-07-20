import React from "react";
import "./MenuStatus.css";
import styled from "styled-components";
import { colors } from "../../components/styles/colors";

const MenuStatusContainer = styled.div`
  display: flex;
  min-width: 700px;
  width: 925px;
  min-height: 600px;
  height: 625px;
  background-color: ${colors.secondary};
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const MenuStatusCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const MenuStatusImgContainer = styled.div`
  display: flex;
`;

const MenuStatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const MenuStatusBoldTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const MenuStatusSystemTitleLabel = styled.label`
  text-transform: uppercase;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const MenuStatusSystemTextLabel = styled.label`
  text-align: center;
  line-height: 21px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

const MenuStatus = ({ img, title, description }) => {
  return (
    <div className="menu-status-container">
      <MenuStatusContainer>
        <MenuStatusCenterContainer>
          <MenuStatusImgContainer>{img}</MenuStatusImgContainer>
          <MenuStatusTextContainer>
            <MenuStatusBoldTextContainer>
              <MenuStatusSystemTitleLabel>{title}</MenuStatusSystemTitleLabel>
            </MenuStatusBoldTextContainer>
            <MenuStatusSystemTextLabel>{description}</MenuStatusSystemTextLabel>
          </MenuStatusTextContainer>
        </MenuStatusCenterContainer>
      </MenuStatusContainer>
    </div>
  );
};

export default MenuStatus;
