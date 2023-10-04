const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
const app = express();
const PORT = process.env.PORT || 3000;

// Configura el middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura el servidor de correo
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia a 'Outlook' si prefieres usar Outlook
    auth: {
        user: 'bichozx4587@gmail.com', // Tu dirección de correo electrónico
        pass: 'Danger4587', // Tu contraseña de correo electrónico
    },
});

// Ruta para enviar correos electrónicos
app.post('/send-email', (req, res) => {
    const { nombre, apellido, email, motivo, telefono } = req.body;

    const mailOptions = {
        from: 'bichozx4587@gmail.com', // Tu dirección de correo electrónico
        to: 'bichozx4587@gmail.com', // La dirección de correo electrónico a la que quieres enviar el mensaje
        subject: 'Nuevo mensaje de contacto',
        html: `
      <p>Nombre: ${nombre} ${apellido}</p>
      <p>Email: ${email}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Motivo de contacto: ${motivo}</p>
    `,
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).send('Error al enviar el correo electrónico');
        } else {
            console.log('Correo electrónico enviado con éxito:', info.response);
            res.status(200).send('Correo electrónico enviado con éxito');
        }
    });
});

// Puerto en el que se ejecutará el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
