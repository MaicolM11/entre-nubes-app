import { useState } from "react";
import { createProductValidation } from "../errors/validate";

const useCreateProductForm = (selectedCategory, categories, callback) => {
  const [productValues, setProductValues] = useState({
    brand: "",
    category: selectedCategory,
    unitPrice: 0,
    salePrice: 0,
    presentation: "",
    stock: 0,
  });

  const handleChangeCreateProduct = (e) => {
    const { name, value } = e.target;
    setProductValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateProduct = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory.name) {
        productValues.category = category._id;
      }
    });
    setErros(createProductValidation(productValues, selectedCategory));
    if (!(Object.keys(createProductValidation(productValues,selectedCategory)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateProductValues = () => {
    productValues.brand = "";
    productValues.category = "Categoría";
    productValues.unitPrice = 0;
    productValues.salePrice = 0;
    productValues.presentation = "";
    productValues.stock = 0;
    setErros(0);
  };

  return {
    productValues: productValues,
    handleChangeCreateProduct,
    handleSubmitCreateProduct,
    errors,
    clearCreateProductValues,
  };
};

export default useCreateProductForm;
