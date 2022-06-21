import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { InputCenterContainer } from "../styles/style-components";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as CaretDown } from "../../assets/icons/caret-down.svg";

const size = {
  normalSelect: {
    width: "405px",
  },
  mediumSelect: {
    width: "250px",
  },
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => size[props.size].width};
  align-items: center;
  gap: 10px;
  color: ${colors.brand};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  user-select: none;
  z-index: 90;
`;

export const SelectValueContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid
    ${(props) => (props.isActive ? colors.highlighted : colors.border)};
  border-radius: 25px;
  color: ${(props) => (props.isActive ? colors.highlighted : colors.brand)};
  cursor: pointer;
  &:hover {
    path {
      fill: ${colors.highlighted};
    }
    color: ${colors.highlighted};
  }
`;

const SelectOptionsContainer = styled.div`
  width: 100%;
  top: 100%;
  left: 0;
  padding-bottom: 25px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
`;

const SelectTitleOptions = styled.div`
  display: flex;
  height: 34px;
  align-items: flex-end;
  padding-left: 25px;
  margin-bottom: 25px;
  color: ${colors.placeholder};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const SelectOption = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 25px;
  color: ${colors.text};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.highlighted};
    color: ${colors.secondary};
  }
`;

export const SelectIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  path {
    fill: ${(props) => (props.isActive ? colors.highlighted : colors.brand)};
  }
`;

const SelectCaretDownContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  path {
    fill: ${(props) => (props.isActive ? colors.highlighted : colors.brand)};
  }
`;

const DefaultValue = styled.span`
  width: 100%;
`;

const SelectCategory = ({
  size,
  titleOptions,
  options,
  selectedCategory,
  setSelectedCategory,
  productCategory
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SelectContainer size={size}>
      <SelectValueContainer
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <InputCenterContainer>
          <SelectIconContainer isActive={isActive}>
            <Category />
          </SelectIconContainer>
          <DefaultValue>{productCategory ? productCategory: selectedCategory}</DefaultValue>
          <SelectCaretDownContainer isActive={isActive}>
            <CaretDown />
          </SelectCaretDownContainer>
        </InputCenterContainer>
      </SelectValueContainer>
      {isActive && (
        <SelectOptionsContainer>
          <SelectTitleOptions>{titleOptions}</SelectTitleOptions>
          {Object.values(options).map((option) => (
            <SelectOption
              key={option._id}
              onClick={() => {
                setSelectedCategory(option.name);
                setIsActive(false);
              }}
            >
              {option.name}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
      )}
    </SelectContainer>
  );
};

export default SelectCategory;
