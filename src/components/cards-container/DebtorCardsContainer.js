import React from "react";
import styled from "styled-components";
import DebtorCard from "../cards/DebtorCard";

const CardsContainer = styled.div`
  display: grid;
  margin-top: 40px;
  margin-left: 70px;
  grid-row-gap: 50px;
  grid-column-gap: 4px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0 0 15px 25px;
  overflow-y: auto;
  
`;

const DebtorCardsContainer = ({debtors}) =>{
    return(
        <CardsContainer>
        {Object.values(debtors).map((debtor)=>(
           <DebtorCard
           debtor={debtor}
           />
        ))}
        </CardsContainer>
    )
}

export default DebtorCardsContainer