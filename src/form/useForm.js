import { useState, useEffect } from "react";

const useForm = (callback, validate, categories, selectedCategory,product) => {
  const [productValues, setProductValues] = useState({
    brand: product? product.brand :"",
    category: product?product.category :"",
    unitPrice: product?product.buy_price:0,
    salePrice: product?product.sale_price:0,
    presentation: product?product.presentation:"",
    stock: product?product.stock:0
  });

  const [salesmanValues, setSalesmanValues] = useState({
    fullname : "",
    email: "",
    password: "",
    cc: 0,
    address: "",
    phone: 0,
    repeatPassWord: ""
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

  const handleChangeSalesman = (e) => {
    const { name, value } = e.target;
    setSalesmanValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    categories.map((category) => {
      if (category.name === selectedCategory) {
        productValues.category = category._id;
      }
    });
    setErros(validate(productValues));
    if(!(Object.keys(validate(productValues)).length>0)){
      callback()
    }
  };

  const handleSubmitSalesman = (e) => {
    e.preventDefault();
    setErros(validate(salesmanValues));
    if(!(Object.keys(validate(salesmanValues)).length>0)){
      callback()
    }
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

  const clearSalesmanValues= () =>{
    salesmanValues.fullname = '',
    salesmanValues.email= '',
    salesmanValues.password= '',
    salesmanValues.cc = 0,
    salesmanValues.address= '',
    salesmanValues.phone= 0,
    salesmanValues.repeatPassWord = '',
    setErros(0);
  }

  // useEffect(() => {
  //   console.log("aqui")
  //   if (!Object.keys(errors).length) {
  //     callback();
  //   }
  // }, [errors]);

  return {
    handleChange,
    values: productValues,
    handleChangeSalesman,
    salesmanValues: salesmanValues,
    handleSubmitSalesman,
    handleSubmit,
    errors,
    clearValues,
    clearSalesmanValues
  };
};

export default useForm;
