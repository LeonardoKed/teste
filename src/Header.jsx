import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
      <header className="navbar">
        <ul className="navbar-list">
          <li><NavLink to="/">🏠 Página Inicial</NavLink></li>
          <li><NavLink to="/cadastro">📝 Cadastro</NavLink></li>
          <li><NavLink to="/login">🔐 Login</NavLink></li>
          
        </ul>
      </header>
    );
  };

export default Header;
