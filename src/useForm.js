import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    brand: "",
    category: "",
    buy_price: 0,
    sale_price: 0,
    presentation: "",
    stock: 0,
  });

  const [errors, setErros] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErros(validate(values));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (!Object.keys(errors).length) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
