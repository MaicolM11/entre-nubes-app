import React from "react";
import "./Welcome.css";
import styled from "styled-components";
import { colors } from "../../components/styles/colors";

const WelcomeContainer = styled.div`
  display: flex;
  margin: 25px;
  background-color: ${colors.secondary};
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const WelcomeCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media only screen and (max-width: 975px) {
    padding: 25px 50px;
  }

  @media only screen and (max-width: 875px) {
    padding: 10px 25px;
  }

  @media only screen and (max-width: 825px) {
    padding: 5px 15px;
  }
`;

const WelcomeImgContainer = styled.div`
  display: flex;
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const WelcomeBoldTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const WelcomeSystemTitleLabel = styled.label`
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;

  @media only screen and (max-width: 825px) {
    text-align: center;
    white-space: normal;
  }
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
