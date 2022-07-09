import { useState } from "react";
import { guarantorsValidation } from "../errors/validate";

const useGuarantorForm = (createCallback) => {
  const [createGuarantorValues, setCreateGuarantorValues] = useState({
    fullName: "",
    cc: 0,
    phone: 0,
  });

  const handleChangeCreateGuarantor = (e) => {
    const { name, value } = e.target;
    setCreateGuarantorValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateGuarantor = (e) => {
    e.preventDefault();
    setErros(guarantorsValidation(createGuarantorValues));
    if (
      !(Object.keys(guarantorsValidation(createGuarantorValues)).length > 0)
    ) {
      createCallback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateGuarantorValues = () => {
    (createGuarantorValues.fullName = ""),
      (createGuarantorValues.cc = 0),
      (createGuarantorValues.phone = 0);
    setErros(0);
  };

  return {
    createGuarantorValues: createGuarantorValues,
    handleChangeCreateGuarantor,
    handleSubmitCreateGuarantor,
    errors,
    clearCreateGuarantorValues,
  };
};

export default useGuarantorForm;
