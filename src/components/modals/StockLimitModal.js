import React from "react";
import useStockLimitForm from "../../validate-forms/useStockLimitForm";

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
import { ReactComponent as CubesStacked } from "../../assets/icons/cubes-stacked.svg";

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

const StockLimitModal = ({
  category,
  setIsOpen,
  openCategoriesModal,
  updateCategories,
  openSuccessStockLimitCategoryModal,
}) => {
  const handleSubmitUpdateStockLimit = () => {
    updateCurrentStockLimit();
  };

  const {
    stockValue,
    handleChangeStockLimit,
    handleSubmitStockLimit,
    errors,
    clearStockLimitValue,
  } = useStockLimitForm(handleSubmitUpdateStockLimit);

  const handleSetIsOpen = () => {
    clearStockLimitValue();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleBackToCategories = () => {
    clearStockLimitValue();
    setIsOpen((isOpen) => !isOpen);
    openCategoriesModal((isOpen) => !isOpen);
  };

  const updateCurrentStockLimit = () => {
    console.log(category);
    console.log(stockValue);
    handleSetIsOpen();
    updateCategories();
    openSuccessStockLimitCategoryModal();
    // createCategory(createCategoryValues.name).then(async (res) => {
    //   const data = await res.json();
    //   if (res.ok) {
    //     handleSetIsOpen();
    //     updateCategories();
    //     openSuccessAddedCategoryModal();
    //   } else {
    //     alert(data.message);
    //   }
    // });
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
          <ModalTitle>Límite de Unidades</ModalTitle>
        </HeaderModal>
        <ModalFormOptionContainer>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              icon={<CubesStacked />}
              isFill={true}
              type="text"
              name="stock"
              placeholder="Límite de unidades"
              // defaultValue={category ? category.name : ""}
              onChange={handleChangeStockLimit}
            />
            {errors.stock ? (
              <ErrorMessage>{errors.stock}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="normalButton"
            theme="edit"
            text="Asignar Límite"
            onClick={handleSubmitStockLimit}
          />
        </ModalFormOptionContainer>
      </CategoryModalCenterContainer>
    </CategoryModalContainer>
  );
};

export default StockLimitModal;
