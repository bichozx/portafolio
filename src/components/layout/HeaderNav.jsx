import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const headerClass = `header ${isMenuVisible ? 'open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="logo">
        <span>
          <img src="/img/logo.png" alt="Logo" />
        </span>
      </div>
      {/* Agrega un input de tipo "checkbox" y una etiqueta para el botón de alternancia */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isMenuVisible}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-toggle-label">
        <div className={`bar ${isMenuVisible ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuVisible ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuVisible ? 'active' : ''}`}></div>
      </label>
      <nav className={`menu-dropdown ${isMenuVisible ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/inicio" activeClassName="active" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" activeClassName="active" className="nav-link">
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" activeClassName="active" className="nav-link">
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" activeClassName="active" className="nav-link">
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" activeClassName="active" className="nav-link">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
