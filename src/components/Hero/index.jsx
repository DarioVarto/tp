import './Hero.css'
import Img_Hero from '../../assets/imagenes/img_hero.png'

const Hero = () => {
    return(
        <div className='contenedor_hero'>
           
            <div className='contenedoorTexto'>
                <p><span className='span_bienvenido'>Bienvenido! Soy </span></p>
                <h1 className='nombre_hero'>Darío Vartolo</h1>
                <h3 className='profesion_hero'>Diseñador web/Profesor de matemática</h3>
                
                    <h4 className='texto_hero'>Desarrollador web desde el año 2022/2023. Diplomatura en programación web Full Stack Developer. <span>UTN</span></h4>
                    <h4 className='texto_hero'>Profesor de matemática desde el año 2007 ejerciendo hasta la fecha</h4>
                    <h4 className='texto_hero'>Estudiante de licenciatura en folklore desde el año 2008 al 2020 en la universidad nacional del arte <span>UNA</span></h4>
                    <div className='contenedor_btn'>
                        <button className='btn_hero'>Contratar</button>
                        <button className='btn_hero btn_hero_margin'>Explorar</button>
                    </div>
                    

            </div>
            
            <div className='contenedorImagen_shape'>
                <div className='contenedor_img_hero'>
               
                    <img className='img_hero' src={Img_Hero} alt="" />
                </div>  

                         
            </div>

        </div>
    )
}

export { Hero }