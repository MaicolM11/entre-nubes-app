import React from "react";
import styled from "styled-components";
import BoliranaCard from "../cards/BoliranaCard";
import { colors } from "../styles/colors";

const CardsContainer = styled.div`
display: grid;
grid-row-gap: 25px;
grid-column-gap: 50px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
padding: 25px;
overflow-x: hidden;
overflow-y: auto;
background-color: ${colors.cardsBackground};

`;

const BoliranasContainer = ({boliranasList}) =>{
    return(
    <CardsContainer>
        {Object.values(boliranasList).map((bolirana, i) => (
        <BoliranaCard key={i} bolirana={bolirana} />
        ))}
    </CardsContainer>)
}

export default BoliranasContainer