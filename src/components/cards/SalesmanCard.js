import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";

import { ReactComponent as Phone } from "../../assets/icons/add.svg";

const SalesmanCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const SalesmanCardDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const SalesmanName = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;


const SalesmanCard = ({id, fullname, email, cc, phone, address }) => {
  return (
    <SalesmanCardContainer>
        <SalesmanCardDataContainer>
            <SalesmanName> {fullname} </SalesmanName>
            
        </SalesmanCardDataContainer>
    </SalesmanCardContainer>
    );
};

export default SalesmanCard;