import React, { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    motivo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos del formulario a través de una solicitud HTTP o cualquier otro método de tu elección.
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="container">
      <h1 className="header-title">Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <textarea
            name="motivo"
            placeholder="Motivo de contacto"
            value={formData.motivo}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="input-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
