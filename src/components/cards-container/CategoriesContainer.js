import React from "react";
import styled from "styled-components";
import CategoryCard from "../cards/CategoryCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 375px;
  gap: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CategoriesContainer = ({ categories }) => {
  return (
    <CardsContainer>
      {Object.values(categories).map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </CardsContainer>
  );
};

export default CategoriesContainer;
