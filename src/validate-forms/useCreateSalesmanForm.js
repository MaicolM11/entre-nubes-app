import { useState } from "react";
import { salesmanValidation } from "../errors/validate";

const useCreateSalesmanForm = (callback) => {
  const [createSalesmanValues, setCreateSalesmanValues] = useState({
    fullname: "",
    email: "",
    password: "",
    cc: 0,
    address: "",
    phone: 0,
    repeatPassWord: "",
  });

  const handleChangeCreateSalesman = (e) => {
    const { name, value } = e.target;
    setCreateSalesmanValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitCreateSalesman = (e) => {
    e.preventDefault();
    setErros(salesmanValidation(createSalesmanValues));
    if (!(Object.keys(salesmanValidation(createSalesmanValues)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearCreateSalesmanValues = () => {
    (createSalesmanValues.fullname = ""),
      (createSalesmanValues.email = ""),
      (createSalesmanValues.password = ""),
      (createSalesmanValues.cc = 0),
      (createSalesmanValues.address = ""),
      (createSalesmanValues.phone = 0),
      (createSalesmanValues.repeatPassWord = ""),
      setErros(0);
  };

  return {
    createSalesmanValues: createSalesmanValues,
    handleChangeCreateSalesman,
    handleSubmitCreateSalesman,
    errors,
    clearCreateSalesmanValues,
  };
};

export default useCreateSalesmanForm;
