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
  width: 100%;
  align-items: center;
  padding: 35px 55px;
  gap: 20px;
`;

const DataModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const SuccessfulDebtorModal = ({ debtorFullname, handleSubmitOk }) => {
  return (
    <SuccessfulModalContainer>
      <CenterModalContainer>
        <DataModalContainer>
          <Check width={25} height={25} fill={colors.ok} />
          <MessageInfoContainer>
            ¡Deuda asignada al cliente {debtorFullname}!
          </MessageInfoContainer>
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

export default SuccessfulDebtorModal;
