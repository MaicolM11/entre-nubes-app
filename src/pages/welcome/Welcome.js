import React from "react";
import styled from "styled-components";
import { colors } from "../../components/styles/colors";
import "./Welcome.css";

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
  width: 100%;
  padding: 50px 100px;
`;

const Welcome = () => {
  return (
    <div className="welcome-container">
      <WelcomeContainer>
        <WelcomeCenterContainer></WelcomeCenterContainer>
      </WelcomeContainer>
    </div>
  );
};

export default Welcome;
