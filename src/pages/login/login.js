import React from 'react';
import "./Login.css"
import LoginButton from '../../components/Button/Button';

const login = () => {

  const handleTest = () => {
    console.log("Ok");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <LoginButton text="Iniciar Sesion" color="#4674F2" handleOnClick={handleTest}/>
    </div>
  );
};

export default login;
