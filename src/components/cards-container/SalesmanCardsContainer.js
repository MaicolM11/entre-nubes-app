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

const SalesmanCardsContainer = () => {
  return (
    <CardsContainer>
      <SalesmanCard
        fullname="Pedro Ramirez"
        email="pedro.jose@gmail.com"
        cc="21903219"
        phone="310030121"
        address="Cra 0 # 12-12"
      />

      <SalesmanCard
        fullname="Jose Lopez"
        email="lopez.jose@gmail.com"
        cc="21903219"
        phone="310030121"
        address="Cra 0 # 12-12"
      />
    </CardsContainer>
  );
};

export default SalesmanCardsContainer;