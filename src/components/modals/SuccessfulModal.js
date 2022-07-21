import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Button from "../buttons/Button";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { MessageInfoContainer } from "../styles/style-components";

const SuccessfulModalContainer = styled.div`
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

const SuccessfulModal = ({ message, handleSubmitOk }) => {
  return (
    <SuccessfulModalContainer>
      <CenterModalContainer>
        <DataModalContainer>
          <Check width={25} height={25} fill={colors.ok} />
          <MessageInfoContainer>{message}</MessageInfoContainer>
        </DataModalContainer>
        <Button
          size="mediumModalButton"
          theme="ok"
          text="Aceptar"
          onClick={handleSubmitOk}
        />
      </CenterModalContainer>
    </SuccessfulModalContainer>
  );
};

export default SuccessfulModal;
