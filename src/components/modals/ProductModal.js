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

const InputData = [
  {
    name: "unitPrice",
    icon: <AttachMoney />,
    placeholder: "Precio por unidad",
  },
  {
    name: "salePrice",
    icon: <SackDollar />,
    placeholder: "Precio de venta",
  },
  {
    name: "presentation",
    icon: <Box />,
    placeholder: "Presentación",
  },
  {
    name: "stock",
    icon: <Circle />,
    placeholder: "Unidades de venta",
  },
];

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
  gap: 25px;
`;

const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
`;

const ProductModal = ({ isOpen, setIsOpen,id, info, buttonTheme, handleChange, submitProduct}) => {
  const [categories, setCategories] = useState({});
  const [selected, setSelected] = useState("Categoría");

  const ref = useRef();

  const getCategories = () => {
    getAllCategories().then(async (res) => {
      setCategories(await res.json());
    });
  };

  useEffect(() => {
    getCategories();
    console.log(selected);
  }, [selected]);

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
                  <DataInput
                    name="name"
                    size="normalInput"
                    icon={<WineBottle stroke={colors.brand} />}
                    placeholder="Nombre del producto"
                    type="text"
                    // onChange={handleChange}
                  />
                  <SelectContainer>
                    <SelectCategory
                      size="normalSelect"
                      titleOptions="Categorías"
                      options={categories}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </SelectContainer>
                  {Object.values(InputData).map((input, i) => (
                    <DataInput
                      key={i}
                      name={input.name}
                      size="normalInput"
                      icon={input.icon}
                      placeholder={input.placeholder}
                      type="text"
                      onChange={handleChange}
                    />
                  ))}
                  <Button
                    size="normalButton"
                    theme={buttonTheme}
                    text={info}
                    onClick={submitProduct}
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
