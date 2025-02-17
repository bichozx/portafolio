const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: '', 
        pass: '', 
    },
});


app.post('/send-email', (req, res) => {
    const { nombre, apellido, email, motivo, telefono } = req.body;

    const mailOptions = {
        from: 'bichozx4587@gmail.com', 
        to: 'bichozx4587@gmail.com', 
        subject: 'Nuevo mensaje de contacto',
        html: `
      <p>Nombre: ${nombre} ${apellido}</p>
      <p>Email: ${email}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Motivo de contacto: ${motivo}</p>
    `,
    };

    
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


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
