//import JuanCurriculum from '../JuanCurriculum.pdf'

import React from 'react'
import img from '../../src/img_Cv.png'

export const Curriculum = () => {
  return (
    <>
    
      <div className='page'>
        <h1 className='heading'>Curriculum</h1>
        <section >
          <article className='page-work'>
          <div >
                <div className='mask2'>
                  <img src={img} alt={img} /> 
                </div>
               
                <a className='curriculumLink' href={'/downLoad/JuanCurriculum.pdf'} download={'/downLoad/JuanCurriculum.pdf'}><button className='curriculum'>Descargar curriculum</button></a>
                
            </div>
          </article>
         
        </section>
      </div>
    </>

  )
}

