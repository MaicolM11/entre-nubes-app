import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";
import { ReactComponent as Add } from "../../assets/icons/add.svg";

const CirclePlusButtonContainer = styled.button`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.highlighted};
  border-radius: 50%;
  cursor: pointer;
`;

const CirclePlusButton = ({ onClick }) => {
  return (
    <CirclePlusButtonContainer onClick={onClick}>
      <IconContainer>
        <Add fill={colors.secondary} />
      </IconContainer>
    </CirclePlusButtonContainer>
  );
};

export default CirclePlusButton;
