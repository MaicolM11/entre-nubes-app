import React, { useState, useEffect, useRef } from "react";
import { getAllCategories } from "../../services/category";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ModalBackground } from "../styles/style-components";
import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import SelectCategory from "../select/SelectCategory";
import { ReactComponent as WineBottle } from "../../assets/icons/wine-bottle.svg";
import { ReactComponent as AttachMoney } from "../../assets/icons/attach-money.svg";
import { ReactComponent as SackDollar } from "../../assets/icons/sack-dollar.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg";
import Button from "../buttons/Button";

import validateInfo from "../../validateInfo";
import useForm from "../../useForm";

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

const ProductModal = ({ isOpen, setIsOpen, id, info, buttonTheme }) => {
  const submitForm = () => {
    console.log("Click");
    if (isOpen) {
      console.log(values);
      console.log("Datos enviados.");
    }
  };

  const category = "Categoría";
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(category);

  const ref = useRef();

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const closeModal = (e) => {
    if (ref.current === e.target) {
      setIsOpen(false);
    }
  };

  const handleSetIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  //send data

  const sendData = () => {
    reqProduct(
      values.brand,
      values.category,
      values.buy_price,
      values.sale_price,
      values.presentation,
      values.stock,
      values.img_url
    ).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        // update();
        closeButtonModal();
      } else {
        alert(data.message);
      }
    });
  };

  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo,
    selectedCategory
  );

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
                      name="brand"
                      size="normalInput"
                      icon={<WineBottle stroke={colors.brand} />}
                      placeholder="Nombre del producto"
                      type="text"
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
                        name="category"
                        size="normalSelect"
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
                      name="unitPrice"
                      size="normalInput"
                      icon={<AttachMoney stroke={colors.brand} />}
                      placeholder="Precio por unidad"
                      type="text"
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
                      name="salePrice"
                      size="normalInput"
                      icon={<SackDollar stroke={colors.brand} />}
                      placeholder="Precio de venta"
                      type="text"
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
                      name="presentation"
                      size="normalInput"
                      icon={<Box stroke={colors.brand} />}
                      placeholder="Presentación"
                      type="text"
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
                      name="stock"
                      size="normalInput"
                      icon={<Circle stroke={colors.brand} />}
                      placeholder="Unidades de venta"
                      type="text"
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
