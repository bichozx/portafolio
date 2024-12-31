import React,{useState} from 'react'

import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="font-bold text-3xl tracking-tight text-white">
          Kmilo
        </div>

        
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

       
        <nav
          className={`${
            isMenuVisible ? "block" : "hidden"
          } md:block md:flex md:space-x-8 md:items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <NavLink
                to="/inicio"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300 transition duration-300"
                }
                onClick={() => setMenuVisible(false)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portafolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300 transition duration-300"
                }
                onClick={() => setMenuVisible(false)}
              >
                Portafolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300 transition duration-300"
                }
                onClick={() => setMenuVisible(false)}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/curriculum"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300 transition duration-300"
                }
                onClick={() => setMenuVisible(false)}
              >
                Curriculum
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300 transition duration-300"
                }
                onClick={() => setMenuVisible(false)}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
