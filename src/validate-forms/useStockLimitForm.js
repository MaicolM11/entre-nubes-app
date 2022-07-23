import { useState } from "react";
import { increaseStockValidation } from "../errors/validate";

const useStockLimitForm = (callback) => {
  const [stockValue, setStockValue] = useState(0);

  const handleChangeStockLimit = (e) => {
    const { name, value } = e.target;
    setStockValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitStockLimit = (e) => {
    e.preventDefault();
    setErros(increaseStockValidation(stockValue));
    if (!(Object.keys(increaseStockValidation(stockValue)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearStockLimitValue = () => {
    setStockValue(0);
    setErros(0);
  };

  return {
    stockValue: stockValue,
    handleChangeStockLimit,
    handleSubmitStockLimit,
    errors,
    clearStockLimitValue,
  };
};

export default useStockLimitForm;
