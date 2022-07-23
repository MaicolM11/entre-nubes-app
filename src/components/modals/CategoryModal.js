import React from "react";
import { createCategory, editCategory } from "../../services/category";
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
import BackButton from "../buttons/ArrowButton";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import { ReactComponent as BackArrowIcon } from "../../assets/icons/arrow-back.svg";
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
  gap: 15px;
`;

const CategoryModal = ({
  isTheme,
  category,
  setIsOpen,
  openCategoriesModal,
  updateCategories,
  updateProducts,
  openSuccessAddedCategoryModal,
  openSuccessEditedCategoryModal,
}) => {
  const handleSubmitCreateCurrentCategory = () => {
    createCurrentCategory();
  };

  const handleSubmitEditCurrentCategory = () => {
    editCurrentCategory();
  };

  const {
    createCategoryValues,
    handleChangeCreateCategory,
    handleSubmitCreateCategory,
    clearCreateCategoryValues,
    editCategoryValues,
    handleChangeEditCategory,
    handleSubmitEditCategory,
    clearEditCategoryValues,
    errors,
  } = useCategoryForm(
    category,
    handleSubmitCreateCurrentCategory,
    handleSubmitEditCurrentCategory
  );

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleBackToCategories = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
    openCategoriesModal((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    isTheme ? clearCreateCategoryValues() : clearEditCategoryValues();
  };

  const createCurrentCategory = () => {
    createCategory(createCategoryValues.name).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateCategories();
        openSuccessAddedCategoryModal();
      } else {
        alert(data.message);
      }
    });
  };

  const editCurrentCategory = () => {
    editCategory(category._id, editCategoryValues.name).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateCategories();
        updateProducts();
        openSuccessEditedCategoryModal();
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <CategoryModalContainer>
      <CategoryModalCenterContainer>
        <HeaderModal>
          <BackButton
            icon={
              <BackArrowIcon
                fill={colors.brand}
                onClick={handleBackToCategories}
              />
            }
          />
          <ModalTitle>
            {isTheme ? "Agregar Categoría" : "Editar Categoría"}
          </ModalTitle>
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
              defaultValue={category ? category.name : ""}
              onChange={
                isTheme ? handleChangeCreateCategory : handleChangeEditCategory
              }
            />
            {errors.name ? (
              <ErrorMessage>{errors.name}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme={isTheme ? "ok" : "highlighted"}
            text={isTheme ? "Agregar Categoría" : "Editar Categoría"}
            onClick={
              isTheme ? handleSubmitCreateCategory : handleSubmitEditCategory
            }
          />
        </ModalFormOptionContainer>
      </CategoryModalCenterContainer>
    </CategoryModalContainer>
  );
};

export default CategoryModal;
