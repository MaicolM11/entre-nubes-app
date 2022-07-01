import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { IconContainer } from "../styles/style-components";
import Button from "../buttons/Button";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/home-table.svg";


const DebtorCardContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 25px 35px;
gap: 25px;
width: 283px;
height: 242px;
border: 1px solid #000000;
flex: none;
order: 0;
flex-grow: 0;
`;

const DebtorData = styled.label`
color: ${colors.text};
font-size: 20px;
font-weight: bold;
font-family: var(--roboto);
white-space: nowrap;;
margin-left : 20px;
`;

const Debtor = styled.div`
display:flex;
`;

const DebtorCard = ({debtor})=>{
    return(
      <DebtorCardContainer>
      <Debtor>
      <IconContainer><UserIcon stroke={colors.brand} /></IconContainer>
      <DebtorData>{debtor.name}</DebtorData>
      </Debtor>
      <Debtor>
      <IconContainer><DocumentIcon stroke={colors.brand} /></IconContainer>
      <DebtorData>{debtor.document}</DebtorData>
      </Debtor>
      <Debtor>
      <IconContainer><PhoneIcon  /></IconContainer>
      <DebtorData>{debtor.phone}</DebtorData>
      </Debtor>
      <Button
        size="mediumButton"
        theme={"dark"}
        text={"Realizar pago"}
      />
      </DebtorCardContainer>
      
    )
}

export default DebtorCard