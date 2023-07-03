import React, { useEffect, useState } from 'react'

import { trabajos } from '../data/Trabajos'
import { useParams } from 'react-router-dom'

export const Proyecto = () => {

    const params = useParams()


    const [proyecto, setProyecto] = useState([])
    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        console.log(proyecto)
        setProyecto(proyecto[0])
    }, [params.id])

    return (
        <>
            <div className='page-work'>
                <div className='mask'>
                    <img src={`/img/${proyecto.id}.png`} alt={proyecto.id} />
                </div>
                <h1 className='heading'>{proyecto.nombre}</h1>
                <p>{proyecto.tecnologia}</p>


            </div>
        </>

    )
}

