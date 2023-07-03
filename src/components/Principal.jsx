import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'
import React from 'react'

export const Principal = () => {
  return (
    <div className='home'>
      <h1>
        Soy <strong>Juan Camilo Giraldo</strong> desarrollador junior con 1 año y medio de experiencia en el desarrollo de aplicaciones web utilizando <strong>JavaScript</strong> y <strong>React Hooks.</strong> Apasionado por crear soluciones eficientes y robustas, con sólidos conocimientos en el ciclo de vida de los componentes de React y la gestión del estado. Capacidad para trabajar en equipo y aprender rápidamente nuevas tecnologías. y en todo tipo de proyectos
      </h1>
      <h2 className='title'>
        te ayudo a crear tu sitio o aplicacion web, tener mas
        visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo.</Link>
      </h2>

      <section className='last-Work'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListadoTrabajos limite='2'/>
      </section>
    </div>
  )
}
