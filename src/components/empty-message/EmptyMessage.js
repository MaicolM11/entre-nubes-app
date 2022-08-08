import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const MessageContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const MessageCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
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

const MessageImgContainer = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
`;

const MessageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const MessageSystemTitleLabel = styled.label`
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

const MessageSystemTextLabel = styled.label`
  text-align: center;
  line-height: 21px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  font-family: var(--roboto);
`;

const EmptyMessage = ({ img, title, description }) => {
  return (
    <MessageContainer>
      <MessageCenterContainer>
        <MessageImgContainer>{img}</MessageImgContainer>
        <MessageTextContainer>
          <MessageSystemTitleLabel>{title}</MessageSystemTitleLabel>
          <MessageSystemTextLabel>{description}</MessageSystemTextLabel>
        </MessageTextContainer>
      </MessageCenterContainer>
    </MessageContainer>
  );
};

export default EmptyMessage;
