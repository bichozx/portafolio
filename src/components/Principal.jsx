import { ListadoTrabajos } from './ListadoTrabajos'
import React from 'react'

export const Principal = () => {
  
  const buildWhatsAppLink = () => {
    return `https://api.whatsapp.com/send?phone=${+573104436590}&text=Hola,%20estoy%20interesado%20en%20contactarte.`;
  };

  return (
    <div className='home'>
      <h1>
        Soy <strong>Juan Camilo Giraldo</strong>, full-stack developer con más de dos años de experiencia en el desarrollo de aplicaciones web  <strong>JavaScript</strong>, <strong>React Hooks.</strong> y <strong>Node.js</strong>; Apasionado por crear soluciones eficientes y robustas, con sólidos conocimientos en el ciclo de vida de los componentes de React y la gestión del estado. Capacidad para trabajar en equipo y aprender rápidamente nuevas tecnologías,  en todo tipo de proyectos 
      </h1>
      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicación web y tener más visibilidad en Internet.
        &nbsp;<a
          className="curriculum"
          href={buildWhatsAppLink()} 
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar por WhatsApp
        </a>
      </h2>

      <section className='last-Work'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListadoTrabajos limite='2'/>
      </section>
    </div>
  )
}
