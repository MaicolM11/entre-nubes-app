import { useState } from "react";
import { salesmanValidation } from "../errors/validate";

const useEditSalesmanForm = (salesman, callback) => {
  const [editSalesmanValues, setEditSalesmanValues] = useState({
    fullname: salesman.fullname,
    email: salesman.email,
    password: salesman.password,
    cc: salesman.cc,
    address: salesman.address,
    phone: salesman.phone,
    repeatPassWord: salesman.repeatPassWord,
  });

  const handleChangeEditSalesman = (e) => {
    const { name, value } = e.target;
    setEditSalesmanValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmitEditSalesman = (e) => {
    e.preventDefault();
    setErros(salesmanValidation(editSalesmanValues));
    if (!(Object.keys(salesmanValidation(editSalesmanValues)).length > 0)) {
      callback();
    }
  };

  const [errors, setErros] = useState({});

  const clearEditSalesmanValues = () => {
    editSalesmanValues.fullname = "";
    editSalesmanValues.email = "";
    editSalesmanValues.password = "";
    editSalesmanValues.cc = 0;
    editSalesmanValues.address = "";
    editSalesmanValues.phone = 0;
    editSalesmanValues.repeatPassWord = "";
    setErros(0);
  };

  return {
    editSalesmanValues: editSalesmanValues,
    handleChangeEditSalesman,
    handleSubmitEditSalesman,
    errors,
    clearEditSalesmanValues,
  };
};

export default useEditSalesmanForm;
