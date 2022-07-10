import React from "react";
import styled from "styled-components";
import CategoryCard from "../cards/CategoryCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 415px;
  height: 415px;
  padding-right: 3px;
  gap: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CategoriesContainer = ({
  categories,
  handleSubmitEditCategory,
  handleSubmitDeleteCategory,
}) => {
  return (
    <CardsContainer>
      {Object.values(categories).map((category) => (
        <CategoryCard
          key={category._id}
          category={category}
          clickOnEdit={() => handleSubmitEditCategory(category)}
          clickOnDelete={() => handleSubmitDeleteCategory(category)}
        />
      ))}
    </CardsContainer>
  );
};

export default CategoriesContainer;
