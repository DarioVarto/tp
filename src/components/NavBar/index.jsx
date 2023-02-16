import './NavBar.css'



import React from 'react';

import {BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {Logo} from '../Logo'

 

const NavBar = () => {
    return(
        <header className='contenedorNav'>
            
          
           <Logo/>
         
            <div className='contenedor_a'>
                <a className='aNavbar' href="#Hero">Acerca de mí</a>
                <a className='aNavbar' href="#servicios">Servicios</a>
                <a className='aNavbar' href="#Portfolio">Portfolio</a>
                <a className='aNavbar' href="#Opiniones">Opiniones</a>
                <a className='aNavbar' href="#Contacto">Contacto</a>
            </div>
            <div className='contenedor_redes'>
                
                <a href="https://www.facebook.com/profile.php?id=100090075738822" target='_blank' className='redes_hover'><BsFacebook className='redes'/></a>
                <a href="#" target='_blank' className='redes_hover'><BsInstagram className='redes'/></a>
                <a href="https://wa.me/5491138842605/?text=Hola, quería consultarte..." target="_blank" className='redes_hover'><BsWhatsapp className='redes'/></a>

            </div>
        </header>
    )
}

export { NavBar }