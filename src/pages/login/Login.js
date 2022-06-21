import React, { useState } from "react";
import "./Login.css";
import { isFocusable } from "@testing-library/user-event/dist/utils";
import { reqLogin } from "../../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../components/styles/colors";
import Logo from "../../assets/images/entre-nubes-logo-399w-226h.png";
import DataInput from "../../components/inputs/DataInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import Button from "../../components/buttons/Button";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

const Login = () => {
  const navigate = useNavigate();

  const [dataIconColor, setDataIconColor] = useState(false);
  const [passwordIconColor, setPasswordIconColor] = useState(false);

  const userIconColor = dataIconColor ? colors.highlighted : colors.brand;
  const lockIconColor = passwordIconColor ? colors.highlighted : colors.brand;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const redirectByRol = (rol) => {
    if (rol === "ADMIN") navigate("/admin");
    else if (rol === "SALESMAN") navigate("/salesman");
  };

  const submitUser = () => {
    reqLogin(user.email, user.password).then(async (res) => {
      let data = await res.json();
      if (res.ok) {
        Object.entries(data).forEach(([key, value]) => {
          localStorage.setItem(key, value)
        });
        redirectByRol(data.rol);
      } else {
        alert(data.message);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-left-container">
        <img src={Logo} alt="entre-nubes-logo" className="login-logo" />
      </div>
      <div className="login-right-container">
        <div className="login-data-container">
          <label className="login-title">Inicio de Sesión</label>
          <div className="login-options-container">
            <DataInput
              name="email"
              size="normalInput"
              icon={<UserIcon />}
              placeholder="Usuario"
              type="text"
              onChange={handleChange}
            />
            <PasswordInput
              name="password"
              size="normalInput"
              icon={<LockIcon />}
              placeholder="Contraseña"
              onChange={handleChange}
            />
            <Button
              size="normalButton"
              theme="highlighted"
              text="Iniciar Sesión"
              onClick={submitUser}
            />
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
