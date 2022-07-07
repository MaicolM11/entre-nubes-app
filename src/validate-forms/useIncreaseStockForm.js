import { useState } from "react";
import { increaseStockValidation } from "../errors/validate";

const useIncreaseStockForm = (callback) => {
  const [stockValue, setStockValue] = useState(0);

  const handleChangeIncreaseStock = (e) => {
    const { name, value } = e.target;
    setStockValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitIncreaseStock = (e) => {
    e.preventDefault();
    setErros(increaseStockValidation(stockValue));
    if (!(Object.keys(increaseStockValidation(stockValue)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearIncreaseStockValue = () => {
    setStockValue(0);
    setErros(0);
  };

  return {
    stockValue: stockValue,
    handleChangeIncreaseStock,
    handleSubmitIncreaseStock,
    errors,
    clearIncreaseStockValue,
  };
};

export default useIncreaseStockForm;
