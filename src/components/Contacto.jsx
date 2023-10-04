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

    // Ahora puedes acceder a formData dentro de handleSubmit
    const data = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      motivo: formData.motivo,
      telefono: formData.telefono,
    };

    // Enviar solicitud POST al servidor
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
        // Puedes redirigir al usuario o mostrar un mensaje de éxito aquí
      } else {
        console.error('Error al enviar el correo electrónico');
        // Muestra un mensaje de error al usuario si la solicitud falla
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
    }
  };


  return (
    <div className="container">
    <div className=''>
    <h1 className="header-title">Contacto</h1>
       
    </div>
      <form className="contact-form" onSubmit={handleSubmit} data-netlify="true"  method="post">
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
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono (WhatsApp)"
            value={formData.telefono}
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
