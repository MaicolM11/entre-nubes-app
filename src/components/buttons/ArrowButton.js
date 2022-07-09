import React from "react";
import styled from "styled-components";
import { IconContainer } from "../styles/style-components";

const ButtonContainer = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const ArrowButton = ({ icon, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <IconContainer>{icon}</IconContainer>
    </ButtonContainer>
  );
};

export default ArrowButton;
