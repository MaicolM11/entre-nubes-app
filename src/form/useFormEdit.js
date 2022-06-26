import { useState, useEffect } from "react";
import { productEditValidation, salesmanValidation } from "../errors/validate";
const useForm = (callback, validate, categories, selectedCategory,product, category) => {
  

  const [productValues, setProductValues] = useState({
    brand: product ? product.brand : "",
    category: category ? category.name : "",
    unitPrice: product ? product.buy_price : 0,
    salePrice: product ? product.sale_price : 0,
    presentation: product ? product.presentation : "",
    stock: product ? product.stock : 0,
  });

  const [salesmanValues, setSalesmanValues] = useState({
    fullname :  categories ?categories.fullname :"",
    email: categories ?categories.email:"",
    password: categories ?categories.password:"",
    cc: categories ?categories.cc:0,
    address: categories ?categories.address:"",
    phone: categories ?categories.phone:0,
    repeatPassWord: categories ?categories.repeatPassWord:""
  })

  const [errors, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleChangeSalesmanEdit = (e) => {
    const { name, value } = e.target;
    setSalesmanValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const clearValues = () => {
    productValues.brand = "";
    productValues.category = "";
    productValues.unitPrice = 0;
    productValues.salePrice = 0;
    productValues.presentation = "";
    productValues.stock = 0;
    setErros(0);
  };

  const clearSalesmanValuesEdit = () => {
    salesmanValues.fullname = ''
    salesmanValues.email = ''
    salesmanValues.password = ''
    salesmanValues.cc = 0
    salesmanValues.address = ''
    salesmanValues.phone = 0
    salesmanValues. repeatPassWord = ''
    setErros(0);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory) {
        productValues.category = category._id;
      }
    });
    setErros(productEditValidation(productValues));
   
    if(!(Object.keys(productEditValidation(productValues)).length>0)){
      callback()
    }
  };


  const handleSubmitSalesmanEdit = (e) => {

    e.preventDefault();
    setErros(salesmanValidation(salesmanValues));
    if(!(Object.keys(salesmanValidation(salesmanValues)).length>0)){
      callback()
    }
  };

  return {
    handleChange,
    values: productValues,
    handleSubmit,
    errors,
    clearValues,
    handleChangeSalesmanEdit,
    valuesSalesman: salesmanValues,
    handleSubmitSalesmanEdit,
    clearSalesmanValuesEdit
  };
};

export default useForm;
