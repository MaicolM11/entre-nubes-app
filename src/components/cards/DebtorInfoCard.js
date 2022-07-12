import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer, DebtorBoldData } from "../styles/style-components";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/id-card.svg";

const DebtorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
`;

const DebtorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 0;
`;

const DebtorInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 287px;
  width: 287px;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const DebtorInfoContainer = styled.div`
  display: flex;
  min-width: 175px;
  width: 175px;
  gap: 10px;
`;

const DebtorInfoCard = ({ debtor }) => {
  return (
    <DebtorCardContainer>
      <DebtorContainer>
        <DebtorInfoCardContainer>
          <DebtorBoldData>Fiador Actual</DebtorBoldData>
          <DebtorInfoContainer>
            <IconContainer>
              <UserIcon stroke={colors.brand} />
            </IconContainer>
            <DebtorBoldData>{debtor.fullname}</DebtorBoldData>
          </DebtorInfoContainer>
          <DebtorInfoContainer>
            <IconContainer>
              <DocumentIcon fill={colors.brand} />
            </IconContainer>
            <DebtorBoldData>{debtor.cc}</DebtorBoldData>
          </DebtorInfoContainer>
        </DebtorInfoCardContainer>
      </DebtorContainer>
    </DebtorCardContainer>
  );
};

export default DebtorInfoCard;
