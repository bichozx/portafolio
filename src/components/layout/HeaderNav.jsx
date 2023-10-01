import { NavLink } from 'react-router-dom'
import React from 'react'

export const HeaderNav = () => {
    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <span>
                        <img src='/img/logo.png' alt='Logo' />
                    </span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/inicio'
                                activeClassName='active' // Utiliza la clase de estilo para el enlace activo
                                className='nav-link'>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/portafolio'
                                activeClassName='active'
                                className='nav-link'
                            >
                                Portafolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/servicios'
                                activeClassName='active'
                                className='nav-link'
                            >
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/curriculum'
                                activeClassName='active'
                                className='nav-link'
                            >
                                Curriculum
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contacto'
                                activeClassName='active'
                                className='nav-link'
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}




