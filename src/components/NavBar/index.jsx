import './NavBar.css'

import Logo from '../../assets/imagenes/12F.jpg';

import React from 'react';



const NavBar = () => {
    return(
        <header className='contenedorNav'>
            
            <img className='Logo' src={Logo} alt="Logo" />
         
            <div className='contenedor_a'>
                <a className='aNavbar' href="#">Acerca de mí</a>
                <a className='aNavbar' href="#servicios">Servicios</a>
                <a className='aNavbar' href="#Portfolio">Portfolio</a>
                <a className='aNavbar' href="#Opiniones">Opiniones</a>
                <a className='aNavbar' href="#">Contacto</a>
            </div>
            <div className='contenedor_redes'>
                
                <a href="#" className='redes_hover'><i className="bi bi-facebook redes"></i></a>
                <a href="#" className='redes_hover'><i className="bi bi-instagram redes"></i></a>
                <a href="#" className='redes_hover'><i className="bi bi-whatsapp redes"></i></a>

            </div>
        </header>
    )
}

export { NavBar }