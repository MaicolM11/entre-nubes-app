import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import BoliranaTimeControlCard from "../cards/BoliranaTimeControlCard";

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

const BoliranasTimeControlContainer = ({
  boliranas,
  handleResetTime,
  handleStartTime,
}) => {
  return (
    <CardsContainer>
      {Object.values(boliranas).map((bolirana, i) => (
        <BoliranaTimeControlCard
          key={i}
          bolirana={bolirana}
          isDisableButton={bolirana.state === "OCUPADA" && true}
          // remainingTime={remainingTime}
          // countdownTimestampMs={countdownTimestampMs}
          handleResetTime={() => handleResetTime(bolirana)}
          handleStartTime={() => handleStartTime(bolirana)}
        />
      ))}
    </CardsContainer>
  );
};

export default BoliranasTimeControlContainer;
