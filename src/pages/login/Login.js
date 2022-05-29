import React from 'react';
import { useState } from 'react';
import "./Login.css"

import LoginButton from '../../components/Button/Button';
import Input from '../../components/input/Input';

import { login } from '../../services/auth';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const sendData = () => {
    login(user.email, user.password)
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
    <div className="login">
      <Input
        type="text"
        name="email"
        placeholder="Usuario"
        onChange={onChangeData} />
      <Input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={onChangeData} />

      <LoginButton text="Iniciar Sesion" color="#4674F2" width={405} handleOnClick={sendData} />
    </div>
  );
};

export default Login;