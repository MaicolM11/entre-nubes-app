import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const colorState = {
  PENDIENTE: {
    color: `${colors.delete}`,
  },
  A_CREDITO: {
    color: `${colors.edit}`,
  },
  PAGO: {
    color: `${colors.ok}`,
  },
};

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

const State = ({ state }) => {
  return (
    <StateContainer>
      {state === "PENDIENTE" && (
        <StateColorContainer colorState={"PENDIENTE"}>
          {state}
        </StateColorContainer>
      )}
      {state === "A CREDITO" && (
        <StateColorContainer colorState={"A_CREDITO"}>
          {state}
        </StateColorContainer>
      )}
      {state === "PAGO" && (
        <StateColorContainer colorState={"PAGO"}>{state}</StateColorContainer>
      )}
      {state === "LIBRE" && (
        <StateColorContainer colorState={"PAGO"}>{state}</StateColorContainer>
      )}
      {state === "OCUPADO" && (
        <StateColorContainer colorState={"PENDIENTE"}>{state}</StateColorContainer>
      )}
    </StateContainer>
  );
};

export default State;
