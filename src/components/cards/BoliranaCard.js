import React, { useState, useEffect } from "react";
import { convertTimeToTemp } from "../../utils/BoliranaTimer";

import styled from "styled-components";
import { colors } from "../styles/colors";
import BoliranaState from "../states/BoliranaState";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import { ReactComponent as TimerOff } from "../../assets/icons/timer-off.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import {
  DeleteIconButtonContainer,
  ModalMediumTitle,
  TitleTimer,
} from "../styles/style-components";

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
  gap: 25px;
`;

const BoliranaCard = ({ bolirana, handleDeleteBolirana }) => {
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
          {bolirana.state === "LIBRE" ? (
            <Timer fill={colors.ok} width={25} height={25} />
          ) : (
            <TimerOff fill={colors.edit} width={25} height={25} />
          )}
          <ButtonPanel>
            {bolirana.state === "LIBRE" && (
              <DeleteIconButtonContainer
                isFill={true}
                onClick={() => handleDeleteBolirana(bolirana)}
              >
                <Delete width={40} height={40} />
              </DeleteIconButtonContainer>
            )}
          </ButtonPanel>
        </InfoContainer>
      </PanelCenter>
    </BoliranaContainer>
  );
};

export default BoliranaCard;
