import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const colorState = {
  OCUPADA: {
    color: `${colors.edit}`,
  },
  LIBRE: {
    color: `${colors.ok}`,
  },
};

const FREE = "LIBRE";
const BUSY = "OCUPADA";

const StateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 8px;
  border: 1px solid ${colors.border};
`;

const StateColorContainer = styled.label`
  display: flex;
  padding: 10px 44px;
  color: ${(props) => colorState[props.colorState].color};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const BoliranaState = ({ state }) => {
  return (
    <StateContainer>
      {state === FREE && (
        <StateColorContainer colorState={FREE}>{state}</StateColorContainer>
      )}
      {state === BUSY && (
        <StateColorContainer colorState={BUSY}>{state}</StateColorContainer>
      )}
    </StateContainer>
  );
};

export default BoliranaState;
