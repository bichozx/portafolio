import React, { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    motivo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      motivo: formData.motivo,
      telefono: formData.telefono,
    };

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Correo electrónico enviado con éxito');
      } else {
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
    }
  };

  return (
    <div className="bg-gray-100 max-w-7xl mx-auto px-6 py-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">Contacto</h1>
        <p className="text-lg text-gray-600">Ponte en contacto con nosotros</p>
      </div>

      <form
        className="space-y-6"
        onSubmit={handleSubmit}
        data-netlify="true"
        method="post"
      >
        
        <div className="flex flex-col">
          <label
            htmlFor="nombre"
            className="text-sm font-semibold text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Escribe tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="apellido"
            className="text-sm font-semibold text-gray-700"
          >
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Escribe tu apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Escribe tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="telefono"
            className="text-sm font-semibold text-gray-700"
          >
            Teléfono (WhatsApp)
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            placeholder="Escribe tu número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="motivo"
            className="text-sm font-semibold text-gray-700"
          >
            Motivo de contacto
          </label>
          <textarea
            name="motivo"
            id="motivo"
            placeholder="Escribe el motivo de contacto"
            value={formData.motivo}
            onChange={handleChange}
            required
            className="mt-2 px-4 py-2 h-32 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
