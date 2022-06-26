import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";
import { formatPhoneNumber } from "../../format/DataFormat";
import Button from "../buttons/Button";

import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as SalesmanPhoto } from "../../assets/images/salesman-photo.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

const SalesmanCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
  padding: 20px 2.5%;
`;

const SalesmanCardDataContainer = styled.div`
  display: contents;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const SalesmanName = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-size: 20px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const DataWithIcon =  styled.div`
display: flex;
flex-direction: row;
gap: 5px;
font-family: var(--roboto);
width: 100%;
align-items: center;
justify-content: center;
white-space: nowrap;
`;

const EditButtonContainer = styled.div`
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    path {
      fill: orange;
    }
  }
`;

const DeleteButtonContainer = styled.div`
  align-items: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    path {
      fill: red;
    }
  }
`;


const SalesmanCardButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const SalesmanCard = ({id, fullname, email, cc, phone, address,clickOnEdit, clickOnDelete }) => {

  
  return (
    <SalesmanCardContainer>
        <SalesmanCardDataContainer>
            
            <IconContainer>
              <SalesmanPhoto/>
            </IconContainer>

            <SalesmanName> {fullname} </SalesmanName>
  
            <DataWithIcon>
              <IconContainer>
                <Email/>
              </IconContainer>
              <span>{email}</span>
            </DataWithIcon>

            <DataWithIcon>
              <IconContainer>
                <Phone/>
              </IconContainer>
              <span>{formatPhoneNumber(phone)}</span>
            </DataWithIcon>

            <DataWithIcon>
              <IconContainer>
                <Location/>
              </IconContainer>
              <span>{address}</span>
            </DataWithIcon>
            <SalesmanCardButtonsContainer>
              
              <EditButtonContainer 
              onClick={clickOnEdit}>
                <Edit/>
              </EditButtonContainer>

              <DeleteButtonContainer
               onClick={
                clickOnDelete}
              >
                <Delete/>
              </DeleteButtonContainer>

            </SalesmanCardButtonsContainer>
        </SalesmanCardDataContainer>
    </SalesmanCardContainer>
    );
};

export default SalesmanCard;