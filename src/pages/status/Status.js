import React from "react";
import { useNavigate } from "react-router-dom";

import "./Status.css";
import styled from "styled-components";
import { colors } from "../../components/styles/colors";
import Button from "../../components/buttons/Button";

const StatusContainer = styled.div`
  display: flex;
  min-width: 1100px;
  width: 1125px;
  min-height: 600px;
  height: 625px;
  background-color: ${colors.secondary};
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const StatusCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 250px;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const StatusImgContainer = styled.div`
  display: flex;
`;

const StatusTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const StatusBoldTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StatusSystemTitleLabel = styled.label`
  text-transform: uppercase;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const StatusSystemTextLabel = styled.label`
  text-align: center;
  line-height: 21px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

const Status = ({ img, title, description }) => {
  const navigate = useNavigate();

  const handleSubmitBackLogin = () => {
    navigate("/");
  };

  return (
    <div className="status-container">
      <StatusContainer>
        <StatusCenterContainer>
          <StatusImgContainer>{img}</StatusImgContainer>
          <StatusTextContainer>
            <StatusBoldTextContainer>
              <StatusSystemTitleLabel>{title}</StatusSystemTitleLabel>
            </StatusBoldTextContainer>
            <StatusSystemTextLabel>{description}</StatusSystemTextLabel>
            <Button
              size="normalMediumButton"
              theme="highlighted"
              text="Regresar al Bar"
              onClick={handleSubmitBackLogin}
            />
          </StatusTextContainer>
        </StatusCenterContainer>
      </StatusContainer>
    </div>
  );
};

export default Status;
