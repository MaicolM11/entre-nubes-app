import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import BoliranaCard from "../cards/BoliranaCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 58px;
  grid-template-columns: repeat(auto-fill, minmax(271px, 1fr));
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.cardsBackground};
`;

const BoliranasContainer = ({ boliranasList, handleDeleteBolirana }) => {
  return (
    <CardsContainer>
      {Object.values(boliranasList).map((bolirana, i) => (
        <BoliranaCard
          key={i}
          bolirana={bolirana}
          handleDeleteBolirana={handleDeleteBolirana}
        />
      ))}
    </CardsContainer>
  );
};

export default BoliranasContainer;
