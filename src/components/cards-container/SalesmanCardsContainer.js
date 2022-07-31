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

  @media (max-width: 930px) {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 275px));
  }

  @media (max-width: 900px) {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 55px;
  }

  @media (max-width: 835px) {
    width: max-content;
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 200px));
    grid-column-gap: 25px;
  }

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 455px;
  }
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
