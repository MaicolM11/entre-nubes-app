import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const CloseButtonContainer = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonContainer onClick={onClick}>
      <IconContainer>
        <Close fill={colors.brand} />
      </IconContainer>
    </CloseButtonContainer>
  );
};

export default CloseButton;
