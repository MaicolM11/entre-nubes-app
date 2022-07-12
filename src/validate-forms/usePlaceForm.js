import { useState } from "react";
import { placeValidation } from "../errors/validate";

const usePlaceForm = (callback) => {
  const [placeValue, setPlaceValue] = useState(0);

  const handleChangePlace = (e) => {
    const { name, value } = e.target;
    setPlaceValue((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitPlace = (e) => {
    e.preventDefault();
    setErros(placeValidation(placeValue));
    if (!(Object.keys(placeValidation(placeValue)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearPlaceValue = () => {
    setPlaceValue("");
    setErros(0);
  };

  return {
    placeValue: placeValue,
    handleChangePlace,
    handleSubmitPlace,
    errors,
    clearPlaceValue,
  };
};

export default usePlaceForm;
