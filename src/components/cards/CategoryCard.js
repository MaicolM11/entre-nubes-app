import React from "react";
import styled from "styled-components";
import {
  EditIconButtonContainer,
  DeleteIconButtonContainer,
} from "../styles/style-components";
import { colors } from "../styles/colors";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

const CategoryCardContainer = styled.div`
  display: flex;
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
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

const CategoryCard = ({ category, clickOnEdit, clickOnDelete }) => {
  return (
    <CategoryCardContainer>
      <CategoryCardCenterContainer>
        <CategoryNameContainer>{category.name}</CategoryNameContainer>
        <ButtonsContainer>
          <EditIconButtonContainer isStroke={true} onClick={clickOnEdit}>
            <Edit width={24} height={24} />
          </EditIconButtonContainer>
          <DeleteIconButtonContainer isFill={true} onClick={clickOnDelete}>
            <Delete width={24} height={24} />
          </DeleteIconButtonContainer>
        </ButtonsContainer>
      </CategoryCardCenterContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
