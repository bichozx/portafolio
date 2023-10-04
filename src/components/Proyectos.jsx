import React, { useEffect, useState } from 'react'

import { trabajos } from '../data/Trabajos'
import { useParams } from 'react-router-dom'

export const Proyecto = () => {
    const params = useParams();
    const [proyecto, setProyecto] = useState([]);
  
    useEffect(() => {
      let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
      setProyecto(proyecto[0]);
    }, [params.id]);
  
    return (
      <div className='proyecto-container'>
        <div className='mask'>
          <img src={`/img/${proyecto.id}.png`} alt={proyecto.id} className='proyecto-image' />
        </div>
        <h1 className='proyecto-heading'>{proyecto.nombre}</h1>
        <p className='proyecto-tecnologia'>{proyecto.tecnologia}</p>
      </div>
    );
  };

