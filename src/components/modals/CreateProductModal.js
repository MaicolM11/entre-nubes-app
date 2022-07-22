import React, { useCallback, useEffect, useRef, useState } from "react";
import { createProduct } from "../../services/product";
import { getAllCategories } from "../../services/category";
import useCreateProductForm from "../../validate-forms/useCreateProductForm";

import styled from "styled-components";
import { colors } from "../styles/colors";
import {
  ModalBackground,
  ModalFormOptionContainer,
  ModalTitle,
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
  ProductModalImageContainer,
  SelectContainer,
} from "../styles/style-components";
import { useSpring, animated } from "react-spring";
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

const CreateProductModal = ({
  info,
  buttonTheme,
  updateProducts,
  isOpen,
  setIsOpen,
  openSuccessfulModal,
}) => {
  const defaultCategory = { name: "Categoría", id: "" };
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

  const ref = useRef();

  const closeModal = (e) => {
    if (ref.current === e.target) {
      clearModalInputs();
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
                  <ProductModalImageContainer>
                    <EmptyProductImg />
                  </ProductModalImageContainer>
                  <ModalFormOptionContainer>
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
                        <CategorySelect
                          icon={<Category width={25} height={25} />}
                          dropdownTitle="Categorías"
                          options={categories}
                          selectedOption={selectedCategory.name}
                          setSelectedOption={setSelectedCategory}
                          isFilter={false}
                        />
                      </SelectContainer>
                      {selectedCategory.name === defaultCategory.name ? (
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
                  </ModalFormOptionContainer>
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
