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
  return (
    <BoliranaContainer>
      <PanelCenter>
        <TitleTimer>00:00:00</TitleTimer>
        <InfoContainer>
          <ModalMediumTitle>{bolirana.name}</ModalMediumTitle>
          <BoliranaState state={bolirana.state} />
          <Timer fill={colors.ok} width={25} height={25} />
          <ButtonPanel>
            <DeleteIconButtonContainer
              isFill={true}
              onClick={() => handleDeleteBolirana(bolirana)}
            >
              <Delete width={40} height={40} />
            </DeleteIconButtonContainer>
          </ButtonPanel>
        </InfoContainer>
      </PanelCenter>
    </BoliranaContainer>
  );
};

export default BoliranaCard;
