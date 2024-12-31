import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import React from 'react';

export const PiePagina = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center border-t border-gray-300">
      <p className="text-sm text-gray-600">
        Portafolio Juan Camilo WEB &copy; Desarrollador Junior - 2023
      </p>
      <div className="mt-4 flex justify-center gap-4">
       
        <a
          href="https://www.linkedin.com/in/juan-camilo-giraldo-agudelo-94aa98224/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        
        <a
          href="https://github.com/bichozx/portafolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        
        <a
          href="mailto:kmilo2021@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-600 transition-colors"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};
