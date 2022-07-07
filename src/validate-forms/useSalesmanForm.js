import { useState } from "react";
import { salesmanValidation } from "../errors/validate";

const useSalesmanForm = ({ salesman, createCallback, editCallback }) => {
  const [createSalesmanValues, setCreateSalesmanValues] = useState({
    fullname: "",
    email: "",
    password: "",
    cc: 0,
    address: "",
    phone: 0,
    repeatPassWord: "",
  });

  const [editSalesmanValues, setEditSalesmanValues] = useState({
    fullname: salesman ? salesman.fullname : "",
    email: salesman ? salesman.email : "",
    password: salesman ? salesman.password : "",
    cc: salesman ? salesman.cc : 0,
    address: salesman ? salesman.address : "",
    phone: salesman ? salesman.phone : 0,
    repeatPassWord: salesman ? salesman.repeatPassWord : "",
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

  const handleChangeEditSalesman = (e) => {
    const { name, value } = e.target;
    setEditSalesmanValues((values) => {
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
      createCallback();
    }
  };

  const handleSubmitEditSalesman = (e) => {
    e.preventDefault();
    setErros(salesmanValidation(editSalesmanValues));
    if (!(Object.keys(salesmanValidation(editSalesmanValues)).length > 0)) {
      editCallback();
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
    createSalesmanValues: createSalesmanValues,
    handleChangeCreateSalesman,
    handleSubmitCreateSalesman,
    errors,
    clearCreateSalesmanValues,
    editSalesmanValues: editSalesmanValues,
    handleChangeEditSalesman,
    handleSubmitEditSalesman,
    clearEditSalesmanValues,
  };
};

export default useSalesmanForm;
