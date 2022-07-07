import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const PayModeModalContainer = styled.div`
  display: flex;
  width: 475px;
  height: 248px;
  background-color: darkmagenta;
  border-radius: 16px;
`;

const PayModeModal = () => {
  return <PayModeModalContainer></PayModeModalContainer>;
};

export default PayModeModal;
