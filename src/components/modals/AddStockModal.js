import React, { useState } from "react";
import { updateUnits } from "../../services/product";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import DataInput from "../inputs/DataInput";
import Button from "../buttons/Button";

const AddStockModalContainer = styled.div`
  display: flex;
  width: 423px;
  height: 293px;
  background-color: red;
`;

const TitleAddStock = styled.div`
  height: 28px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  font-feature-settings: "liga" off;

  padding-top: 30px;
  padding-left: 25px;

  color: #262626;
`;

const Units = styled.div`
  height: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  display: flex;
  align-items: center;

  padding-top: 30px;
  padding-left: 25px;

  color: #262626;
`;

const Input = styled.div`
  padding-top: 30px;
  padding-left: 25px;
`;

const ButtonStock = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddStockModal = ({ product, update, setIsOpenAddStock }) => {
  const [units, setUnits] = useState(0);

  const handleSetIsOpen = () => {
    setIsOpenAddStock((isOpen) => !isOpen);
  };

  const handleChangeUnits = (e) => {
    const { value } = e.target;
    setUnits(value);
  };

  const handleSubmit = () => {
    updateUnits(product._id, units).then(async (res) => {
      handleSetIsOpen();
      update();
    });
  };

  return (
    <AddStockModalContainer>
      <TitleAddStock>Producto : {product.brand}</TitleAddStock>
      <Units>Unidades actuales : {product.stock}</Units>
      <Input>
        <DataInput
          size="stockInput"
          isStroke={true}
          icon={<Box stroke={colors.brand} />}
          type="text"
          name="stock"
          placeholder="Unidades para stock"
          onChange={handleChangeUnits}
        />
      </Input>
      <ButtonStock>
        <Button
          size="mediumButton"
          theme="ok"
          text="Agregar Unidades"
          onClick={handleSubmit}
        />
      </ButtonStock>
    </AddStockModalContainer>
  );
};

export default AddStockModal;
