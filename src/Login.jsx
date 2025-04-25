
import React from 'react';

function Login() {
    return (
      <div className="main-content">
        <div className="login-page">
          <h1>Login</h1>
          
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Digite seu email" />
          </div>
          <div className="input-field">
            <label htmlFor="senha">Senha:</label>
            <input id="senha" type="password" placeholder="Digite sua senha" />
          </div>
         
          <button>Login</button>
        </div>
      </div>
    );
  }

export default Login;
