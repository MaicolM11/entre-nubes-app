import { useState, useEffect } from "react";

const useForm = (callback, validate,product, categories, selectedCategory) => {

  const [productValues, setProductValues] = useState({
    brand: "",
    category:  "",
    unitPrice:  0,
    salePrice:  0,
    presentation: "",
    stock:"",
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


  const editProduct = ()=>{
    setProductValues((prod) =>{
      prod.brand = product.brand,
      prod.category = product.category,
      prod.unitPrice = product.unitPrice,
      prod.salePrice = product.salePrice,
      prod.presentation = product.presentation,
      prod.stock= product.stock    
    })
  }

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
  };

  const handleSubmitSalesman = (e) => {
    e.preventDefault();
    setErros(validate(salesmanValues));
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

  useEffect(() => {
    if (!Object.keys(errors).length) {
      callback();
    }
  }, [errors]);

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
