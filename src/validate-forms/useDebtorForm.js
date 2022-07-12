import { useState } from "react";
import { debtorValidation } from "../errors/validate";

const useDebtorForm = (createCallback) => {
  const [createDebtorValues, setCreateDebtorValues] = useState({
    fullName: "",
    cc: 0,
    phone: 0,
  });

  const handleChangeCreateDebtor = (e) => {
    const { name, value } = e.target;
    setCreateDebtorValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateDebtor = (e) => {
    e.preventDefault();
    setErros(debtorValidation(createDebtorValues));
    if (!(Object.keys(debtorValidation(createDebtorValues)).length > 0)) {
      createCallback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateDebtorValues = () => {
    (createDebtorValues.fullName = ""),
      (createDebtorValues.cc = 0),
      (createDebtorValues.phone = 0);
    setErros(0);
  };

  return {
    createDebtorValues: createDebtorValues,
    handleChangeCreateDebtor,
    handleSubmitCreateDebtor,
    errors,
    clearCreateDebtorValues,
  };
};

export default useDebtorForm;
