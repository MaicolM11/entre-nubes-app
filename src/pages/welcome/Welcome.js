import React from "react";
import "./Welcome.css";
import styled from "styled-components";
import { colors } from "../../components/styles/colors";

const WelcomeContainer = styled.div`
  display: flex;
  width: 790px;
  height: 619px;
  background-color: ${colors.secondary};
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const WelcomeCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const WelcomeImgContainer = styled.div`
  display: flex;
  width: 375px;
  height: 375px;
  background-color: darkgoldenrod;
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 119px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: darkkhaki;
`;

const WelcomeBoldTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 432px;
  height: 61px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: darkcyan;
`;

const WelcomeSystemTitleLabel = styled.label`
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const WelcomeSystemTextLabel = styled.label`
  text-align: center;
  line-height: 21px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

const Welcome = ({ img, title, subTitle, description }) => {
  return (
    <div className="welcome-container">
      <WelcomeContainer>
        <WelcomeCenterContainer>
          <WelcomeImgContainer>{img}</WelcomeImgContainer>
          <WelcomeTextContainer>
            <WelcomeBoldTextContainer>
              <WelcomeSystemTitleLabel>{title}</WelcomeSystemTitleLabel>
              <WelcomeSystemTitleLabel>{subTitle}</WelcomeSystemTitleLabel>
            </WelcomeBoldTextContainer>
            <WelcomeSystemTextLabel>{description}</WelcomeSystemTextLabel>
          </WelcomeTextContainer>
        </WelcomeCenterContainer>
      </WelcomeContainer>
    </div>
  );
};

export default Welcome;
