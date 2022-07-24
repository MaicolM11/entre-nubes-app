import { useState } from "react";
import { increaseStockValidation } from "../errors/validate";

const useAddBolirana = (callback) => {
  const [numberBoliranaValue, setNumberBoliranaValue] = useState(0);

  const handleChangeNumberBolirana = (e) => {
    const { name, value } = e.target;
    setNumberBoliranaValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitNumberBolirana = (e) => {
    e.preventDefault();
    setErros(increaseStockValidation(numberBoliranaValue));
    if (
      !(Object.keys(increaseStockValidation(numberBoliranaValue)).length > 0)
    ) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearNumberBoliranaValue = () => {
    setNumberBoliranaValue(0);
    setErros(0);
  };

  return {
    numberBoliranaValue: numberBoliranaValue,
    handleChangeNumberBolirana,
    handleSubmitNumberBolirana,
    errors,
    clearNumberBoliranaValue,
  };
};

export default useAddBolirana;
