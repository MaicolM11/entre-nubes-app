import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import State from "../states/State";
import { ReactComponent as Cronometer } from "../../assets/icons/eye.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import {
    EditIconButtonContainer,
    DeleteIconButtonContainer,
    ModalMediumTitle,
    TitleTimer
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
`
const PanelCenter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 95.79px 56px;
  gap: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const TimeCronometer = styled.label`

`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
width: 155px;
height: 217px;
justify-content: center;
align-items: center;
text-align: center;
gap: 35px;
`

const ButtonPanel = styled.div`
display: flex;
gap: 25px;
`


const BoliranaCard = ({ bolirana }) => {
    return (
        <BoliranaContainer>
            <PanelCenter>
                <TimeCronometer>
                    <TitleTimer>
                        00:00:00
                    </TitleTimer>
                </TimeCronometer>
                <InfoContainer>
                    <ModalMediumTitle>
                        {bolirana.name}
                    </ModalMediumTitle>
                    <State state={'LIBRE'} />
                    <Cronometer fill={colors.ok} width={25} height={25} />
                    <ButtonPanel>
                        <EditIconButtonContainer isStroke={true}>
                            <Edit width={24} height={24} />
                        </EditIconButtonContainer>
                        <DeleteIconButtonContainer isFill={true}>
                            <Delete width={24} height={24} />
                        </DeleteIconButtonContainer>
                    </ButtonPanel>
                </InfoContainer>
            </PanelCenter>
        </BoliranaContainer>
    )
}

export default BoliranaCard