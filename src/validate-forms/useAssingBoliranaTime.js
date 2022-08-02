import { useState } from "react";
import { timeValidation } from "../errors/validate";

const useAssingBoliranaTime = (currentHour, callback) => {
  const [boliranaTime, setBoliranaTime] = useState({ minutesTime: 0 });

  const handleChangeBoliranaTime = (e) => {
    const { name, value } = e.target;
    setBoliranaTime((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitBoliranaTime = (e) => {
    e.preventDefault();
    setErros(timeValidation(boliranaTime));
    if (
      currentHour >= 1 ||
      !(Object.keys(timeValidation(boliranaTime)).length > 0)
    ) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearInputBoliranaTime = () => {
    setBoliranaTime(0);
    setErros(0);
  };

  return {
    boliranaTime,
    handleChangeBoliranaTime,
    handleSubmitBoliranaTime,
    errors,
    clearInputBoliranaTime,
  };
};

export default useAssingBoliranaTime;
