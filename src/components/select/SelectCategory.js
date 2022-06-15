import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { InputCenterContainer } from "../styles/style-components";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as CaretDown } from "../../assets/icons/caret-down.svg";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  gap: 15px;
  color: ${colors.brand};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  user-select: none;
  z-index: 100;
`;

export const SelectValueContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 43px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
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
  background-color: ${colors.secondary};
  border: 1px solid ${colors.border};
  border-radius: 25px;
`;

const SelectTitleOptions = styled.div`
  padding: 24px;
  color: ${colors.placeholder};
  font-size: 16px;
  font-weight: bold;
  font-family: var(--roboto);
  white-space: nowrap;
`;

const SelectOption = styled.div`
  padding: 24px;
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
  /* border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px; */
`;

export const SelectIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  path {
    fill: ${colors.brand};
  }
`;

const SelectCaretDownContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: flex-end;
  path {
    fill: ${colors.brand};
  }
`;

const DefaultValue = styled.span`
  width: 100%;
`;

const SelectCategory = ({ titleOptions, options, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SelectContainer>
      <SelectValueContainer onClick={() => setIsActive(!isActive)}>
        <InputCenterContainer>
          <SelectIconContainer>
            <Category />
          </SelectIconContainer>
          <DefaultValue>{selected}</DefaultValue>
          <SelectCaretDownContainer>
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
                setSelected(option.name);
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
