import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import BoliranaState from "../states/BoliranaState";
import { ReactComponent as Timer } from "../../assets/icons/timer.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import {
  DeleteIconButtonContainer,
  ModalMediumTitle,
  TitleTimer,
} from "../styles/style-components";
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

const BoliranaTimeControlCard = ({
  bolirana,
  handleResetTime,
  handleStartTime,
}) => {
  return (
    <BoliranaContainer>
      <PanelCenter>
        <TitleTimer>00:00:00</TitleTimer>
        <InfoContainer>
          <ModalMediumTitle>{bolirana.name}</ModalMediumTitle>
          <BoliranaState state={"LIBRE"} />
          <ButtonPanel>
            <Button
              size="boliranaButton"
              theme="ok"
              // icon={<Add fill="white" />}
              text="Reiniciar Tiempo"
              onClick={handleResetTime}
            />
            <Button
              size="boliranaButton"
              theme="ok"
              // icon={<Add fill="white" />}
              text="Iniciar Tiempo"
              onClick={handleStartTime}
            />
          </ButtonPanel>
        </InfoContainer>
      </PanelCenter>
    </BoliranaContainer>
  );
};

export default BoliranaTimeControlCard;
