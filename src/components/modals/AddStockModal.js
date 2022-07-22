import React from "react";
import { updateUnits } from "../../services/product";
import useIncreaseStockForm from "../../validate-forms/useIncreaseStockForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";
import CloseButton from "../buttons/CloseButton";
import {
  DataSpan,
  ModalSubtitle,
  ModalTitle,
  ErrorMessage,
  ErrorMessageContainer,
  ErrorMessageSpace,
} from "../styles/style-components";

const AddStockModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const HeaderModalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 35px 0 35px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const AddStockModal = ({ product, updateProducts, setIsOpenAddStock, openSuccessfulModal }) => {
  const handleSubmitUpdateStock = () => {
    updateCurrentUnits();
  };

  const {
    stockValue,
    handleChangeIncreaseStock,
    handleSubmitIncreaseStock,
    errors,
    clearIncreaseStockValue
  } = useIncreaseStockForm(handleSubmitUpdateStock);

  const handleSetIsOpen = () => {
    clearIncreaseStockValue();
    setIsOpenAddStock((isOpen) => !isOpen);
  };

  const updateCurrentUnits = () => {
    updateUnits(product._id, stockValue).then(async () => {
      handleSetIsOpen();
      updateProducts();
      openSuccessfulModal();
    });
  };

  return (
    <AddStockModalContainer>
      <HeaderModalContainer>
        <ModalTitle>
          Producto : <DataSpan>{product.brand}</DataSpan>
        </ModalTitle>
        <CloseButton onClick={handleSetIsOpen} />
      </HeaderModalContainer>
      <ModalContainer>
        <ModalInfoContainer>
          <ModalSubtitle>
            Unidades actuales : <DataSpan>{product.stock}</DataSpan>
          </ModalSubtitle>
          <ErrorMessageContainer>
            <DataInput
              size="normalInput"
              icon={<Box stroke={colors.brand} />}
              isStroke={true}
              type="text"
              name="stock"
              placeholder="Unidades para stock"
              onChange={handleChangeIncreaseStock}
            />
            {errors.stock ? (
              <ErrorMessage>{errors.stock}</ErrorMessage>
            ) : (
              <ErrorMessageSpace />
            )}
          </ErrorMessageContainer>
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Agregar Unidades"
            onClick={handleSubmitIncreaseStock}
          />
        </ModalInfoContainer>
      </ModalContainer>
    </AddStockModalContainer>
  );
};

export default AddStockModal;
