import React from 'react';
import "./Login.css";

import Logo from '../../assets/images/entre-nubes-logo.png';
import User from '../../assets/icons/user.svg';

import { Button } from '../../components/buttons/button/Button';
import TextInput from '../../components/inputs/TextInput';
import PasswordInput from "../../components/inputs/PasswordInput";

import { reqLogin } from '../../services/auth';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const sendData = () => {
    reqLogin(user.email, user.password)
      .then(async res => {
        let data = await res.json();
        if (res.ok) {
          localStorage.setItem("token", data.token)
          redirectByRol(data.rol);
        } else {
          alert(data.message)
        }
      })
  };
  const redirectByRol = rol => {
    if(rol === "ADMIN") navigate('/admin')
    else if (rol === "SALESMAN") navigate('/salesman')
  }

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setUser((inputs) => {
      return {
        ...inputs,
        [name]: value,
      };
    });
  };

  return (
    <div className='login'>
      <div className='left-area'>
        <img
          src={Logo}
          alt="entre-nubes"
          className="logo"
        />
      </div>
      <div className='right-area'>
        <div className='center-area'>
          <label className='login-title'>Inicio de Sesión</label>
          <div className='options-area'>
            <TextInput
              type="text"
              name="email"
              icon={User}
              placeholder="Usuario"
              onChange={onChangeData} />
            <PasswordInput placeholder="Contraseña" onChange={onChangeData} />
            <Button theme="option" size="normal" onClick={sendData}>Iniciar Sesión</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;