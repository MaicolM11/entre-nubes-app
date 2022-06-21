import { useState, useEffect } from "react";

const useForm = (callback, validate, categories, selectedCategory) => {
  const [productValues, setProductValues] = useState({
    brand: "",
    category: "",
    unitPrice: 0,
    salePrice: 0,
    presentation: "",
    stock: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory) {
        productValues.category = category._id;
      }
    });
    setErros(validate(productValues));
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

  useEffect(() => {
    if (!Object.keys(errors).length) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    values: productValues,
    handleSubmit,
    errors,
    clearValues,
  };
};

export default useForm;
