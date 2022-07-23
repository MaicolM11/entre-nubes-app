import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import Button from "../buttons/Button";
import CategoriesContainer from "../cards-container/CategoriesContainer";

const CategoriesModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cardsBackground};
  border-radius: 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 25px;
  align-items: center;
  background-color: ${colors.secondary};
  border-bottom: solid 1px ${colors.border};
  border-radius: 16px 16px 0 0;
`;

const CenterModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 25px;
  gap: 25px;
  border-radius: 0 0 16px 16px;
`;

const ButtonAddCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

const CategoriesModal = ({
  categories,
  handleSubmitCreateCategory,
  handleSubmitStockLimitCategory,
  handleSubmitEditCategory,
  handleSubmitDeleteCategory,
  setIsOpen,
}) => {
  const handleCloseModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <CategoriesModalContainer>
      <HeaderContainer>
        <ModalTitle>Categorías</ModalTitle>
        <CloseButton onClick={handleCloseModal} />
      </HeaderContainer>
      <CenterModalContainer>
        <CategoriesContainer
          categories={categories}
          handleSubmitStockLimitCategory={handleSubmitStockLimitCategory}
          handleSubmitEditCategory={handleSubmitEditCategory}
          handleSubmitDeleteCategory={handleSubmitDeleteCategory}
        ></CategoriesContainer>
        <ButtonAddCategoryContainer>
          <Button
            size="normalButton"
            theme="ok"
            text="Agregar Categoría"
            onClick={handleSubmitCreateCategory}
          />
        </ButtonAddCategoryContainer>
      </CenterModalContainer>
    </CategoriesModalContainer>
  );
};

export default CategoriesModal;
