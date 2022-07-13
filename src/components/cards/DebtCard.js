import React from "react";
import styled from "styled-components";

const DebtCardContainer = styled.div`
  display: flex;
  width: 807px;
  height: 65px;
  background-color: magenta;
`;

const DebtCardCenterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 25px;
  background-color: blanchedalmond;
`;

const DebtCard = ({ debt }) => {
  return (
    <DebtCardContainer>
      <DebtCardCenterContainer></DebtCardCenterContainer>
    </DebtCardContainer>
  );
};

export default DebtCard;
