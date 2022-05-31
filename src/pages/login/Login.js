import React from 'react';
import "./Login.css";

import Logo from '../../assets/images/entre-nubes-logo.png'
import User from '../../assets/icons/user.svg';

import { Button } from '../../components/buttons/button/Button';
import TextInput from '../../components/inputs/text/TextInput';
import PasswordInput from "../../components/inputs/password/PasswordInput";

import { reqLogin } from '../../services/auth';
import { useState } from 'react';

const Login = () => {

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
        }
        console.log(res.status); // 404 - 401 - 200
      })
  };

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
        <div className='logo-container'>
          <img
            src={Logo}
            alt="entre-nubes"
            className="logo"
          />
        </div>
      </div>
      <div className='right-area'>
        <div className='data'>
          <h1 className='login-title'>
            Inicio de Sesión
          </h1>
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
    /*<div className="login">
      
      <Input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={onChangeData} />
      
    </div>*/
  );
};

export default Login;