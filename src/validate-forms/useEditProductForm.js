import { useState } from "react";
import { productValidation } from "../errors/validate";

const useEditProductForm = (
  product,
  category,
  selectedCategory,
  categories,
  callback
) => {
  const [productValues, setProductValues] = useState({
    brand:  product.brand,
    category: category.name,
    unitPrice:  product.buy_price ,
    salePrice:  product.sale_price ,
    presentation:  product.presentation ,
    stock: product.stock 
  });

  const handleChangeEditProduct = (e) => {
    const { name, value } = e.target;
    setProductValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitEditProduct = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory) {
        productValues.category = category._id;
      }
    });
    setErros(productValidation(productValues));
    if (!(Object.keys(productValidation(productValues,selectedCategory)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearEditProductValues = () => {
    productValues.brand = "";
    productValues.category = "";
    productValues.unitPrice = 0;
    productValues.salePrice = 0;
    productValues.presentation = "";
    productValues.stock = 0;
    setErros(0);
  };

  return {
    handleChangeEditProduct,
    values: productValues,
    handleSubmitEditProduct,
    errors,
    clearEditProductValues,
  };
};

export default useEditProductForm;
