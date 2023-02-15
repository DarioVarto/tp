import './Servicios.css';
import React from 'react';
import {TbDeviceDesktopAnalytics} from 'react-icons/tb'
import {BsFillCalculatorFill,BsImage,BsArrowRight} from 'react-icons/bs'
const Servicios = () => {
    return(
        <section className='contenedor_servicios' id='servicios'>
            <h1 className='titulo_section'>Servicios</h1>
            <p className='descripcion_servicios'>A continuación puede acceder a los trabajos en el desarrollo de mis distintas actividades </p>
            <div className='contenedorDivServicios'>
                <button className='btn_servicios'><TbDeviceDesktopAnalytics className="icon_servicios"/>Web development <a href="https://github.com/DarioVarto" target='_blank'><BsArrowRight className="flecha_servicios"/></a></button>
                <button className='btn_servicios'><BsFillCalculatorFill className="icon_servicios"/>Matemática <a href="https://classroom.google.com/c/NTc4ODk3OTUwNjha?cjc=ebkyfoo" target='_blank'><BsArrowRight className="flecha_servicios"/></a></button>
                <button className='btn_servicios'><BsImage className="icon_servicios"/>UNA  <a href="https://www.youtube.com/watch?v=DC0sGw3C3Q4&list=PLzsgsYnyfgO3xbtWcl30N25L4bzbZQqLi&index=5" target='_blank'><BsArrowRight className="flecha_servicios"/></a></button>
            </div>
        
        
        
        </section>
    )
}

export { Servicios }