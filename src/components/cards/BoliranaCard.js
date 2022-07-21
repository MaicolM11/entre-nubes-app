import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const BoliranaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  height: 512px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`

const BoliranaCard = ({key,bolirana}) =>{
    return (
    <BoliranaContainer>
        {bolirana.name}
    </BoliranaContainer>
    )
}

export default BoliranaCard