import './NavBar.css'

import Anillos from '../../assets/imagenes/Anillos.png';

import React from 'react';



const NavBar = () => {
    return(
        <header className='contenedorNav'>
            <img src={Anillos} alt="Logo" />
            
            <div className='contenedorA'>
                <a className='aNavbar' href="#">Acerca de mí</a>
                <a className='aNavbar' href="#">Servicios</a>
                <a className='aNavbar' href="#">Portfolio</a>
                <a className='aNavbar' href="#">Contacto</a>
            </div>
            <button>btn</button>
        </header>
    )
}

export { NavBar }