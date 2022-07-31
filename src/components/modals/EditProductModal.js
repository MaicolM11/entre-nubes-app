import React, { useEffect, useRef, useState } from "react";
import { editProduct } from "../../services/product";
import { getAllCategories } from "../../services/category";
import useEditProductForm from "../../validate-forms/useEditProductForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalTitle,
  ErrorMessage,
  ErrorMessageContainer,
  ErrorMessageSpace,
  ProductModalImageContainer,
  SelectContainer,
} from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import CategorySelect from "../select/CategorySelect";
import Button from "../buttons/Button";
import { ReactComponent as EmptyProductImg } from "../../assets/images/empty-img-create-new-product.svg";
import { ReactComponent as WineBottle } from "../../assets/icons/wine-bottle.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as AttachMoney } from "../../assets/icons/attach-money.svg";
import { ReactComponent as SackDollar } from "../../assets/icons/sack-dollar.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as CubesStacked } from "../../assets/icons/cubes-stacked.svg";

const ProductModalContainer = styled.div`
  display: flex;
  width: 795px;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 16px;
`;

const ModalTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ModalTitleCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 35px;
`;

const ProductModalFormContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductModalFormCenterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 35px 35px 35px;
  gap: 35px;
`;

const ProductModalFormOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EditProductModal = ({
  info,
  buttonTheme,
  product,
  updateProducts,
  setIsOpen,
  category,
  openSuccessfulModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [categories, setCategories] = useState({});

  const handleSubmitProduct = () => {
    editCurrentProduct();
  };

  const {
    productValues,
    handleChangeEditProduct,
    handleSubmitEditProduct,
    errors,
    clearEditProductValues,
  } = useEditProductForm(
    product,
    selectedCategory,
    categories,
    handleSubmitProduct
  );

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    clearEditProductValues();
    setSelectedCategory(category);
  };

  const editCurrentProduct = () => {
    editProduct(
      product._id,
      productValues.brand,
      productValues.category,
      productValues.unitPrice,
      productValues.salePrice,
      productValues.presentation,
      productValues.stock,
      productValues.img_url
    ).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateProducts();
        openSuccessfulModal();
      } else {
        alert(data.message);
      }
    });
  };

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ProductModalContainer>
      <ModalTitleContainer>
        <ModalTitleCenterContainer>
          <ModalTitle>{info}</ModalTitle>
          <CloseButton onClick={handleSetIsOpen} />
        </ModalTitleCenterContainer>
      </ModalTitleContainer>
      <ProductModalFormContainer>
        <ProductModalFormCenterContainer>
          <ProductModalImageContainer>
            <EmptyProductImg />
          </ProductModalImageContainer>
          <ProductModalFormOptionContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<WineBottle />}
                isFill={true}
                type="text"
                name="brand"
                placeholder="Nombre del producto"
                defaultValue={product ? product.brand : ""}
                onChange={handleChangeEditProduct}
              />
              {errors.brand ? (
                <ErrorMessage>{errors.brand}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <SelectContainer>
                <CategorySelect
                  icon={<Category width={25} height={25} />}
                  dropdownTitle="Categorías"
                  options={categories}
                  selectedOption={selectedCategory.name}
                  setSelectedOption={setSelectedCategory}
                  isFilter={false}
                />
              </SelectContainer>
              {errors.category ? (
                <ErrorMessage>{errors.category}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
              <ErrorMessageSpace />
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<AttachMoney />}
                isFill={true}
                type="text"
                name="unitPrice"
                placeholder="Precio por unidad"
                defaultValue={product ? product.buy_price : ""}
                onChange={handleChangeEditProduct}
              />
              {errors.unitPrice ? (
                <ErrorMessage>{errors.unitPrice}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<SackDollar />}
                isFill={true}
                type="text"
                name="salePrice"
                placeholder="Precio de venta"
                defaultValue={product ? product.sale_price : ""}
                onChange={handleChangeEditProduct}
              />
              {errors.salePrice ? (
                <ErrorMessage>{errors.salePrice}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<Box />}
                isStroke={true}
                type="text"
                name="presentation"
                placeholder="Presentación"
                defaultValue={product ? product.presentation : ""}
                onChange={handleChangeEditProduct}
              />
              {errors.presentation ? (
                <ErrorMessage>{errors.presentation}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<CubesStacked />}
                isFill={true}
                type="text"
                name="stock"
                placeholder="Unidades de venta"
                defaultValue={product ? product.stock : ""}
                onChange={handleChangeEditProduct}
              />
              {errors.stock ? (
                <ErrorMessage>{errors.stock}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <Button
              size="normalButton"
              theme={buttonTheme}
              text={info}
              onClick={handleSubmitEditProduct}
            />
          </ProductModalFormOptionContainer>
        </ProductModalFormCenterContainer>
      </ProductModalFormContainer>
    </ProductModalContainer>
  );
};

export default EditProductModal;
