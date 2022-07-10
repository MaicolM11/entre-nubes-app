import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import CategoriesContainer from "../cards-container/CategoriesContainer";
import Button from "../buttons/Button";
import { ModalTitle } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";

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

const CategoriesModal = ({ categories, handleSubmitCreateCategory }) => {
  return (
    <CategoriesModalContainer>
      <CenterModalContainer>
        <HeaderContainer>
          <ModalTitle>Categorías</ModalTitle>
          <CloseButton />
        </HeaderContainer>
        <CategoriesContainer categories={categories}></CategoriesContainer>
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
