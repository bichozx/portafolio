import { ListadoTrabajos } from './ListadoTrabajos';
import React from 'react';

export const Principal = () => {
  const buildWhatsAppLink = () => {
    return `https://api.whatsapp.com/send?phone=${+573104436590}&text=Hola,%20estoy%20interesado%20en%20contactarte.`;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Hola, soy <span className="text-blue-600">Juan Camilo Giraldo</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto">
          Soy un desarrollador full-stack con más de{' '}
          <span className="font-bold text-blue-600">3 años de experiencia</span>{' '}
          en el diseño y desarrollo de aplicaciones web robustas. Trabajo con
          tecnologías modernas como{' '}
          <span className="text-blue-600 font-semibold">JavaScript</span>,{' '}
          <span className="text-blue-600 font-semibold">React Hooks</span>, y{' '}
          <span className="text-blue-600 font-semibold">Node.js</span>. Me
          apasiona resolver problemas complejos y convertir ideas en soluciones
          tecnológicas impactantes.
        </p>
      </header>

      <section className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Mis Logros Destacados
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Optimización de una API REST
            </h3>
            <p className="text-gray-700 mt-2">
              <strong>Situación:</strong> La empresa enfrentaba problemas de
              rendimiento en una API utilizada por miles de clientes. <br />
              <strong>Tarea:</strong> Mejorar el tiempo de respuesta y
              garantizar la escalabilidad del servicio.
              <br />
              <strong>Acción:</strong> Reescribí endpoints clave utilizando{' '}
              <span className="font-semibold">Node.js</span>, optimicé consultas
              a bases de datos y añadí caché.
              <br />
              <strong>Resultado:</strong> El tiempo de respuesta se redujo en un
              50%, mejorando la experiencia del usuario y aumentando la
              retención de clientes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Desarrollo de un sistema de gestión de flotas
            </h3>
            <p className="text-gray-700 mt-2">
              <strong>Situación:</strong> Una empresa necesitaba un sistema para
              monitorear su flota en tiempo real. <br />
              <strong>Tarea:</strong> Diseñar y desarrollar una aplicación web
              que mostrara datos en tiempo real utilizando gráficos
              interactivos. <br />
              <strong>Acción:</strong> Implementé la aplicación utilizando{' '}
              <span className="font-semibold">React.js</span> con gráficos
              integrados y datos actualizados dinámicamente. <br />
              <strong>Resultado:</strong> La herramienta permitió a los
              administradores tomar decisiones rápidas, aumentando la eficiencia
              operativa en un 30%.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mb-12">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-white bg-green-600 hover:bg-green-700 font-semibold rounded-lg shadow-lg"
        >
          Contactar por WhatsApp
        </a>
      </div>

      <section className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Proyectos Destacados
        </h2>
        <p className="text-gray-600 mb-6">
          Aquí algunos de mis proyectos más recientes que destacan mis
          habilidades técnicas:
        </p>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  );
};
