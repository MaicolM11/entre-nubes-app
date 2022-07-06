import React, { useState } from "react";
import { updateUnits } from "../../services/product";

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
} from "../styles/style-components";

import { stockValidation } from "../../errors/validate";

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

const AddStockModal = ({ product, updateProducts, setIsOpenAddStock }) => {
  const [units, setUnits] = useState(0);

  const handleSetIsOpen = () => {
    setIsOpenAddStock((isOpen) => !isOpen);
  };

  const handleChangeUnits = (e) => {
    const { name, value } = e.target;
    setUnits((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitUpdateUnits = () => {
    updateUnits(product._id, units).then(async () => {
      handleSetIsOpen();
      updateProducts();
    });
  };

  return (
    <AddStockModalContainer>
      <HeaderModalContainer>
        <ModalTitle>
          Producto : <DataSpan>{product.brand}</DataSpan>
        </ModalTitle>
        <CloseButton />
      </HeaderModalContainer>
      <ModalContainer>
        <ModalInfoContainer>
          <ModalSubtitle>
            Unidades actuales : <DataSpan>{product.stock}</DataSpan>
          </ModalSubtitle>
          <DataInput
            size="normalInput"
            icon={<Box stroke={colors.brand} />}
            isStroke={true}
            type="text"
            name="stock"
            placeholder="Unidades para stock"
            onChange={handleChangeUnits}
          />
          <Button
            size="mediumModalButton"
            theme="ok"
            text="Agregar Unidades"
            onClick={handleSubmitUpdateUnits}
          />
        </ModalInfoContainer>
      </ModalContainer>
    </AddStockModalContainer>
  );
};

export default AddStockModal;
