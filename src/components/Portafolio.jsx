import { ListadoTrabajos } from './ListadoTrabajos';
import React from 'react';

export const Portafolio = () => {
  return (
    <div className='bg-gray-100'>
      <div className="page">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-5xl">
          Mi Portafolio
        </h1>
      </div>
      <p className="page text-lg text-gray-600 mb-12 text-center text-center px-6 sm:px-8 max-w-3xl">
        Aquí podrás explorar algunos de mis proyectos recientes. He trabajado
        con tecnologías como <strong>JavaScript</strong>, <strong>React</strong>{' '}
        y <strong>Node.js</strong>, creando soluciones web interactivas y
        escalables.
      </p>

      <div className="w-full max-w-7xl px-4 sm:px-6 ">
        <ListadoTrabajos />
      </div>
    </div>
  );
};
