import React, { useEffect, useState } from "react";
import { convertTimeToTemp } from "../../utils/BoliranaTimer";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import { ReactComponent as TimerOff } from "../../assets/icons/timer-off.svg";
import {
  DataSpan,
  ModalMediumTitle,
  ModalSubtitle,
  TitleTimer,
} from "../styles/style-components";
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

const HireTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FinalTime = styled.label`
  width: 100%;
  color: ${colors.delete};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const BoliranaTimeControlCard = ({
  bolirana,
  isDisableButton,
  handleResetTime,
  handleStartTime,
}) => {
  const defaultRemainingTime = { hours: "00", minutes: "00", second: "00" };
  const hireTime = { hours: "00", minutes: "00" };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [currentHireTime, setCurrentHireTime] = useState(hireTime);

  const getHireBoliranaTime = () => {
    let newTime = convertTimeToTemp(bolirana.init_time, bolirana.time);
    const time = { hours: newTime.hours, minutes: newTime.minutes };
    if (!newTime) {
      setCurrentHireTime(hireTime);
    } else {
      setCurrentHireTime(time);
    }
  };

  const checkBolirana = (state) => {
    if (state === "OCUPADA") {
      let newTime = convertTimeToTemp(bolirana.init_time, bolirana.time);
      if (!newTime) {
        setRemainingTime(defaultRemainingTime);
      } else {
        setRemainingTime(newTime);
      }
    }
  };

  useEffect(() => {
    getHireBoliranaTime();
    let interval = setInterval(() => {
      checkBolirana(bolirana.state);
    }, 1000);
    return () => clearInterval(interval);
  }, [bolirana.state]);

  return (
    <BoliranaContainer>
      <PanelCenter>
        <HireTimeContainer>
          {remainingTime === defaultRemainingTime &&
            bolirana.state === "OCUPADA" && (
              <FinalTime>Tiempo Terminado</FinalTime>
            )}
          <ModalSubtitle>Tiempo Solicitado</ModalSubtitle>
          <ModalMediumTitle>
            Horas: <DataSpan>{currentHireTime.hours}</DataSpan> : Minutos:{" "}
            <DataSpan>{currentHireTime.minutes}</DataSpan>
          </ModalMediumTitle>
        </HireTimeContainer>
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
