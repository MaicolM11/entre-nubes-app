import React, { useEffect, useRef, useState } from "react";
import {
  SelectComponentContainer,
  SelectValueContainer,
  SelectInputContainer,
  SelectIconContainer,
  SelectedOptionValue,
  SelectCaretDownContainer,
  SelectOptionsContainer,
  SelectOptionsTitle,
  SelectOption,
} from "../styles/style-components";
import { ReactComponent as CaretDown } from "../../assets/icons/caret-down.svg";

const PayModeSelect = ({
  icon,
  dropdownTitle,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.composedPath()[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <SelectComponentContainer>
      <SelectValueContainer
        ref={btnRef}
        isOpen={isOpen}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <SelectInputContainer>
          <SelectIconContainer isOpen={isOpen}>{icon}</SelectIconContainer>
          <SelectedOptionValue>{selectedOption}</SelectedOptionValue>
          <SelectCaretDownContainer isOpen={isOpen}>
            <CaretDown />
          </SelectCaretDownContainer>
        </SelectInputContainer>
      </SelectValueContainer>
      {isOpen && (
        <SelectOptionsContainer>
          <SelectOptionsTitle>{dropdownTitle}</SelectOptionsTitle>
          {Object.values(options).map((option, i) => (
            <SelectOption
              key={i}
              onClick={() => {
                setSelectedOption(option.mode);
                setIsOpen(false);
              }}
            >
              {option.mode}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
      )}
    </SelectComponentContainer>
  );
};

export default PayModeSelect;
