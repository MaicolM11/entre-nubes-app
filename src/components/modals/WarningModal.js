import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Button from "../buttons/Button";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import { MessageInfoContainer } from "../styles/style-components";

const ModalContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;
const CenterModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 85px;
  gap: 20px;
`;

const DataModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const WarningModal = ({ message, handleSubmitWarning }) => {
  return (
    <ModalContainer>
      <CenterModalContainer>
        <DataModalContainer>
          <Info width={25} height={25} stroke={colors.warning} />
          <MessageInfoContainer>{message}</MessageInfoContainer>
        </DataModalContainer>
        <Button
          size="mediumModalButton"
          theme="warning"
          text="Aceptar"
          onClick={handleSubmitWarning}
        />
      </CenterModalContainer>
    </ModalContainer>
  );
};

export default WarningModal;
