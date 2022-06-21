import React, { useState, useEffect, useRef } from "react";
import { getAllCategories } from "../../services/category";
import { reqProduct } from "../../services/product";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalBackground } from "../styles/style-components";

import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import SelectCategory from "../select/SelectCategory";
import Button from "../buttons/Button";
import { ReactComponent as WineBottle } from "../../assets/icons/wine-bottle.svg";
import { ReactComponent as AttachMoney } from "../../assets/icons/attach-money.svg";
import { ReactComponent as SackDollar } from "../../assets/icons/sack-dollar.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg";

import { productValidation } from "../../errors/validate";
import useForm from "../../form/useForm";

const ProductModalContainer = styled.div`
  display: flex;
  width: 795px;
  flex-direction: column;
  background-color: white;
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

const ModalTitle = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 24px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductModalImageContainer = styled.div`
  display: flex;
  width: 285px;
  height: 395px;
  border-radius: 25px;
  border: 1px solid ${colors.border};
`;

const ProductModalFormOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const ErrorMessageSpace = styled.label`
  width: 100%;
  height: 10px;
`;

const ErrorMessage = styled.label`
  display: flex;
  width: 100%;
  height: 10px;
  align-items: center;
  color: ${colors.delete};
  font-size: 12px;
  font-weight: 500;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ProductModal = ({
  isOpen,
  setIsOpen,
  id,
  info,
  buttonTheme,
  updateProducts,
  isTheme,
}) => {
  const category = "Categoría";
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [categories, setCategories] = useState({});

  const ref = useRef();

  const submitProduct = () => {
    if (isOpen) {
      console.log(values);
      console.log("Datos enviados.");
      sendData();
    }
  };

  const { handleChange, values, handleSubmit, errors, clearValues } = useForm(
    submitProduct,
    productValidation,
    categories,
    selectedCategory
  );

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  const clearModalInputs = () => {
    clearValues();
    setSelectedCategory(category);
  };

  const closeModal = (e) => {
    if (ref.current === e.target) {
      clearModalInputs();
      setIsOpen(false);
    }
  };

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const sendData = () => {
    reqProduct(
      values.brand,
      values.category,
      values.unitPrice,
      values.salePrice,
      values.presentation,
      values.stock,
      values.img_url
    ).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        handleSetIsOpen();
        updateProducts();
      } else {
        alert(data.message);
      }
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {isOpen && (
        <ModalBackground ref={ref} onClick={closeModal}>
          <ProductModalContainer>
            <ModalTitleContainer>
              <ModalTitleCenterContainer>
                <ModalTitle>{info}</ModalTitle>
                <CloseButton onClick={handleSetIsOpen} />
              </ModalTitleCenterContainer>
            </ModalTitleContainer>
            <ProductModalFormContainer>
              <ProductModalFormCenterContainer>
                <ProductModalImageContainer />
                <ProductModalFormOptionContainer>
                  <ErrorMessageContainer>
                    <DataInput
                      size="normalInput"
                      icon={<WineBottle stroke={colors.brand} />}
                      type="text"
                      name="brand"
                      placeholder="Nombre del producto"
                      onChange={handleChange}
                    />
                    {errors.brand ? (
                      <ErrorMessage>{errors.brand}</ErrorMessage>
                    ) : (
                      <ErrorMessageSpace />
                    )}
                  </ErrorMessageContainer>
                  <ErrorMessageContainer>
                    <SelectContainer>
                      <SelectCategory
                        size="normalSelect"
                        name="category"
                        titleOptions="Categorías"
                        options={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                      />
                    </SelectContainer>
                    {selectedCategory === category ? (
                      <ErrorMessage>{errors.category}</ErrorMessage>
                    ) : (
                      <ErrorMessageSpace />
                    )}
                  </ErrorMessageContainer>
                  <ErrorMessageContainer>
                    <DataInput
                      size="normalInput"
                      icon={<AttachMoney stroke={colors.brand} />}
                      type="text"
                      name="unitPrice"
                      placeholder="Precio por unidad"
                      onChange={handleChange}
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
                      icon={<SackDollar stroke={colors.brand} />}
                      type="text"
                      name="salePrice"
                      placeholder="Precio de venta"
                      onChange={handleChange}
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
                      icon={<Box stroke={colors.brand} />}
                      type="text"
                      name="presentation"
                      placeholder="Presentación"
                      onChange={handleChange}
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
                      icon={<Circle stroke={colors.brand} />}
                      type="text"
                      name="stock"
                      placeholder="Unidades de venta"
                      onChange={handleChange}
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
                    onClick={handleSubmit}
                  />
                </ProductModalFormOptionContainer>
              </ProductModalFormCenterContainer>
            </ProductModalFormContainer>
          </ProductModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default ProductModal;
