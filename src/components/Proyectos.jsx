import React, { useEffect, useState } from "react";

import { trabajos } from "../data/Trabajos";
import { useParams } from "react-router-dom";

export const Proyecto = () => {
  const params = useParams();
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    const proyectoSeleccionado = trabajos.find((trabajo) => trabajo.id === params.id);
    setProyecto(proyectoSeleccionado || {});
  }, [params.id]);

  if (!proyecto) {
    return <div className="text-center text-gray-600">Cargando proyecto...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen  from-indigo-50 to-indigo-100 flex items-center justify-center p-6">
      <div className=" max-w-4xl w-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        
        <div className="relative group">
          <img
            src={`/img/${proyecto.id}.png`}
            alt={proyecto.nombre}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 group-hover:opacity-30"></div>
        </div>

        <div className="p-8">
          
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 hover:text-indigo-600 transition-all">{proyecto.nombre}</h1>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Tecnologías:</strong> {proyecto.tecnologia}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {proyecto.descripcion || "Descripción no disponible."}
          </p>

          
          <div className="mt-6 flex flex-wrap gap-6 justify-start">
            
            {proyecto.enlace && (
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                🌐 Explorar Proyecto
              </a>
            )}
            
            <button
              onClick={() => navigator.clipboard.writeText(proyecto.enlace || "")}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all transform hover:scale-105"
            >
              🔗 Copiar URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
