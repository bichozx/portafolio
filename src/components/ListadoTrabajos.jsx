import { Link } from 'react-router-dom'
import React from 'react'
import { trabajos } from '../data/Trabajos'

export const ListadoTrabajos = ({ limite }) => {
  return (
    <>
      <section className='bg-gray-100 flex flex-wrap justify-between gap-5'>
      {trabajos.slice(0, limite).map(trabajo => (
        <article key={trabajo.key} className='bg-gray-100  w-full sm:w-1/3 lg:w-1/4 p-0 m-0'>
          <div className='mask'>
            <img src={`/img/${trabajo.id}.png`} alt={`Imagen de ${trabajo.nombre}`} />
          </div>
          <span>{trabajo.categoria}</span>
          <h2>
            <Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link>
          </h2>
          <a href={trabajo.url}>Ver página</a>
          <h3>{trabajo.tecnologia}</h3>
        </article>
      ))}
    </section>
    </>


  )
}

