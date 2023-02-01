import './Servicios.css';
import React from 'react';

const Servicios = () => {
    return(
        <section className='contenedorServicios'>Servicios
        <h1>Servicios</h1>
        <p>A continuación detallamos los servicios ofrecidos</p>
        <div className='contenedorDivServicios'>
            <div className='divServicios'>Web development <i class="bi bi-arrow-right iServicios"></i></div>
            <div className='divServicios'>Clases matemática <i class="bi bi-arrow-right iServicios"></i></div>
            <div className='divServicios'>Imágenes  <i class="bi bi-arrow-right iServicios"></i></div>
        </div>
        
        
        
        </section>
    )
}

export { Servicios }