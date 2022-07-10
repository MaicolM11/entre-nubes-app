import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import Button from "../buttons/Button";
import CategoriesContainer from "../cards-container/CategoriesContainer";

const CategoriesModalContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CenterModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px;
  gap: 25px;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const CategoriesModal = ({
  categories,
  handleSubmitCreateCategory,
  handleSubmitEditCategory,
  handleSubmitDeleteCategory,
  setIsOpen,
}) => {
  const handleCloseModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <CategoriesModalContainer>
      <CenterModalContainer>
        <HeaderContainer>
          <ModalTitle>Categorías</ModalTitle>
          <CloseButton onClick={handleCloseModal} />
        </HeaderContainer>
        <CategoriesContainer
          categories={categories}
          handleSubmitEditCategory={handleSubmitEditCategory}
          handleSubmitDeleteCategory={handleSubmitDeleteCategory}
        ></CategoriesContainer>
        <Button
          size="normalButton"
          theme="ok"
          text="Agregar Categoría"
          onClick={handleSubmitCreateCategory}
        />
      </CenterModalContainer>
    </CategoriesModalContainer>
  );
};

export default CategoriesModal;
