import React, { useEffect, useRef, useState } from "react";
import { filterProducts, getAllProducts } from "../../services/product";
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

const CategorySelect = ({
  icon,
  dropdownTitle,
  options,
  selectedOption,
  setSelectedOption,
  searchInput,
  isFilter,
  setIsFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  const filterProductsByCategory = (id) => {
    if (isFilter) {
      if (id === "all") {
        getAllProducts().then(async (res) => {
          setIsFilter(await res.json());
        });
      } else {
        filterProducts(id, searchInput).then(async (res) => {
          setIsFilter(await res.json());
        });
      }
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
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
          {isFilter && (
            <SelectOption
              key={"all"}
              onClick={() => {
                setSelectedOption({ name: "Todos los Productos", id: "" });
                filterProductsByCategory("all");
                setIsOpen(false);
              }}
            >
              Todos los Productos
            </SelectOption>
          )}
          {Object.values(options).map((option) => (
            <SelectOption
              key={option._id}
              onClick={() => {
                {
                  isFilter && filterProductsByCategory(option._id);
                }
                setSelectedOption({ name: option.name, id: option._id });
                setIsOpen(false);
              }}
            >
              {option.name}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
      )}
    </SelectComponentContainer>
  );
};

export default CategorySelect;
