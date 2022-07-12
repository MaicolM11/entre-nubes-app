import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";
import Button from "../buttons/Button";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/id-card.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";

const DebtorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 35px;
  border: 1px solid ${colors.border};
  border-radius: 25px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const DebtorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const DebtorInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const DebtorInfoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DebtorData = styled.label`
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  margin-left: 20px;
`;

const DebtorCard = ({
  isTheme,
  debtor,
  handleSubmitPendingPayments,
  handleSubmitAssignDebt,
}) => {
  return (
    <DebtorCardContainer>
      <DebtorContainer>
        <DebtorInfoCardContainer>
          <DebtorInfoContainer>
            <IconContainer>
              <UserIcon stroke={colors.brand} />
            </IconContainer>
            <DebtorData>{debtor.fullname}</DebtorData>
          </DebtorInfoContainer>
          <DebtorInfoContainer>
            <IconContainer>
              <DocumentIcon fill={colors.brand} />
            </IconContainer>
            <DebtorData>{debtor.cc}</DebtorData>
          </DebtorInfoContainer>
          <DebtorInfoContainer>
            <IconContainer>
              <PhoneIcon fill={colors.brand} />
            </IconContainer>
            <DebtorData>{debtor.phone}</DebtorData>
          </DebtorInfoContainer>
        </DebtorInfoCardContainer>
        <Button
          size="mediumButton"
          theme={isTheme ? "highlighted" : "edit"}
          text={isTheme ? "Pagos Pendientes" : "Asignar Deuda"}
          onClick={
            isTheme ? handleSubmitPendingPayments : handleSubmitAssignDebt
          }
        />
      </DebtorContainer>
    </DebtorCardContainer>
  );
};

export default DebtorCard;
