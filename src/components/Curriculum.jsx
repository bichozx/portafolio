//import JuanCurriculum from '../JuanCurriculum.pdf'

import React from 'react'
import img from '../../src/img_Cv.png'

export const Curriculum = () => {
 
  return (
    <>
      <div className="container">
      <header>
        <h1 className="header-title">Juan Camilo Giraldo A</h1>
      </header>
      <section>
        <h2>Desarrollador de software</h2>
        <p>
          Como apasionado del desarrollo de software tengo 2 años de experiencia, mi objetivo profesional es crear soluciones tecnológicas innovadoras que marquen la diferencia. Con una sólida formación en programación, estoy comprometido a impulsar el progreso mediante la creación de aplicaciones eficientes y fiables. Estoy entusiasmado por seguir aprendiendo y adaptándome a las últimas tendencias tecnológicas para garantizar que mis contribuciones en el mundo del desarrollo de software sean valiosas y transformadoras.
        </p>
      </section>
      <section>
        <h2>Información Personal</h2>
        <p>Dirección: Medellín-Colombia Calle 11#70-20 belén las playas</p>
        <p>Número de teléfono: 3218720243</p>
        <p>Correo electrónico: kmilo2021@outlook.com</p>
      </section>
      <section>
        <h2>Enlaces</h2>
        <ol className="links-list">
          <li>
            <a href="https://www.linkedin.com/in/juan-camilo-giraldo-agudelo-94aa98224/">LinkedIn</a>
          </li>
          <li>
            <a href="https://fascinating-kringle-3cd555.netlify.app/inicio">Portafolio</a>
          </li>
          <li>
            <a href="https://tiny-dusk-95b6ab.netlify.app/inicio">Pagina-Marvel</a>
          </li>
          <li>
            <a href="https://github.com/bichozx">GitHub</a>
          </li>
        </ol>
      </section>
      <section>
        <h2>Experiencia Laboral</h2>
        <p>
          <strong>Practicante desarrollo de software</strong>
          <br />
          Prosegur
          <br />
          08/2021 - 02/2022, Medellín/Colombia
        </p>
        <ul>
          <li>Manejo de bases de datos SQL Server para consultas de los empleados y pagos oportunos.</li>
          <li>Trabajar en el desarrollo de los requerimientos internos de la empresa.</li>
          <li>Prestar soporte del sistema en mesa de ayuda.</li>
        </ul>
        <p>
          <strong>Desarrollador Junior</strong>
          <br />
          Grupo Petroprix
          <br />
          02/2022 - Presente, España
        </p>
        <ul>
          <li>Desarrollar e implementar nuevas características en el panel de flota (JavaScript, React y Ant Design).</li>
          <li>Dar mantenimiento a la aplicación.</li>
        </ul>
      </section>
      <section>
        <h2>Educación</h2>
        <p>
          <strong>Técnico laboral en desarrollo de software</strong>
          <br />
          Cesde
        </p>
        <h3>Cursos</h3>
        <ul>
          <li>Bases de datos no relacionales Mongo</li>
          <li>DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript: Intermedio</li>
          <li>Java: Intermedio</li>
          <li>PHP: Intermedio</li>
          <li>Git: Intermedio</li>
          <li>HTML: Intermedio</li>
          <li>CSS: Intermedio</li>
          <li>Angular: Básico</li>
          <li>Bootstrap: Intermedio</li>
          <li>SQL Server: Básico</li>
          <li>React: Intermedio</li>
          <li>Android Studio: Básico</li>
        </ul>
      </section>
      <section>
        <h2>Proyectos Personales o Destacados</h2>
        <p>
          <a href="https://tiny-dusk-95b6ab.netlify.app/inicio">Proyecto-Marvel</a>
        </p>
      </section>
      <section>
        <h2>Intereses y Pasatiempos</h2>
        <ul>
          <li>Computación en la nube</li>
          <li>Inteligencia Artificial</li>
          <li>Programación de lenguajes de alto nivel</li>
        </ul>
        <p>Me gusta jugar baloncesto y practico el ciclismo en modalidad MTB.</p>
      </section>
      <section className='page-work'>
        <div className='mask2'>
          <img src={img} alt={img} />
        </div>
        <a className='curriculumLink' href={'/downLoad/JuanCurriculum.pdf'} download={'JuanCurriculum.pdf'}>
          <button className='curriculum'>Descargar curriculum</button>
        </a>
      </section>
    </div>

    </>

  )
}

