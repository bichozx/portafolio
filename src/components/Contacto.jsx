import React from 'react'

export const Contacto = () => {
  return (
    <>
      <div className='page'>
        <h1 className='heading'>
          Contacto
        </h1>

        <form className='contact' action='kmilo2021@outlook.com'>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Apellido' />
          <input type='text' placeholder='Email' />
          <textarea type='text' placeholder='Motivo de contacto' />
          <button type='submit' value='Enviar'>Enviar</button>

        </form>

      </div>
    </>

  )
}
