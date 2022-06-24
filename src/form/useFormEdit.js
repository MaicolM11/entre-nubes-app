import { useState, useEffect } from "react";
import { productEditValidation } from "../errors/validate";
const useForm = (callback, validate, categories, selectedCategory,product, category) => {
  
  const [productValues, setProductValues] = useState({
    brand: product? product.brand :"",
    category: category?category.name :"",
    unitPrice: product?product.buy_price:0,
    salePrice: product?product.sale_price:0,
    presentation: product?product.presentation:"",
    stock: product?product.stock:0
  });

  const [errors, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const clearValues = () => {
    productValues.brand = "";
    productValues.category = "";
    productValues.unitPrice = 0;
    productValues.salePrice = 0;
    productValues.presentation = "";
    productValues.stock = 0;
    setErros(0);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory) {
        productValues.category = category._id;
      }
    });
    setErros(productEditValidation(productValues));
    if(!Object.keys(errors).length){
      callback()
    }
  };


  return {
    handleChange,
    values: productValues,
    handleSubmit,
    errors,
    clearValues
  };
};

export default useForm;