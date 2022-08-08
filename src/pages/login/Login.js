import React, { useState, useEffect, useCallback } from "react";
import { reqLogin } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";
import useLoginForm from "../../validate-forms/useLoginForm";

import "./Login.css";
import Logo from "../../assets/images/entre-nubes-logo-399w-226h.png";
import DataInput from "../../components/inputs/DataInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import Button from "../../components/buttons/Button";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import {
  ErrorMessageContainer,
  ErrorMessage,
  ErrorMessageSpace,
} from "../../components/styles/style-components";
import { saveData } from "../../services/storage";

const Login = () => {
  const navigate = useNavigate();
  const [userNotFound, setUserNotFound] = useState("");

  const redirectByRol = (rol) => {
    if (rol === "ADMIN") navigate("/admin");
    else if (rol === "SALESMAN") navigate("/salesman");
  };

  const handleSubmitUserLogin = () => {
    userLogin();
  };

  const {
    loginValues,
    handleChangeLogin,
    handleEnterSubmitLogin,
    handleSubmitLogin,
    clearLoginValues,
    errors,
  } = useLoginForm(handleSubmitUserLogin);

  const userLogin = () => {
    reqLogin(loginValues.username, loginValues.password).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        saveData(data);
        redirectByRol(data.rol);
        clearLoginValues();
      } else {
        setUserNotFound("¡Usuario no encontrado!");
      }
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterSubmitLogin);
    return () =>
      document.removeEventListener("keydown", handleEnterSubmitLogin);
  }, [handleEnterSubmitLogin]);

  return (
    <div className="login-container">
      <div className="login-left-container">
        <img src={Logo} alt="entre-nubes-logo" className="login-logo" />
      </div>
      <div className="login-right-container">
        <div className="login-data-container">
          <label className="login-title">Inicio de Sesión</label>
          <div className="login-options-container">
            <ErrorMessageContainer>
              <DataInput
                size="normalInput"
                icon={<UserIcon />}
                isStroke={true}
                isFill={false}
                type="text"
                name="username"
                placeholder="Usuario"
                onChange={handleChangeLogin}
              />
              {errors.username ? (
                <ErrorMessage>{errors.username}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <ErrorMessageContainer>
              <PasswordInput
                size="normalInput"
                icon={<LockIcon />}
                name="password"
                placeholder="Contraseña"
                onChange={handleChangeLogin}
              />
              {errors.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : (
                <ErrorMessageSpace />
              )}
            </ErrorMessageContainer>
            <Button
              size="normalButton"
              theme="highlighted"
              text="Iniciar Sesión"
              onClick={handleSubmitLogin}
            />
            <span className="user-not-found-span-container">
              {userNotFound}
            </span>
            <Link to="/recover-password" style={{ textDecoration: "none" }}>
              <span className="forgotten-password-span-container">
                ¿Olvido su contraseña?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
