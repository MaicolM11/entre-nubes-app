import { useState } from "react";
import { increaseStockValidation } from "../errors/validate";

const useAddBolirana = (callback) => {
  const [numberValue, setnumberValue] = useState(0);

  const handleChangeNumberBolirana = (e) => {
    const { name, value } = e.target;
    setnumberValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitNumberBolirana = (e) => {
    e.preventDefault();
    setErros(increaseStockValidation(numberValue));
    // if (!(Object.keys(increaseStockValidation(numberValue)).length > 0)) {
      callback();
    // }
  };

  const [errors, setErros] = useState({});

  const clearIncreaseNumberBoliranaValue = () => {
    setnumberValue(0);
    setErros(0);
  };

  return {
    numberValue: numberValue,
    handleChangeNumberBolirana,
    handleSubmitNumberBolirana,
    errors,
    clearIncreaseNumberBoliranaValue,
  };
};

export default useAddBolirana;