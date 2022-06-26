import React from "react";
import styled from "styled-components";
import SalesmanCard from "../cards/SalesmanCard";

const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 0px;
  padding: 0 25px 0 25px;
  overflow-x: auto;
`;

const SalesmanCardsContainer = ({salesmans,openEditSalemanModal, openDeleteSalesmanModal}) => {
  return (
    <CardsContainer>
      {Object.values(salesmans).map((salesman, i) => (
        <SalesmanCard
          key={i}
          id={salesman._id}
          fullname={salesman.fullname}
          email={salesman.email}
          phone={salesman.phone}
          address={salesman.address}
          clickOnEdit={() =>{
            openEditSalemanModal(salesman)
          }
          }
          clickOnDelete={ () =>{
          openDeleteSalesmanModal(salesman)}}
        />
      ))}
    </CardsContainer>
  );
};

export default SalesmanCardsContainer;