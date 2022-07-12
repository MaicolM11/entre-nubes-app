import { useState } from "react";
import { categoryValidation } from "../errors/validate";

const useCategoryForm = (category, createCallback, editCallback) => {
  const [createCategoryValues, setCreateCategoryValues] = useState({
    name: "",
  });

  const [editCategoryValues, setEditCategoryValues] = useState({
    name: category ? category.name : "",
  });

  const handleChangeCreateCategory = (e) => {
    const { name, value } = e.target;
    setCreateCategoryValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleChangeEditCategory = (e) => {
    const { name, value } = e.target;
    setEditCategoryValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateCategory = (e) => {
    e.preventDefault();
    setErros(categoryValidation(createCategoryValues));
    if (!(Object.keys(categoryValidation(createCategoryValues)).length > 0)) {
      createCallback();
    }
  };

  const handleSubmitEditCategory = (e) => {
    e.preventDefault();
    setErros(categoryValidation(editCategoryValues));
    if (!(Object.keys(categoryValidation(editCategoryValues)).length > 0)) {
      editCallback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateCategoryValues = () => {
    createCategoryValues.name = "";
    setErros(0);
  };

  const clearEditCategoryValues = () => {
    editCategoryValues.name = "";
    setErros(0);
  };

  return {
    createCategoryValues: createCategoryValues,
    handleChangeCreateCategory,
    handleSubmitCreateCategory,
    clearCreateCategoryValues,
    editCategoryValues: editCategoryValues,
    handleChangeEditCategory,
    handleSubmitEditCategory,
    clearEditCategoryValues,
    errors,
  };
};

export default useCategoryForm;
