import React from "react";
import styled from "styled-components";
import SalesmanCard from "../cards/SalesmanCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const SalesmanCardsContainer = ({
  salesmans,
  openEditSalemanModal,
  openDeleteSalesmanModal,
}) => {
  return (
    <CardsContainer>
      {Object.values(salesmans).map((salesman, i) => (
        <SalesmanCard
          key={i}
          id={salesman._id}
          fullname={salesman.fullname}
          cc={salesman.cc}
          email={salesman.email}
          phone={salesman.phone}
          address={salesman.address}
          clickOnEdit={() => {
            openEditSalemanModal(salesman);
          }}
          clickOnDelete={() => {
            openDeleteSalesmanModal(salesman);
          }}
        />
      ))}
    </CardsContainer>
  );
};

export default SalesmanCardsContainer;
