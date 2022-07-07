import React, { useCallback, useEffect, useRef, useState } from "react";
import { createProduct } from "../../services/product";
import { getAllCategories } from "../../services/category";
import useCreateProductForm from "../../validate-forms/useCreateProductForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalBackground,
  ModalTitle,
  SelectContainer,
} from "../styles/style-components";
import { useSpring, animated } from "react-spring";
import CloseButton from "../buttons/CloseButton";
import DataInput from "../inputs/DataInput";
import SelectCategory from "../select/SelectCategory";
import Button from "../buttons/Button";
import { ReactComponent as WineBottle } from "../../assets/icons/wine-bottle.svg";
import { ReactComponent as AttachMoney } from "../../assets/icons/attach-money.svg";
import { ReactComponent as SackDollar } from "../../assets/icons/sack-dollar.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Circle } from "../../assets/icons/circle.svg";

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

const CreateProductModal = ({
  info,
  buttonTheme,
  updateProducts,
  isOpen,
  setIsOpen,
}) => {
  const defaultCategory = "Categoría";
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [categories, setCategories] = useState({});

  const handleSubmitProduct = () => {
    createCurrentProduct();
  };

  const {
    productValues,
    handleChangeCreateProduct,
    handleSubmitCreateProduct,
    errors,
    clearCreateProductValues,
  } = useCreateProductForm(selectedCategory, categories, handleSubmitProduct);

  const handleSetIsOpen = () => {
    clearModalInputs();
    setIsOpen((isOpen) => !isOpen);
  };

  const clearModalInputs = () => {
    clearCreateProductValues();
    setSelectedCategory(defaultCategory);
  };

  const createCurrentProduct = () => {
    createProduct(
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

  const ref = useRef();

  const closeModal = (e) => {
    if (ref.current === e.target) {
      setIsOpen(false);
    }
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [setIsOpen, isOpen]
  );

  useEffect(() => {
    getCategories();
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <ModalBackground ref={ref} onClick={closeModal}>
          <animated.div style={animation}>
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
                        icon={<WineBottle />}
                        isFill={true}
                        type="text"
                        name="brand"
                        placeholder="Nombre del producto"
                        onChange={handleChangeCreateProduct}
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
                          titleOptions="Categorías"
                          categories={categories}
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                        />
                      </SelectContainer>
                      {selectedCategory === defaultCategory ? (
                        <ErrorMessage>{errors.category}</ErrorMessage>
                      ) : (
                        <ErrorMessageSpace />
                      )}
                    </ErrorMessageContainer>
                    <ErrorMessageContainer>
                      <DataInput
                        size="normalInput"
                        icon={<AttachMoney />}
                        isFill={true}
                        type="text"
                        name="unitPrice"
                        placeholder="Precio por unidad"
                        onChange={handleChangeCreateProduct}
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
                        onChange={handleChangeCreateProduct}
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
                        onChange={handleChangeCreateProduct}
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
                        icon={<Circle />}
                        isFill={true}
                        type="text"
                        name="stock"
                        placeholder="Unidades de venta"
                        onChange={handleChangeCreateProduct}
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
                      onClick={handleSubmitCreateProduct}
                    />
                  </ProductModalFormOptionContainer>
                </ProductModalFormCenterContainer>
              </ProductModalFormContainer>
            </ProductModalContainer>
          </animated.div>
        </ModalBackground>
      )}
    </>
  );
};

export default CreateProductModal;
