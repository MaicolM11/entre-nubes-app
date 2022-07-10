import React from "react";
import { createCategory } from "../../services/category";
import useCategoryForm from "../../validate-forms/useCategoryForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
  ModalFormOptionContainer,
  ModalTitle,
} from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import { ReactComponent as CategoriesIcon } from "../../assets/icons/category.svg";

const CategoryModalContainer = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const CategoryModalCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px;
  gap: 25px;
`;

const HeaderModal = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CategoryModal = ({
  setIsOpen,
  openCategoriesModal,
  updateCategories,
}) => {
  const handleSubmitCategory = () => {
    createCurrentCategory();
  };

  const {
    categoryValues,
    handleChangeCreateCategory,
    handleSubmitCreateCategory,
    errors,
    clearCreateCategoryValues,
  } = useCategoryForm(handleSubmitCategory);

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
    openCategoriesModal((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    clearCreateCategoryValues();
  };

  const createCurrentCategory = () => {
    createCategory(categoryValues.name).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateCategories();
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <CategoryModalContainer>
      <CategoryModalCenterContainer>
        <HeaderModal>
          <ModalTitle>Agregar Categoría</ModalTitle>
          <CloseButton onClick={handleSetIsOpen} />
        </HeaderModal>
        <ModalFormOptionContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              name="name"
              icon={<CategoriesIcon />}
              isFill={true}
              placeholder="Nombre de categoría"
              type="text"
              onChange={handleChangeCreateCategory}
            />
            {errors.name ? (
              <ErrorMessage>{errors.name}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme="ok"
            text="Agregar Categoría"
            onClick={handleSubmitCreateCategory}
          />
        </ModalFormOptionContainer>
      </CategoryModalCenterContainer>
    </CategoryModalContainer>
  );
};

export default CategoryModal;
