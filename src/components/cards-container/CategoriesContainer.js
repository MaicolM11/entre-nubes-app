import React from "react";
import styled from "styled-components";
import CategoryCard from "../cards/CategoryCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 405px;
  height: 405px;
  padding: 25px 25px 2px 25px;
  gap: 25px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CategoriesContainer = ({
  categories,
  handleSubmitStockLimitCategory,
  handleSubmitEditCategory,
  handleSubmitDeleteCategory,
}) => {
  return (
    <CardsContainer>
      {Object.values(categories).map((category) => (
        <CategoryCard
          key={category._id}
          category={category}
          clickOnStockLimit={() => handleSubmitStockLimitCategory(category)}
          clickOnEdit={() => handleSubmitEditCategory(category)}
          clickOnDelete={() => handleSubmitDeleteCategory(category)}
        />
      ))}
    </CardsContainer>
  );
};

export default CategoriesContainer;
