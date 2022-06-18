import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const StateContainer = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  align-items: center;
  justify-content: center;

  color: ${colors.delete};
  font-size: 14px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid ${colors.border};
`;

const State = ({ state }) => {
  return <StateContainer>{state}</StateContainer>;
};

export default State;
