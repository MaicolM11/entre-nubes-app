import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import { ReactComponent as TimerOff } from "../../assets/icons/timer-off.svg";
import { ModalMediumTitle, TitleTimer } from "../styles/style-components";
import BoliranaState from "../states/BoliranaState";
import Button from "../buttons/Button";

const BoliranaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;
const PanelCenter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 45px;
  gap: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 35px;
`;

const ButtonPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const defaultRemainingTime = { second: "00", minutes: "00", hours: "00" };

const BoliranaTimeControlCard = ({
  bolirana,
  isDisableButton,
  handleResetTime,
  handleStartTime,
}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const updateRemainingTime = (countdown) => {
    // console.log(countdown);
    // const intervalId = setInterval(()=>{
    //   updateRemainingTime(countdown);
    // }, 1000);
    // return () => clearInterval(intervalId);
  };

  // useEffect(()=>{
  //   const intervalId = setInterval(()=>{
  //     updateRemainingTime(countdownTimestampMs);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [countdownTimestampMs]);

  useEffect;

  return (
    <BoliranaContainer>
      <PanelCenter>
        <TitleTimer>
          {remainingTime.hours +
            ":" +
            remainingTime.minutes +
            ":" +
            remainingTime.second}
        </TitleTimer>
        <InfoContainer>
          <ModalMediumTitle>{bolirana.name}</ModalMediumTitle>
          <BoliranaState state={bolirana.state} />
          <ButtonPanel>
            <Button
              size="boliranaButton"
              theme={
                !isDisableButton ? "disableRestartTime" : "enableRestartTime"
              }
              icon={<Stop fill="white" />}
              text={isDisableButton ? "Reiniciar Tiempo" : "En Espera"}
              onClick={handleResetTime}
              isDisable={!isDisableButton}
            />
            <Button
              size="boliranaButton"
              theme={!isDisableButton ? "resumeTime" : "disableStartTime"}
              icon={
                !isDisableButton ? (
                  <Timer fill="white" />
                ) : (
                  <TimerOff fill="white" />
                )
              }
              text={!isDisableButton ? "Iniciar Tiempo" : "En Juego"}
              onClick={handleStartTime}
              isDisable={isDisableButton}
            />
          </ButtonPanel>
        </InfoContainer>
      </PanelCenter>
    </BoliranaContainer>
  );
};

export default BoliranaTimeControlCard;
