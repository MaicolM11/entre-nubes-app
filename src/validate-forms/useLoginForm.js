import { useState } from "react";
import { loginValidation } from "../errors/validate";

const useLoginForm = (loginCallback) => {
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginValues((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleEnterSubmitLogin = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setErros(loginValidation(loginValues));
      if (!(Object.keys(loginValidation(loginValues)).length > 0)) {
        loginCallback();
      }
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setErros(loginValidation(loginValues));
    if (!(Object.keys(loginValidation(loginValues)).length > 0)) {
      loginCallback();
    }
  };

  const [errors, setErros] = useState({});

  const clearLoginValues = () => {
    loginValues.username = "";
    loginValues.password = "";
    setErros(0);
  };

  return {
    loginValues,
    handleChangeLogin,
    handleEnterSubmitLogin,
    handleSubmitLogin,
    clearLoginValues,
    errors,
  };
};

export default useLoginForm;
