import React from 'react';

export const Servicios = () => {
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Servicios</h1>
        <p className="text-lg text-gray-600">
          Más de{' '}
          <span className="text-blue-500 font-semibold">
            3 años de experiencia
          </span>{' '}
          creando soluciones tecnológicas.
        </p>
      </div>

      <section className="bg-gray-100 space-y-8">
        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Desarrollo de aplicaciones web
          </h2>
          <p className="text-gray-700">
            Experiencia en el desarrollo de aplicaciones web utilizando
            tecnologías como{' '}
            <span className="text-blue-500 font-semibold">JavaScript</span>,{' '}
            <span className="text-blue-500 font-semibold">React Hooks</span> y{' '}
            <span className="text-blue-500 font-semibold">HTML/CSS</span>.
            Capacidad para crear interfaces de usuario interactivas y
            funcionales.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Resolución de problemas técnicos
          </h2>
          <p className="text-gray-700">
            Habilidad para identificar y resolver problemas técnicos de manera
            eficiente. Experiencia en el seguimiento y corrección de errores en
            el código, así como en la implementación de soluciones efectivas.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Gestión del estado con React Hooks
          </h2>
          <p className="text-gray-700">
            Conocimientos avanzados en el uso de{' '}
            <span className="text-blue-500 font-semibold">React Hooks</span>{' '}
            para la gestión del estado en aplicaciones web. Capacidad para
            utilizar correctamente{' '}
            <span className="font-semibold">useState</span>,{' '}
            <span className="font-semibold">useEffect</span>,{' '}
            <span className="font-semibold">useContext</span> y otros hooks.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Implementación de diseños responsivos
          </h2>
          <p className="text-gray-700">
            Familiaridad con el diseño responsivo y capacidad para crear
            interfaces adaptables a diferentes dispositivos y tamaños de
            pantalla utilizando{' '}
            <span className="text-blue-500 font-semibold">
              CSS flexbox/grid
            </span>{' '}
            y <span className="text-blue-500 font-semibold">media queries</span>
            .
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Consumo de API REST
          </h2>
          <p className="text-gray-700">
            Experiencia en el consumo de datos a través de{' '}
            <span className="text-blue-500 font-semibold">API REST</span>.
            Capacidad para realizar solicitudes HTTP, procesar respuestas y
            mostrar los datos obtenidos en la interfaz de usuario.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Control de versiones y colaboración
          </h2>
          <p className="text-gray-700">
            Conocimientos avanzados en el uso de sistemas de control de
            versiones como{' '}
            <span className="text-blue-500 font-semibold">Git</span> y
            plataformas de colaboración como{' '}
            <span className="text-blue-500 font-semibold">GitHub</span>.
            Experiencia en la colaboración con otros desarrolladores a través de
            la creación de ramas, la realización de pull requests y la revisión
            de código.
          </p>
        </article>
      </section>
    </div>
  );
};
