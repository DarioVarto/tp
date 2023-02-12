import './Servicios.css';
import React from 'react';

const Servicios = () => {
    return(
        <section className='contenedor_servicios' id='servicios'>
            <h1 className='titulo_section'>Servicios</h1>
            <p className='descripcion_servicios'>A continuación puede acceder a los trabajos en el desarrollo de mis distintas actividades </p>
            <div className='contenedorDivServicios'>
                <button className='btn_servicios'><i className="bi bi-pc-display-horizontal icon_servicios"></i>Web development <i className="bi bi-arrow-right flecha_servicios"></i></button>
                <button className='btn_servicios'><i className="bi bi-calculator icon_servicios"></i>Matemática <i className="bi bi-arrow-right flecha_servicios"></i></button>
                <button className='btn_servicios'><i className="bi bi-images icon_servicios"></i>Imágenes  <i className="bi bi-arrow-right flecha_servicios"></i></button>
            </div>
        
        
        
        </section>
    )
}

export { Servicios }