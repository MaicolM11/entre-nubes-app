import { useState, useEffect } from "react";

const useForm = (callback, validate, selectedCategory) => {
  const [values, setValues] = useState({
    brand: "",
    category: "",
    unitPrice: "",
    salePrice: "",
    presentation: "",
    stock: "",
  });

  const [errors, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.category = selectedCategory;
    setErros(validate(values));
  };

  useEffect(() => {
    if (!Object.keys(errors).length) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
