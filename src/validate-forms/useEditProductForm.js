import { useState } from "react";
import { editProductValidation } from "../errors/validate";

const useEditProductForm = (
  product,
  selectedCategory,
  categories,
  callback
) => {
  const [productValues, setProductValues] = useState({
    brand: product.brand,
    category: product.category.name,
    unitPrice: product.buy_price,
    salePrice: product.sale_price,
    presentation: product.presentation,
    stock: product.stock,
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
      if (category.name === selectedCategory.name) {
        productValues.category = category._id;
      }
    });
    setErros(editProductValidation(productValues));
    if (!(Object.keys(editProductValidation(productValues)).length > 0)) {
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
    productValues: productValues,
    handleSubmitEditProduct,
    errors,
    clearEditProductValues,
  };
};

export default useEditProductForm;
