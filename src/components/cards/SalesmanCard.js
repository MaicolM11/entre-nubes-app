import React from "react";
import { formatPhoneNumber } from "../../format/DataFormat";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  IconContainer,
  DeleteIconButtonContainer,
  EditIconButtonContainer,
} from "../styles/style-components";
import { ReactComponent as SalesmanPhoto } from "../../assets/images/salesman-photo.svg";
import { ReactComponent as IdCard } from "../../assets/icons/id-card.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

const SalesmanCardContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.border};
  border-radius: 25px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;

const SalesmanCardDataContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  gap: 15px;
`;

const InfoSalesmanContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PhotoSalesmanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
`;

const SalesmanNameContainer = styled.label`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  color: ${colors.text};
  text-align: center;
`;

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5px;
`;

const DataTextContainer = styled.label`
  font-size: 14px;
  font-weight: 500;
  font-family: var(--roboto);
  color: ${colors.text};
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const SalesmanCard = ({
  fullname,
  cc,
  email,
  phone,
  address,
  clickOnEdit,
  clickOnDelete,
}) => {
  return (
    <SalesmanCardContainer>
      <SalesmanCardDataContainer>
        <InfoSalesmanContainer>
          <PhotoSalesmanContainer>
            <SalesmanPhoto />
          </PhotoSalesmanContainer>
          <SalesmanNameContainer>{fullname}</SalesmanNameContainer>
        </InfoSalesmanContainer>
        <DataContainer>
          <IconContainer>
            <IdCard fill={colors.brand} />
          </IconContainer>
          <DataTextContainer>{cc}</DataTextContainer>
        </DataContainer>
        <DataContainer>
          <IconContainer>
            <Phone fill={colors.brand} />
          </IconContainer>
          <DataTextContainer>{formatPhoneNumber(phone)}</DataTextContainer>
        </DataContainer>
        <DataContainer>
          <IconContainer>
            <Email fill={colors.brand} />
          </IconContainer>
          <DataTextContainer>{email}</DataTextContainer>
        </DataContainer>
        <DataContainer>
          <IconContainer>
            <Location fill={colors.brand} />
          </IconContainer>
          <DataTextContainer>{address}</DataTextContainer>
        </DataContainer>
        <ButtonsContainer>
          <EditIconButtonContainer isStroke={true} onClick={clickOnEdit}>
            <Edit width={24} height={24} />
          </EditIconButtonContainer>
          <DeleteIconButtonContainer isFill={true} onClick={clickOnDelete}>
            <Delete width={24} height={24} />
          </DeleteIconButtonContainer>
        </ButtonsContainer>
      </SalesmanCardDataContainer>
    </SalesmanCardContainer>
  );
};

export default SalesmanCard;
