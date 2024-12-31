# Proyecto Personal - Kmilo

Este proyecto es una página web personal creada como portafolio profesional. El objetivo de este proyecto es mostrar las habilidades, experiencia y proyectos de **Juan Camilo Giraldo** como desarrollador de software.

## Características

- **Página de inicio**: Una introducción personal con detalles sobre la carrera y habilidades de desarrollo.
- **Portafolio**: Enlace a los proyectos realizados, destacando las tecnologías y herramientas utilizadas.
- **Currículum**: Información profesional con detalles sobre experiencia laboral, formación académica y enlaces relevantes.
- **Contacto**: Un formulario para que los usuarios puedan ponerse en contacto directamente.
- **Navegación Responsiva**: Menú de navegación adaptativo con diseño móvil y de escritorio.

## Tecnologías Utilizadas

- **React.js**: Biblioteca de JavaScript para la construcción de la interfaz de usuario.
- **Tailwind CSS**: Framework CSS para crear una interfaz de usuario moderna y completamente responsiva.
- **React Router**: Librería para la navegación entre diferentes vistas de la aplicación.
- **Fetch API**: Para el envío de datos de formulario y la integración con servicios de backend.
- **Netlify Forms**: Usado para el envío de formularios de contacto.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

/src /components HeaderNav.js # Componente de la barra de navegación superior. Curriculum.js # Componente que muestra el currículum de Juan Camilo Giraldo. Contacto.js # Componente con el formulario de contacto. /assets /img logo.png # Logo de la marca "Kmilo". App.js # Componente principal que contiene la estructura de la página. index.js # Punto de entrada de la aplicación.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git

   ```

2. cd nombre-del-repositorio

3. npm install

4. npm start

5. Accede a la aplicación en tu navegador en http://localhost:3000.

Descripción de Componentes
HeaderNav
El componente HeaderNav contiene la barra de navegación principal del sitio, con los siguientes enlaces:

Inicio: Página de inicio.
Portafolio: Enlace a los proyectos realizados.
Servicios: Información sobre los servicios ofrecidos.
Curriculum: Información sobre la experiencia y habilidades profesionales.
Contacto: Formulario de contacto.
El componente es totalmente responsivo, con un menú hamburguesa que aparece en dispositivos móviles.

Curriculum
El componente Curriculum muestra el currículum de Juan Camilo Giraldo, con secciones que incluyen:

Sobre mí: Descripción personal y profesional.
Información Personal: Dirección, teléfono y correo.
Enlaces: Enlaces a redes sociales y portafolio.
Experiencia Laboral: Detalles sobre la experiencia laboral.
Educación: Formación académica.
Proyectos Personales: Enlace a proyectos realizados.
Contacto
El componente Contacto incluye un formulario que permite a los usuarios enviar un mensaje. Los campos del formulario incluyen:

Nombre y Apellido.
Email.
Teléfono (WhatsApp).
Motivo de contacto.
Al enviar el formulario, se hace una solicitud HTTP para procesar los datos.
