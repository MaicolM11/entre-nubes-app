import { useState } from "react";
import { categoryValidation } from "../errors/validate";

const useCategoryForm = (callback) => {
  const [categoryValues, setCategoryValues] = useState({
    name: "",
  });

  const handleChangeCreateCategory = (e) => {
    const { name, value } = e.target;
    setCategoryValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateCategory = (e) => {
    e.preventDefault();
    setErros(categoryValidation(categoryValues));
    if (!(Object.keys(categoryValidation(categoryValues)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateCategoryValues = () => {
    categoryValues.name = "";
    setErros(0);
  };

  return {
    categoryValues: categoryValues,
    handleChangeCreateCategory,
    handleSubmitCreateCategory,
    errors,
    clearCreateCategoryValues,
  };
};

export default useCategoryForm;
