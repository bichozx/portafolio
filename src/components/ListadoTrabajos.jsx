import { Link } from 'react-router-dom';
import React from 'react';
import { trabajos } from '../data/Trabajos';

export const ListadoTrabajos = ({ limite }) => {
  return (
    <>
      <section className="flex flex-wrap justify-between gap-5">
        {trabajos.slice(0, limite).map((trabajo) => (
          <article
            key={trabajo.key}
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex-grow p-0 m-0 transition-all transform hover:scale-105"
          >
            <div className="bg-black flex justify-center items-center w-full h-64 overflow-hidden border border-gray-300 shadow-md transition-transform duration-300 hover:scale-110">
              <img
                src={`/img/${trabajo.id}.png`}
                alt={`Imagen de ${trabajo.nombre}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>

            <span className="text-sm text-gray-500 font-semibold">
              {trabajo.categoria}
            </span>

            <h2 className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link>
            </h2>

            <a
              href={trabajo.url}
              className="text-blue-600 hover:text-orange-500 transition-colors duration-300"
            >
              Ver página
            </a>

            <h3 className="text-sm text-gray-600 italic">
              {trabajo.tecnologia}
            </h3>
          </article>
        ))}
      </section>
    </>
  );
};
