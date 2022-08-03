import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { MessageInfoContainer } from "../styles/style-components";
import BorderButton from "../buttons/BorderButton";
import Button from "../buttons/Button";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";

const ResetTimeModalContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 35px;
  gap: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 25px;
`;

const ResetTimeModal = ({ handleCloseModal, handleSubmitResetTime }) => {
  return (
    <ResetTimeModalContainer>
      <CenterContainer>
        <InfoContainer>
          <Info width={25} height={25} stroke={colors.warning} />
          <MessageInfoContainer>
            ¿Desea reiniciar el tiempo de la Bolirana?
          </MessageInfoContainer>
        </InfoContainer>
        <ButtonsContainer>
          <BorderButton
            size="mediumBorderButton"
            text="Cancelar"
            onClick={handleCloseModal}
          />
          <Button
            size="mediumModalButton"
            theme="enableRestartTime"
            icon={<Stop width={25} height={25} fill={colors.secondary} />}
            text="Reiniciar Tiempo"
            onClick={handleSubmitResetTime}
          />
        </ButtonsContainer>
      </CenterContainer>
    </ResetTimeModalContainer>
  );
};

export default ResetTimeModal;
