import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { HeaderNav } from '../components/layout/HeaderNav';
import { PiePagina } from '../components/layout/PiePagina';
import { Portafolio } from '../components/Portafolio';
import { Principal } from '../components/Principal';
import { Proyecto } from '../components/Proyectos';
import React from 'react';
import { Servicios } from '../components/Servicios';

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <HeaderNav />

        <section className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Principal />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/proyecto/:id" element={<Proyecto />} />
            <Route
              path="/error"
              element={
                <div className="page">
                  <h1 className="heading">Error 404</h1>
                </div>
              }
            />
          </Routes>
        </section>

        <PiePagina />
      </div>
    </BrowserRouter>
  );
};
