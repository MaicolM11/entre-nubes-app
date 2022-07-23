import React from "react";
import styled from "styled-components";
import {
  DeleteIconButtonContainer,
  EditIconButtonContainer,
  StockLimitIconButtonContainer,
} from "../styles/style-components";
import { colors } from "../styles/colors";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

const CategoryCardContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  &:hover {
    border-color: ${colors.highlighted};
  }
`;
const CategoryCardCenterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 25px;
`;

const CategoryNameContainer = styled.label`
  width: 100%;
  color: ${colors.text};
  font-size: 22px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const CategoryCard = ({
  category,
  clickOnStockLimit,
  clickOnEdit,
  clickOnDelete,
}) => {
  return (
    <CategoryCardContainer>
      <CategoryCardCenterContainer>
        <CategoryNameContainer>{category.name}</CategoryNameContainer>
        <ButtonsContainer>
          <StockLimitIconButtonContainer
            isStroke={true}
            onClick={clickOnStockLimit}
          >
            <Box width={25} height={28} />
          </StockLimitIconButtonContainer>
          <EditIconButtonContainer isStroke={true} onClick={clickOnEdit}>
            <Edit width={25} height={25} />
          </EditIconButtonContainer>
          <DeleteIconButtonContainer isFill={true} onClick={clickOnDelete}>
            <Delete width={25} height={25} />
          </DeleteIconButtonContainer>
        </ButtonsContainer>
      </CategoryCardCenterContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
