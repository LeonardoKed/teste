
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome"
        type="text"
        value={formData.nome}
        onChange={handleChange}
        name="nome"
        placeholder="Digite seu nome"
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        placeholder="Digite seu email"
      />
      <InputField
        label="Senha"
        type="password"
        value={formData.senha}
        onChange={handleChange}
        name="senha"
        placeholder="Digite sua senha"
      />
      <Button type="submit" text="Cadastrar" />
    </form>
  );
};

export default Form;
