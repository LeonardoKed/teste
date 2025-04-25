
import React from 'react';

function CadastroPage() {
    return (
      <div className="main-content">
        <div className="cadastro-page">
          <h1>Cadastro</h1>
          <div className="input-field">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" placeholder="Digite seu nome" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Digite seu email" />
          </div>
          <div className="input-field">
            <label htmlFor="senha">Senha:</label>
            <input id="senha" type="password" placeholder="Digite sua senha" />
          </div>
          <div className="input-field">
            <label htmlFor="senha">Confirmar Senha:</label>
            <input id="senha" type="password" placeholder="Digite sua senha" />
          </div>
          <button>Cadastrar</button>
        </div>
      </div>
    );
  }

export default CadastroPage;
