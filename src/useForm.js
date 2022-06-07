import { useState, useEffect, useCallback, useMemo } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    brand: "",
    category: "",
    buy_price: 0,
    sale_price: 0,
    presentation: "",
    stock: 0,
  });

  
  //const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErros] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setErros(validate(values));

    /*if (!Object.keys(errors).length) {
      callback();
    }*/

    /*if (!Object.keys(errors).length === 0) {
      callback();
    }*/
   // getCallback();
    console.log("Llega al form");
    
    //setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (!Object.keys(errors).length) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
