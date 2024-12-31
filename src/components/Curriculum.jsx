import React from 'react';
import img from '../../src/img_Cv.png';

export const Curriculum = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Juan Camilo Giraldo A
        </h1>
        <p className="text-lg text-gray-600">Desarrollador de Software</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Sobre mí</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Soy un desarrollador de software con 3 años de experiencia, enfocado
          en crear soluciones tecnológicas innovadoras y efectivas. Estoy
          comprometido con el aprendizaje continuo y la implementación de buenas
          prácticas en el desarrollo de aplicaciones modernas y robustas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Información Personal
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>
            <strong>Dirección:</strong> Medellín, Colombia
          </li>
          <li>
            <strong>Teléfono:</strong> +57 3104436590
          </li>
          <li>
            <strong>Correo:</strong> kmilo2021@outlook.com
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Enlaces</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="https://www.linkedin.com/in/juan-camilo-giraldo-agudelo-94aa98224/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://fascinating-kringle-3cd555.netlify.app/inicio"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bichozx"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Experiencia Laboral
        </h2>
        <div className="mt-4">
          <h3 className="font-bold text-gray-800">
            Practicante Desarrollo de Software
          </h3>
          <p className="text-gray-600">Prosegur, 05/2021 - 11/2021</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Manejo de bases de datos SQL Server para consultas de empleados.
            </li>
            <li>Desarrollo de requerimientos internos.</li>
            <li>Soporte del sistema en mesa de ayuda.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-gray-800">Desarrollador de Software</h3>
          <p className="text-gray-600">Grupo Petroprix, 12/2021 - Presente</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              Implementación de nuevas características (JavaScript, React).
            </li>
            <li>Mantenimiento y optimización de la aplicación.</li>
            <li>
              Colaboración en proyectos de alto impacto dentro de un equipo
              ágil.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">Educación</h2>
        <p className="mt-4">
          <strong className="text-gray-800">
            Técnico laboral en desarrollo de software
          </strong>
          <br />
          Cesde
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Proyectos Personales
        </h2>
        <a
          href="https://tiny-dusk-95b6ab.netlify.app/inicio"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto-Marvel
        </a>
      </section>

      <section className="text-center">
        <img
          src={img}
          alt="CV"
          className="mx-auto mb-4 max-w-xs rounded-lg shadow-lg"
        />
        <a
          href="/downLoad/Cv-ats 2.2.pdf"
          download="Cv-ats 2.2.pdf"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
        >
          Descargar Curriculum
        </a>
      </section>
    </div>
  );
};
